import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ErrorSummaryDirective } from '@ngx-uk-frontend/core/error-summary';
import { GovUKErrorSummaryItemDirective } from './error-summary-item.directive';

/**
 * Component for displaying a GOV.UK error summary
 *
 * Use this component at the top of a page to summarise any errors a user has made.
 * When a user makes an error, you should show both an error summary and an error message
 * next to each answer that contains an error.
 *
 * This component implements the GOV.UK Design System error summary component.
 * It helps users understand what went wrong and how to fix it.
 *
 * @see https://design-system.service.gov.uk/components/error-summary/
 *
 * ## Router Configuration
 *
 * The component uses Angular Router's fragment navigation for scrolling to error elements.
 * You must enable anchor scrolling in your application's router configuration for proper
 * scrolling behavior when users click on error links.
 */
@Component({
  selector: 'ngx-govuk-error-summary',
  templateUrl: './error-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
})
export class GovUKErrorSummaryComponent extends ErrorSummaryDirective {
  /**
   * Override the base errorItems query to use GovUK-specific directive
   */
  override readonly errorItems = contentChildren(
    GovUKErrorSummaryItemDirective,
  );
}
