# Aspect Box Component

An aspect box crops images to a particular aspect ratio, helping maintain uniform appearance across different image sizes.

## Features

- Supports common aspect ratios: 1:1 (square), 4:3 (standard fullscreen), 16:9 (standard widescreen), and 21:9 (anamorphic widescreen)
- 16:9 aspect ratio by default
- Custom CSS classes support
- Standalone Angular component
- Fully accessible with proper fallbacks

## Usage

```typescript
import { GovScotAspectBoxComponent } from '@ngx-govscot-frontend/aspect-box';

@Component({
  imports: [GovScotAspectBoxComponent],
  template: `
    <ngx-govscot-aspect-box aspectRatio="1:1">
      <img class="ds_aspect-box__inner" alt="Description" src="image.jpg" />
    </ngx-govscot-aspect-box>
  `
})
```

## API

### Inputs

| Input         | Type                                 | Default  | Description                     |
| ------------- | ------------------------------------ | -------- | ------------------------------- |
| `aspectRatio` | `'1:1' \| '4:3' \| '16:9' \| '21:9'` | `'16:9'` | The aspect ratio for the image  |
| `classes`     | `string`                             | `''`     | Additional CSS classes to apply |

## Examples

### Basic Usage (16:9 - Default)

```html
<ngx-govscot-aspect-box>
  <img class="ds_aspect-box__inner" alt="Landscape image" src="landscape.jpg" />
</ngx-govscot-aspect-box>
```

### Square Aspect Ratio (1:1)

```html
<ngx-govscot-aspect-box aspectRatio="1:1">
  <img class="ds_aspect-box__inner" alt="Profile image" src="profile.jpg" />
</ngx-govscot-aspect-box>
```

### Standard Fullscreen (4:3)

```html
<ngx-govscot-aspect-box aspectRatio="4:3">
  <img class="ds_aspect-box__inner" alt="Traditional photo" src="photo.jpg" />
</ngx-govscot-aspect-box>
```

### Anamorphic Widescreen (21:9)

```html
<ngx-govscot-aspect-box aspectRatio="21:9">
  <img class="ds_aspect-box__inner" alt="Ultra-wide image" src="ultrawide.jpg" />
</ngx-govscot-aspect-box>
```

### With Custom Classes

```html
<ngx-govscot-aspect-box aspectRatio="1:1" classes="custom-styling">
  <img class="ds_aspect-box__inner" alt="Custom styled image" src="image.jpg" />
</ngx-govscot-aspect-box>
```

## Important Notes

### Image Class Requirement

The projected image **must** include the `ds_aspect-box__inner` class for proper styling:

```html
<!-- ✅ Correct -->
<ngx-govscot-aspect-box aspectRatio="1:1">
  <img class="ds_aspect-box__inner" alt="Description" src="image.jpg" />
</ngx-govscot-aspect-box>

<!-- ❌ Incorrect -->
<ngx-govscot-aspect-box aspectRatio="1:1">
  <img alt="Description" src="image.jpg" />
</ngx-govscot-aspect-box>
```

## Styling

The component uses Scottish Government Design System CSS classes:

- `.ds_aspect-box` - Base container class
- `.ds_aspect-box--square` - 1:1 aspect ratio modifier
- `.ds_aspect-box--43` - 4:3 aspect ratio modifier
- `.ds_aspect-box--219` - 21:9 aspect ratio modifier
- `.ds_aspect-box__inner` - Applied to the projected image

## Accessibility

- Uses CSS properties with fallbacks for older browsers
- Maintains alt text and ARIA labels from projected content
- Requires JavaScript for fallback functionality in unsupported browsers
- Compatible with screen readers and assistive technologies

## When to Use

Use aspect boxes when:

- You need uniform image appearance in grids or cards
- Working with user-uploaded images of varying dimensions
- Maintaining consistent visual hierarchy
- Images support content but aren't essential for understanding

Avoid when:

- Images contain important text or details that cropping would obscure
- The full image content is essential for user comprehension
- Performance is critical and image processing adds unnecessary overhead

## Related Components

- Feature Header (can use aspect box for image sizing)
- Image components and patterns
- Card layouts and grids
