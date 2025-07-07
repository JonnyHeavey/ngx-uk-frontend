# ngx-govuk-frontend/phase-banner

## Overview

The phase banner component helps users understand when a service is new and still being worked on, typically in alpha or beta phase. This is an Angular implementation of the [GOV.UK Design System Phase Banner component](https://design-system.service.gov.uk/components/phase-banner/).

## Components and Types

- `GovUKPhaseBannerComponent` - The main phase banner component
- `GovUKPhase` - Type representing the phases of service development ('alpha' | 'beta')

## Usage

```typescript
import { GovUKPhaseBannerComponent } from 'ngx-govuk-frontend/phase-banner';

@Component({
  // ...
  imports: [
    GovUKPhaseBannerComponent
  ]
})
```

### Basic example

```html
<ngx-govuk-phase-banner phase="alpha"> This is a new service – your <a href="#" class="govuk-link">feedback</a> will help us improve it. </ngx-govuk-phase-banner>
```

### Beta phase example

```html
<ngx-govuk-phase-banner phase="beta"> This is a new service – your <a href="#" class="govuk-link">feedback</a> will help us improve it. </ngx-govuk-phase-banner>
```

### With detailed content

```html
<ngx-govuk-phase-banner phase="beta">
  <span class="govuk-phase-banner__text"> This is a new service. Your <a class="govuk-link" href="#">feedback</a> will help us to improve it. It replaces <a class="govuk-link" href="#">service name</a>. </span>
</ngx-govuk-phase-banner>
```

## API Reference

### Inputs

| Name    | Type                | Default  | Description               |
| ------- | ------------------- | -------- | ------------------------- |
| `phase` | `'alpha' \| 'beta'` | `'beta'` | The phase of the service. |
