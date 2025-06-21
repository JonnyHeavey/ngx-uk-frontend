import { booleanAttribute, Directive, input } from '@angular/core';

/**
 * Base directive that provides common form group functionality
 * for both GovUK and GovScot design systems.
 */
@Directive({
  selector: '[libFormGroup]',
  standalone: true,
})
export class FormGroupDirective {
  readonly label = input<string>();
  readonly labelFor = input<string>();

  readonly errorMessage = input<string>();
  readonly hint = input<string>();
  readonly isPageTitle = input(false, { transform: booleanAttribute });
}
