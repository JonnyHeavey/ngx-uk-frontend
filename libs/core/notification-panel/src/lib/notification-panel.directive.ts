import { Directive, input } from '@angular/core';

/**
 * Base directive for notification panel components.
 * Contains shared functionality for displaying important information
 * after task completion, such as confirmation messages.
 */
@Directive({
  selector: '[libNotificationPanel]',
})
export class NotificationPanelDirective {
  /** The title text displayed in the notification panel. This input is required. */
  readonly title = input.required<string>();
}
