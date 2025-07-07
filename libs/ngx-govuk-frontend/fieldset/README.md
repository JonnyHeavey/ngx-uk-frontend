# ngx-govuk-frontend/fieldset

## Overview

The fieldset component is used to group related form inputs. This is an Angular implementation of the [GOV.UK Design System Fieldset component](https://design-system.service.gov.uk/components/fieldset/).

## Components

- `GovUKFieldsetComponent` - The main fieldset component

## Usage

```typescript
import { GovUKFieldsetComponent } from 'ngx-govuk-frontend/fieldset';

@Component({
  // ...
  imports: [
    GovUKFieldsetComponent
  ]
})
```

### Basic example

```html
<ngx-govuk-fieldset legend="What is your address?">
  <div class="govuk-form-group">
    <label class="govuk-label" for="address-line-1">Address line 1</label>
    <input class="govuk-input" id="address-line-1" name="address-line-1" type="text" />
  </div>

  <div class="govuk-form-group">
    <label class="govuk-label" for="address-line-2">Address line 2 (optional)</label>
    <input class="govuk-input" id="address-line-2" name="address-line-2" type="text" />
  </div>

  <div class="govuk-form-group">
    <label class="govuk-label" for="address-town">Town or city</label>
    <input class="govuk-input govuk-!-width-two-thirds" id="address-town" name="address-town" type="text" />
  </div>

  <div class="govuk-form-group">
    <label class="govuk-label" for="address-postcode">Postcode</label>
    <input class="govuk-input govuk-input--width-10" id="address-postcode" name="address-postcode" type="text" />
  </div>
</ngx-govuk-fieldset>
```

### With different legend sizes

```html
<ngx-govuk-fieldset legend="What is your address?" legendIsPageHeading="true" [legendSize]="'l'">
  <!-- Form inputs here -->
</ngx-govuk-fieldset>
```

### With hint text

```html
<ngx-govuk-fieldset legend="What is your current address?" hint="This is the address where you currently live">
  <!-- Form inputs here -->
</ngx-govuk-fieldset>
```
