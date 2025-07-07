# ngx-govuk-frontend/cookie-banner

## Overview

The cookie banner component lets users know that your service uses cookies and allows them to accept or reject them. This is an Angular implementation of the [GOV.UK Design System Cookie Banner component](https://design-system.service.gov.uk/components/cookie-banner/).

## Components

- `GovUKCookieBannerComponent` - The main cookie banner component
- `GovUKCookieConfirmationComponent` - The confirmation message shown after users have accepted or rejected cookies

## Usage

```typescript
import {
  GovUKCookieBannerComponent,
  GovUKCookieConfirmationComponent
} from 'ngx-govuk-frontend/cookie-banner';

@Component({
  // ...
  imports: [
    GovUKCookieBannerComponent,
    GovUKCookieConfirmationComponent
  ]
})
```

### Basic cookie banner example

```html
<ngx-govuk-cookie-banner *ngIf="showCookieBanner" heading="Cookies on this service" text="We use cookies to make this service work and collect analytics information. To accept or reject cookies, turn on JavaScript in your browser settings or reload this page." (accept)="onAcceptCookies()" (reject)="onRejectCookies()"> </ngx-govuk-cookie-banner>
```

### Confirmation message example

```html
<ngx-govuk-cookie-confirmation *ngIf="showConfirmation" [confirmationType]="cookieConfirmationType" (hide)="hideConfirmation()"> </ngx-govuk-cookie-confirmation>
```

```typescript
import { Component } from '@angular/core';

@Component({
  // ...
})
export class MyComponent {
  showCookieBanner = true;
  showConfirmation = false;
  cookieConfirmationType: 'accepted' | 'rejected' = 'accepted';

  onAcceptCookies() {
    this.showCookieBanner = false;
    this.cookieConfirmationType = 'accepted';
    this.showConfirmation = true;
    // Add logic to set cookies
  }

  onRejectCookies() {
    this.showCookieBanner = false;
    this.cookieConfirmationType = 'rejected';
    this.showConfirmation = true;
    // Add logic to reject cookies
  }

  hideConfirmation() {
    this.showConfirmation = false;
  }
}
```
