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
import { GovScotAccordionItemComponent } from './accordion-item.component';

/**
 * This component implements the Scottish Government Design System accordion component.
 * It uses a checkbox-based approach for expanding and collapsing sections.
 *
 * @see https://designsystem.gov.scot/components/accordion
 */
@Component({
  selector: 'ngx-govscot-accordion',
  imports: [NgTemplateOutlet],
  templateUrl: './accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotAccordionComponent extends AccordionDirective {
  /** Collection of accordion item components that are children of this accordion. */
  readonly items = contentChildren(GovScotAccordionItemComponent);

  /**
   * Implementation of the abstract getItems method.
   * Returns the accordion items for use by the base directive.
   */
  protected override getItems(): readonly AccordionItemDirective[] {
    return this.items();
  }

  /**
   * Handles the change event from a checkbox control.
   * Uses the shared toggleItem logic from the base directive.
   * @param itemId The ID of the accordion item
   * @param event The change event from the checkbox
   */
  onCheckboxChange(itemId: string): void {
    this.toggleItem(itemId);
  }
}
