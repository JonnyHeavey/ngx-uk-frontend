import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * This component implements the Scottish Government Design System page header component.
 * The header for a content page that tells users what the page is about.
 *
 * @see https://designsystem.gov.scot/components/page-header
 */
@Component({
  selector: 'ngx-govscot-page-header',
  imports: [CommonModule],
  templateUrl: './page-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotPageHeaderComponent {
  /**
   * The content type label (e.g., "Guide", "Article", "News")
   * Appears above the main title
   */
  label = input<string>();

  /**
   * The main title/heading of the page (H1)
   * This is the primary content title
   */
  title = input.required<string>();

  /**
   * Optional metadata items to display below the title
   * Each item should have a key and value (e.g., {key: 'Last updated', value: '8 November 2016'})
   */
  metadata = input<Array<{ key: string; value: string }>>();

  /**
   * Additional CSS classes to apply to the page header
   */
  classes = input<string>();
}
