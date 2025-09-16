import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { GovScotButtonComponent } from 'ngx-govscot-frontend/button';

/**
 * This component implements the Scottish Government Design System cookie banner component.
 * It tells users about cookies and allows them to accept or reject non-essential cookies.
 *
 * @see https://designsystem.gov.scot/components/cookie-banner
 */
@Component({
  selector: 'ngx-govscot-cookie-banner',
  imports: [GovScotButtonComponent],
  templateUrl: './cookie-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GovScotCookieBannerComponent {
  /**
   * The main text content of the cookie banner
   */
  readonly text = input<string>(
    'We use cookies to collect anonymous data to help us improve your site browsing experience.',
  );

  /**
   * Additional descriptive text about cookie choices
   */
  readonly description = input<string>(
    "Click 'Accept all cookies' to agree to all cookies that collect anonymous data. To only allow the cookies that make the site work, click 'Use essential cookies only.' Visit 'Set cookie preferences' to control specific cookies.",
  );

  /**
   * Text for the accept all cookies button
   */
  readonly acceptAllText = input<string>('Accept all cookies');

  /**
   * Text for the essential cookies only button
   */
  readonly essentialOnlyText = input<string>('Use essential cookies only');

  /**
   * Text for the cookie preferences link
   */
  readonly preferencesText = input<string>('Set cookie preferences');

  /**
   * Whether to show the confirmation message instead of the main banner
   */
  readonly showConfirmation = input<boolean>(false);

  /**
   * The confirmation message text
   */
  readonly confirmationText = input<string>(
    'Your cookie preferences have been saved. You can change your cookie settings at any time.',
  );

  /**
   * Text for the settings link in confirmation message
   */
  readonly settingsText = input<string>('change your cookie settings');

  /**
   * Emitted when user accepts all cookies
   */
  readonly acceptAll = output<void>();

  /**
   * Emitted when user chooses essential cookies only
   */
  readonly essentialOnly = output<void>();

  /**
   * Emitted when user clicks cookie preferences
   */
  readonly viewPreferences = output<void>();

  /**
   * Emitted when user clicks change settings in confirmation message
   */
  readonly changeSettings = output<void>();

  /**
   * Emitted when user closes the confirmation message
   */
  readonly closeConfirmation = output<void>();

  /**
   * Handle accept all cookies button click
   */
  onAcceptAll(): void {
    this.acceptAll.emit();
  }

  /**
   * Handle essential cookies only button click
   */
  onEssentialOnly(): void {
    this.essentialOnly.emit();
  }

  /**
   * Handle view preferences click
   */
  onViewPreferences(): void {
    this.viewPreferences.emit();
  }

  /**
   * Handle change settings click
   */
  onChangeSettings(): void {
    this.changeSettings.emit();
  }

  /**
   * Handle close confirmation button click
   */
  onCloseConfirmation(): void {
    this.closeConfirmation.emit();
  }
}
