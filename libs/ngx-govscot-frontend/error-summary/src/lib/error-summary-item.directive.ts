/* eslint-disable @angular-eslint/directive-selector */
import { Directive } from '@angular/core';
import { ErrorSummaryItemDirective } from '@ngx-uk-frontend/core/error-summary';

/**
 * Directive for an individual GovScot error summary item
 *
 * This directive extends the core ErrorSummaryItemDirective and is used declaratively
 * and rendered by the parent error summary component.
 * It doesn't render anything itself - it just provides a declarative API for the error summary.
 */
@Directive({
  selector: 'ngx-govscot-error-summary-item',
  standalone: true,
})
export class GovScotErrorSummaryItemDirective extends ErrorSummaryItemDirective {
  // All properties are inherited from ErrorSummaryItemDirective
}
