import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';

/**
 * This component implements the Scottish Government Design System button group component.
 * It provides a way to group buttons together in a form with consistent spacing.
 *
 * @see https://designsystem.gov.scot/components/button
 */
@Component({
  selector: 'ngx-govscot-button-group',
  templateUrl: './button-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotButtonGroupComponent {
  /** Whether the button group should remain inline on all screen sizes. Defaults to false. */
  readonly inline = input(false, { transform: booleanAttribute });
}
