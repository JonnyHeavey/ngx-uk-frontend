import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  contentChild,
  viewChild,
} from '@angular/core';
import { SummaryListItemDirective } from '@ngx-uk-frontend/core/summary-list';
import { GovScotSummaryListActionsComponent } from './summary-list-actions.component';
import { GovScotSummaryListValueDirective } from './summary-list-value.directive';

/**
 * This component implements an item in the Scottish Government Design System summary list component.
 * It represents a key/value pair with optional actions in a summary list.
 *
 * @see https://designsystem.gov.scot/components/summary-list/
 */
@Component({
  selector: 'ngx-govscot-summary-list-item',
  imports: [NgTemplateOutlet],
  templateUrl: './summary-list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotSummaryListItemComponent extends SummaryListItemDirective {
  /**
   * Reference to the value directive if provided
   * Allows for complex HTML content in the value
   */
  readonly valueTemplate = contentChild(GovScotSummaryListValueDirective);

  /**
   * Reference to the actions component if provided
   * Allows for actions to be specified as content
   */
  readonly actions = contentChild(GovScotSummaryListActionsComponent);

  /**
   * Template reference for the summary list item
   * This is used by the parent component for rendering
   */
  readonly itemTemplate =
    viewChild.required<TemplateRef<unknown>>('itemTemplate');
}
