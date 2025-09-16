# File Download Component

The File Download component provides a consistent way of presenting files for download in Scottish Government services. It follows the [Scottish Government Design System file download component](https://designsystem.gov.scot/components/file-download) guidelines.

## Installation

```bash
npm install ngx-govscot-frontend
```

## Usage

Import the component in your Angular application:

```typescript
import { GovScotFileDownloadComponent } from 'ngx-govscot-frontend/file-download';

@Component({
  imports: [GovScotFileDownloadComponent],
  // ...
})
```

### Basic Usage

```html
<ngx-govscot-file-download
  title="Corporation Tax Guide for Small Businesses"
  href="/downloads/corporation-tax-guide.pdf"
  [metadata]="[
    { key: 'File type', value: '24 page PDF' },
    { key: 'File size', value: '2.1 MB' }
  ]"
/>
```

### With Thumbnail Image

```html
<ngx-govscot-file-download
  title="Scotland's Artificial Intelligence Strategy"
  href="/downloads/ai-strategy.pdf"
  thumbnailSrc="https://example.com/ai-strategy-cover.jpg"
  thumbnailAlt="AI Strategy document cover"
  [thumbnailWidth]="200"
  [thumbnailHeight]="260"
  [metadata]="[
    { key: 'File type', value: '44 page PDF' },
    { key: 'File size', value: '7.2 MB' }
  ]"
/>
```

### Highlighted File Download

```html
<ngx-govscot-file-download
  title="Essential Tax Return Forms 2024"
  href="/downloads/tax-forms-2024.pdf"
  [highlighted]="true"
  thumbnailSrc="https://example.com/tax-forms.jpg"
  thumbnailAlt="Tax forms document cover"
  [thumbnailWidth]="200"
  [thumbnailHeight]="260"
  [metadata]="[
    { key: 'File type', value: '8 page PDF' },
    { key: 'File size', value: '1.4 MB' },
    { key: 'Updated', value: 'January 2024' }
  ]"
/>
```

### With Metadata Links

```html
<ngx-govscot-file-download
  title="Environmental Impact Assessment Guidelines"
  href="/downloads/environmental-guidelines.pdf"
  [metadata]="[
    { key: 'Category', value: 'Environment', link: '/environment' },
    { key: 'File type', value: '32 page PDF' },
    { key: 'File size', value: '4.8 MB' },
    { key: 'Department', value: 'Environment & Climate Change', link: '/departments/environment' }
  ]"
/>
```

## API Reference

### Component Inputs

| Input             | Type                                | Required | Default | Description                                          |
| ----------------- | ----------------------------------- | -------- | ------- | ---------------------------------------------------- |
| `title`           | `string`                            | Yes      | -       | The title of the file download                       |
| `href`            | `string`                            | Yes      | -       | The URL where the file can be downloaded             |
| `thumbnailSrc`    | `string`                            | No       | -       | The URL of the thumbnail image                       |
| `thumbnailAlt`    | `string`                            | No       | `''`    | Alt text for the thumbnail image                     |
| `thumbnailWidth`  | `number`                            | No       | -       | Width of the thumbnail image (required for `ngSrc`)  |
| `thumbnailHeight` | `number`                            | No       | -       | Height of the thumbnail image (required for `ngSrc`) |
| `metadata`        | `GovScotFileDownloadMetadataItem[]` | No       | `[]`    | Array of metadata items to display                   |
| `highlighted`     | `boolean`                           | No       | `false` | Whether to highlight the file download block         |

### Metadata Item Type

```typescript
export type GovScotFileDownloadMetadataItem = {
  key: string; // The metadata label (e.g., "File type", "File size")
  value: string; // The metadata value (e.g., "PDF", "2.1 MB")
  link?: string; // Optional URL to make the value a clickable link
};
```

## Features

- **File Information**: Display title, file type, size, and other metadata
- **Thumbnail Support**: Show document covers or file type icons
- **Highlighting**: Make important downloads more prominent
- **Linked Metadata**: Include clickable links in metadata values
- **Accessibility**: Proper ARIA attributes and screen reader support
- **Responsive Design**: Works across different screen sizes

## Accessibility

The component follows accessibility best practices:

- Only the main title link is focusable to avoid duplicate links
- Thumbnail links are hidden from screen readers (`aria-hidden="true"`, `tabindex="-1"`)
- Metadata is properly associated with the title using `aria-describedby`
- Screen readers announce: "Link. [Title]. [Metadata details]"

## Design System Compliance

This component implements the Scottish Government Design System file download component:

- Uses correct CSS classes (`ds_file-download`, `ds_metadata`)
- Supports highlighted variant (`ds_file-download--highlighted`)
- Follows proper HTML structure and accessibility patterns
- Includes visually hidden comma separators for screen readers

## Examples in Demo App

The component includes comprehensive examples in the demo application showing:

- Basic file download with metadata
- File download with thumbnail image
- Highlighted file download
- File download with linked metadata
- File download without thumbnail

## Related Components

- [Page Metadata](../page-metadata/README.md) - For displaying metadata in other contexts
- [Button](../button/README.md) - For download actions

## Browser Support

This component supports all modern browsers and is tested with the latest versions of:

- Chrome
- Firefox
- Safari
- Edge

## Contributing

When contributing to this component, ensure that:

1. All accessibility guidelines are followed
2. The component matches the Scottish Government Design System specification
3. Unit tests cover new functionality
4. Documentation is updated accordingly
