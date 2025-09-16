# Scottish Government Status Tag Component

A status tag component implementing the Scottish Government Design System specifications for displaying the status of content, processes, or applications.

## Installation

This component is part of the `@ngx-uk-frontend/ngx-govscot-frontend` library.

```bash
npm install @ngx-uk-frontend/ngx-govscot-frontend
```

## Usage

### Basic Usage

```typescript
import { GovScotStatusTagComponent } from '@ngx-uk-frontend/ngx-govscot-frontend/status-tag';

@Component({
  selector: 'app-example',
  imports: [GovScotStatusTagComponent],
  template: ` <ngx-govscot-status-tag>Active</ngx-govscot-status-tag> `,
})
export class ExampleComponent {}
```

### With Color Variants

```html
<ngx-govscot-status-tag color="green">Complete</ngx-govscot-status-tag>
<ngx-govscot-status-tag color="orange">In progress</ngx-govscot-status-tag>
<ngx-govscot-status-tag color="red">Failed</ngx-govscot-status-tag>
<ngx-govscot-status-tag color="grey">Not started</ngx-govscot-status-tag>
```

### Task List Example

```html
<div class="task-list">
  <div class="task-item">
    <span>1. Check eligibility</span>
    <ngx-govscot-status-tag color="green">Complete</ngx-govscot-status-tag>
  </div>
  <div class="task-item">
    <span>2. Submit application</span>
    <ngx-govscot-status-tag color="blue">In progress</ngx-govscot-status-tag>
  </div>
  <div class="task-item">
    <span>3. Await approval</span>
    <ngx-govscot-status-tag color="grey">Not started</ngx-govscot-status-tag>
  </div>
</div>
```

## API

### Inputs

| Input          | Type                    | Default  | Description                         |
| -------------- | ----------------------- | -------- | ----------------------------------- |
| `color`        | `GovScotStatusTagColor` | `'blue'` | The color variant of the status tag |
| `extraClasses` | `string`                | `''`     | Additional CSS classes to apply     |

### Color Options

The component supports the following color variants based on the Scottish Government Design System:

- `grey` - For neutral or inactive states
- `green` - For positive states (complete, approved, active)
- `teal` - For informational states
- `blue` - Default color for general statuses
- `purple` - For special categories
- `pink` - For highlighted items
- `red` - For negative states (error, rejected, failed)
- `orange` - For warning states (pending, maintenance)
- `yellow` - For attention-required states

## Accessibility

The status tag component is designed with accessibility in mind:

- Uses semantic `<span>` elements
- Maintains proper color contrast ratios (4.5:1)
- Does not rely on color alone to convey meaning - always includes descriptive text
- Includes border styling to ensure visibility against various backgrounds

## Design System Compliance

This component follows the Scottish Government Design System specifications:

- Uses the `ds_tag` base class
- Implements color modifiers (`ds_tag--{color}`)
- Maintains consistent spacing and typography
- Follows accessibility guidelines

## When to Use

Use status tags to:

- Show the status of something that can have multiple states
- Indicate progress in task lists or multi-step processes
- Display application or service statuses
- Highlight important information that requires user attention
- Show phase information (alpha, beta) in phase banners

## When Not to Use

Do not use status tags for:

- Interactive elements (use buttons or links instead)
- Decorative purposes without semantic meaning
- As the sole indicator of status (always include descriptive text)

## Examples

### Application Status Table

```html
<table>
  <tr>
    <td>Planning Application</td>
    <td>PA-2024-001</td>
    <td><ngx-govscot-status-tag color="green">Approved</ngx-govscot-status-tag></td>
  </tr>
  <tr>
    <td>Business Licence</td>
    <td>BL-2024-005</td>
    <td><ngx-govscot-status-tag color="orange">Under review</ngx-govscot-status-tag></td>
  </tr>
</table>
```

### Service Status Dashboard

```html
<div class="service-status">
  <div class="service-item">
    <h3>Tax Portal</h3>
    <ngx-govscot-status-tag color="green">Operational</ngx-govscot-status-tag>
  </div>
  <div class="service-item">
    <h3>Benefits System</h3>
    <ngx-govscot-status-tag color="red">Outage</ngx-govscot-status-tag>
  </div>
</div>
```

## Related Components

- [Phase Banner](../phase-banner/) - For showing development phase status
- [Warning Text](../warning-text/) - For important notices
- [Inset Text](../inset-text/) - For highlighted content

## Resources

- [Scottish Government Design System - Status Tag](https://designsystem.gov.scot/components/status-tag)
- [Accessibility Guidelines](https://designsystem.gov.scot/guidance/accessibility/)
- [Color Guidance](https://designsystem.gov.scot/styles/colour/)
