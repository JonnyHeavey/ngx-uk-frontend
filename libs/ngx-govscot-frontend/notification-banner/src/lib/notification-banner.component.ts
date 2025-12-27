
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

/**
 * This component implements the Scottish Government Design System notification banner component.
 * A banner highlighting key content that all visitors to a website will need to see.
 *
 * @see https://designsystem.gov.scot/components/notification-banner
 */
@Component({
  selector: 'ngx-govscot-notification-banner',
  imports: [],
  templateUrl: './notification-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotNotificationBannerComponent {
  /** The text content of the notification banner */
  @Input() text?: string;

  /** Whether to show the close button */
  @Input() showClose = true;

  /** Whether to show an icon */
  @Input() showIcon = false;

  /** The icon to display (when showIcon is true) */
  @Input() icon = 'priority_high';

  /** Whether to use the inverse icon style */
  @Input() iconInverse = false;

  /** Whether to use the colored icon style */
  @Input() iconColour = false;

  /** Whether the banner is reversed (dark background) */
  @Input() reversed = true;

  /** Event emitted when the close button is clicked */
  @Output() closed = new EventEmitter<void>();

  /**
   * Handles the close button click event
   */
  onClose(): void {
    this.closed.emit();
  }
}
