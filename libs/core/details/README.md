# @ngx-uk-frontend/core/details

Core details functionality for Angular design system components. This entrypoint provides shared business logic and interfaces that can be extended by different design system implementations.

## Overview

The `@ngx-uk-frontend/core/details` entrypoint contains the base directive and shared functionality for details/disclosure components across different design systems (GOV.UK, Scottish Government, NHS, etc.).

## Installation

```bash
npm install @ngx-uk-frontend/core
```

## Usage

Import the core details functionality in your design system component:

```typescript
import { DetailsDirective } from '@ngx-uk-frontend/core/details';

@Component({
  selector: 'my-design-system-details',
  template: `
    <details>
      <summary>{{ summary() }}</summary>
      <ng-content></ng-content>
    </details>
  `,
})
export class MyDetailsComponent extends DetailsDirective {}
```

## Architecture

### DetailsDirective

The `DetailsDirective` provides shared functionality for details components:

- **Summary Text**: Required input for the summary/trigger text
- **Content Projection**: Base structure for expandable content
- **Extensibility**: Designed to be extended by specific design system implementations

### Design System Implementations

This core functionality is extended by:

- **GovUK Details Component** (`ngx-govuk-frontend/details`)
- **Scottish Government Details Component** (`ngx-govscot-frontend/details`)
- **NHS Details Component** (`ngx-nhsuk-frontend/details`)

## Benefits

1. **Shared Logic**: Common details functionality across design systems
2. **Consistency**: Ensures consistent behavior between implementations
3. **Maintainability**: Single source of truth for details business logic
4. **Extensibility**: Easy to add new design system implementations
5. **Type Safety**: Full TypeScript support with proper typing

## Related

- [`@ngx-uk-frontend/core/accordion`](../accordion/README.md) - For accordion/collapsible functionality
- [`@ngx-uk-frontend/core`](../README.md) - Main core package

## Contributing

This is part of the internal core architecture. Changes should maintain backward compatibility across all design system implementations.
