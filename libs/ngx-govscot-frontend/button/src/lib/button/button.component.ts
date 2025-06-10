import { NgClass } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { ButtonDirective } from '@ngx-uk-frontend/core/button';

/**
 * The color type for Scottish Government buttons
 * @typedef {('primary'|'secondary'|'cancel'|'link')} GovScotButtonColorType
 * - 'primary' - Default button for main call to action
 * - 'secondary' - Button for most other actions with less visual prominence
 * - 'cancel' - Button for actions that cancel or abandon an action
 * - 'link' - Button styled as a link
 */
export type GovScotButtonColorType =
  | 'primary'
  | 'secondary'
  | 'cancel'
  | 'link';

/**
 * The size type for Scottish Government buttons
 * @typedef {('default'|'small')} GovScotButtonSizeType
 * - 'default' - Standard button size
 * - 'small' - Smaller button for limited space or non-primary actions
 */
export type GovScotButtonSizeType = 'default' | 'small';

/**
 * The width type for Scottish Government buttons
 * @typedef {('flexible'|'fixed'|'max')} GovScotButtonWidthType
 * - 'flexible' - Button expands to fit text (default)
 * - 'fixed' - Fixed width buttons for uniformity
 * - 'max' - Maximum width buttons (fills screen up to 480px)
 */
export type GovScotButtonWidthType = 'flexible' | 'fixed' | 'max';

/**
 * This component implements the Scottish Government Design System button component.
 * It allows users to perform actions, such as starting or submitting a form.
 *
 * @see https://designsystem.gov.scot/components/button
 */
@Component({
  selector: 'ngx-govscot-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotButtonComponent extends ButtonDirective {
  /**
   * The color variant of the button. Defaults to 'primary'.
   * Can be 'primary', 'secondary', 'cancel', or 'link'.
   */
  readonly color = input<GovScotButtonColorType>('primary');

  /**
   * The size variant of the button. Defaults to 'default'.
   * Can be 'default' or 'small'.
   */
  readonly size = input<GovScotButtonSizeType>('default');

  /**
   * The width variant of the button. Defaults to 'flexible'.
   * Can be 'flexible', 'fixed', or 'max'.
   */
  readonly width = input<GovScotButtonWidthType>('flexible');

  /** Whether the button has an icon. Defaults to false. */
  readonly hasIcon = input(false, { transform: booleanAttribute });

  /** Whether the icon should be positioned on the left. Defaults to false (right side). */
  readonly iconLeft = input(false, { transform: booleanAttribute });
}
