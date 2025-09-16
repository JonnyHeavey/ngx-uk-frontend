# @ngx-govscot-frontend/skip-link

Angular components implementing the Scottish Government Design System skip link component.

## Installation

```bash
npm install ngx-govscot-frontend
```

## Usage

```typescript
import { GovScotSkipLinkComponent } from 'ngx-govscot-frontend/skip-link';

@Component({
  template: ` <ngx-govscot-skip-link href="#main-content"> Skip to main content </ngx-govscot-skip-link> `,
  imports: [GovScotSkipLinkComponent],
})
export class MyComponent {}
```

## Features

- ✅ Follows Scottish Government Design System specifications
- ✅ WCAG AA accessible
- ✅ Standalone Angular component
- ✅ Customizable href target
- ✅ Content projection support
