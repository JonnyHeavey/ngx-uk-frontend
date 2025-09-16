import { Directive, inject, input } from '@angular/core';
import {
  CommonFormInputDirective,
  injectNgControl,
} from '@ngx-uk-frontend/core/form-utils';

/**
 * Interface defining an option in the select dropdown.
 */
export interface SelectOption {
  /** The displayed text for the option */
  label: string;
  /** The value that will be submitted when the option is selected */
  value: string;
}

/**
 * Core select directive that provides common functionality
 * for select components across different design systems.
 *
 * This directive handles:
 * - Form control integration
 * - Basic select configuration
 * - Accessibility attributes
 * - Common select functionality
 */
@Directive({
  selector: '[libSelect]',
})
export class SelectDirective {
  // Form control integration
  readonly ngControl = injectNgControl();
  readonly commonFormInput = inject(CommonFormInputDirective);

  // Basic select configuration
  readonly options = input.required<SelectOption[]>();
  readonly disabled = input<boolean>(false);
}
