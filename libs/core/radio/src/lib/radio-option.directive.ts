import { booleanAttribute, Directive, input } from '@angular/core';

/**
 * Base radio option directive that provides common functionality
 * for radio option components across different design systems.
 *
 * This directive handles:
 * - Option label and value configuration
 * - Optional hint text
 * - Divided option support (for "Or" dividers)
 */
@Directive()
export class RadioOptionDirective {
  /** The displayed text for the radio option */
  readonly label = input.required<string>();

  /** The value that will be submitted when the option is selected */
  readonly value = input.required<string>();

  /** Optional hint text to provide additional context */
  readonly hint = input<string>();

  /** Whether this option should be preceded by a divider (e.g., "Or") */
  readonly isDivided = input(false, { transform: booleanAttribute });
}
