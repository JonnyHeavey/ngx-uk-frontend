/* eslint-disable @angular-eslint/directive-selector */
import { Directive } from '@angular/core';
import { ErrorSummaryItemDirective } from '@ngx-uk-frontend/core/error-summary';

/**
 * Directive for an individual GOV.UK error summary item
 *
 * This directive extends the core ErrorSummaryItemDirective and is used declaratively
 * and rendered by the parent error summary component.
 * It doesn't render anything itself - it just provides a declarative API for the error summary.
 *
 * The component uses Angular Router's fragment navigation to enable scrolling to the target element.
 * For proper scrolling behavior, you must enable anchor scrolling in your application's router
 * configuration using either:
 *
 * - RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })
 * - withInMemoryScrolling({ anchorScrolling: 'enabled' })
 */
@Directive({
  selector: 'ngx-govuk-error-summary-item',
})
export class GovUKErrorSummaryItemDirective extends ErrorSummaryItemDirective {
  // All properties are inherited from ErrorSummaryItemDirective
}
