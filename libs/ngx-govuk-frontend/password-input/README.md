# ngx-govuk-frontend/password-input

## Overview

The password input component allows users to enter passwords with a show/hide toggle button. This is an Angular implementation of the [GOV.UK Design System password input pattern](https://design-system.service.gov.uk/components/password-input/).

## Components

- `GovUKPasswordInputComponent` - The main password input component

## Usage

```typescript
import { GovUKPasswordInputComponent } from 'ngx-govuk-frontend/password-input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  // ...
  imports: [
    GovUKPasswordInputComponent,
    ReactiveFormsModule
  ]
})
```

### Basic example

```html
<form [formGroup]="form">
  <div class="govuk-form-group">
    <label class="govuk-label" for="password">Password</label>
    <ngx-govuk-password-input inputId="password" formControlName="password"> </ngx-govuk-password-input>
  </div>
</form>
```

### With autocomplete attribute and error message

```html
<form [formGroup]="form">
  <div class="govuk-form-group" [class.govuk-form-group--error]="isPasswordInvalid()">
    <label class="govuk-label" for="password">Create password</label>
    <div class="govuk-hint">Your password must contain at least 8 characters.</div>

    <p *ngIf="isPasswordInvalid()" class="govuk-error-message"><span class="govuk-visually-hidden">Error:</span> Enter a password that is at least 8 characters long</p>

    <ngx-govuk-password-input inputId="password" autocomplete="new-password" formControlName="password"> </ngx-govuk-password-input>
  </div>
</form>
```

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  // ...
})
export class PasswordFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  isPasswordInvalid() {
    const control = this.form.get('password');
    return control?.invalid && control?.touched;
  }
}
```

## API Reference

### Inputs

| Name           | Type     | Description                                                                                                                                         |
| -------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inputId`      | `string` | The ID attribute for the input element.                                                                                                             |
| `autocomplete` | `string` | Optional. The HTML autocomplete attribute value. Common values for password fields include 'current-password' or 'new-password'. Defaults to 'off'. |
| `extraClasses` | `string` | Optional. Additional CSS classes to apply to the input element.                                                                                     |
