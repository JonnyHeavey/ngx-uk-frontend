# Scottish Government Design System Inset Text Component

This component implements the Scottish Government Design System inset text component for Angular applications. It distinguishes a block of text from the surrounding content using distinctive styling.

## Installation

```bash
npm install ngx-govscot-frontend
```

## Usage

Import the component in your Angular application:

```typescript
import { GovScotInsetTextComponent } from 'ngx-govscot-frontend/inset-text';
```

Use it in your templates:

```html
<ngx-govscot-inset-text> It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application. </ngx-govscot-inset-text>
```

## Implementation

This component provides a Scottish Government Design System-specific implementation with the appropriate CSS classes:

- `ds_inset-text` - Main container class
- `ds_inset-text__text` - Text content class

## Design System Reference

For more information about the Scottish Government Design System inset text component, visit:
https://designsystem.gov.scot/components/inset-text

## Accessibility

The component follows Scottish Government Design System accessibility guidelines and provides appropriate semantic markup for screen readers and other assistive technologies.
