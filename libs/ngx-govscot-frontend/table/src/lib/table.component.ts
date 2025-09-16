import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TableDirective } from '@ngx-uk-frontend/core/table';

export type GovScotTableSmallScreenBehavior = 'scrolling' | 'boxes';

/**
 * This component implements the GovScot Design System table component.
 * It makes information easier to compare and scan for users.
 *
 * @see https://designsystem.gov.scot/components/table
 */
@Component({
  selector: 'ngx-govscot-table',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotTableComponent extends TableDirective {
  /**
   * Defines how the table behaves on small screens.
   * 'scrolling' makes the first column sticky while the rest scroll.
   * 'boxes' collapses rows into individual blocks of data.
   */
  readonly smallScreenBehavior = input<GovScotTableSmallScreenBehavior>();
}
