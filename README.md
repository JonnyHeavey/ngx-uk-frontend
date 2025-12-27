# UK Public Service Angular Libraries

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Introduction

This monorepo contains a collection of libraries which implement/wrap existing UK public service design systems, making it easier to create compliant public service applications with Angular.

## Available Libraries

| Library                | Description                                                  | Status             | NPM Link                                                               |
| ---------------------- | ------------------------------------------------------------ | ------------------ | ---------------------------------------------------------------------- |
| `ngx-govuk-frontend`   | Angular components for the GOV.UK Design System              | Published          | [ngx-govuk-frontend](https://www.npmjs.com/package/ngx-govuk-frontend) |
| `ngx-govscot-frontend` | Angular components for the Scottish Government Design System | Under Construction | -                                                                      |
| `ngx-nhsuk-frontend`   | Angular components for the NHS.UK Design System              | Under Construction | -                                                                      |

## Development

### Prerequisites

- Node.js (LTS version recommended)
- Angular 21+
- Nx CLI

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   nx serve govuk-service
   ```

### Running Tests

```bash
# Run all tests
nx run-many --target=test --all

# Run tests for a specific library
nx test ngx-govuk-frontend
```

## Contributing

We welcome contributions to any of the libraries in this repository. Please see the individual library READMEs for specific contribution guidelines.

General contribution guidelines:

1. Check existing issues or create a new one
2. Fork the repository
3. Create a feature branch
4. Make your changes
5. Write tests
6. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [GOV.UK Design System Team](https://design-system.service.gov.uk/get-started/team/)
