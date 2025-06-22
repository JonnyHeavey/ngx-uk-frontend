# Page Header

The header for a content page that tells users what the page is about.

This component implements the [Scottish Government Design System Page Header](https://designsystem.gov.scot/components/page-header).

## Installation

```bash
npm install @ngx-govscot-frontend/page-header
```

## Usage

### Basic Usage

```typescript
import { GovScotPageHeaderComponent } from '@ngx-govscot-frontend/page-header';

@Component({
  selector: 'app-example',
  imports: [GovScotPageHeaderComponent],
  template: ` <ngx-govscot-page-header title="Apply for or renew a disabled parking permit"> </ngx-govscot-page-header> `,
})
export class ExampleComponent {}
```

### With Content Label

```typescript
@Component({
  selector: 'app-example',
  imports: [GovScotPageHeaderComponent],
  template: ` <ngx-govscot-page-header label="Guide" title="Apply for or renew a disabled parking permit"> </ngx-govscot-page-header> `,
})
export class ExampleComponent {}
```

### With Metadata

```typescript
@Component({
  selector: 'app-example',
  imports: [GovScotPageHeaderComponent],
  template: ` <ngx-govscot-page-header label="Guide" title="Apply for or renew a disabled parking permit" [metadata]="pageMetadata"> </ngx-govscot-page-header> `,
})
export class ExampleComponent {
  pageMetadata = [
    { key: 'Last updated', value: '8 November 2016' },
    { key: 'Published', value: '1 January 2016' },
  ];
}
```

## API

### Inputs

| Name       | Type                                  | Default      | Description                                                                                |
| ---------- | ------------------------------------- | ------------ | ------------------------------------------------------------------------------------------ |
| `title`    | `string`                              | **Required** | The main title/heading of the page (H1). This is the primary content title.                |
| `label`    | `string`                              | `undefined`  | The content type label (e.g., "Guide", "Article", "News"). Appears above the main title.   |
| `metadata` | `Array<{key: string, value: string}>` | `undefined`  | Optional metadata items to display below the title. Each item should have a key and value. |
| `classes`  | `string`                              | `undefined`  | Additional CSS classes to apply to the page header.                                        |

## Examples

### News Article

```html
<ngx-govscot-page-header
  label="News"
  title="First Minister announces investment in renewable energy"
  [metadata]="[
    { key: 'Published', value: '10 April 2024' },
    { key: 'Author', value: 'Scottish Government Press Office' }
  ]"
>
</ngx-govscot-page-header>
```

### Service Page

```html
<ngx-govscot-page-header
  label="Service"
  title="Register for Corporation Tax"
  [metadata]="[
    { key: 'Service type', value: 'Online application' },
    { key: 'Processing time', value: '10 working days' }
  ]"
>
</ngx-govscot-page-header>
```

### Policy Document

```html
<ngx-govscot-page-header
  label="Policy"
  title="Scotland's comprehensive strategy for sustainable development"
  [metadata]="[
    { key: 'Published', value: '1 January 2024' },
    { key: 'Document type', value: 'Policy paper' }
  ]"
>
</ngx-govscot-page-header>
```

## Accessibility

- The component uses semantic HTML with a proper `<header>` element
- The main title is marked up as an `<h1>` heading for proper document structure
- Metadata is structured using description list (`<dl>`, `<dt>`, `<dd>`) elements
- The content label uses appropriate CSS classes for styling

## Design System Notes

- The page header should be used as the heading on standard content pages
- The content title must be descriptive and concise (search engines generally only use the first 60 characters)
- The H1 heading helps with SEO and website ranking
- Metadata should include relevant information like publication dates, authors, or content categories

## Related Components

- Page Metadata component for additional structured data

See the [Storybook stories](./src/lib/page-header.component.stories.ts) for more examples and interactive demos.
