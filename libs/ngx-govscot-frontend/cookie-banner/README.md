# Cookie Banner

The cookie banner component tells users about cookies and allows them to accept or reject non-essential cookies. It helps users manage their personal data by informing them when cookies are stored on their device.

This component follows the [Scottish Government Design System](https://designsystem.gov.scot/components/cookie-banner).

## Installation

```bash
npm install ngx-govscot-frontend
```

## Usage

### Import

```typescript
import { GovScotCookieBannerComponent } from 'ngx-govscot-frontend/cookie-banner';

@Component({
  imports: [GovScotCookieBannerComponent],
  // ...
})
```

### Basic Example

```html
<ngx-govscot-cookie-banner (acceptAll)="onAcceptAllCookies()" (essentialOnly)="onAcceptEssentialCookies()" (viewPreferences)="onViewCookiePreferences()" />
```

### With Custom Text

```html
<ngx-govscot-cookie-banner text="We use cookies to make our website work better for you." description="You can choose to accept all cookies or only the essential ones needed for the site to function." acceptAllText="Accept all" essentialOnlyText="Essential only" preferencesText="Cookie settings" (acceptAll)="onAcceptAllCookies()" (essentialOnly)="onAcceptEssentialCookies()" (viewPreferences)="onViewCookiePreferences()" />
```

### Confirmation Message

```html
<ngx-govscot-cookie-banner [showConfirmation]="true" confirmationText="Thank you for your cookie preferences. You can update them anytime." (changeSettings)="onChangeCookieSettings()" (closeConfirmation)="onCloseCookieConfirmation()" />
```

### Component Methods

```typescript
export class MyComponent {
  onAcceptAllCookies() {
    // Handle accept all cookies
    console.log('User accepted all cookies');
  }

  onAcceptEssentialCookies() {
    // Handle essential cookies only
    console.log('User accepted essential cookies only');
  }

  onViewCookiePreferences() {
    // Handle view cookie preferences
    console.log('User wants to view cookie preferences');
    // Navigate to cookie preferences page
  }

  onChangeCookieSettings() {
    // Handle change cookie settings
    console.log('User wants to change cookie settings');
    // Navigate to cookie settings page
  }

  onCloseCookieConfirmation() {
    // Handle close confirmation
    console.log('User closed cookie confirmation');
  }
}
```

## API

### Inputs

| Name                | Type      | Default                                                                                                                                                                                                                                      | Description                                                         |
| ------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `text`              | `string`  | `'We use cookies to collect anonymous data to help us improve your site browsing experience.'`                                                                                                                                               | The main text content of the cookie banner                          |
| `description`       | `string`  | `'Click \'Accept all cookies\' to agree to all cookies that collect anonymous data. To only allow the cookies that make the site work, click \'Use essential cookies only.\' Visit \'Set cookie preferences\' to control specific cookies.'` | Additional descriptive text about cookie choices                    |
| `acceptAllText`     | `string`  | `'Accept all cookies'`                                                                                                                                                                                                                       | Text for the accept all cookies button                              |
| `essentialOnlyText` | `string`  | `'Use essential cookies only'`                                                                                                                                                                                                               | Text for the essential cookies only button                          |
| `preferencesText`   | `string`  | `'Set cookie preferences'`                                                                                                                                                                                                                   | Text for the cookie preferences button                              |
| `showConfirmation`  | `boolean` | `false`                                                                                                                                                                                                                                      | Whether to show the confirmation message instead of the main banner |
| `confirmationText`  | `string`  | `'Your cookie preferences have been saved. You can change your cookie settings at any time.'`                                                                                                                                                | The confirmation message text                                       |
| `settingsText`      | `string`  | `'change your cookie settings'`                                                                                                                                                                                                              | Text for the settings button in confirmation message                |

### Outputs

| Name                | Type   | Description                                                      |
| ------------------- | ------ | ---------------------------------------------------------------- |
| `acceptAll`         | `void` | Emitted when user accepts all cookies                            |
| `essentialOnly`     | `void` | Emitted when user chooses essential cookies only                 |
| `viewPreferences`   | `void` | Emitted when user clicks cookie preferences                      |
| `changeSettings`    | `void` | Emitted when user clicks change settings in confirmation message |
| `closeConfirmation` | `void` | Emitted when user closes the confirmation message                |

## Accessibility

The cookie banner component includes:

- Proper ARIA labels and roles
- Screen reader announcements for confirmation messages
- Keyboard navigation support
- Focus management

## When to use this component

Use this component if your service sets any cookies on a user's device.

You must:

- Tell users about the cookies your service sets on their device
- Let users accept or reject any cookies that are not essential to providing your service

## Implementation Notes

- The banner should be shown every time the user accesses your service until they make a choice
- Once a choice is made, show the confirmation message and remember the user's preference
- Position the banner at the top of the page
- The component handles both the main banner and confirmation states

## Related Components

- [Notification Panel](../notification-panel/README.md) - For other types of notifications
- [Phase Banner](../phase-banner/README.md) - For service status notifications
