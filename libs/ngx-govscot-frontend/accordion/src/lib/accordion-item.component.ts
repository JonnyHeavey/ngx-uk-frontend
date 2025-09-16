import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { AccordionItemDirective } from '@ngx-uk-frontend/core/accordion';

/**
 * This component implements a section in the Scottish Government Design System accordion component.
 * It contains the heading and content for an accordion section.
 *
 * @see https://designsystem.gov.scot/components/accordion
 */
@Component({
  selector: 'ngx-govscot-accordion-item',
  templateUrl: './accordion-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotAccordionItemComponent extends AccordionItemDirective {
  /** Reference to the template containing the accordion item's content. */
  readonly content = viewChild.required<TemplateRef<unknown>>('content');
}
