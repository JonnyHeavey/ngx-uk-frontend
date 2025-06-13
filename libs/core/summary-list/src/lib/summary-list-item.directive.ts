import { Directive, input } from '@angular/core';

/**
 * Base directive for summary list item components.
 * Contains common functionality shared between different design system implementations.
 */
@Directive()
export class SummaryListItemDirective {
  /**
   * The key to display in the summary list item
   * Required for all summary list items
   */
  readonly key = input.required<string>();

  /**
   * Optional simple text value to display
   * Only used if no value template is provided
   */
  readonly value = input<string>('');
}
