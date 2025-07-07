# ngx-govuk-frontend/details

## Overview

The details component creates a disclosure widget that can be opened and closed by the user to reveal hidden content. This is an Angular implementation of the [GOV.UK Design System Details component](https://design-system.service.gov.uk/components/details/).

## Components

- `GovUKDetailsComponent` - The main details component

## Usage

```typescript
import { GovUKDetailsComponent } from 'ngx-govuk-frontend/details';

@Component({
  // ...
  imports: [
    GovUKDetailsComponent
  ]
})
```

### Basic example

```html
<ngx-govuk-details summary="Help with nationality">
  <p>If you're not sure about your nationality, try to find out from an official document like a passport or national ID card.</p>
  <p>We need to know your nationality so we can work out which elections you're entitled to vote in. If you can't provide your nationality, you'll have to send copies of identity documents through the post.</p>
</ngx-govuk-details>
```

### Using inputs

```html
<ngx-govuk-details [summary]="'Contact details'" [isOpen]="initiallyOpen">
  <address>
    123 Example Street<br />
    London<br />
    SW1A 1AA
  </address>
  <p>
    <strong>Phone:</strong> 020 7123 4567<br />
    <strong>Email:</strong> contact@example.gov.uk
  </p>
</ngx-govuk-details>
```

```typescript
@Component({
  // ...
})
export class MyComponent {
  initiallyOpen = false;
}
```
