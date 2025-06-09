# Inset Text (Scottish Government Design System)

This component implements the Scottish Government Design System inset text component. It is used to highlight a block of text from the content that surrounds it, for example, a quote or something added to the main content.

## Usage

```typescript
import { GovScotInsetTextComponent } from 'ngx-govscot-frontend/inset-text';

@Component({
  template: ` <ngx-govscot-inset-text> You may be able to <a href="#">apply for free school meals</a> at the same time as you apply for the clothing grant. </ngx-govscot-inset-text> `,
  imports: [GovScotInsetTextComponent],
})
export class MyComponent {}
```

## Design System Reference

This component is based on the [Scottish Government Design System inset text component](https://designsystem.gov.scot/components/inset-text).

## Implementation

This component extends the core `InsetTextDirective` from `@ngx-uk-frontend/core/inset-text`, providing a Scottish Government Design System-specific implementation with the appropriate CSS classes:

- `.ds_inset-text` - Main container
- `.ds_inset-text__text` - Text content wrapper

## Features

- Fully accessible
- Supports content projection with `ng-content`
- Follows Scottish Government Design System guidelines
- Extends shared core functionality
