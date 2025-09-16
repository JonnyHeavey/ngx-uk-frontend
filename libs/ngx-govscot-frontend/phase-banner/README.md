# @ngx-govscot-frontend/phase-banner

Angular component implementing the Scottish Government Design System phase banner component.

## Installation

```bash
npm install ngx-govscot-frontend
```

## Usage

```typescript
import { GovScotPhaseBannerComponent } from 'ngx-govscot-frontend/phase-banner';

@Component({
  template: ` <ngx-govscot-phase-banner phase="beta"> This is a new service. Your <a href="/feedback">feedback</a> will help us to improve it. </ngx-govscot-phase-banner> `,
  imports: [GovScotPhaseBannerComponent],
})
export class MyComponent {}
```

## API

### Properties

| Property | Type                | Default  | Description              |
| -------- | ------------------- | -------- | ------------------------ |
| `phase`  | `'alpha' \| 'beta'` | `'beta'` | The phase of the service |

### Content Projection

The component supports content projection to customize the phase banner message:

```html
<ngx-govscot-phase-banner phase="alpha"> This is a new website – your <a href="/feedback">feedback</a> will help us to improve it. </ngx-govscot-phase-banner>
```

## Examples

### Alpha Phase

```html
<ngx-govscot-phase-banner phase="alpha"> This is a new service. Your feedback will help us to improve it. </ngx-govscot-phase-banner>
```

### Beta Phase (Default)

```html
<ngx-govscot-phase-banner> This is a new service. Your feedback will help us to improve it. </ngx-govscot-phase-banner>
```

### Multiple Links

```html
<ngx-govscot-phase-banner phase="beta"> This is a new service. Your <a href="/feedback">feedback</a> will help us to improve it. You can also <a href="/contact">contact us</a> for support. </ngx-govscot-phase-banner>
```

## When to Use

- Include on a website when it is still in alpha or beta
- Describe what the phase status means
- Remove once the website has been made live

## Analytics

Each link in the phase banner should have a distinct label for tracking user behavior through:

- Click URL
- Click text
- Data attributes for interactions

## Features

- ✅ Follows Scottish Government Design System specifications
- ✅ Supports alpha and beta phases
- ✅ Content projection for custom messages
- ✅ Standalone Angular component
- ✅ TypeScript support
- ✅ WCAG AA accessible

## References

- [Scottish Government Design System - Phase Banner](https://designsystem.gov.scot/components/phase-banner)
