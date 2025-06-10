import { Directive, input, model } from '@angular/core';
import { TabDirective } from './tab.directive';

/**
 * Base directive for tabs components across different design systems.
 * Provides common functionality for managing tab collections and navigation.
 */
@Directive()
export abstract class TabsDirective {
  /** The title for the tabs component. This input is required. */
  readonly title = input.required<string>();

  /** Two-way binding model for the currently active tab index. Defaults to 0 (first tab). */
  readonly activeTab = model(0);

  /**
   * Abstract method that concrete components must implement to provide their tab items.
   * This allows the base directive to work with different component types.
   */
  protected abstract getTabs(): readonly TabDirective[];

  /**
   * Computed property that returns the tab items.
   * This provides a consistent interface for templates to access tabs.
   */
  tabs(): readonly TabDirective[] {
    return this.getTabs();
  }

  /**
   * Selects a tab at the specified index.
   * @param index The index of the tab to select
   * @param event The event that triggered the selection
   */
  selectTab(index: number, event: Event): void {
    event.preventDefault();
    this.activeTab.set(index);
  }
}
