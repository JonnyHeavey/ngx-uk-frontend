# ngx-govuk-frontend/radio

## Overview

The radio component lets users select a single option from a list. This is an Angular implementation of the [GOV.UK Design System Radio component](https://design-system.service.gov.uk/components/radios/).

## Components and Directives

- `GovUKRadioGroupComponent` - The main container component for a group of radio buttons
- `GovUKRadioOptionDirective` - Applied to individual radio options

## Usage

```typescript
import {
  GovUKRadioGroupComponent,
  GovUKRadioOptionDirective
} from 'ngx-govuk-frontend/radio';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  // ...
  imports: [
    GovUKRadioGroupComponent,
    GovUKRadioOptionDirective,
    ReactiveFormsModule
  ]
})
```

### Basic example

```html
<form [formGroup]="form">
  <div class="govuk-form-group">
    <fieldset class="govuk-fieldset">
      <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
        <h1 class="govuk-fieldset__heading">Where do you live?</h1>
      </legend>

      <ngx-govuk-radio-group formControlName="location">
        <ngx-govuk-radio-option value="england" label="England" />
        <ngx-govuk-radio-option value="scotland" label="Scotland" />
        <ngx-govuk-radio-option value="wales" label="Wales" />
        <ngx-govuk-radio-option value="northern-ireland" label="Northern Ireland" />
      </ngx-govuk-radio-group>
    </fieldset>
  </div>
</form>
```

### With hints and dividers

```html
<ngx-govuk-radio-group formControlName="contactPreference">
  <ngx-govuk-radio-option value="email" label="Email" hint="We'll only use this for this application" />
  <ngx-govuk-radio-option value="phone" label="Phone" hint="We'll only call during business hours" />
  <ngx-govuk-radio-option value="none" label="I don't want to be contacted" isDivided="true" />
</ngx-govuk-radio-group>
```

### Inline or small radio options

```html
<ngx-govuk-radio-group formControlName="yesNo" inline="true">
  <ngx-govuk-radio-option value="yes" label="Yes" />
  <ngx-govuk-radio-option value="no" label="No" />
</ngx-govuk-radio-group>

<ngx-govuk-radio-group formControlName="consent" small="true">
  <ngx-govuk-radio-option value="yes" label="Yes" />
  <ngx-govuk-radio-option value="no" label="No" />
</ngx-govuk-radio-group>
```

## API Reference

### GovUKRadioGroupComponent Inputs

| Name     | Type      | Default | Description                                           |
| -------- | --------- | ------- | ----------------------------------------------------- |
| `small`  | `boolean` | `false` | Makes the radio buttons smaller than the default size |
| `inline` | `boolean` | `false` | Displays the radio buttons in a horizontal line       |

### GovUKRadioOptionDirective Inputs

| Name        | Type      | Required | Description                                                             |
| ----------- | --------- | -------- | ----------------------------------------------------------------------- |
| `value`     | `string`  | Yes      | The value of the radio option                                           |
| `label`     | `string`  | Yes      | The text label for the radio option                                     |
| `hint`      | `string`  | No       | Optional hint text to provide additional information                    |
| `isDivided` | `boolean` | No       | When true, adds a divider before this option (typically with "Or" text) |
