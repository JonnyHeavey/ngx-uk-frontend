# ngx-govuk-frontend/notification-banner

## Overview

The notification banner component provides a way to display important information or updates that users need to know about. This is an Angular implementation of the [GOV.UK Design System Notification Banner component](https://design-system.service.gov.uk/components/notification-banner/).

## Components

- `GovUKNotificationBannerComponent` - The main notification banner component

## Usage

```typescript
import { GovUKNotificationBannerComponent } from 'ngx-govuk-frontend/notification-banner';

@Component({
  // ...
  imports: [
    GovUKNotificationBannerComponent
  ]
})
```

### Basic example

```html
<ngx-govuk-notification-banner title="Important">
  <p class="govuk-notification-banner__heading">The tax year 2023 to 2024 has ended. The deadline for tax returns is 31 January 2025.</p>
</ngx-govuk-notification-banner>
```

### With links

```html
<ngx-govuk-notification-banner title="Important">
  <p class="govuk-notification-banner__heading">
    You have 7 days left to send your application.
    <a class="govuk-notification-banner__link" href="#">View application</a>.
  </p>
</ngx-govuk-notification-banner>
```

### With multiple paragraphs

```html
<ngx-govuk-notification-banner title="Success">
  <h3 class="govuk-notification-banner__heading">Application complete</h3>
  <p>Your reference number is <strong>HDJ2123F</strong>.</p>
  <p>We have sent you a confirmation email.</p>
  <p>
    <a class="govuk-notification-banner__link" href="#"> Download a copy of your application </a>
  </p>
</ngx-govuk-notification-banner>
```

## API Reference

### Inputs

| Name    | Type     | Description                                     |
| ------- | -------- | ----------------------------------------------- |
| `title` | `string` | Required. The title of the notification banner. |
