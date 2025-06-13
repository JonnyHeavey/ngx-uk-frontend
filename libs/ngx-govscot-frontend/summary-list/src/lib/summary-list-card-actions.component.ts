import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { SummaryListCardActionsDirective } from '@ngx-uk-frontend/core/summary-list';
import { GovScotSummaryListActionComponent } from './summary-list-action.component';

/**
 * This component implements the card actions container in a Scottish Government Design System summary card.
 * It provides a container for action links that apply to the entire summary card.
 *
 * @see https://designsystem.gov.scot/components/summary-list/
 */
@Component({
  selector: 'ngx-govscot-summary-list-card-actions',
  imports: [NgTemplateOutlet],
  templateUrl: './summary-list-card-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotSummaryListCardActionsComponent extends SummaryListCardActionsDirective {
  /**
   * Query for all actions using signal-based query
   * This allows the component to collect all the action components and
   * automatically update when they change
   */
  readonly actions = contentChildren(GovScotSummaryListActionComponent);
}
