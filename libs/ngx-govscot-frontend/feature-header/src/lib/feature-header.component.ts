import { NgClass, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

/**
 * The background color type for Scottish Government feature headers
 * @typedef {('default'|'secondary'|'tertiary'|'brand')} GovScotFeatureHeaderBackgroundType
 * - 'default' - Default white background
 * - 'secondary' - Secondary background color
 * - 'tertiary' - Tertiary background color
 * - 'brand' - Brand background color
 */
export type GovScotFeatureHeaderBackgroundType =
  | 'default'
  | 'secondary'
  | 'tertiary'
  | 'brand';

/**
 * The image scale type for Scottish Government feature headers
 * @typedef {('contain'|'cover')} GovScotFeatureHeaderImageScaleType
 * - 'contain' - Image fits within the container (default)
 * - 'cover' - Image covers the entire container area
 */
export type GovScotFeatureHeaderImageScaleType = 'contain' | 'cover';

/**
 * The aspect ratio type for Scottish Government feature headers
 * @typedef {('square'|'4:3'|'3:2'|'16:9')} GovScotFeatureHeaderAspectRatioType
 * - 'square' - 1:1 aspect ratio
 * - '4:3' - 4:3 aspect ratio
 * - '3:2' - 3:2 aspect ratio
 * - '16:9' - 16:9 aspect ratio
 */
export type GovScotFeatureHeaderAspectRatioType =
  | 'square'
  | '4:3'
  | '3:2'
  | '16:9';

/**
 * This component implements the Scottish Government Design System feature header component.
 * A decorative heading block featuring the page title, a summary and an image.
 *
 * @see https://designsystem.gov.scot/components/feature-header
 */
@Component({
  selector: 'ngx-govscot-feature-header',
  imports: [NgClass, NgOptimizedImage],
  templateUrl: './feature-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GovScotFeatureHeaderComponent {
  /**
   * The main title text for the feature header
   */
  readonly title = input.required<string>();

  /**
   * Optional content that describes what's on the page
   */
  readonly content = input<string>();

  /**
   * The image source URL
   */
  readonly imageSrc = input<string>();

  /**
   * The image alt text
   */
  readonly imageAlt = input<string>('');

  /**
   * The image width in pixels (required for NgOptimizedImage)
   */
  readonly imageWidth = input<number>();

  /**
   * The image height in pixels (required for NgOptimizedImage)
   */
  readonly imageHeight = input<number>();

  /**
   * The background color variant. Defaults to 'default'.
   * Can be 'default', 'secondary', 'tertiary', or 'brand'.
   */
  readonly background = input<GovScotFeatureHeaderBackgroundType>('default');

  /**
   * Whether to use full width layout. Defaults to false.
   */
  readonly fullWidth = input<boolean>(false);

  /**
   * Whether to use wide text layout (text takes 2/3, image takes 1/3). Defaults to false.
   */
  readonly wideText = input<boolean>(false);

  /**
   * Whether to align content to the top instead of center. Defaults to false.
   */
  readonly topAligned = input<boolean>(false);

  /**
   * Whether to remove vertical padding from the image. Defaults to false.
   */
  readonly noPadding = input<boolean>(false);

  /**
   * The image scale type. Defaults to 'contain'.
   * Can be 'contain' or 'cover'.
   */
  readonly imageScale = input<GovScotFeatureHeaderImageScaleType>('contain');

  /**
   * The aspect ratio for the image when using aspect box.
   */
  readonly aspectRatio = input<GovScotFeatureHeaderAspectRatioType>();

  /**
   * Computed CSS classes for the feature header
   */
  readonly featureHeaderClasses = computed(() => ({
    'ds_feature-header': true,
    'ds_feature-header--background-secondary':
      this.background() === 'secondary',
    'ds_feature-header--background-tertiary': this.background() === 'tertiary',
    'ds_feature-header--background': this.background() === 'brand',
    'ds_feature-header--fullwidth': this.fullWidth(),
    'ds_feature-header--wide': this.wideText(),
    'ds_feature-header--top': this.topAligned(),
  }));

  /**
   * Computed CSS classes for the secondary (image) section
   */
  readonly secondaryClasses = computed(() => ({
    'ds_feature-header__secondary': true,
    'ds_feature-header__secondary--no-padding': this.noPadding(),
    'ds_feature-header__secondary--cover': this.imageScale() === 'cover',
  }));

  /**
   * Computed CSS classes for the aspect box
   */
  readonly aspectBoxClasses = computed(() => {
    const aspectRatio = this.aspectRatio();
    return {
      'ds_aspect-box': !!aspectRatio,
      'ds_aspect-box--square': aspectRatio === 'square',
      'ds_aspect-box--4-3': aspectRatio === '4:3',
      'ds_aspect-box--3-2': aspectRatio === '3:2',
      'ds_aspect-box--16-9': aspectRatio === '16:9',
    };
  });

  /**
   * Whether to show the image section
   */
  readonly showImage = computed(
    () => !!(this.imageSrc() && this.imageWidth() && this.imageHeight()),
  );

  /**
   * Whether to use aspect box for the image
   */
  readonly useAspectBox = computed(() => !!this.aspectRatio());
}
