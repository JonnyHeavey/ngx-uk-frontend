import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, computed, input } from '@angular/core';

export type GovScotFileDownloadMetadataItem = {
  key: string;
  value: string;
  link?: string;
};

@Component({
  selector: 'ngx-govscot-file-download',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './file-download.component.html',
  standalone: true,
})
export class GovScotFileDownloadComponent {
  // Required inputs
  title = input.required<string>();
  href = input.required<string>();

  // Optional inputs for thumbnail
  thumbnailSrc = input<string>();
  thumbnailAlt = input<string>('');
  thumbnailWidth = input<number>();
  thumbnailHeight = input<number>();

  // Optional metadata
  metadata = input<GovScotFileDownloadMetadataItem[]>([]);

  // Styling options
  highlighted = input<boolean>(false);

  // Computed properties
  fileDownloadClasses = computed(() => {
    const classes = ['ds_file-download'];
    if (this.highlighted()) {
      classes.push('ds_file-download--highlighted');
    }
    return classes.join(' ');
  });

  showThumbnail = computed(() => {
    return !!(
      this.thumbnailSrc() &&
      this.thumbnailWidth() &&
      this.thumbnailHeight()
    );
  });

  // Generate unique ID for aria-describedby
  metadataId = `file-download-${Math.random().toString(36).substr(2, 9)}`;
}
