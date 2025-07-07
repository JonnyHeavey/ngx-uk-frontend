# ngx-govuk-frontend/header

## Overview

The header component helps users identify what service they are using and navigate between pages. This is an Angular implementation of the [GOV.UK Design System Header component](https://design-system.service.gov.uk/components/header/).

## Components

- `GovUKHeaderComponent` - The main header component

## Usage

```typescript
import { GovUKHeaderComponent } from 'ngx-govuk-frontend/header';

@Component({
  // ...
  imports: [
    GovUKHeaderComponent
  ]
})
```

### Basic example

```html
<ngx-govuk-header logoLink="/">
  <!-- Content automatically includes the GOV.UK logo -->
</ngx-govuk-header>
```

### With service name

```html
<ngx-govuk-header logoLink="/" appName="My Service Name"> </ngx-govuk-header>
```

### With service name and link

```html
<ngx-govuk-header logoLink="/" appName="My Service Name" appLink="/dashboard"> </ngx-govuk-header>
```

## API Reference

### Inputs

| Name       | Type     | Description                                                                           |
| ---------- | -------- | ------------------------------------------------------------------------------------- |
| `logoLink` | `string` | Required. The URL that the GOV.UK logo links to.                                      |
| `appName`  | `string` | Optional. The name of the service or application, displayed next to the GOV.UK logo.  |
| `appLink`  | `string` | Optional. The URL that the service name links to. Only used if `appName` is provided. |
