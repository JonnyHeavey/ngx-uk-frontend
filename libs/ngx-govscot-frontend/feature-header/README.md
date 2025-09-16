# Scottish Government Feature Header

This library provides the Feature Header component for the Scottish Government Design System.

A decorative heading block featuring the page title, a summary and an image. The feature header helps users understand what content they'll find on the page and provides visual interest.

## Installation

To use this component, ensure you have the `ngx-govscot-frontend` library installed and import the component:

```typescript
import { GovScotFeatureHeaderComponent } from 'ngx-govscot-frontend/feature-header';

@Component({
  selector: 'app-example',
  imports: [GovScotFeatureHeaderComponent],
  template: ` <ngx-govscot-feature-header title="Page Title" content="Optional description of what's on the page" imageSrc="https://placehold.co/400x300/0065bd/ffffff?text=Example" imageAlt="Example image" [imageWidth]="400" [imageHeight]="300" /> `,
  standalone: true,
})
export class ExampleComponent {}
```

## Features

- **Performance Optimized**: Uses Angular's `NgOptimizedImage` directive for better performance, lazy loading, and optimization
- **Image Requirements**: Requires explicit width and height dimensions for optimal performance and layout stability
- **Flexible Layout**: Support for full-width, wide text, and top-aligned layouts
- **Background Variants**: Multiple background color options
- **Image Configuration**: Configurable aspect ratios and scaling options
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Proper semantic markup and ARIA support

## Usage

### Import

```typescript
import { GovScotFeatureHeaderComponent } from 'ngx-govscot-frontend/feature-header';

@Component({
  imports: [GovScotFeatureHeaderComponent],
  // ...
})
```

### Basic Usage

```html
<ngx-govscot-feature-header title="Welcome to Our Service" content="Discover the features and benefits of our platform designed to help you succeed." />
```

### With Image

```html
<ngx-govscot-feature-header title="Innovation Hub" content="Driving technological advancement across Scotland." imageSrc="https://placehold.co/400x300/0065bd/ffffff?text=Innovation" imageAlt="Innovation technology" [imageWidth]="400" [imageHeight]="300" />
```

### Custom Background

```html
<ngx-govscot-feature-header title="Environmental Action" content="Leading Scotland's response to climate change." imageSrc="https://placehold.co/400x300/4d7c0f/ffffff?text=Environment" imageAlt="Environmental landscape" [imageWidth]="400" [imageHeight]="300" background="tertiary" />
```

### Full Width Layout

```html
<ngx-govscot-feature-header title="Digital Services" content="Transforming public services through digital innovation." imageSrc="https://placehold.co/400x300/002d54/ffffff?text=Digital" imageAlt="Digital services" [imageWidth]="400" [imageHeight]="300" background="brand" [fullWidth]="true" />
```

### Aspect Ratio Configuration

```html
<ngx-govscot-feature-header title="Healthcare Innovation" content="Advancing medical research for better outcomes." imageSrc="https://placehold.co/800x450/059669/ffffff?text=Healthcare" imageAlt="Healthcare technology" [imageWidth]="800" [imageHeight]="450" aspectRatio="16:9" />
```

## API

### Inputs

| Property      | Type                                  | Default     | Description                                                                      |
| ------------- | ------------------------------------- | ----------- | -------------------------------------------------------------------------------- |
| `title`       | `string`                              | _required_  | The main heading text                                                            |
| `content`     | `string`                              | `undefined` | Optional content that describes what's on the page                               |
| `imageSrc`    | `string`                              | `undefined` | The image source URL                                                             |
| `imageAlt`    | `string`                              | `''`        | The image alt text                                                               |
| `imageWidth`  | `number`                              | `undefined` | **Required if image provided**: Explicit width for the image in pixels           |
| `imageHeight` | `number`                              | `undefined` | **Required if image provided**: Explicit height for the image in pixels          |
| `background`  | `GovScotFeatureHeaderBackgroundType`  | `'default'` | Background color variant: `'default'`, `'secondary'`, `'tertiary'`, or `'brand'` |
| `fullWidth`   | `boolean`                             | `false`     | Whether to use full width layout                                                 |
| `wideText`    | `boolean`                             | `false`     | Whether to use wide text layout (text takes 2/3, image takes 1/3)                |
| `topAligned`  | `boolean`                             | `false`     | Whether to align content to the top instead of center                            |
| `noPadding`   | `boolean`                             | `false`     | Whether to remove vertical padding from the image                                |
| `imageScale`  | `GovScotFeatureHeaderImageScaleType`  | `'contain'` | Image scale type: `'contain'` or `'cover'`                                       |
| `aspectRatio` | `GovScotFeatureHeaderAspectRatioType` | `undefined` | Aspect ratio for the image: `'square'`, `'4:3'`, `'3:2'`, or `'16:9'`            |

### Type Definitions

```typescript
export type GovScotFeatureHeaderBackgroundType = 'default' | 'secondary' | 'tertiary' | 'brand';
export type GovScotFeatureHeaderImageScaleType = 'contain' | 'cover';
export type GovScotFeatureHeaderAspectRatioType = 'square' | '4:3' | '3:2' | '16:9';
```

## Layout Variations

### Default Layout

The default feature header has the image stacked below the text on small screens. On large screens, the image appears on the right-hand side taking up half the available width.

### Full Width Layout

Use `[fullWidth]="true"` to make the header span the full width of the screen with any applied background color stretching across.

### Wide Text Layout

Use `[wideText]="true"` to make the text area wider and the image area smaller. The text takes up two-thirds of the available space, and the image takes up one-third.

### Top Alignment

Use `[topAligned]="true"` to align the text and image to the top instead of center alignment.

## Background Colors

- **Default**: White background (no modifier class)
- **Secondary**: Uses the secondary background color (`ds_feature-header--background-secondary`)
- **Tertiary**: Uses the tertiary background color (`ds_feature-header--background-tertiary`)
- **Brand**: Uses the brand background color (`ds_feature-header--background`)

Ensure that text meets colour contrast requirements against the background colour.

## Image Configuration

### Basic Image

Simply provide `imageSrc` and `imageAlt` for a standard image that scales responsively.

### Image Scale

- **Contain** (default): Image fits within the container maintaining aspect ratio
- **Cover**: Image covers the entire container area, may crop parts of the image

### Aspect Ratios

Use the `aspectRatio` input to set a consistent aspect ratio for images:

- `square`: 1:1 ratio
- `4:3`: 4:3 ratio
- `3:2`: 3:2 ratio
- `16:9`: 16:9 ratio

### No Padding

Use `[noPadding]="true"` to remove vertical padding from the image on large screens.

## Accessibility

The feature header component includes:

- Semantic HTML structure with proper heading hierarchy
- Image alt text support for screen readers
- Responsive design that works across devices
- Color contrast considerations for background variants

## When to use this component

Use a feature header to:

- Introduce the main content of a page
- Provide visual interest and context
- Help users understand what they'll find on the page
- Create a strong visual hierarchy

## When not to use this component

Don't use a feature header:

- On every page of your service (it can become repetitive)
- When the page content is very brief
- If it would compete with other important page elements
- On mobile-focused services where space is limited

## Implementation Notes

- The feature header should appear near the top of the page, typically after navigation elements
- Keep titles concise and descriptive
- Use high-quality images that relate to the content
- Consider the visual hierarchy and ensure the header doesn't overwhelm other content
- Test with different content lengths to ensure the layout works well

## Related Components

- [Page Header](../page-header/README.md) - For simpler page introductions
- [Phase Banner](../phase-banner/README.md) - For service status notifications
- [Breadcrumbs](../breadcrumbs/README.md) - For navigation context
