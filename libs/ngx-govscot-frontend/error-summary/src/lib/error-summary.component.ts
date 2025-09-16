import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ErrorSummaryDirective } from '@ngx-uk-frontend/core/error-summary';
import { GovScotErrorSummaryItemDirective } from './error-summary-item.directive';

/**
 * Component for displaying a GovScot error summary
 *
 * Use this component at the top of a page to summarise any errors a user has made.
 * When a user makes an error, you should show both an error summary and an error message
 * next to each answer that contains an error.
 *
 * This component implements the GovScot Design System error summary component.
 * It helps users understand what went wrong and how to fix it.
 *
 * @see https://designsystem.gov.scot/components/error-summary
 */
@Component({
  selector: 'ngx-govscot-error-summary',
  templateUrl: './error-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  standalone: true,
})
export class GovScotErrorSummaryComponent extends ErrorSummaryDirective {
  /**
   * Override the base errorItems query to use GovScot-specific directive
   */
  override readonly errorItems = contentChildren(
    GovScotErrorSummaryItemDirective,
  );
}
