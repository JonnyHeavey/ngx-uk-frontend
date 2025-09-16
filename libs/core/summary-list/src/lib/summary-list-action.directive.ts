import { Directive, input } from '@angular/core';

/**
 * Base directive for summary list action components.
 * Contains common functionality shared between different design system implementations.
 */
@Directive()
export class SummaryListActionDirective {
  /**
   * The URL for the action link
   * Use either href or routerLink
   */
  readonly href = input<string>();

  /**
   * The Angular router link for the action
   * Use either href or routerLink
   */
  readonly routerLink = input<string>();

  /**
   * Optional visually hidden text for improved accessibility
   * This is used to provide context for screen readers, e.g. "Change name"
   */
  readonly visuallyHiddenText = input<string>();
}
