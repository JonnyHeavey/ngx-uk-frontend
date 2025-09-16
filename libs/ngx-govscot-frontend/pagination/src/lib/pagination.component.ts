import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PaginationDirective } from '@ngx-uk-frontend/core/pagination';

/**
 * This component implements the Scottish Government Design System pagination component.
 * It helps users navigate between pages in a collection of content.
 *
 * @see https://designsystem.gov.scot/components/pagination/
 */
@Component({
  selector: 'ngx-govscot-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotPaginationComponent extends PaginationDirective {}
