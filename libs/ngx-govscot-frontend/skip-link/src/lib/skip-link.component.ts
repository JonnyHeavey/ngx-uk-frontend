import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * This component implements the Scottish Government Design System skip link component.
 * It provides a link at the top of the page that helps keyboard users skip to the main content.
 * The skip link component is visually hidden on page load and revealed when users navigate to it with their keyboard.
 *
 * @see https://designsystem.gov.scot/components/skip-link
 */
@Component({
  selector: 'ngx-govscot-skip-link',
  templateUrl: './skip-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotSkipLinkComponent {
  /** The target ID to skip to. Defaults to "#main-content" if not provided. */
  readonly href = input<string>('#main-content');
}
