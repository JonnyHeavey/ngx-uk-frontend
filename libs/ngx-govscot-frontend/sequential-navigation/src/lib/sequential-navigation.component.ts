
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Interface for sequential navigation items containing text and routing information.
 */
export interface SequentialNavigationItem {
  /** The display text for the navigation item. */
  text: string;
  /** The link/route for the navigation item. Can be a string, array, or RouterLink compatible value. */
  link: RouterLink['routerLink'];
}

/**
 * This component implements the Scottish Government Design System sequential navigation component.
 * It provides previous and next navigation buttons that use Angular routing.
 *
 * Based on the official Scottish Government Design System specifications:
 * @see https://designsystem.gov.scot/components/sequential-navigation
 */
@Component({
  selector: 'ngx-govscot-sequential-navigation',
  imports: [RouterLink],
  templateUrl: './sequential-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotSequentialNavigationComponent {
  /** The previous navigation item with text and link. */
  readonly previous = input<SequentialNavigationItem>();

  /** The next navigation item with text and link. */
  readonly next = input<SequentialNavigationItem>();

  /** ARIA label for the navigation element. */
  readonly ariaLabel = input<string>('Article navigation');

  /** Additional CSS classes to apply to the component. */
  readonly classes = input<string>('');
}
