# Scottish Government Design System - Breadcrumbs

A breadcrumb shows a user where they are in a website's structure. It also presents links to pages higher in the site's structure, such as a home page.

This component is based on the [Scottish Government Design System breadcrumbs component](https://designsystem.gov.scot/components/breadcrumbs).

## Installation

```bash
npm install ngx-govscot-frontend
```

## Usage

Import the breadcrumbs components in your Angular application:

```typescript
import { GovScotBreadcrumbsComponent, GovScotBreadcrumbDirective } from 'ngx-govscot-frontend/breadcrumbs';

@Component({
  selector: 'app-example',
  imports: [GovScotBreadcrumbsComponent, GovScotBreadcrumbDirective],
  template: `
    <ngx-govscot-breadcrumbs>
      <ngx-govscot-breadcrumb label="Home" link="/"></ngx-govscot-breadcrumb>
      <ngx-govscot-breadcrumb label="Justice and the law" link="/justice"></ngx-govscot-breadcrumb>
      <ngx-govscot-breadcrumb label="Your rights and the law" link="/justice/rights"></ngx-govscot-breadcrumb>
      <ngx-govscot-breadcrumb label="Data sharing of personal information" [current]="true"></ngx-govscot-breadcrumb>
    </ngx-govscot-breadcrumbs>
  `,
})
export class ExampleComponent {}
```

## When to use this component

- Use breadcrumbs if a website has 2 or more levels in its structure
- Include the user's current page
- Display the current page item in a different style from other items

## When not to use this component

- Don't use breadcrumbs if you use a top level navigation, such as a site navigation component
- Don't use breadcrumbs on parts of a website where a user needs to go through pages in a certain order (like online forms or multi-page calculators)

## Examples

### Basic breadcrumbs with current page

```html
<ngx-govscot-breadcrumbs>
  <ngx-govscot-breadcrumb label="Home" link="/"></ngx-govscot-breadcrumb>
  <ngx-govscot-breadcrumb label="Services" link="/services"></ngx-govscot-breadcrumb>
  <ngx-govscot-breadcrumb label="Corporation Tax" link="/services/corporation-tax"></ngx-govscot-breadcrumb>
  <ngx-govscot-breadcrumb label="Register your company" [current]="true"></ngx-govscot-breadcrumb>
</ngx-govscot-breadcrumbs>
```

### Breadcrumbs without current page

You can leave the current page out if there are issues with repetition or long page titles:

```html
<ngx-govscot-breadcrumbs>
  <ngx-govscot-breadcrumb label="Home" link="/"></ngx-govscot-breadcrumb>
  <ngx-govscot-breadcrumb label="Justice and the law" link="/justice"></ngx-govscot-breadcrumb>
  <ngx-govscot-breadcrumb label="Your rights and the law" link="/justice/rights"></ngx-govscot-breadcrumb>
</ngx-govscot-breadcrumbs>
```

### Complex routing with arrays

```html
<ngx-govscot-breadcrumbs>
  <ngx-govscot-breadcrumb label="Home" [link]="['/']"></ngx-govscot-breadcrumb>
  <ngx-govscot-breadcrumb label="Services" [link]="['/services']"></ngx-govscot-breadcrumb>
  <ngx-govscot-breadcrumb label="Business taxes" [link]="['/services', 'business', 'taxes']"></ngx-govscot-breadcrumb>
  <ngx-govscot-breadcrumb label="Corporation Tax registration" [current]="true"></ngx-govscot-breadcrumb>
</ngx-govscot-breadcrumbs>
```

## API

### GovScotBreadcrumbsComponent

The main container component for breadcrumb navigation.

| Property | Type                                   | Description                                      |
| -------- | -------------------------------------- | ------------------------------------------------ |
| `items`  | `Signal<GovScotBreadcrumbDirective[]>` | Collection of child breadcrumb items (read-only) |

### GovScotBreadcrumbDirective

Individual breadcrumb item directive.

| Input     | Type              | Default     | Description                                                              |
| --------- | ----------------- | ----------- | ------------------------------------------------------------------------ |
| `label`   | `string`          | Required    | The text label for the breadcrumb item                                   |
| `link`    | `string \| any[]` | `undefined` | Router link for navigation. Can be a string or array for complex routing |
| `current` | `boolean`         | `false`     | Whether this item represents the current page                            |

## Accessibility

- Uses semantic `nav` element with `aria-label="Breadcrumb"`
- Current page items have `aria-current="page"` attribute
- Links are properly structured for screen readers
- Separators are CSS-only and not read by screen readers

## Design System

This component follows the Scottish Government Design System specifications:

- Uses `ds_breadcrumbs` CSS classes
- Implements proper HTML structure with `<nav>` and `<ol>` elements
- Supports current page styling without links
- Maintains accessibility standards

## Related Components

- [GovUK Breadcrumbs](../../../ngx-govuk-frontend/breadcrumbs/) - GOV.UK variant
- [Skip Link](../skip-link/) - For main content navigation
- [Phase Banner](../phase-banner/) - For service status indication
