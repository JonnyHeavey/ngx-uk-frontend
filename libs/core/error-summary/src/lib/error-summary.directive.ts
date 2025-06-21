import {
  afterNextRender,
  contentChildren,
  Directive,
  ElementRef,
  inject,
  input,
} from '@angular/core';
import { ErrorSummaryItemDirective } from './error-summary-item.directive';

/**
 * Base directive for error summary components
 *
 * This directive provides common functionality for error summary components
 * across different design systems. It handles:
 * - Auto-focus on render
 * - Title property with default value
 * - Content children query for error items
 *
 * Components should extend this directive and provide their own templates
 * with design system-specific CSS classes.
 */
@Directive({
  selector: '[libErrorSummary]',
  standalone: true,
})
export class ErrorSummaryDirective {
  private elementRef = inject(ElementRef);

  /**
   * Query for all error summary item directives using signal-based query
   * This allows the component to iterate through the child error items
   */
  readonly errorItems = contentChildren(ErrorSummaryItemDirective);

  /**
   * Text to use for the heading of the error summary block
   */
  readonly title = input<string>('There is a problem');

  constructor() {
    // Focus on the error summary when it's rendered
    afterNextRender(() => {
      const element = this.elementRef.nativeElement as HTMLElement;
      element.focus();
    });
  }
}
