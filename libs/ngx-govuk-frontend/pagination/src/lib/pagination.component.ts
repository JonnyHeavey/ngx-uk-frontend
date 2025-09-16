import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { PaginationDirective } from '@ngx-uk-frontend/core/pagination';

/**
 * Pagination mode - defines layout and behavior
 */
export type PaginationMode = 'block' | 'list';

/**
 * This component implements the GOV.UK Design System pagination component.
 * It helps users navigate between pages in a collection of content.
 *
 * @see https://design-system.service.gov.uk/components/pagination/
 */
@Component({
  selector: 'ngx-govuk-pagination',
  templateUrl: './pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKPaginationComponent extends PaginationDirective {
  /** Pagination mode - 'block' or 'list' */
  readonly mode = input<PaginationMode>('list');

  /** Computed check if mode is block */
  readonly isBlockMode = computed(() => this.mode() === 'block');
}
