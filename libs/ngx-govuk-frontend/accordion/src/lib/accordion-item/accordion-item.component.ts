import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { AccordionItemDirective } from '@ngx-uk-frontend/core/accordion';

/**
 * This component implements a section in the GOV.UK Design System accordion component.
 * It contains the heading, optional summary, and content for an accordion section.
 *
 * @see https://design-system.service.gov.uk/components/accordion/
 */
@Component({
  selector: 'ngx-govuk-accordion-item',
  templateUrl: './accordion-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKAccordionItemComponent extends AccordionItemDirective {
  /** Reference to the template containing the accordion item's content. */
  readonly content = viewChild.required<TemplateRef<unknown>>('content');
}
