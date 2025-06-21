import { Directive, inject, input } from '@angular/core';
import {
  CommonFormInputDirective,
  injectNgControl,
} from '@ngx-uk-frontend/core/form-utils';

/**
 * Core checkbox directive that provides common functionality
 * for checkbox components across different design systems.
 *
 * This directive handles:
 * - Form control integration
 * - Basic checkbox configuration
 * - Accessibility attributes
 * - Common checkbox functionality
 */
@Directive({
  selector: '[libCheckbox]',
})
export class CheckboxDirective {
  // Form control integration
  readonly ngControl = injectNgControl();
  readonly commonFormInput = inject(CommonFormInputDirective);

  // Basic checkbox configuration
  readonly label = input.required<string>();
  readonly inputId = input.required<string>();
  readonly hint = input<string>();
  readonly disabled = input<boolean>(false);
  readonly checked = input<boolean>(false);

  /**
   * Toggles the checkbox state between checked and unchecked.
   */
  toggle() {
    if (this.ngControl.control && !this.disabled()) {
      this.ngControl.control.setValue(!this.ngControl.control.value);
    }
  }
}
