import { Directive, TemplateRef } from '@angular/core';

/**
 * Base directive for summary list value template.
 * Contains common functionality shared between different design system implementations.
 */
@Directive()
export class SummaryListValueDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
