import { Directive, inject, input } from '@angular/core';
import {
  CommonFormInputDirective,
  injectNgControl,
} from '@ngx-uk-frontend/core/form-utils';

/**
 * Core text input directive that provides common functionality
 * for text input components across different design systems.
 *
 * This directive handles:
 * - Input type configuration
 * - Width sizing options
 * - Input mode and pattern attributes
 * - Autocomplete and accessibility features
 * - Form control integration
 */
@Directive({
  selector: '[libTextInput]',
})
export class TextInputDirective {
  // Form control integration
  readonly ngControl = injectNgControl();
  readonly commonFormInput = inject(CommonFormInputDirective);

  // Input configuration
  readonly type = input<string>('text');
  readonly inputmode = input<string>();
  readonly pattern = input<string>();
  readonly autocomplete = input<string>();
  readonly spellcheck = input<boolean>();
  readonly autocapitalize = input<string>();

  // Width sizing
  readonly width = input<
    | 'full'
    | 'three-quarters'
    | 'two-thirds'
    | 'one-half'
    | 'one-third'
    | 'one-quarter'
  >();
  readonly fixedWidth = input<2 | 3 | 4 | 5 | 10 | 20>();

  // Accessibility and form attributes
  readonly disabled = input<boolean>(false);
  readonly readonly = input<boolean>(false);
  readonly placeholder = input<string>();
  readonly maxlength = input<number>();
  readonly minlength = input<number>();
}
