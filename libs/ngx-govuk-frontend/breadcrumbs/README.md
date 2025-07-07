# ngx-govuk-frontend/breadcrumbs

Secondary entry point of `ngx-govuk-frontend`. It can be used by importing from `ngx-govuk-frontend/breadcrumbs`.

## GOV.UK Design System

This component follows the [GOV.UK Design System Breadcrumbs component](https://design-system.service.gov.uk/components/breadcrumbs/).

## Usage

### Import

```typescript
import {
  GovUKBreadcrumbsComponent,
  GovUKBreadcrumbDirective
} from 'ngx-govuk-frontend/breadcrumbs';

@Component({
  // ...
  imports: [
    GovUKBreadcrumbsComponent,
    GovUKBreadcrumbDirective
  ]
})
```

### Example

```html
<ngx-govuk-breadcrumbs>
  <ngx-govuk-breadcrumb link="/" label="Home" />
  <ngx-govuk-breadcrumb link="/section" label="Section" />
  <ngx-govuk-breadcrumb label="Current Page" />
</ngx-govuk-breadcrumbs>
```
