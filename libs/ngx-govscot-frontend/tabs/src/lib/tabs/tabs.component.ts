import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { TabDirective, TabsDirective } from '@ngx-uk-frontend/core/tabs';
import { GovScotTabComponent } from '../tab/tab.component';

/**
 * This component implements the Scottish Government Design System tabs component.
 * It lets users navigate between related sections of content on the same page.
 *
 * Based on the official Scottish Government Design System specifications:
 * @see https://designsystem.gov.scot/components/tabs
 */
@Component({
  selector: 'ngx-govscot-tabs',
  imports: [NgTemplateOutlet],
  templateUrl: './tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GovScotTabsComponent extends TabsDirective {
  /** Collection of Scottish Government tab components that are children of this tabs component. */
  private readonly tabComponents = contentChildren(GovScotTabComponent);

  /**
   * Implementation of the abstract getTabs method.
   * Returns the collection of tab components as TabDirective instances.
   */
  protected getTabs(): readonly TabDirective[] {
    return this.tabComponents();
  }

  /**
   * Generates a valid HTML ID from the title by replacing spaces and special characters with dashes.
   * @returns A valid HTML ID string
   */
  getTitleId(): string {
    return 'ds_tabs__title_' + this.title().replace(/\s+/g, '-').toLowerCase();
  }
}
