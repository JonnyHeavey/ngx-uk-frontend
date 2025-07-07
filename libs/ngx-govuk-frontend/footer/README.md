# ngx-govuk-frontend/footer

## Overview

The footer component shows users copyright information, links to other pages, and information about the website. This is an Angular implementation of the [GOV.UK Design System Footer component](https://design-system.service.gov.uk/components/footer/).

## Components

- `GovUKFooterComponent` - The main footer container component
- `GovUKFooterLinkComponent` - For individual footer links
- `GovUKFooterLinksComponent` - Container for a group of footer links
- `GovUKFooterMetaComponent` - For meta information in the footer
- `GovUKFooterNavigationComponent` - Container for footer navigation sections
- `GovUKFooterNavigationSectionComponent` - Container for a section of navigation
- `GovUKFooterNavigationItemComponent` - For individual navigation items

## Usage

```typescript
import {
  GovUKFooterComponent,
  GovUKFooterLinkComponent,
  GovUKFooterLinksComponent,
  GovUKFooterMetaComponent,
  GovUKFooterNavigationComponent,
  GovUKFooterNavigationSectionComponent,
  GovUKFooterNavigationItemComponent
} from 'ngx-govuk-frontend/footer';

@Component({
  // ...
  imports: [
    GovUKFooterComponent,
    GovUKFooterLinkComponent,
    GovUKFooterLinksComponent,
    GovUKFooterMetaComponent,
    GovUKFooterNavigationComponent,
    GovUKFooterNavigationSectionComponent,
    GovUKFooterNavigationItemComponent
  ]
})
```

### Basic example

```html
<ngx-govuk-footer>
  <ngx-govuk-footer-meta>
    <h2 class="govuk-visually-hidden">Support links</h2>
    <ngx-govuk-footer-links>
      <ngx-govuk-footer-link href="/accessibility">Accessibility statement</ngx-govuk-footer-link>
      <ngx-govuk-footer-link href="/cookies">Cookies</ngx-govuk-footer-link>
      <ngx-govuk-footer-link href="/privacy">Privacy policy</ngx-govuk-footer-link>
      <ngx-govuk-footer-link href="/terms-conditions">Terms and conditions</ngx-govuk-footer-link>
    </ngx-govuk-footer-links>
    <span class="govuk-footer__licence-description">
      All content is available under the
      <a class="govuk-footer__link" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated
    </span>
  </ngx-govuk-footer-meta>
</ngx-govuk-footer>
```

### With navigation sections

```html
<ngx-govuk-footer>
  <ngx-govuk-footer-navigation>
    <ngx-govuk-footer-navigation-section title="Services and information">
      <ngx-govuk-footer-navigation-item href="/browse/benefits">Benefits</ngx-govuk-footer-navigation-item>
      <ngx-govuk-footer-navigation-item href="/browse/births-deaths-marriages">Births, deaths, marriages and care</ngx-govuk-footer-navigation-item>
      <ngx-govuk-footer-navigation-item href="/browse/business">Business and self-employed</ngx-govuk-footer-navigation-item>
      <ngx-govuk-footer-navigation-item href="/browse/education">Education and learning</ngx-govuk-footer-navigation-item>
    </ngx-govuk-footer-navigation-section>

    <ngx-govuk-footer-navigation-section title="Departments and policy">
      <ngx-govuk-footer-navigation-item href="/government/organisations">Departments</ngx-govuk-footer-navigation-item>
      <ngx-govuk-footer-navigation-item href="/news-and-communications">News</ngx-govuk-footer-navigation-item>
      <ngx-govuk-footer-navigation-item href="/search/policy">Policies</ngx-govuk-footer-navigation-item>
    </ngx-govuk-footer-navigation-section>
  </ngx-govuk-footer-navigation>

  <ngx-govuk-footer-meta>
    <!-- Meta content as in basic example -->
  </ngx-govuk-footer-meta>
</ngx-govuk-footer>
```
