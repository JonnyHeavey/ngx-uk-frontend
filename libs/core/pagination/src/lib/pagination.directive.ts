import { Directive, computed, input, output } from '@angular/core';

/**
 * Internal interface for pagination items
 */
export interface PageItem {
  /** The number/text to display for the item */
  number: string;
  /** Whether this is the current active page */
  current?: boolean;
  /** Whether to display this item as an ellipsis */
  ellipsis?: boolean;
  /** Actual page number for this item */
  pageNumber?: number;
  /** Unique identifier for tracking in loops */
  id: string;
}

/**
 * Base directive for pagination components.
 * Contains common functionality shared between different design system implementations.
 */
@Directive()
export class PaginationDirective {
  /** Total number of items */
  readonly itemCount = input<number>(0);

  /** Number of items per page */
  readonly itemsPerPage = input<number>(10);

  /** Current page number (1-based) */
  readonly currentPage = input<number>(1);

  /** Title for the previous button */
  readonly previousTitle = input<string>('Previous');

  /** Label for the previous button (additional context) */
  readonly previousLabel = input<string | null>(null);

  /** Title for the next button */
  readonly nextTitle = input<string>('Next');

  /** Label for the next button (additional context) */
  readonly nextLabel = input<string | null>(null);

  /** Output event when a pagination item is clicked */
  readonly pageChange = output<number>();

  /** Output event when the previous link is clicked */
  readonly previousClick = output<void>();

  /** Output event when the next link is clicked */
  readonly nextClick = output<void>();

  /** Counter for generating unique IDs */
  private ellipsisCounter = 0;

  /** Computed total number of pages */
  readonly totalPages = computed(() =>
    Math.ceil(this.itemCount() / this.itemsPerPage()),
  );

  /** Computed flag for whether previous button should be shown */
  readonly hasPreviousPage = computed(() => this.currentPage() > 1);

  /** Computed flag for whether next button should be shown */
  readonly hasNextPage = computed(() => this.currentPage() < this.totalPages());

  /** Computed pagination items */
  readonly computedItems = computed(() => {
    const totalPages = this.totalPages();
    if (totalPages <= 0) {
      return [];
    }

    // Simple case: 7 or fewer pages, show all
    if (totalPages <= 7) {
      return this.createSequentialItems(1, totalPages);
    }

    const currentPage = this.currentPage();
    const items: PageItem[] = [];

    // Always show first page
    items.push(this.createPageItem(1));

    // Complex case: more than 7 pages, show ellipses
    if (currentPage <= 4) {
      // Near the start: show 1 2 3 4 5 ... 100
      items.push(...this.createSequentialItems(2, 5));
      items.push(this.createEllipsisItem());
      items.push(this.createPageItem(totalPages));
    } else if (currentPage >= totalPages - 3) {
      // Near the end: show 1 ... 96 97 98 99 100
      items.push(this.createEllipsisItem());
      items.push(...this.createSequentialItems(totalPages - 4, totalPages));
    } else {
      // In the middle: show 1 ... 49 50 51 ... 100
      items.push(this.createEllipsisItem());
      items.push(
        ...this.createSequentialItems(currentPage - 1, currentPage + 1),
      );
      items.push(this.createEllipsisItem());
      items.push(this.createPageItem(totalPages));
    }

    return items;
  });

  /**
   * Handle page number click
   */
  onPageClick(item: PageItem): void {
    if (!item.ellipsis && item.pageNumber) {
      this.pageChange.emit(item.pageNumber);
    }
  }

  /**
   * Creates a page item for the specified page number
   */
  protected createPageItem(pageNumber: number): PageItem {
    return {
      number: String(pageNumber),
      current: pageNumber === this.currentPage(),
      pageNumber: pageNumber,
      id: `page-${pageNumber}`,
    };
  }

  /**
   * Creates an ellipsis item
   */
  protected createEllipsisItem(): PageItem {
    return {
      number: '',
      ellipsis: true,
      id: `ellipsis-${++this.ellipsisCounter}`,
    };
  }

  /**
   * Creates an array of sequential page items
   */
  protected createSequentialItems(start: number, end: number): PageItem[] {
    const items: PageItem[] = [];
    for (let i = start; i <= end; i++) {
      items.push(this.createPageItem(i));
    }
    return items;
  }
}
