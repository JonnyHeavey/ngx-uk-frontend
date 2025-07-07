# ngx-govuk-frontend/warning-text

## Overview

The warning text component helps make users aware of important information that could affect their application or journey. This is an Angular implementation of the [GOV.UK Design System Warning Text component](https://design-system.service.gov.uk/components/warning-text/).

## Components

- `GovUKWarningTextComponent` - The main warning text component

## Usage

```typescript
import { GovUKWarningTextComponent } from 'ngx-govuk-frontend/warning-text';

@Component({
  // ...
  imports: [
    GovUKWarningTextComponent
  ]
})
```

### Basic example

```html
<ngx-govuk-warning-text> You can be fined up to £5,000 if you don't register. </ngx-govuk-warning-text>
```

### With formatted content

```html
<ngx-govuk-warning-text> You must provide <strong>certified translations</strong> for any documents that are not in English or Welsh. </ngx-govuk-warning-text>
```

### Within a form

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend">Will you be disclosing any convictions?</legend>

    <ngx-govuk-warning-text> You do not need to disclose spent convictions unless specifically asked to do so. </ngx-govuk-warning-text>

    <!-- Form controls here -->
  </fieldset>
</div>
```

## Accessibility considerations

- The warning text component includes a hidden "Warning" text for screen readers
- The exclamation mark icon is hidden from screen readers using `aria-hidden="true"`
- Ensure warning messages are clear, concise, and explain what the user needs to do
