# NgxGovUKFrontend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Documentation](https://img.shields.io/badge/docs-website-blue)](https://jonnyheavey.github.io/ngx-uk-frontend)

## Introduction

NgxGovUKFrontend provides a complete set of Angular components that implement the [GOV.UK Design System](https://design-system.service.gov.uk/). This library makes it easier for Angular developers to build web applications that comply with the GOV.UK design standards and accessibility requirements.

The library is designed to:

- Provide accessible components that match the GOV.UK Design System specification
- Be easily integrated into Angular applications
- Follow best practices for performance and accessibility

## Version Compatibility

The following table shows which versions of NgxGovUKFrontend are compatible with which versions of Angular:

| NgxGovUKFrontend Version | Angular Version Support |
| ------------------------ | ----------------------- |
| 1.x                      | 19, 20                  |
| 2.x                      | 20, 21                  |
| 3.x                      | 21, 22                  |

**Note:** We recommend using the latest version of NgxGovUKFrontend that supports your Angular version for the best experience and latest features.

## Documentation

**[View the full NgxGovUKFrontend documentation](https://jonnyheavey.github.io/ngx-uk-frontend)**

For documentation on the GOV.UK Design System that this library implements, please visit:

- [GOV.UK Design System](https://design-system.service.gov.uk/)
- [GOV.UK Components](https://design-system.service.gov.uk/components/)
- [GOV.UK Patterns](https://design-system.service.gov.uk/patterns/)
- [GOV.UK Styles](https://design-system.service.gov.uk/styles/)

## Installation

### Install the package

```bash
# Using npm
npm install ngx-govuk-frontend --save

# Using yarn
yarn add ngx-govuk-frontend

# Using pnpm
pnpm add ngx-govuk-frontend
```

### Setup in your Angular project

#### Include design system styles

There are two ways to add the GOV.UK styles to your application:

##### Option 1: Import in your styles.scss

Add the styles to your application by importing them in your `styles.scss`:

```scss
@import 'govuk-frontend/dist/govuk/all';
```

##### Option 2: Configure in project.json

Alternatively, you can add the styles directly in your project's configuration file (`project.json` or `angular.json`):

```json
"styles": [
  "src/styles.scss",
  "node_modules/govuk-frontend/dist/govuk/govuk-frontend.min.css"
],
```

#### Assets Configuration

You'll also need to include the GOV.UK assets in your project configuration:

```json
"assets": [
  "src/favicon.ico",
  "src/assets",
  {
    "glob": "**/*",
    "input": "node_modules/govuk-frontend/dist/govuk/assets/images",
    "output": "/assets/images"
  },
  {
    "glob": "**/*",
    "input": "node_modules/govuk-frontend/dist/govuk/assets/fonts",
    "output": "/assets/fonts"
  },
  {
    "glob": "**/*",
    "input": "node_modules/govuk-frontend/dist/govuk/assets",
    "output": "/assets"
  }
]
```

## Usage

### Components Imports

All components in NgxGovUKFrontend are standalone, allowing you to import only what you need:

```typescript
// In your component
import { Component } from '@angular/core';
import { GovukButtonComponent } from 'ngx-govuk-frontend/button';
import { GovukPanelComponent } from 'ngx-govuk-frontend/panel';
import { GovukErrorSummaryComponent } from 'ngx-govuk-frontend/error-summary';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [GovukButtonComponent, GovukPanelComponent, GovukErrorSummaryComponent],
  template: `
    <govuk-button>Save and continue</govuk-button>

    <govuk-panel title="Application complete">
      Your reference number is<br />
      <strong>HDJ2123F</strong>
    </govuk-panel>
  `,
})
export class MyComponent {}
```

For NgModule-based applications, you can import components in your module:

```typescript
import { NgModule } from '@angular/core';
import { GovukButtonComponent } from 'ngx-govuk-frontend/button';
import { GovukPanelComponent } from 'ngx-govuk-frontend/panel';

@NgModule({
  imports: [GovukButtonComponent, GovukPanelComponent],
  // ... other module configuration
})
export class MyModule {}
```

### Templates

After import, you can reference the component selectors in your templates:

```html
<govuk-button>Save and continue</govuk-button>

<govuk-panel title="Application complete">
  Your reference number is<br />
  <strong>HDJ2123F</strong>
</govuk-panel>

<govuk-error-summary>
  <govuk-error-summary-title>There is a problem</govuk-error-summary-title>
  <govuk-error-summary-body>
    <ul class="govuk-list govuk-error-summary__list">
      <li><a href="#name">Enter your full name</a></li>
      <li><a href="#email">Enter an email address</a></li>
    </ul>
  </govuk-error-summary-body>
</govuk-error-summary>
```

## Components

### Navigation & Layout

| Component              | Description                                    | Documentation                            |
| ---------------------- | ---------------------------------------------- | ---------------------------------------- |
| **Header**             | Service header with logo and navigation        | [README](./header/README.md)             |
| **Footer**             | Service footer with links and meta information | [README](./footer/README.md)             |
| **Breadcrumbs**        | Breadcrumb navigation trail                    | [README](./breadcrumbs/README.md)        |
| **Service Navigation** | Service-level navigation menu                  | [README](./service-navigation/README.md) |
| **Skip Link**          | Skip to main content accessibility link        | [README](./skip-link/README.md)          |
| **Phase Banner**       | Alpha/Beta phase indicator banner              | [README](./phase-banner/README.md)       |

### Content & Information

| Component               | Description                                 | Documentation                             |
| ----------------------- | ------------------------------------------- | ----------------------------------------- |
| **Panel**               | Highlighted content panel for confirmations | [README](./panel/README.md)               |
| **Details**             | Collapsible content disclosure widget       | [README](./details/README.md)             |
| **Inset Text**          | Highlighted text content                    | [README](./inset-text/README.md)          |
| **Warning Text**        | Important warning messages                  | [README](./warning-text/README.md)        |
| **Notification Banner** | Important notifications and alerts          | [README](./notification-banner/README.md) |
| **Tag**                 | Status and category tags                    | [README](./tag/README.md)                 |
| **Accordion**           | Collapsible content sections                | [README](./accordion/README.md)           |
| **Tabs**                | Tabbed content navigation                   | [README](./tabs/README.md)                |

### Forms & Input

| Component          | Description                                       | Documentation                        |
| ------------------ | ------------------------------------------------- | ------------------------------------ |
| **Button**         | Primary, secondary, and warning buttons           | [README](./button/README.md)         |
| **Text Input**     | Single-line text input with prefix/suffix support | [README](./text-input/README.md)     |
| **Textarea**       | Multi-line text input                             | [README](./textarea/README.md)       |
| **Password Input** | Password input with show/hide toggle              | [README](./password-input/README.md) |
| **Select**         | Dropdown selection input                          | [README](./select/README.md)         |
| **Radio**          | Radio button selection                            | [README](./radio/README.md)          |
| **Checkbox**       | Checkbox selection                                | [README](./checkbox/README.md)       |
| **File Upload**    | File upload input                                 | [README](./file-upload/README.md)    |
| **Date Input**     | Date input with day/month/year fields             | [README](./date-input/README.md)     |
| **Fieldset**       | Form field grouping                               | [README](./fieldset/README.md)       |
| **Form Group**     | Form control wrapper with labels and hints        | [README](./form-group/README.md)     |

### Data Display

| Component        | Description                             | Documentation                      |
| ---------------- | --------------------------------------- | ---------------------------------- |
| **Table**        | Data tables with sorting and formatting | [README](./table/README.md)        |
| **Summary List** | Key-value pair summaries                | [README](./summary-list/README.md) |
| **Task List**    | Task progress tracking lists            | [README](./task-list/README.md)    |
| **Pagination**   | Page navigation controls                | [README](./pagination/README.md)   |

### Error Handling

| Component         | Description                    | Documentation                       |
| ----------------- | ------------------------------ | ----------------------------------- |
| **Error Summary** | Form error summary at page top | [README](./error-summary/README.md) |

### Utilities

| Component         | Description                           | Documentation                       |
| ----------------- | ------------------------------------- | ----------------------------------- |
| **Cookie Banner** | Cookie consent management             | [README](./cookie-banner/README.md) |
| **Back Link**     | Navigation back to previous page      | [README](./back-link/README.md)     |
| **Form Utils**    | Form utilities and validation helpers | [README](./form-utils/README.md)    |

## Contributing

We welcome contributions to NgxGovUKFrontend! Please follow these steps to contribute:

1. Check the [issues page](https://github.com/JonnyHeavey/ngx-uk-frontend/issues) for open issues or create a new one to discuss your proposed changes
2. Fork the repository
3. Create a new branch for your feature or bugfix
4. Make your changes
5. Write tests for your changes
6. Run the tests with `nx test ngx-govuk-frontend`
7. Submit a pull request

### Coding Standards

- Follow the [Angular style guide](https://angular.io/guide/styleguide)
- Write unit tests for all new features
- Ensure all tests pass before submitting PRs
- Keep PRs focused on a single topic
- Use meaningful commit messages

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [GOV.UK Design System Team](https://design-system.service.gov.uk/get-started/team/) for creating and maintaining the design system
