import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NotificationPanelDirective } from '@ngx-uk-frontend/core/notification-panel';

/**
 * This component implements the Scottish Government Design System notification panel component.
 * A highlight block that shows the user important information after they have completed a task,
 * such as a success message.
 *
 * Based on the official Scottish Government Design System specifications:
 * @see https://designsystem.gov.scot/components/notification-panel
 */
@Component({
  selector: 'ngx-govscot-notification-panel',
  templateUrl: './notification-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotNotificationPanelComponent extends NotificationPanelDirective {}
