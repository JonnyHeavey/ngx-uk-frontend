# Scottish Government Design System - Sequential Navigation

Sequential navigation helps users navigate through a series of pages in a logical order. It provides previous and next links to help users understand where they are in a sequence and move between related content.

This component is based on the [Scottish Government Design System sequential navigation component](https://designsystem.gov.scot/components/sequential-navigation).

## Installation

```bash
npm install ngx-govscot-frontend
```

## Usage

Import the sequential navigation component in your Angular application:

```typescript
import { GovScotSequentialNavigationComponent, SequentialNavigationItem } from 'ngx-govscot-frontend/sequential-navigation';

@Component({
  selector: 'app-example',
  imports: [GovScotSequentialNavigationComponent],
  template: ` <ngx-govscot-sequential-navigation [previous]="previousItem" [next]="nextItem" /> `,
})
export class ExampleComponent {
  previousItem: SequentialNavigationItem = {
    text: 'Apply for or renew a Blue Badge',
    link: '/blue-badge/apply',
  };

  nextItem: SequentialNavigationItem = {
    text: 'Eligibility: who can have one?',
    link: '/blue-badge/eligibility',
  };
}
```

## When to use this component

- Use sequential navigation when content is part of a logical sequence
- Use when users need to move through pages in a specific order
- Use to help users understand their position in a multi-page journey

## When not to use this component

- Don't use for general site navigation
- Don't use when pages don't have a logical sequence
- Don't use if it competes with other navigation elements

## Examples

### Basic sequential navigation

```html
<ngx-govscot-sequential-navigation [previous]="previousItem" [next]="nextItem" />
```

```typescript
previousItem: SequentialNavigationItem = {
  text: 'Apply for or renew a Blue Badge',
  link: '/blue-badge/apply',
};

nextItem: SequentialNavigationItem = {
  text: 'Eligibility: who can have one?',
  link: '/blue-badge/eligibility',
};
```

### Previous only

```html
<ngx-govscot-sequential-navigation [previous]="previousItem" />
```

### Next only

```html
<ngx-govscot-sequential-navigation [next]="nextItem" />
```

### With custom aria label

```html
<ngx-govscot-sequential-navigation [previous]="previousItem" [next]="nextItem" ariaLabel="Guide navigation" />
```

### With custom CSS classes

```html
<ngx-govscot-sequential-navigation [previous]="previousItem" [next]="nextItem" classes="custom-navigation" />
```

### Using array-based routing

```typescript
previousItem: SequentialNavigationItem = {
  text: 'Previous section',
  link: ['/guide', 'section-1'],
};

nextItem: SequentialNavigationItem = {
  text: 'Next section',
  link: ['/guide', 'section-3'],
};
```

## API

### GovScotSequentialNavigationComponent

| Property    | Type                       | Description                                      | Default                |
| ----------- | -------------------------- | ------------------------------------------------ | ---------------------- |
| `previous`  | `SequentialNavigationItem` | Previous navigation item with text and link      | `undefined`            |
| `next`      | `SequentialNavigationItem` | Next navigation item with text and link          | `undefined`            |
| `ariaLabel` | `string`                   | ARIA label for the navigation element            | `'Article navigation'` |
| `classes`   | `string`                   | Additional CSS classes to apply to the component | `''`                   |

### SequentialNavigationItem

| Property | Type                       | Description                                                  |
| -------- | -------------------------- | ------------------------------------------------------------ |
| `text`   | `string`                   | The display text for the navigation item                     |
| `link`   | `RouterLink['routerLink']` | The link/route for the navigation item (string, array, etc.) |

## Accessibility

- The component uses semantic `<nav>` element with appropriate ARIA labeling
- Navigation links use `data-label` attributes for "previous" and "next" identification
- The component supports custom ARIA labels for different contexts
- All interactive elements are keyboard accessible through standard browser navigation

## Styling

The component uses Scottish Government Design System CSS classes:

- `.ds_sequential-nav` - Main navigation container
- `.ds_sequential-nav__item` - Individual navigation item container
- `.ds_sequential-nav__item--prev` - Previous item modifier
- `.ds_sequential-nav__item--next` - Next item modifier
- `.ds_sequential-nav__button` - Navigation link styling
- `.ds_sequential-nav__button--left` - Previous button modifier
- `.ds_sequential-nav__button--right` - Next button modifier
- `.ds_sequential-nav__text` - Navigation item text with `data-label` attribute

## Analytics

The component includes `data-label` attributes on navigation text elements for tracking purposes:

- Previous links have `data-label="previous"`
- Next links have `data-label="next"`

This follows the Scottish Government Design System specification for website analytics tracking.

## Behaviour

- If it's the first page of content, the 'previous' button will not show
- If it's the last page, the 'next' button will not show
- On mobile, the 'next' button displays stacked above the 'previous' button
- Buttons include `data-label` attributes for analytics tracking
- Click events are prevented from default behavior and emit custom events
- Navigation is handled programmatically through event handlers

## Accessibility

The component uses semantic HTML with:

- `<nav>` element with appropriate `aria-label`
- `<button>` elements with proper type attributes
- Data attributes for analytics and screen reader support
- Keyboard navigation support through native button behavior

## CSS Classes

The component applies these CSS classes from the Scottish Government Design System:

- `.ds_sequential-nav` - Main navigation container
- `.ds_sequential-nav__item` - Individual navigation item container
- `.ds_sequential-nav__item--prev` - Previous navigation item
- `.ds_sequential-nav__item--next` - Next navigation item
- `.ds_sequential-nav__button` - Navigation button
- `.ds_sequential-nav__button--left` - Previous navigation button
- `.ds_sequential-nav__button--right` - Next navigation button
- `.ds_sequential-nav__text` - Navigation button text

## Analytics

The component includes `data-label` attributes on navigation text elements:

- Previous buttons have `data-label="previous"`
- Next buttons have `data-label="next"`

This allows tracking of user navigation patterns through sequential content.

## Event Handling

The component emits custom events instead of using direct URL navigation:

- `previousClick` - Emitted when the previous button is clicked
- `nextClick` - Emitted when the next button is clicked

This approach provides better control over navigation behavior and allows for:

- Validation before navigation
- State management integration
- Custom routing logic
- Analytics tracking
- Loading states and error handling

## Related Components

- Pagination - Use for navigating through search results or large datasets
- Breadcrumbs - Use for showing current location in site hierarchy
- Back Link - Use for simple back navigation

## Evidence

Analytics shows sequential navigation used by users across mygov.scot and gov.scot. It's used more on mobile devices, where it is more prominent than other forms of navigation.
