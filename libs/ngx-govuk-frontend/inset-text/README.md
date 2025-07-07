# ngx-govuk-frontend/inset-text

## Overview

The inset text component provides a way to visually distinguish certain text from the content that surrounds it. It's typically used for quotes, examples, or additional information that supplement the main content. This is an Angular implementation of the [GOV.UK Design System Inset Text component](https://design-system.service.gov.uk/components/inset-text/).

## Components

- `GovUKInsetTextComponent` - The main inset text component

## Usage

```typescript
import { GovUKInsetTextComponent } from 'ngx-govuk-frontend/inset-text';

@Component({
  // ...
  imports: [
    GovUKInsetTextComponent
  ]
})
```

### Basic example

```html
<ngx-govuk-inset-text> You may be eligible for additional benefits if you have children. </ngx-govuk-inset-text>
```

### With multiple paragraphs

```html
<ngx-govuk-inset-text>
  <p>This application process takes around 20 minutes.</p>
  <p>You will need your National Insurance number and bank details.</p>
</ngx-govuk-inset-text>
```

### Usage within other components

```html
<div class="govuk-form-group">
  <h2 class="govuk-heading-m">Application notes</h2>

  <ngx-govuk-inset-text> It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application. </ngx-govuk-inset-text>

  <p>Please ensure all information provided is accurate.</p>
</div>
```
