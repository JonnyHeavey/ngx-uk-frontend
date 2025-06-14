import { inject } from '@angular/core';
import {
  FormControlDirective,
  FormControlName,
  NgControl,
  NgModel,
} from '@angular/forms';

/**
 * Injects and validates the NgControl instance for form control components.
 *
 * @returns {NgControl} The injected NgControl instance.
 * @throws {Error} If NgControl is not found or is not of an expected type.
 */
export function injectNgControl() {
  const ngControl = inject(NgControl, { self: true, optional: true });

  if (!ngControl) {
    throw new Error(
      'NgControl is required. Make sure the component is used within a form control.',
    );
  }

  if (
    ngControl instanceof FormControlDirective ||
    ngControl instanceof FormControlName ||
    ngControl instanceof NgModel
  ) {
    return ngControl;
  }

  throw new Error(
    'NgControl is not an expected type. This directive requires a compatible form control.',
  );
}
