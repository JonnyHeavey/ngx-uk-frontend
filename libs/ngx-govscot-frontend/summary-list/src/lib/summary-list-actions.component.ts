import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { SummaryListActionsDirective } from '@ngx-uk-frontend/core/summary-list';
import { GovScotSummaryListActionComponent } from './summary-list-action.component';

/**
 * This component implements the actions container in a Scottish Government Design System summary list item.
 * It provides a container for action links in a summary list item.
 *
 * @see https://designsystem.gov.scot/components/summary-list/
 */
@Component({
  selector: 'ngx-govscot-summary-list-actions',
  imports: [NgTemplateOutlet],
  templateUrl: './summary-list-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotSummaryListActionsComponent extends SummaryListActionsDirective {
  /**
   * Query for all actions using signal-based query
   * This allows the component to collect all the action components and
   * automatically update when they change
   */
  readonly actions = contentChildren(GovScotSummaryListActionComponent);
}
