/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Directive } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * A standalone directive that implements ControlValueAccessor.
 * This directive is used to create custom form controls that work seamlessly with Angular's forms.
 *
 * It provides itself as a NG_VALUE_ACCESSOR, allowing it to be used in form controls.
 * The multi: true option allows multiple value accessors to be registered for a single form control.
 */
@Directive({
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ValueAccessorDirective,
    },
  ],
})
export class ValueAccessorDirective implements ControlValueAccessor {
  writeValue(value: unknown): void {}
  registerOnChange(fn: (value: unknown) => void): void {}
  registerOnTouched(fn: () => void): void {}
}
