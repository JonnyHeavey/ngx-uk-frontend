# GovScot Back to Top Component

A link that allows users to navigate back to the top of the page with a single click. The link improves navigation for users on long pages of content and on mobile devices.

This component follows the [Scottish Government Design System](https://designsystem.gov.scot/components/back-to-top) specifications.

## Features

- Appears when user scrolls down the page (200px threshold by default)
- Fixed position in lower-right corner
- Semi-transparent background
- Smooth scroll animation to top
- Fully accessible with proper ARIA attributes
- Lightweight and performant implementation

## Basic Usage

```html
<ngx-govscot-back-to-top />
```

## Customization

```html
<ngx-govscot-back-to-top buttonText="Return to top" ariaLabel="Scroll back to page top" [scrollThreshold]="300" />
```

## API

### Inputs

| Input             | Type     | Default                 | Description                                     |
| ----------------- | -------- | ----------------------- | ----------------------------------------------- |
| `buttonText`      | `string` | `'Back to top'`         | Text displayed on the button                    |
| `ariaLabel`       | `string` | `'Back to top of page'` | ARIA label for accessibility                    |
| `scrollThreshold` | `number` | `200`                   | Scroll distance in pixels before button appears |

## Implementation

The component automatically:

- Shows when user scrolls past the threshold
- Hides when user is at the top of the page
- Provides smooth scrolling animation
- Handles all accessibility requirements

## Styling

The component uses Scottish Government Design System CSS classes:

- `.ds_back-to-top` - Container class
- `.ds_back-to-top__button` - Button styling
- `.ds_back-to-top__icon` - Icon styling
- `.active` - Visibility state class

## Browser Support

Works in all modern browsers with smooth scrolling support. Falls back gracefully in older browsers.

## Accessibility

- Proper button semantics
- ARIA labels for screen readers
- Keyboard accessible (tab and enter)
- Icon hidden from screen readers
- Follows WCAG 2.1 guidelines
