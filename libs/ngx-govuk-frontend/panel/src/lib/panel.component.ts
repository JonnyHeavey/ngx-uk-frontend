import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NotificationPanelDirective } from '@ngx-uk-frontend/core/notification-panel';

/**
 * This component implements the GOV.UK Design System panel component.
 * It displays important content on a page, typically a confirmation or summary.
 *
 * @see https://design-system.service.gov.uk/components/panel/
 */
@Component({
  selector: 'ngx-govuk-panel',
  templateUrl: './panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKPanelComponent extends NotificationPanelDirective {}
