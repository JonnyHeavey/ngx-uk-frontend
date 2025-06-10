import { CdkAccordion } from '@angular/cdk/accordion';
import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import {
  AccordionDirective,
  AccordionItemDirective,
} from '@ngx-uk-frontend/core/accordion';
import { GovUKAccordionItemComponent } from '../accordion-item/accordion-item.component';

/**
 * This component implements the GOV.UK Design System accordion component.
 * It allows users to show and hide sections of related content on a page.
 *
 * @see https://design-system.service.gov.uk/components/accordion/
 */
@Component({
  imports: [NgTemplateOutlet],
  selector: 'ngx-govuk-accordion',
  templateUrl: './accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [CdkAccordion],
})
export class GovUKAccordionComponent extends AccordionDirective {
  /** Collection of accordion item components that are children of this accordion. */
  readonly items = contentChildren(GovUKAccordionItemComponent);

  /**
   * Implementation of the abstract getItems method.
   * Returns the accordion items for use by the base directive.
   */
  protected override getItems(): readonly AccordionItemDirective[] {
    return this.items();
  }
}
