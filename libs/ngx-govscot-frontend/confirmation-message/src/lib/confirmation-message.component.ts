import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * This component implements the Scottish Government Design System confirmation message component.
 * It tells a user they've successfully completed an action when filling out a form.
 *
 * @see https://designsystem.gov.scot/components/confirmation-message
 */
@Component({
  selector: 'ngx-govscot-confirmation-message',
  imports: [],
  templateUrl: './confirmation-message.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GovScotConfirmationMessageComponent {
  /**
   * The title/heading of the confirmation message
   */
  readonly title = input.required<string>();

  /**
   * Optional body content for additional information
   */
  readonly body = input<string>();
}
