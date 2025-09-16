import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
} from '@angular/core';
import { SummaryListCardDirective } from '@ngx-uk-frontend/core/summary-list';
import { GovScotSummaryListCardActionsComponent } from './summary-list-card-actions.component';

/**
 * This component implements a summary card in the Scottish Government Design System.
 * It provides a container for grouping related summary lists with optional actions.
 *
 * @see https://designsystem.gov.scot/components/summary-list/
 */
@Component({
  selector: 'ngx-govscot-summary-list-card',
  imports: [],
  templateUrl: './summary-list-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotSummaryListCardComponent extends SummaryListCardDirective {
  /**
   * Reference to the card actions component if provided
   * Allows for actions to be specified as content that apply to the entire card
   */
  readonly actions = contentChild(GovScotSummaryListCardActionsComponent);
}
