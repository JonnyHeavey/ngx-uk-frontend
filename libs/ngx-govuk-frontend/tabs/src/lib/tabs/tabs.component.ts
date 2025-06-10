import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { TabDirective, TabsDirective } from '@ngx-uk-frontend/core/tabs';
import { GovUKTabComponent } from '../tab/tab.component';

/**
 * This component implements the GOV.UK Design System tabs component.
 * It lets users navigate between related sections of content on the same page.
 *
 * @see https://design-system.service.gov.uk/components/tabs/
 */
@Component({
  selector: 'ngx-govuk-tabs',
  imports: [NgTemplateOutlet],
  templateUrl: './tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GovUKTabsComponent extends TabsDirective {
  /** Collection of GOV.UK tab components that are children of this tabs component. */
  private readonly tabComponents = contentChildren(GovUKTabComponent);

  /**
   * Implementation of the abstract getTabs method.
   * Returns the collection of tab components as TabDirective instances.
   */
  protected getTabs(): readonly TabDirective[] {
    return this.tabComponents();
  }
}
