import { booleanAttribute, Directive, input } from '@angular/core';

/**
 * Base directive for summary list components.
 * Contains common functionality shared between different design system implementations.
 */
@Directive()
export class SummaryListDirective {
  /**
   * Whether to render the summary list without a border
   */
  readonly noBorder = input(false, { transform: booleanAttribute });
}
