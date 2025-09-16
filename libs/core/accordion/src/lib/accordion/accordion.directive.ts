import { computed, Directive, effect, input, model } from '@angular/core';
import { AccordionItemDirective } from '../accordion-item/accordion-item.directive';

/**
 * Base directive for accordion components across different design systems.
 * Provides common functionality for managing accordion state and items.
 */
@Directive()
export abstract class AccordionDirective {
  /** The unique identifier for the accordion. This input is required. */
  readonly id = input.required<string>();

  /**
   * IDs of accordion items that should be expanded when the accordion first renders.
   * Defaults to an empty array (all items collapsed).
   */
  readonly initialExpanded = input<string[]>([]);

  /**
   * Two-way binding model for the currently expanded accordion items.
   * Contains an array of item IDs that are expanded.
   */
  readonly expandedItems = model<string[]>([]);

  /**
   * Flag to track if the initial expansion has been applied to prevent
   * re-expanding items when users collapse all items.
   */
  private initialExpansionApplied = false;

  /**
   * Abstract method that concrete components must implement to provide their items.
   * This allows the base directive to work with different component types.
   */
  protected abstract getItems(): readonly AccordionItemDirective[];

  /**
   * Computed property that determines if all accordion items are currently expanded.
   * Returns true only if there are items and all of them are expanded.
   */
  readonly allExpanded = computed(() => {
    const allItems = this.getItems();
    const expandedItems = this.expandedItems();
    return (
      allItems.length > 0 &&
      allItems.every((item) => expandedItems.includes(item.itemId()))
    );
  });

  constructor() {
    effect(() => {
      const initialExpandedItems = this.expandedItems();
      const initialExpanded = this.initialExpanded();

      // Only apply initial expansion once, when the component first initializes
      if (
        !this.initialExpansionApplied &&
        initialExpandedItems.length === 0 &&
        initialExpanded.length > 0
      ) {
        this.expandedItems.set([...initialExpanded]);
        this.initialExpansionApplied = true;
      }
    });
  }

  /**
   * Checks if a specific accordion item is expanded.
   * @param itemId The ID of the accordion item to check
   * @returns True if the item is expanded, false otherwise
   */
  isExpanded(itemId: string): boolean {
    return this.expandedItems().includes(itemId);
  }

  /**
   * Toggles the expanded state of a specific accordion item.
   * If the item is collapsed, it will be expanded, and vice versa.
   * @param itemId The ID of the accordion item to toggle
   */
  toggleItem(itemId: string): void {
    const currentExpanded = this.expandedItems();
    const index = currentExpanded.indexOf(itemId);

    if (index === -1) {
      this.expandedItems.set([...currentExpanded, itemId]);
    } else {
      const newExpanded = [...currentExpanded];
      newExpanded.splice(index, 1);
      this.expandedItems.set(newExpanded);
    }
  }

  /**
   * Toggles all accordion items between expanded and collapsed states.
   * If all items are currently expanded, collapses all items.
   * If any items are collapsed, expands all items.
   */
  toggleAll(): void {
    if (this.allExpanded()) {
      this.expandedItems.set([]);
    } else {
      this.expandedItems.set(this.getItems().map((item) => item.itemId()));
    }
  }
}
