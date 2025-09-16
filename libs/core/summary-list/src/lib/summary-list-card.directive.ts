import { Directive, input } from '@angular/core';

/**
 * Base directive for summary list card components.
 * Contains common functionality shared between different design system implementations.
 */
@Directive()
export class SummaryListCardDirective {
  /**
   * The title for the summary card
   */
  readonly title = input.required<string>();
}
