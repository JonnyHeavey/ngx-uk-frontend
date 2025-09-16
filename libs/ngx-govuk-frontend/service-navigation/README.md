# ngx-govuk-frontend/service-navigation

## Overview

The service navigation component provides a consistent way for users to navigate between different sections of a service. This is an Angular implementation of the [GOV.UK Design System Service Navigation component](https://design-system.service.gov.uk/components/service-navigation/).

## Components and Directives

- `GovUKServiceNavigationComponent` - The main service navigation container component
- `GovUKServiceNavigationItemDirective` - Applied to individual navigation items

## Usage

```typescript
import {
  GovUKServiceNavigationComponent,
  GovUKServiceNavigationItemDirective
} from 'ngx-govuk-frontend/service-navigation';
import { RouterModule } from '@angular/router';

@Component({
  // ...
  imports: [
    GovUKServiceNavigationComponent,
    GovUKServiceNavigationItemDirective,
    RouterModule
  ]
})
```

### Basic example

```html
<ngx-govuk-service-navigation>
  <ngx-govuk-service-navigaiton-item label="Your account" link="/account" />
  <ngx-govuk-service-navigaiton-item label="Your services" link="/services" />
  <ngx-govuk-service-navigaiton-item label="Sign out" link="/signout" />
</ngx-govuk-service-navigation>
```

### With RouterLink and active state

```html
<ngx-govuk-service-navigation>
  <ngx-govuk-service-navigaiton-item label="Your account" [link]="['/account']" />
  <ngx-govuk-service-navigaiton-item label="Your applications" [link]="['/applications']" />
  <ngx-govuk-service-navigaiton-item label="Sign out" [link]="['/signout']" />
</ngx-govuk-service-navigation>
```

The component automatically applies the active state to the current route using Angular's RouterLinkActive functionality.

## API Reference

### GovUKServiceNavigationItemDirective Inputs

| Name    | Type                | Required | Description                                                                           |
| ------- | ------------------- | -------- | ------------------------------------------------------------------------------------- |
| `label` | `string`            | Yes      | The text label for the navigation item                                                |
| `link`  | `string` or `any[]` | Yes      | The route to navigate to when the item is clicked. Compatible with Angular RouterLink |
