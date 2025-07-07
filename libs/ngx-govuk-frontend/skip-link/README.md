# ngx-govuk-frontend/skip-link

## Overview

The skip link component allows keyboard users to bypass navigation elements and jump straight to the main content on a page. It is visually hidden until it receives keyboard focus. This is an Angular implementation of the [GOV.UK Design System Skip Link component](https://design-system.service.gov.uk/components/skip-link/).

## Components

- `GovUKSkipLinkComponent` - The main skip link component

## Usage

```typescript
import { GovUKSkipLinkComponent } from 'ngx-govuk-frontend/skip-link';

@Component({
  // ...
  imports: [
    GovUKSkipLinkComponent
  ]
})
```

### Basic example

```html
<ngx-govuk-skip-link href="#main-content">Skip to main content</ngx-govuk-skip-link>

<!-- Later in the document -->
<main id="main-content">
  <!-- Main content of the page -->
</main>
```

### With default target

If no `href` is provided, the component will default to targeting `#content`:

```html
<ngx-govuk-skip-link>Skip to main content</ngx-govuk-skip-link>

<!-- Later in the document -->
<main id="content">
  <!-- Main content of the page -->
</main>
```

### With custom text

```html
<ngx-govuk-skip-link href="#main-content">Skip to content</ngx-govuk-skip-link>
```

## Accessibility considerations

- The skip link should be the first focusable element on the page
- The target element (e.g., `<main id="main-content">`) should have a `tabindex="-1"` if it is not naturally focusable
- The target element should have a visible focus style when reached

## API Reference

### Inputs

| Name   | Type     | Default      | Description                                                 |
| ------ | -------- | ------------ | ----------------------------------------------------------- |
| `href` | `string` | `'#content'` | The ID of the element to skip to (including the `#` prefix) |
