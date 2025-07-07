# ngx-govuk-frontend/form-utils

## Overview

The form-utils package provides utility directives and functions for working with forms in Angular. These utilities are used internally by other form-related components in the library but can also be used directly in your applications.

## Utilities

- `ValueAccessorDirective` - A directive that implements the ControlValueAccessor interface to bind Angular form controls to custom form components
- `CommonInputDirective` - A directive that provides common input functionality
- `injectNgControl` - A function to inject and access the NgControl of a component

## Usage

```typescript
import { ValueAccessorDirective, CommonInputDirective, injectNgControl } from 'ngx-govuk-frontend/form-utils';
```

### Creating a custom form control component with ValueAccessorDirective

```typescript
import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ValueAccessorDirective, injectNgControl } from 'ngx-govuk-frontend/form-utils';

@Component({
  selector: 'my-custom-input',
  template: `
    <div class="govuk-form-group" [class.govuk-form-group--error]="ngControl.invalid && ngControl.touched">
      <label class="govuk-label" [for]="inputId()">{{ label() }}</label>

      <span *ngIf="hint()" class="govuk-hint">{{ hint() }}</span>

      <span *ngIf="showError()" class="govuk-error-message"> <span class="govuk-visually-hidden">Error:</span> {{ errorMessage() }} </span>

      <input class="govuk-input" [id]="inputId()" [class.govuk-input--error]="ngControl.invalid && ngControl.touched" [value]="ngControl.value" (input)="onChange($event)" (blur)="onTouched()" />
    </div>
  `,
  imports: [ReactiveFormsModule],
  hostDirectives: [ValueAccessorDirective],
})
export class MyCustomInputComponent {
  readonly ngControl = injectNgControl();

  readonly inputId = input.required<string>();
  readonly label = input.required<string>();
  readonly hint = input<string>();
  readonly errorMessage = input<string>();

  showError(): boolean {
    return this.ngControl.invalid && this.ngControl.touched && !!this.errorMessage();
  }

  onChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.ngControl.control?.setValue(value);
  }

  onTouched() {
    this.ngControl.control?.markAsTouched();
  }
}
```

### Using CommonInputDirective

```typescript
import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonInputDirective } from 'ngx-govuk-frontend/form-utils';

@Component({
  selector: 'my-text-input',
  template: `
    <div class="govuk-form-group">
      <label class="govuk-label" [for]="inputId">{{ label }}</label>
      <input class="govuk-input" [id]="inputId" appCommonInput />
    </div>
  `,
  imports: [ReactiveFormsModule, CommonInputDirective],
})
export class MyTextInputComponent {
  @Input() inputId!: string;
  @Input() label!: string;
}
```
