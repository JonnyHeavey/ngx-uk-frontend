# Notification Banner

A banner highlighting key content that all visitors to a website will need to see.

This component implements the [Scottish Government Design System Notification Banner](https://designsystem.gov.scot/components/notification-banner).

## Installation

```bash
npm install @ngx-govscot-frontend/notification-banner
```

## Usage

### Basic Usage

```typescript
import { GovScotNotificationBannerComponent } from '@ngx-govscot-frontend/notification-banner';

@Component({
  selector: 'app-example',
  imports: [GovScotNotificationBannerComponent],
  template: ` <ngx-govscot-notification-banner text="We need to tell you about <a href='#'>something</a>"> </ngx-govscot-notification-banner> `,
})
export class ExampleComponent {}
```

### With Content Projection

```typescript
@Component({
  selector: 'app-example',
  imports: [GovScotNotificationBannerComponent],
  template: `
    <ngx-govscot-notification-banner>
      <p>We need to tell you about <a href="#">something important</a></p>
      <p>This is additional content projected into the banner.</p>
    </ngx-govscot-notification-banner>
  `,
})
export class ExampleComponent {}
```

### With Icon

```typescript
@Component({
  selector: 'app-example',
  imports: [GovScotNotificationBannerComponent],
  template: ` <ngx-govscot-notification-banner text="Something bad has <a href='#'>happened</a>" [showIcon]="true" icon="priority_high" [iconInverse]="true" [iconColour]="true"> </ngx-govscot-notification-banner> `,
})
export class ExampleComponent {}
```

### Without Close Button

```typescript
@Component({
  selector: 'app-example',
  imports: [GovScotNotificationBannerComponent],
  template: ` <ngx-govscot-notification-banner text="This is an important message that cannot be dismissed" [showClose]="false"> </ngx-govscot-notification-banner> `,
})
export class ExampleComponent {}
```

### Handling Close Event

```typescript
@Component({
  selector: 'app-example',
  imports: [GovScotNotificationBannerComponent],
  template: ` <ngx-govscot-notification-banner text="We need to tell you about something" (closed)="onNotificationClosed()"> </ngx-govscot-notification-banner> `,
})
export class ExampleComponent {
  onNotificationClosed() {
    console.log('Notification banner was closed');
    // Handle close event, e.g., set a cookie to remember the dismissal
  }
}
```

## API

### Properties

| Property      | Type      | Default           | Description                                                 |
| ------------- | --------- | ----------------- | ----------------------------------------------------------- |
| `text`        | `string`  | `undefined`       | The text content of the notification banner. Supports HTML. |
| `showClose`   | `boolean` | `true`            | Whether to show the close button.                           |
| `showIcon`    | `boolean` | `false`           | Whether to show an icon.                                    |
| `icon`        | `string`  | `'priority_high'` | The icon to display (when showIcon is true).                |
| `iconInverse` | `boolean` | `false`           | Whether to use the inverse icon style.                      |
| `iconColour`  | `boolean` | `false`           | Whether to use the colored icon style.                      |
| `reversed`    | `boolean` | `true`            | Whether the banner is reversed (dark background).           |

### Events

| Event    | Type                 | Description                               |
| -------- | -------------------- | ----------------------------------------- |
| `closed` | `EventEmitter<void>` | Emitted when the close button is clicked. |

## Accessibility

- The component includes proper ARIA attributes for screen readers
- The close button has descriptive text for assistive technologies
- Icons are marked as decorative with `aria-hidden="true"`
- The component follows the Scottish Government Design System accessibility guidelines

## Design System

This component follows the [Scottish Government Design System](https://designsystem.gov.scot/components/notification-banner) specification for notification banners.

### CSS Classes

The component uses the following CSS classes from the Scottish Government Design System:

- `.ds_notification` - The main notification banner container
- `.ds_notification__content` - The content area
- `.ds_notification__text` - The text content area
- `.ds_notification__icon` - The icon container
- `.ds_notification__close` - The close button
- `.ds_reversed` - Modifier for reversed (dark) styling

Make sure to include the Scottish Government Design System CSS in your application for proper styling.

## Examples

See the [Storybook stories](./src/lib/notification-banner.component.stories.ts) for more examples and interactive demos.
