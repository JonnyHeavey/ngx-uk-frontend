import { Directive } from '@angular/core';
import { SummaryListValueDirective } from '@ngx-uk-frontend/core/summary-list';

/**
 * This directive implements the value in a Scottish Government Design System summary list component.
 * It applies the appropriate styling for a summary list value.
 *
 * @see https://designsystem.gov.scot/components/summary-list/
 */
@Directive({
  selector: '[ngxGovScotSummaryListValue]',
})
export class GovScotSummaryListValueDirective extends SummaryListValueDirective {}
