import { Directive, input } from '@angular/core';

/**
 * Base directive for details components across different design systems.
 * Provides common functionality for disclosure/collapsible content components.
 *
 * This directive serves as the foundation for design system-specific details
 * implementations, ensuring consistent behavior and API across different
 * design systems (GOV.UK, Scottish Government, NHS, etc.).
 *
 * @example
 * ```typescript
 * @Component({
 *   selector: 'my-details',
 *   template: `
 *     <details>
 *       <summary>{{ summary() }}</summary>
 *       <ng-content></ng-content>
 *     </details>
 *   `
 * })
 * export class MyDetailsComponent extends DetailsDirective {}
 * ```
 */
@Directive()
export class DetailsDirective {
  /**
   * The text displayed in the details summary element.
   * This serves as the clickable trigger that shows/hides the content.
   * This input is required.
   */
  readonly summary = input.required<string>();
}
