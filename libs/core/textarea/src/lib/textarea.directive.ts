import { Directive, inject, input } from '@angular/core';
import {
  CommonFormInputDirective,
  injectNgControl,
} from '@ngx-uk-frontend/core/form-utils';

/**
 * Core textarea directive that provides common functionality
 * for textarea components across different design systems.
 *
 * This directive handles:
 * - Basic textarea configuration
 * - Form control integration
 * - Accessibility attributes
 * - Common input attributes
 */
@Directive({
  selector: '[libTextarea]',
})
export class TextareaDirective {
  // Form control integration
  readonly ngControl = injectNgControl();
  readonly commonFormInput = inject(CommonFormInputDirective);

  // Basic textarea configuration
  readonly rows = input<number>(3);
  readonly cols = input<number>();
  readonly wrap = input<'hard' | 'soft'>();

  // Input attributes
  readonly placeholder = input<string>();
  readonly maxlength = input<number>();
  readonly minlength = input<number>();
  readonly readonly = input<boolean>(false);
  readonly disabled = input<boolean>(false);

  // Accessibility and form attributes
  readonly autocomplete = input<string>();
  readonly spellcheck = input<boolean>();
  readonly autocapitalize = input<string>();
}
