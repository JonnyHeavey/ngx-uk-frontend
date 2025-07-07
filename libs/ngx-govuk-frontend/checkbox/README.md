# ngx-govuk-frontend/checkbox

## Overview

The checkbox component allows users to select one or more options by ticking a box. This is an Angular implementation of the [GOV.UK Design System Checkbox component](https://design-system.service.gov.uk/components/checkboxes/).

## Components

- `GovUKCheckboxComponent` - The main checkbox component

## Usage

```typescript
import { GovUKCheckboxComponent } from 'ngx-govuk-frontend/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  // ...
  imports: [
    GovUKCheckboxComponent,
    ReactiveFormsModule
  ]
})
```

### Basic example with Reactive Forms

```html
<form [formGroup]="myForm">
  <ngx-govuk-checkbox inputId="terms" label="I agree to the terms and conditions" formControlName="terms"> </ngx-govuk-checkbox>
</form>
```

```typescript
this.myForm = new FormGroup({
  terms: new FormControl(false),
});
```

### Multiple checkbox example

```html
<form [formGroup]="myForm">
  <div class="govuk-form-group">
    <fieldset class="govuk-fieldset">
      <legend class="govuk-fieldset__legend">Select your areas of interest</legend>
      <ngx-govuk-checkbox inputId="area1" label="Health" formControlName="health"> </ngx-govuk-checkbox>

      <ngx-govuk-checkbox inputId="area2" label="Education" formControlName="education"> </ngx-govuk-checkbox>

      <ngx-govuk-checkbox inputId="area3" label="Environment" formControlName="environment"> </ngx-govuk-checkbox>
    </fieldset>
  </div>
</form>
```
