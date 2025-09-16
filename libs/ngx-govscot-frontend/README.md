# NgxGovScotFrontend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Introduction

NgxGovScotFrontend provides a complete set of Angular components that implement the [Scottish Government Design System](https://designsystem.gov.scot/). This library makes it easier for Angular developers to build web applications that comply with the Scottish Government design standards and accessibility requirements.

The library is designed to:

- Provide accessible components that match the Scottish Government Design System specification
- Be easily integrated into Angular applications
- Follow best practices for performance and accessibility

## Version Compatibility

The following table shows which versions of NgxGovScotFrontend are compatible with which versions of Angular:

| NgxGovScotFrontend Version | Angular Version Support |
| -------------------------- | ----------------------- |
| 1.0.0                      | 20, 21                  |

**Note:** We recommend using the latest version of NgxGovScotFrontend that supports your Angular version for the best experience and latest features.

## Documentation

For documentation on the Scottish Government Design System that this library implements, please visit:

- [Scottish Government Design System](https://designsystem.gov.scot/)
- [Design System Components](https://designsystem.gov.scot/components/)
- [Design System Patterns](https://designsystem.gov.scot/patterns/)
- [Design System Styles](https://designsystem.gov.scot/styles/)

## Installation

### Install the package

```bash
# Using npm
npm install ngx-govscot-frontend --save

# Using yarn
yarn add ngx-govscot-frontend

# Using pnpm
pnpm add ngx-govscot-frontend
```

### Setup in your Angular project

#### Include design system styles

Add the Scottish Government Design System styles directly in your project's configuration file (`project.json` or `angular.json`):

```json
"styles": [
  "src/styles.scss",
  "node_modules/@scottish-government/design-system/dist/css/design-system.css"
],
```

#### Assets Configuration

You'll also need to include the Scottish Government Design System assets in your project configuration. The most important asset is the icons stack file:

```json
"assets": [
  {
    "glob": "**/*",
    "input": "apps/your-app/public"
  },
  {
    "glob": "icons.stack.svg",
    "input": "node_modules/@scottish-government/design-system/dist/images/icons",
    "output": "assets/images/icons"
  }
]
```

**Note:** Replace `apps/your-app/public` with your actual application's public directory path.

## Usage

### Components Imports

All components in NgxGovScotFrontend are standalone, allowing you to import only what you need:

```typescript
// In your component
import { Component } from '@angular/core';
import { GovScotButtonComponent } from 'ngx-govscot-frontend/button';
import { GovScotPanelComponent } from 'ngx-govscot-frontend/panel';
import { GovScotErrorSummaryComponent } from 'ngx-govscot-frontend/error-summary';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [GovScotButtonComponent, GovScotPanelComponent, GovScotErrorSummaryComponent],
  template: `
    <govscot-button>Save and continue</govscot-button>

    <govscot-panel title="Application complete">
      Your reference number is<br />
      <strong>HDJ2123F</strong>
    </govscot-panel>
  `,
})
export class MyComponent {}
```

For NgModule-based applications, you can import components in your module:

```typescript
import { NgModule } from '@angular/core';
import { GovScotButtonComponent } from 'ngx-govscot-frontend/button';
import { GovScotPanelComponent } from 'ngx-govscot-frontend/panel';

@NgModule({
  imports: [GovScotButtonComponent, GovScotPanelComponent],
  // ... other module configuration
})
export class MyModule {}
```

### Templates

After import, you can reference the component selectors in your templates:

```html
<govscot-button>Save and continue</govscot-button>

<govscot-panel title="Application complete">
  Your reference number is<br />
  <strong>HDJ2123F</strong>
</govscot-panel>

<govscot-error-summary>
  <govscot-error-summary-title>There is a problem</govscot-error-summary-title>
  <govscot-error-summary-body>
    <ul class="ds_list ds_error-summary__list">
      <li><a href="#name">Enter your full name</a></li>
      <li><a href="#email">Enter an email address</a></li>
    </ul>
  </govscot-error-summary-body>
</govscot-error-summary>
```

## Components

This library provides Angular components that implement the [Scottish Government Design System](https://designsystem.gov.scot/components). Components are organized by category and available as standalone imports.

### Navigation & Layout

| Component                 | Description                             | Documentation                               |
| ------------------------- | --------------------------------------- | ------------------------------------------- |
| **Breadcrumbs**           | Breadcrumb navigation trail             | [README](./breadcrumbs/README.md)           |
| **Skip Link**             | Skip to main content accessibility link | [README](./skip-link/README.md)             |
| **Phase Banner**          | Alpha/Beta phase indicator banner       | [README](./phase-banner/README.md)          |
| **Page Header**           | Standard page title and metadata header | [README](./page-header/README.md)           |
| **Sequential Navigation** | Previous/next page navigation           | [README](./sequential-navigation/README.md) |

### Content & Information

| Component                | Description                              | Documentation                              |
| ------------------------ | ---------------------------------------- | ------------------------------------------ |
| **Details**              | Collapsible content disclosure widget    | [README](./details/README.md)              |
| **Inset Text**           | Highlighted text content                 | [README](./inset-text/README.md)           |
| **Warning Text**         | Important warning messages               | [README](./warning-text/README.md)         |
| **Notification Banner**  | Important notifications and alerts       | [README](./notification-banner/README.md)  |
| **Notification Panel**   | Prominent notification messages          | [README](./notification-panel/README.md)   |
| **Status Tag**           | Status and category tags                 | [README](./status-tag/README.md)           |
| **Accordion**            | Collapsible content sections             | [README](./accordion/README.md)            |
| **Tabs**                 | Tabbed content navigation                | [README](./tabs/README.md)                 |
| **Feature Header**       | Large promotional header component       | [README](./feature-header/README.md)       |
| **Page Metadata**        | Additional page information and metadata | [README](./page-metadata/README.md)        |
| **Confirmation Message** | Success confirmation displays            | [README](./confirmation-message/README.md) |
| **Contact Details**      | Structured contact information display   | [README](./contact-details/README.md)      |
| **Question**             | Structured question and answer display   | [README](./question/README.md)             |

### Forms & Input

| Component      | Description                                       | Documentation                    |
| -------------- | ------------------------------------------------- | -------------------------------- |
| **Button**     | Primary, secondary, and warning buttons           | [README](./button/README.md)     |
| **Text Input** | Single-line text input with prefix/suffix support | [README](./text-input/README.md) |
| **Textarea**   | Multi-line text input                             | [README](./textarea/README.md)   |
| **Select**     | Dropdown selection input                          | [README](./select/README.md)     |
| **Radio**      | Radio button selection                            | [README](./radio/README.md)      |
| **Checkbox**   | Checkbox selection                                | [README](./checkbox/README.md)   |

### Data Display

| Component         | Description                             | Documentation                       |
| ----------------- | --------------------------------------- | ----------------------------------- |
| **Table**         | Data tables with sorting and formatting | [README](./table/README.md)         |
| **Summary List**  | Key-value pair summaries                | [README](./summary-list/README.md)  |
| **Pagination**    | Page navigation controls                | [README](./pagination/README.md)    |
| **File Download** | File download links with metadata       | [README](./file-download/README.md) |

### Error Handling

| Component         | Description                    | Documentation                       |
| ----------------- | ------------------------------ | ----------------------------------- |
| **Error Summary** | Form error summary at page top | [README](./error-summary/README.md) |

### Utilities

| Component         | Description                                        | Documentation                       |
| ----------------- | -------------------------------------------------- | ----------------------------------- |
| **Cookie Banner** | Cookie consent management                          | [README](./cookie-banner/README.md) |
| **Back to Top**   | Return to top of page functionality                | [README](./back-to-top/README.md)   |
| **Hide Page**     | Emergency exit functionality for sensitive content | [README](./hide-page/README.md)     |
| **Site Search**   | Search functionality component                     | [README](./site-search/README.md)   |
| **Aspect Box**    | Responsive container with fixed aspect ratios      | [README](./aspect-box/README.md)    |

### Coming Soon

The following components from the [Scottish Government Design System](https://designsystem.gov.scot/components) will be added in future releases:

#### Navigation & Layout

- **Site Navigation** - Main website navigation menu
- **Side Navigation** - Secondary navigation sidebar

#### Forms & Controls

- **Autocomplete** - Search with auto-suggestions
- **Date Picker** - Enhanced date selection widget

## Building

Run `nx build ngx-govscot-frontend` to build the library. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `nx test ngx-govscot-frontend` to execute the unit tests via [Jest](https://jestjs.io).

## Publishing

This library is configured as publishable. Use `nx release` to publish new versions.

## Contributing

We welcome contributions to NgxGovScotFrontend! Please follow these steps to contribute:

1. Check the issues page for open issues or create a new one to discuss your proposed changes
2. Fork the repository
3. Create a new branch for your feature or bugfix
4. Make your changes
5. Write tests for your changes
6. Run the tests with `nx test ngx-govscot-frontend`
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

- [Scottish Government Design System Team](https://designsystem.gov.scot/) for creating and maintaining the design system
