# Scottish Government Design System - Tabs

**Experimental Component**

Tabs organise content and allow navigation across the page between sections of related content. They allow the user to view one section of content at a time.

This component is based on the [Scottish Government Design System tabs component](https://designsystem.gov.scot/components/tabs).

> **Note:** This component is currently experimental because it needs more research to validate it.

## Installation

```bash
npm install ngx-govscot-frontend
```

## Usage

Import the tabs components in your Angular application:

```typescript
import { GovScotTabsComponent, GovScotTabComponent } from 'ngx-govscot-frontend/tabs';

@Component({
  selector: 'app-example',
  imports: [GovScotTabsComponent, GovScotTabComponent],
  template: `
    <ngx-govscot-tabs title="Contents">
      <ngx-govscot-tab id="courses" title="Courses and funding">
        <h2>Search for training courses and funding</h2>
        <p>A wide range of training courses for your employees are available.</p>
      </ngx-govscot-tab>
      <ngx-govscot-tab id="apprenticeships" title="Choosing apprenticeships">
        <h2>Choosing an apprenticeship for your business</h2>
        <p>Apprenticeships can help you address skills gaps in your business.</p>
      </ngx-govscot-tab>
    </ngx-govscot-tabs>
  `,
})
export class ExampleComponent {}
```

## When to use this component

- Use tabs when you need to split content into distinct sections that users can navigate between
- When users need to see one specific section of content at a time
- When you want to organize related content under clear, succinct labels
- When content sections are of similar priority and length

## When not to use this component

- Don't use tabs if you use a top level navigation
- Avoid tabs if users need to compare content from multiple sections simultaneously
- Don't use tabs for sequential processes (use multi-page forms instead)
- Avoid if content sections vary greatly in length or importance

## Examples

### Basic tabs with multiple sections

```html
<ngx-govscot-tabs title="Corporation Tax Information">
  <ngx-govscot-tab id="overview" title="Overview">
    <h2>What is Corporation Tax?</h2>
    <p>Corporation Tax is charged on the 'chargeable profits' of limited companies...</p>
  </ngx-govscot-tab>
  <ngx-govscot-tab id="registration" title="Registration">
    <h2>Who must register?</h2>
    <p>You must register for Corporation Tax if your company is based in the UK...</p>
  </ngx-govscot-tab>
  <ngx-govscot-tab id="deadlines" title="Important deadlines">
    <h2>Key dates to remember</h2>
    <p>Make sure you're aware of these important Corporation Tax deadlines...</p>
  </ngx-govscot-tab>
</ngx-govscot-tabs>
```

### Two-way binding for active tab

```typescript
@Component({
  template: `
    <ngx-govscot-tabs title="Service Guide" [(activeTab)]="currentTab">
      <ngx-govscot-tab id="step1" title="Step 1">
        <p>First step content</p>
      </ngx-govscot-tab>
      <ngx-govscot-tab id="step2" title="Step 2">
        <p>Second step content</p>
      </ngx-govscot-tab>
    </ngx-govscot-tabs>

    <button (click)="currentTab = 1">Go to Step 2</button>
  `,
})
export class MyComponent {
  currentTab = 0; // Start with first tab active
}
```

### Complex content with rich formatting

```html
<ngx-govscot-tabs title="Business Support">
  <ngx-govscot-tab id="grants" title="Available grants">
    <h2>Funding opportunities</h2>
    <table>
      <thead>
        <tr>
          <th>Grant name</th>
          <th>Amount</th>
          <th>Eligibility</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Start-up Grant</td>
          <td>Up to £2,000</td>
          <td>New businesses</td>
        </tr>
      </tbody>
    </table>
  </ngx-govscot-tab>
  <ngx-govscot-tab id="advice" title="Business advice">
    <h2>Get expert guidance</h2>
    <ul>
      <li>One-to-one advice sessions</li>
      <li>Market research support</li>
      <li>Financial planning guidance</li>
    </ul>
  </ngx-govscot-tab>
</ngx-govscot-tabs>
```

## API

### GovScotTabsComponent

The main container component for tab navigation.

| Input       | Type     | Default  | Description                                        |
| ----------- | -------- | -------- | -------------------------------------------------- |
| `title`     | `string` | Required | The title displayed above the tabs navigation      |
| `activeTab` | `number` | `0`      | Two-way binding for the currently active tab index |

| Property | Type                            | Description                                    |
| -------- | ------------------------------- | ---------------------------------------------- |
| `tabs`   | `Signal<GovScotTabComponent[]>` | Collection of child tab components (read-only) |

| Method                    | Parameters                    | Description                            |
| ------------------------- | ----------------------------- | -------------------------------------- |
| `selectTab(index, event)` | `index: number, event: Event` | Programmatically select a tab by index |

### GovScotTabComponent

Individual tab content component.

| Input   | Type     | Default  | Description                                            |
| ------- | -------- | -------- | ------------------------------------------------------ |
| `id`    | `string` | Required | Unique identifier for the tab (used for accessibility) |
| `title` | `string` | Required | The text displayed in the tab navigation               |

| Property     | Type                   | Description                                         |
| ------------ | ---------------------- | --------------------------------------------------- |
| `tabContent` | `TemplateRef<unknown>` | Reference to the tab's content template (read-only) |

## Responsive Behavior

At smaller viewport widths, the tabs component transforms:

- Tab navigation becomes a vertical list of anchor links
- All content sections are displayed sequentially below the links
- Users can scroll through all content naturally
- This prevents horizontal scrolling and cramped tab buttons

This responsive behavior requires appropriate CSS and JavaScript to function correctly.

## Accessibility

The component implements proper accessibility features:

- Uses semantic roles: `tablist`, `tab`, and `tabpanel`
- Proper ARIA attributes including `aria-selected`, `aria-controls`, and `aria-labelledby`
- Keyboard navigation support (Tab, Arrow keys, Enter/Space)
- Hidden content panels use the `hidden` attribute
- Screen reader friendly structure with proper labeling

### Keyboard Navigation

- **Tab key:** Move focus through tab navigation and content
- **Arrow keys:** Navigate between tabs when focused on tab links
- **Enter/Space:** Activate the focused tab
- **Home/End:** Jump to first/last tab

## Design System Implementation

This component follows the Scottish Government Design System specifications:

- Uses `ds_tabs` CSS classes with appropriate modifiers
- Implements proper HTML structure with navigation and content panels
- Supports the `data-module="ds-tabs"` attribute for JavaScript enhancement
- Follows accessibility guidelines from W3C's WAI-ARIA Authoring Practices

## Tabs vs Accordions

Both tabs and accordions organize content into sections, but they work differently:

**Use tabs when:**

- Users need to switch quickly between sections
- Only one section should be visible at a time
- Content sections are of similar importance
- You have limited vertical space

**Use accordions when:**

- Users might need multiple sections open simultaneously
- Content sections vary in length or importance
- You don't need all sections visible on page load
- You have more vertical space available

## Related Components

- [Accordion](../accordion/) - Alternative for collapsible content sections
- [Breadcrumbs](../breadcrumbs/) - For showing page hierarchy
- [Details](../details/) - For simple collapsible content

## Browser Support

The tabs component requires JavaScript for full functionality. Without JavaScript:

- The component falls back to showing all content sections
- Tab navigation becomes a simple list of anchor links
- All content remains accessible and functional
