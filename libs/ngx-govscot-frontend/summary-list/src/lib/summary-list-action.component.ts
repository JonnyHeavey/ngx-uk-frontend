import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SummaryListActionDirective } from '@ngx-uk-frontend/core/summary-list';

/**
 * This component implements an action link in a Scottish Government Design System summary list component.
 * It provides a link for changing information in a summary list item.
 *
 * @see https://designsystem.gov.scot/components/summary-list/
 */
@Component({
  selector: 'ngx-govscot-summary-list-action',
  templateUrl: './summary-list-action.component.html',
  imports: [RouterLink],
  styles: [
    `
      button {
        cursor: pointer;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotSummaryListActionComponent extends SummaryListActionDirective {
  /**
   * Template reference for the action
   * This is used by parent components to render the action link in the appropriate context
   * (either directly or as part of a list)
   */
  readonly actionTemplate =
    viewChild.required<TemplateRef<unknown>>('actionTemplate');
}
