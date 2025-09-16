import { Directive, input } from '@angular/core';

/**
 * Base directive that provides common table functionality
 * for both GovUK and GovScot design systems.
 */
@Directive({
  selector: '[libTable]',
  standalone: true,
})
export class TableDirective {
  /** Optional caption for the table to describe its contents. */
  readonly caption = input<string>();
}
