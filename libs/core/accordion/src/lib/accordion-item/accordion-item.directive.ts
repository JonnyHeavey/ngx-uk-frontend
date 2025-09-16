import { booleanAttribute, Directive, input } from '@angular/core';

/**
 * Base directive for accordion item components across different design systems.
 * Provides common functionality for accordion items.
 */
@Directive()
export class AccordionItemDirective {
  /** The unique identifier for the accordion item. This input is required. */
  readonly itemId = input.required<string>();

  /** The text displayed in the accordion item heading. This input is required. */
  readonly heading = input.required<string>();

  /** Optional summary text displayed below the heading. */
  readonly summary = input<string>();

  /** Whether the accordion item is expanded. Defaults to false. */
  readonly expanded = input(false, { transform: booleanAttribute });
}
