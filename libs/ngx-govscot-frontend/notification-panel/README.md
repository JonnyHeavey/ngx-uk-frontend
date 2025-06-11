# Scottish Government Notification Panel Component

A highlight block that shows the user important information after they have completed a task, such as a success message.

Based on the [Scottish Government Design System notification panel specification](https://designsystem.gov.scot/components/notification-panel).

## Installation

This component is part of the `@ngx-uk-frontend/ngx-govscot-frontend` library.

```bash
npm install @ngx-uk-frontend/ngx-govscot-frontend
```

## Usage

### Basic Usage

```typescript
import { GovScotNotificationPanelComponent } from '@ngx-uk-frontend/ngx-govscot-frontend/notification-panel';

@Component({
  selector: 'app-confirmation',
  imports: [GovScotNotificationPanelComponent],
  template: `
    <ngx-govscot-notification-panel title="Thank you">
      <p>Your application has been successfully submitted.</p>
    </ngx-govscot-notification-panel>
  `,
})
export class ConfirmationComponent {}
```

### With Reference Number

```html
<ngx-govscot-notification-panel title="Application complete">
  <p>Your reference number is <br /><strong class="beta">SG0123456</strong></p>
</ngx-govscot-notification-panel>
```

### Corporation Tax Example

```html
<ngx-govscot-notification-panel title="Corporation Tax registration submitted">
  <p>Your Corporation Tax registration has been successfully submitted.</p>
  <p>Your reference number is <strong>CT-2024-001234</strong></p>
</ngx-govscot-notification-panel>
```

### Payment Confirmation

```html
<ngx-govscot-notification-panel title="Payment successful">
  <p>Your payment of £150.00 has been processed successfully.</p>
  <p>Transaction ID: <strong>TXN-789456123</strong></p>
  <p>You will receive a confirmation email within 24 hours.</p>
</ngx-govscot-notification-panel>
```

## API

### Inputs

| Input   | Type     | Default    | Description                                        |
| ------- | -------- | ---------- | -------------------------------------------------- |
| `title` | `string` | _required_ | The title text displayed in the notification panel |

### Content Projection

The component supports content projection through `<ng-content>`. You can include any HTML content inside the notification panel, such as paragraphs, formatted text, and reference numbers.

## Design System Guidelines

### When to use this component

- To tell users when they complete a task they started, such as submitting a form
- On confirmation pages after successful task completion
- To display important completion information prominently

### When not to use this component

- If a page still has further actions a user can take
- When further form fields remain on the page after submitting changes
- For error messages or warnings (use appropriate error components instead)

### Placement and Usage Rules

- **Place at the top of the main content**, either as the page's main heading or immediately after it
- **Only use one notification panel per page**
- **Keep titles short** and high-level explanations of what has happened
- **Do not include buttons or links** in the notification panel's content
- **Use shorter words** to limit text wrapping on small devices

## Accessibility

The notification panel component is designed with accessibility in mind:

### Heading Structure

- Uses `<h1>` element for the title when used as the page's main heading
- If the page already has an H1 heading, use a different heading level for the notification panel's title
- The notification panel's title will look the same regardless of the heading level used

### Dynamic Content

- Add `role="alert"` to notification panels you add to the page dynamically
- This helps screen readers tell users about the change to the page

```html
<ngx-govscot-notification-panel title="Form saved" role="alert">
  <p>Your form has been automatically saved.</p>
</ngx-govscot-notification-panel>
```

### Semantic Structure

- Uses proper semantic HTML structure
- Maintains contrast ratios for accessibility
- Screen reader friendly content organization

## Design System Compliance

This component follows the Scottish Government Design System specifications:

- Uses the `ds_notification-panel` base class
- Implements `ds_notification-panel__title` for the heading
- Uses `ds_notification-panel__content` for the content area
- Follows the exact HTML structure from the design system examples
- Maintains consistent spacing and typography

## Examples

### Form Submission Confirmations

```html
<!-- Scholarship Application -->
<ngx-govscot-notification-panel title="Thank you">
  <p>Your Saltire Scholarship Application form has been successfully submitted.</p>
</ngx-govscot-notification-panel>

<!-- Business Licence -->
<ngx-govscot-notification-panel title="Business licence approved">
  <p>Your business licence application has been approved.</p>
  <p>Licence number: <strong>BL-2024-SCT-7891</strong></p>
  <p>Your licence is valid from today until 31 March 2025.</p>
</ngx-govscot-notification-panel>
```

### Government Services

```html
<!-- VAT Registration -->
<ngx-govscot-notification-panel title="VAT registration complete">
  <p>Your VAT registration has been completed successfully.</p>
  <p>VAT number: <strong>GB 123 4567 89</strong></p>
  <p>You can now charge VAT on your goods and services.</p>
</ngx-govscot-notification-panel>

<!-- Grant Application -->
<ngx-govscot-notification-panel title="Grant application submitted">
  <p>Your Small Business Support Grant application has been submitted.</p>
  <p>Application reference: <strong>SBSG-2024-0987</strong></p>
  <p>You will receive a decision within 28 working days.</p>
</ngx-govscot-notification-panel>
```

### Complex Information

```html
<!-- Permit Renewal -->
<ngx-govscot-notification-panel title="Permit renewed successfully">
  <p>Your environmental permit has been renewed.</p>
  <p>New permit number: <strong>EP-2024-REN-456</strong></p>
  <p>Valid until: <strong>15 December 2027</strong></p>
  <p>A confirmation letter will be posted to your registered address.</p>
</ngx-govscot-notification-panel>
```

## Architecture

This component extends the core `NotificationPanelDirective` from `@ngx-uk-frontend/core/notification-panel`, allowing for shared functionality between different design system implementations while maintaining design system-specific styling and behavior.

```typescript
// Core directive provides shared functionality
export class NotificationPanelDirective {
  readonly title = input.required<string>();
}

// Scottish Government implementation
export class GovScotNotificationPanelComponent extends NotificationPanelDirective {}
```

## Related Components

- [Phase Banner](../phase-banner/) - For showing development phase status
- [Warning Text](../warning-text/) - For important notices and warnings
- [Status Tag](../status-tag/) - For showing status information

## Resources

- [Scottish Government Design System - Notification Panel](https://designsystem.gov.scot/components/notification-panel)
- [Accessibility Guidelines](https://designsystem.gov.scot/guidance/accessibility/)
- [Content Guidelines](https://designsystem.gov.scot/guidance/content/)
