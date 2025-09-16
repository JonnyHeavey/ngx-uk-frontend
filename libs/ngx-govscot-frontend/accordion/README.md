# Accordion (Scottish Government Design System)

This component implements the Scottish Government Design System accordion component. It is a list of collapsed content items where users can expand any item to view its contents.

## Usage

```typescript
import { GovScotAccordionComponent, GovScotAccordionItemComponent } from 'ngx-govscot-frontend/accordion';

@Component({
  template: `
    <ngx-govscot-accordion id="my-accordion" [(expandedItems)]="expandedItems">
      <ngx-govscot-accordion-item itemId="panel-1" heading="Healthcare for veterans">
        <p>Veterans are entitled to the same healthcare as any citizen. And there are <a href="#">health care options and support</a> available specifically for veterans.</p>
        <p>If you have a health condition that's related to your service, you're entitled to priority treatment based on clinical need.</p>
      </ngx-govscot-accordion-item>

      <ngx-govscot-accordion-item itemId="panel-2" heading="Employability for veterans">
        <p>If you're looking for a job, there are several organisations that can help you <a href="#">find a job or develop new skills</a>.</p>
      </ngx-govscot-accordion-item>

      <ngx-govscot-accordion-item itemId="panel-3" heading="Housing for veterans">
        <p>If you need <a href="#">help finding a place to live</a> there's support specifically for veterans.</p>
      </ngx-govscot-accordion-item>
    </ngx-govscot-accordion>
  `,
  imports: [GovScotAccordionComponent, GovScotAccordionItemComponent],
})
export class MyComponent {
  expandedItems: string[] = [];
}
```

## Design System Reference

This component is based on the [Scottish Government Design System accordion component](https://designsystem.gov.scot/components/accordion).

## Key Differences from GovUK Accordion

The Scottish Government accordion uses a **checkbox-based interaction model** instead of the button-based approach used by GOV.UK:

- Uses `input[type="checkbox"]` with labels for interaction
- Different CSS class structure (`ds_accordion`, `ds_accordion-item`, etc.)
- "Open all" / "Close all" functionality instead of "Show all" / "Hide all"

## Implementation

This component extends the core `AccordionDirective` from `@ngx-uk-frontend/core/accordion`, providing a Scottish Government Design System-specific implementation with the appropriate CSS classes:

- `.ds_accordion` - Main container
- `.ds_accordion-item` - Individual accordion items
- `.ds_accordion-item__header` - Item header container
- `.ds_accordion-item__title` - Item title/heading
- `.ds_accordion-item__body` - Item content container
- `.ds_accordion-item__control` - Hidden checkbox control
- `.ds_accordion-item__label` - Label for checkbox interaction
- `.ds_accordion-item__indicator` - Visual indicator (chevron/arrow)

## Component Inputs

### GovScotAccordionComponent

| Input             | Type       | Default      | Description                                    |
| ----------------- | ---------- | ------------ | ---------------------------------------------- |
| `id`              | `string`   | **Required** | Unique identifier for the accordion            |
| `initialExpanded` | `string[]` | `[]`         | IDs of items that should be expanded initially |
| `expandedItems`   | `string[]` | `[]`         | Two-way binding for currently expanded items   |

### GovScotAccordionItemComponent

| Input      | Type      | Default      | Description                               |
| ---------- | --------- | ------------ | ----------------------------------------- |
| `itemId`   | `string`  | **Required** | Unique identifier for the accordion item  |
| `heading`  | `string`  | **Required** | Text displayed in the item heading        |
| `summary`  | `string`  | `undefined`  | Optional summary text (not commonly used) |
| `expanded` | `boolean` | `false`      | Whether the item is expanded              |

## Features

- Fully accessible with proper ARIA attributes
- Checkbox-based interaction following Scottish Government patterns
- Supports content projection with `ng-content`
- Two-way binding for expanded state management
- "Open all" / "Close all" functionality
- Follows Scottish Government Design System guidelines
- Extends shared core functionality for consistency across design systems
