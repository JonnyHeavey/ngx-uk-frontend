# ngx-govuk-frontend/select

## Overview

The select component allows users to choose an option from a dropdown list. This is an Angular implementation of the [GOV.UK Design System Select component](https://design-system.service.gov.uk/components/select/).

## Components and Interfaces

- `GovUKSelectComponent` - The main select component
- `GovUKSelectOption` - Interface defining the structure of select options

## Usage

```typescript
import { GovUKSelectComponent } from 'ngx-govuk-frontend/select';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  // ...
  imports: [
    GovUKSelectComponent,
    ReactiveFormsModule
  ]
})
```

### Basic example

```html
<form [formGroup]="form">
  <div class="govuk-form-group">
    <label class="govuk-label" for="country">Country</label>
    <ngx-govuk-select [options]="countryOptions" formControlName="country" inputId="country"> </ngx-govuk-select>
  </div>
</form>
```

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GovUKSelectOption } from 'ngx-govuk-frontend/select';

@Component({
  // ...
})
export class SelectExampleComponent implements OnInit {
  form!: FormGroup;

  countryOptions: GovUKSelectOption[] = [
    { value: '', label: 'Please select' },
    { value: 'england', label: 'England' },
    { value: 'scotland', label: 'Scotland' },
    { value: 'wales', label: 'Wales' },
    { value: 'northern-ireland', label: 'Northern Ireland' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      country: ['', Validators.required],
    });
  }
}
```

### With error message

```html
<div class="govuk-form-group" [class.govuk-form-group--error]="hasError()">
  <label class="govuk-label" for="nationality">Nationality</label>
  <div *ngIf="hasError()" class="govuk-error-message"><span class="govuk-visually-hidden">Error:</span> Please select a nationality</div>
  <ngx-govuk-select [options]="nationalityOptions" formControlName="nationality" inputId="nationality"> </ngx-govuk-select>
</div>
```

```typescript
hasError(): boolean {
  const control = this.form.get('nationality');
  return control?.invalid && control?.touched;
}
```

## API Reference

### Component Inputs

| Name           | Type                  | Required | Description                                           |
| -------------- | --------------------- | -------- | ----------------------------------------------------- |
| `options`      | `GovUKSelectOption[]` | Yes      | Array of options to display in the select dropdown    |
| `inputId`      | `string`              | Yes      | ID attribute for the select element                   |
| `autocomplete` | `string`              | No       | HTML autocomplete attribute                           |
| `extraClasses` | `string`              | No       | Additional CSS classes to apply to the select element |

### GovUKSelectOption Interface

| Property | Type     | Description                                                  |
| -------- | -------- | ------------------------------------------------------------ |
| `value`  | `string` | The value that will be submitted when the option is selected |
| `label`  | `string` | The displayed text for the option                            |
