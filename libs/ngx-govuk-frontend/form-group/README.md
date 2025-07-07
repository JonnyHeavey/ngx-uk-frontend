# ngx-govuk-frontend/form-group

## Overview

The form group component is a container for form controls with styling for labels, hint text, and error messages. This is an Angular implementation of the [GOV.UK Design System Form Group pattern](https://design-system.service.gov.uk/components/text-input/#using-hint-text).

## Components

- `GovUKFormGroupComponent` - The main form group component

## Usage

```typescript
import { GovUKFormGroupComponent } from 'ngx-govuk-frontend/form-group';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  // ...
  imports: [
    GovUKFormGroupComponent,
    ReactiveFormsModule
  ]
})
```

### Basic example

```html
<form [formGroup]="myForm">
  <ngx-govuk-form-group label="Full name" inputId="full-name" formControlName="fullName"> </ngx-govuk-form-group>
</form>
```

### With hint text and error message

```html
<ngx-govuk-form-group label="Email address" inputId="email" hint="We'll only use this to send you a receipt" [errorMessage]="getEmailErrorMessage()" formControlName="email"> </ngx-govuk-form-group>
```

```typescript
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  // ...
})
export class MyComponent implements OnInit {
  myForm!: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  getEmailErrorMessage(): string | null {
    const control = this.myForm.get('email');
    if (control?.hasError('required') && control.touched) {
      return 'Enter your email address';
    }
    if (control?.hasError('email') && control.touched) {
      return 'Enter a valid email address';
    }
    return null;
  }
}
```

### With custom label size

```html
<ngx-govuk-form-group label="What is your National Insurance number?" labelSize="l" inputId="national-insurance-number" hint="It's on your National Insurance card, benefit letter, payslip or P60. For example, 'QQ 12 34 56 C'." formControlName="nationalInsuranceNumber"> </ngx-govuk-form-group>
```
