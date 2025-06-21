/* eslint-disable @angular-eslint/directive-selector */
import { Directive, input } from '@angular/core';

/**
 * Base directive for individual error summary items
 *
 * This directive provides common functionality for error summary items
 * across different design systems. It provides a declarative API for
 * error summary components.
 *
 * The directive doesn't render anything itself - it just provides
 * properties that the parent error summary component can use.
 */
@Directive({
  selector: 'error-summary-item',
  standalone: true,
})
export class ErrorSummaryItemDirective {
  /**
   * The text of the error message to display
   * Required field that will be displayed as the error message
   */
  readonly text = input.required<string>();

  /**
   * Required targetId attribute for the error link
   * This should reference the id of the form field with the error.
   */
  readonly targetId = input.required<string>();
}
