import { Directive, inject, input } from '@angular/core';
import {
  CommonFormInputDirective,
  injectNgControl,
} from '@ngx-uk-frontend/core/form-utils';

/**
 * Core radio directive that provides common functionality
 * for radio components across different design systems.
 *
 * This directive handles:
 * - Form control integration
 * - Basic radio configuration
 * - Accessibility attributes
 * - Common radio functionality
 */
@Directive({
  selector: '[libRadio]',
})
export class RadioDirective {
  // Form control integration
  readonly ngControl = injectNgControl();
  readonly commonFormInput = inject(CommonFormInputDirective);

  // Basic radio configuration
  readonly small = input<boolean>(false);
  readonly inline = input<boolean>(false);

  /**
   * Sets the selected value of the radio group.
   * Only updates the form control if the value has changed.
   *
   * @param value The value to set for the radio group
   */
  setValue(value: string) {
    if (this.ngControl.control && this.ngControl.control.value !== value) {
      this.ngControl.control.setValue(value);
    }
  }
}
