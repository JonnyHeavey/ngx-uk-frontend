# ngx-govuk-frontend/text-input

## Overview

The text input component allows users to enter text that's a single line. This is an Angular implementation of the [GOV.UK Design System Text Input component](https://design-system.service.gov.uk/components/text-input/).

## Components

- `GovUKTextInputComponent` - The main text input component

## Usage

```typescript
import { GovUKTextInputComponent } from 'ngx-govuk-frontend/text-input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  // ...
  imports: [
    GovUKTextInputComponent,
    ReactiveFormsModule
  ]
})
```

### Basic example

```html
<form [formGroup]="form">
  <div class="govuk-form-group">
    <label class="govuk-label" for="first-name">First name</label>
    <ngx-govuk-text-input formControlName="firstName" inputId="first-name"> </ngx-govuk-text-input>
  </div>
</form>
```

### With prefix and suffix

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="cost">Cost per item</label>
  <ngx-govuk-text-input formControlName="cost" inputId="cost" prefix="£" suffix="per item"> </ngx-govuk-text-input>
</div>
```

### With autocomplete

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="email">Email address</label>
  <ngx-govuk-text-input formControlName="email" inputId="email" autocomplete="email"> </ngx-govuk-text-input>
</div>
```

### With error handling

```html
<div class="govuk-form-group" [class.govuk-form-group--error]="hasError()">
  <label class="govuk-label" for="postcode">Postcode</label>
  <div *ngIf="hasError()" class="govuk-error-message"><span class="govuk-visually-hidden">Error:</span> Enter a valid postcode</div>
  <ngx-govuk-text-input formControlName="postcode" inputId="postcode" autocomplete="postal-code"> </ngx-govuk-text-input>
</div>
```

```typescript
hasError(): boolean {
  const control = this.form.get('postcode');
  return control?.invalid && control?.touched;
}
```

## API Reference

### Inputs

| Name           | Type     | Description                                                      |
| -------------- | -------- | ---------------------------------------------------------------- |
| `inputId`      | `string` | ID attribute for the input element                               |
| `autocomplete` | `string` | HTML autocomplete attribute value                                |
| `extraClasses` | `string` | Additional CSS classes to apply to the input element             |
| `prefix`       | `string` | Text or symbol displayed before the input field (e.g., '£')      |
| `suffix`       | `string` | Text or symbol displayed after the input field (e.g., 'per day') |
