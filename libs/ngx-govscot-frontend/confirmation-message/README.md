# Confirmation Message

The confirmation message component tells a user they've successfully completed an action when filling out a form.

This component follows the [Scottish Government Design System](https://designsystem.gov.scot/components/confirmation-message).

## Installation

```bash
npm install ngx-govscot-frontend
```

## Usage

### Import

```typescript
import { GovScotConfirmationMessageComponent } from 'ngx-govscot-frontend/confirmation-message';

@Component({
  imports: [GovScotConfirmationMessageComponent],
  // ...
})
```

### Basic Example

```html
<ngx-govscot-confirmation-message title="Landlord added successfully" />
```

### With Body Text

```html
<ngx-govscot-confirmation-message title="Application saved" body="You have successfully saved your application. You can continue editing it later." />
```

## API

### Inputs

| Name    | Type             | Default | Description                                          |
| ------- | ---------------- | ------- | ---------------------------------------------------- |
| `title` | `string`         | `''`    | The title/heading of the confirmation message        |
| `body`  | `string \| null` | `null`  | Optional body text to provide additional information |

## Accessibility

- Uses `aria-live="polite"` to announce the confirmation to screen readers
- The check circle icon is marked with `aria-hidden="true"` as it's purely decorative
- Proper semantic structure with heading and paragraph elements

## Scottish Government Design System

This component implements the confirmation message pattern from the Scottish Government Design System. For detailed design guidance, see the [official documentation](https://designsystem.gov.scot/components/confirmation-message).

## Examples

### Basic Confirmation

```html
<ngx-govscot-confirmation-message title="Form submitted successfully" />
```

### With Additional Information

```html
<ngx-govscot-confirmation-message title="Information updated" body="You have successfully updated your contact details." />
```

### After Form Submission

```html
<ngx-govscot-confirmation-message title="Application submitted" body="Your reference number is ABC123. We'll send you an email confirmation shortly." />
```
