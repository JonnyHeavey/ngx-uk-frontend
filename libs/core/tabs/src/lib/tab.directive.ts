import { Directive, input, TemplateRef, viewChild } from '@angular/core';

/**
 * Base directive for individual tab items across different design systems.
 * Provides common functionality for managing tab properties and content.
 */
@Directive()
export abstract class TabDirective {
  /** The unique identifier for the tab. This input is required. */
  readonly id = input.required<string>();

  /** The text displayed in the tab. This input is required. */
  readonly title = input.required<string>();

  /** Reference to the template containing the tab's content. */
  readonly tabContent = viewChild.required<TemplateRef<unknown>>('tabContent');
}
