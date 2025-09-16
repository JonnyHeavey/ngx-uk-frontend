import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface MetadataItem {
  key: string;
  value: string;
  href?: string;
}

@Component({
  selector: 'ngx-govscot-page-metadata',
  imports: [CommonModule],
  templateUrl: './page-metadata.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotPageMetadataComponent {
  /**
   * Array of metadata items to display
   */
  items = input.required<MetadataItem[]>();

  /**
   * Whether to display metadata inline (shortened version)
   */
  inline = input<boolean>(false);

  /**
   * Additional CSS classes to apply
   */
  classes = input<string>('');
}
