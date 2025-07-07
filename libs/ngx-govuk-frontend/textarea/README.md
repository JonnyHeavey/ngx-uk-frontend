# ngx-govuk-frontend/textarea

## Overview

The textarea component allows users to enter multiple lines of text. This is an Angular implementation of the [GOV.UK Design System Textarea component](https://design-system.service.gov.uk/components/textarea/).

## Components

- `GovUKTextareaComponent` - The main textarea component

## Usage

```typescript
import { GovUKTextareaComponent } from 'ngx-govuk-frontend/textarea';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  // ...
  imports: [
    GovUKTextareaComponent,
    ReactiveFormsModule
  ]
})
```

### Basic example

```html
<form [formGroup]="form">
  <div class="govuk-form-group">
    <label class="govuk-label" for="more-detail"> Can you provide more detail? </label>
    <div class="govuk-hint">Do not include personal or financial information.</div>
    <ngx-govuk-textarea formControlName="moreDetail" inputId="more-detail" [rows]="5"> </ngx-govuk-textarea>
  </div>
</form>
```

### With character count

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="feedback"> How did you feel about the service you received today? </label>
  <ngx-govuk-textarea formControlName="feedback" inputId="feedback" [rows]="4" [maxLength]="200" [showCharacterCount]="true"> </ngx-govuk-textarea>
</div>
```

### With error handling

```html
<div class="govuk-form-group" [class.govuk-form-group--error]="hasError()">
  <label class="govuk-label" for="description"> Description </label>
  <div *ngIf="hasError()" class="govuk-error-message"><span class="govuk-visually-hidden">Error:</span> Enter a description</div>
  <ngx-govuk-textarea formControlName="description" inputId="description" [rows]="3"> </ngx-govuk-textarea>
</div>
```

```typescript
hasError(): boolean {
  const control = this.form.get('description');
  return control?.invalid && control?.touched;
}
```

## API Reference

### Inputs

| Name                 | Type               | Default | Description                                      |
| -------------------- | ------------------ | ------- | ------------------------------------------------ |
| `inputId`            | `string`           | -       | Required. The ID attribute for the input element |
| `rows`               | `number`           | `2`     | Number of visible text rows for the textarea     |
| `maxLength`          | `number` or `null` | `null`  | Maximum number of characters allowed             |
| `showCharacterCount` | `boolean`          | `false` | Whether to show the character count              |
| `autocomplete`       | `string`           | -       | HTML autocomplete attribute value                |
| `extraClasses`       | `string`           | -       | Additional CSS classes to apply to the textarea  |
