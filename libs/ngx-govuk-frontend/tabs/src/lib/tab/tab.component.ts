import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabDirective } from '@ngx-uk-frontend/core/tabs';

/**
 * This component implements a single tab panel in the GOV.UK Design System tabs component.
 * It contains the content to display when a tab is selected.
 *
 * @see https://design-system.service.gov.uk/components/tabs/
 */
@Component({
  selector: 'ngx-govuk-tab',
  templateUrl: './tab.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKTabComponent extends TabDirective {}
