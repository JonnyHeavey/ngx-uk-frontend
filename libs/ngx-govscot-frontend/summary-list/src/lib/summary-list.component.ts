import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { SummaryListDirective } from '@ngx-uk-frontend/core/summary-list';
import { GovScotSummaryListItemComponent } from './summary-list-item.component';

/**
 * Component for displaying a Scottish Government summary list
 *
 * A summary list is used to summarize information, for example, a user's responses
 * at the end of a form.
 *
 * This component implements the Scottish Government Design System summary list component.
 * It displays information as a list of key/value pairs with optional actions.
 *
 * @see https://designsystem.gov.scot/components/summary-list/
 */
@Component({
  selector: 'ngx-govscot-summary-list',
  imports: [NgTemplateOutlet],
  templateUrl: './summary-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotSummaryListComponent extends SummaryListDirective {
  /**
   * Query for all summary list items using signal-based query
   */
  readonly listItems = contentChildren(GovScotSummaryListItemComponent);
}
