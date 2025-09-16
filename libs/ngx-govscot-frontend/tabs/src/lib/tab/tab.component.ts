import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabDirective } from '@ngx-uk-frontend/core/tabs';

/**
 * This component implements a single tab panel in the Scottish Government Design System tabs component.
 * It contains the content to display when a tab is selected.
 *
 * Based on the official Scottish Government Design System specifications:
 * @see https://designsystem.gov.scot/components/tabs
 */
@Component({
  selector: 'ngx-govscot-tab',
  templateUrl: './tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GovScotTabComponent extends TabDirective {}
