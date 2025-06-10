# Warning Text Component

The warning text component puts a clear notice in a page to tell users about something important. This could be an action they need to take, or something they need to know.

## Scottish Government Design System

This component follows the [Scottish Government Design System Warning Text component](https://designsystem.gov.scot/components/warning-text).

## Usage

### Import

```typescript
import { Component } from '@angular/core';
import { GovScotWarningTextComponent } from 'ngx-govscot-frontend/warning-text';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [GovScotWarningTextComponent],
  template: ` <ngx-govscot-warning-text> Call 999 if you or someone else is in immediate danger, or if the crime is in progress. </ngx-govscot-warning-text> `,
})
export class ExampleComponent {}
```

### Examples

```html
<!-- Emergency warning -->
<ngx-govscot-warning-text> Call 999 if you or someone else is in immediate danger, or if the crime is in progress. </ngx-govscot-warning-text>

<!-- Age requirement -->
<ngx-govscot-warning-text> You must be 18 or over to apply. </ngx-govscot-warning-text>

<!-- Deadline warning -->
<ngx-govscot-warning-text> You must submit your application by 5pm on 31 December 2024. </ngx-govscot-warning-text>

<!-- Legal requirement -->
<ngx-govscot-warning-text> It's an offence not to register an air weapon. You could be fined up to £1,000. </ngx-govscot-warning-text>
```

## Design System Guidelines

### When to Use

Use the warning text component when you need to warn users about something important. This includes:

- **Legal requirements** - Actions required by law
- **Consequences** - What happens if users don't do something
- **Deadlines** - Time-sensitive actions
- **Eligibility** - Requirements users must meet
- **Safety** - Important safety information

### Writing Guidelines

- Keep warning text concise and specific
- Tell users exactly what they need to know or do
- Use clear, plain language
- Focus on the most important information
- Explain consequences where relevant

### Accessibility

The component includes:

- A visually hidden "Warning" label for screen readers
- Proper semantic markup with `strong` elements
- An icon with `aria-hidden="true"` to avoid duplication for screen readers

## Technical Implementation

The component follows the Scottish Government Design System HTML structure:

- Uses `ds_warning-text` CSS classes
- Includes a warning icon element
- Provides content projection for custom warning messages
- Maintains accessibility with proper ARIA attributes

This component is based on the GDS warning text component but adapted for the Scottish Government Design System specifications.
