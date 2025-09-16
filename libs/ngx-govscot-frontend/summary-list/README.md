# Summary List Component

This library provides Angular components for displaying summary lists using the Scottish Government Design System.

## Summary List

A summary list displays information as a list of key/value pairs with optional actions. It is typically used to summarize information that a user has provided, for example, at the end of a form.

## Installation

This component is part of the `ngx-govscot-frontend` library. To use it, import the components you need:

```typescript
import { GovScotSummaryListComponent, GovScotSummaryListItemComponent, GovScotSummaryListActionsComponent, GovScotSummaryListActionComponent, GovScotSummaryListValueDirective, GovScotSummaryListCardComponent, GovScotSummaryListCardActionsComponent } from 'ngx-govscot-frontend/summary-list';
```

## Basic Usage

### Simple Summary List

```html
<ngx-govscot-summary-list>
  <ngx-govscot-summary-list-item key="Name" value="Jane Smith">
    <ngx-govscot-summary-list-actions>
      <ngx-govscot-summary-list-action href="/change-name"> Change </ngx-govscot-summary-list-action>
    </ngx-govscot-summary-list-actions>
  </ngx-govscot-summary-list-item>
  <ngx-govscot-summary-list-item key="Date of birth" value="13 April 2001">
    <ngx-govscot-summary-list-actions>
      <ngx-govscot-summary-list-action href="/change-dob"> Change </ngx-govscot-summary-list-action>
    </ngx-govscot-summary-list-actions>
  </ngx-govscot-summary-list-item>
</ngx-govscot-summary-list>
```

### Summary List Without Borders

```html
<ngx-govscot-summary-list [noBorder]="true">
  <ngx-govscot-summary-list-item key="Question 1" value="Answer 1" />
  <ngx-govscot-summary-list-item key="Question 2" value="Answer 2" />
</ngx-govscot-summary-list>
```

### Complex Values

For complex HTML content in values, use the value directive:

```html
<ngx-govscot-summary-list>
  <ngx-govscot-summary-list-item key="Address">
    <div ngxGovScotSummaryListValue>
      Scottish Government<br />
      St Andrew's House<br />
      Regent Road<br />
      Edinburgh<br />
      EH1 3DG
    </div>
  </ngx-govscot-summary-list-item>
</ngx-govscot-summary-list>
```

### Multiple Actions

```html
<ngx-govscot-summary-list>
  <ngx-govscot-summary-list-item key="Contact details">
    <div ngxGovScotSummaryListValue>
      <ul class="ds_no-bullets">
        <li>email&#64;gov.scot</li>
        <li>0123 456 7000</li>
      </ul>
    </div>
    <ngx-govscot-summary-list-actions>
      <ngx-govscot-summary-list-action href="/add-contact"> Add </ngx-govscot-summary-list-action>
      <ngx-govscot-summary-list-action href="/change-contact"> Change </ngx-govscot-summary-list-action>
    </ngx-govscot-summary-list-actions>
  </ngx-govscot-summary-list-item>
</ngx-govscot-summary-list>
```

### Summary Cards

Summary cards group related summary lists together:

```html
<ngx-govscot-summary-list-card title="Joe Bloggs">
  <ngx-govscot-summary-list-card-actions>
    <ngx-govscot-summary-list-action href="/change-joe"> Change </ngx-govscot-summary-list-action>
    <ngx-govscot-summary-list-action href="/delete-joe"> Delete </ngx-govscot-summary-list-action>
  </ngx-govscot-summary-list-card-actions>
  <ngx-govscot-summary-list>
    <ngx-govscot-summary-list-item key="Phone number" value="01234 567 890" />
    <ngx-govscot-summary-list-item key="Address">
      <div ngxGovScotSummaryListValue>
        Victoria Quay<br />
        Edinburgh<br />
        EH6 6QQ
      </div>
    </ngx-govscot-summary-list-item>
  </ngx-govscot-summary-list>
</ngx-govscot-summary-list-card>
```

## API Reference

### GovScotSummaryListComponent

| Input      | Type      | Default | Description                       |
| ---------- | --------- | ------- | --------------------------------- |
| `noBorder` | `boolean` | `false` | Whether to render without borders |

### GovScotSummaryListItemComponent

| Input   | Type     | Default | Description                  |
| ------- | -------- | ------- | ---------------------------- |
| `key`   | `string` | -       | The key/label for the item   |
| `value` | `string` | `''`    | Simple text value (optional) |

### GovScotSummaryListActionComponent

| Input                | Type     | Default | Description                    |
| -------------------- | -------- | ------- | ------------------------------ |
| `href`               | `string` | -       | URL for the action link        |
| `routerLink`         | `string` | -       | Angular router link            |
| `visuallyHiddenText` | `string` | -       | Hidden text for screen readers |

### GovScotSummaryListCardComponent

| Input   | Type     | Default | Description    |
| ------- | -------- | ------- | -------------- |
| `title` | `string` | -       | The card title |

## Accessibility

- Action buttons include appropriate ARIA attributes for screen reader users
- The component follows Scottish Government Design System accessibility guidelines
- Use `visuallyHiddenText` to provide additional context for screen readers

## Design System Reference

This component implements the Scottish Government Design System summary list component:
https://designsystem.gov.scot/components/summary-list/
