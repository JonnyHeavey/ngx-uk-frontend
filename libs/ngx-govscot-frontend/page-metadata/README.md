# Page Metadata

Show important information about a piece of content.

## Usage

Import the component:

```typescript
import { GovScotPageMetadataComponent, MetadataItem } from '@ngx-govscot-frontend/page-metadata';
```

Use in your template:

```html
<ngx-govscot-page-metadata [items]="metadataItems"> </ngx-govscot-page-metadata>
```

## API

### Inputs

| Input     | Type             | Default      | Description                                            |
| --------- | ---------------- | ------------ | ------------------------------------------------------ |
| `items`   | `MetadataItem[]` | **Required** | Array of metadata items to display                     |
| `inline`  | `boolean`        | `false`      | Whether to display metadata inline (shortened version) |
| `classes` | `string`         | `''`         | Additional CSS classes to apply                        |

### MetadataItem Interface

```typescript
interface MetadataItem {
  key: string; // The label for the metadata item
  value: string; // The value to display
  href?: string; // Optional URL to make the value a link
}
```

## Examples

### Basic Usage

```typescript
export class MyComponent {
  metadataItems: MetadataItem[] = [
    { key: 'Published', value: '16 April 2024' },
    { key: 'Directorate', value: 'Test Directorate', href: '#' },
  ];
}
```

```html
<ngx-govscot-page-metadata [items]="metadataItems"> </ngx-govscot-page-metadata>
```

### Inline Version

Use the inline version for shortened metadata display:

```typescript
export class MyComponent {
  inlineItems: MetadataItem[] = [
    { key: 'Type', value: 'Advice and guidance' },
    { key: 'Date', value: '22 April 2024' },
  ];
}
```

```html
<ngx-govscot-page-metadata [items]="inlineItems" [inline]="true"> </ngx-govscot-page-metadata>
```

### With Links

```typescript
export class MyComponent {
  metadataWithLinks: MetadataItem[] = [
    { key: 'Published', value: '16 April 2024' },
    { key: 'Directorate', value: 'Health and Social Care', href: '/directorates/health' },
    { key: 'Part of', value: 'Healthcare policy', href: '/topics/healthcare' },
  ];
}
```

### Publication Metadata

```typescript
export class MyComponent {
  publicationMetadata: MetadataItem[] = [
    { key: 'Published', value: '22 November 2023' },
    { key: 'Last updated', value: '15 January 2024' },
    { key: 'ISBN', value: '978-1-80525-123-4' },
    { key: 'Reference', value: 'GOV/2024/001' },
  ];
}
```

## When to Use

Use the page metadata component to show information that's useful to users, such as:

- Publication date
- Content type or format
- Who published the content (department name)
- Categories or topics
- ISBN numbers
- Reference numbers
- Last updated dates

## Versions

### Standard Page Metadata

Use this version on standard content pages. This version is usually included in the page header component, displayed underneath the title.

### Shortened Page Metadata (Inline)

Use the shortened version when using the page metadata component within other components, such as search results or cards. Set `inline="true"` to:

- Display metadata on a single line
- Hide the titles of each data item visually (screen readers still read them)
- Show only 1-2 pieces of most important information

## Accessibility

The component uses semantic HTML with:

- `<dl>` (description list) for the overall structure
- `<dt>` (description term) for metadata keys
- `<dd>` (description details) for metadata values

In inline mode, keys are visually hidden but remain accessible to screen readers. Commas are added between inline items with `visually-hidden` class for better screen reader experience.

## CSS Classes

The component applies these CSS classes from the Scottish Government Design System:

- `.ds_metadata` - Main container
- `.ds_metadata--inline` - Applied when `inline="true"`
- `.ds_metadata__item` - Individual metadata item container
- `.ds_metadata__key` - Metadata key/label
- `.ds_metadata__value` - Metadata value
- `.visually-hidden` - Applied to keys in inline mode and comma separators

## Related Components

- Page Header - Often contains page metadata
- File Download - Uses inline page metadata
- Search Results - Uses inline page metadata for result information
