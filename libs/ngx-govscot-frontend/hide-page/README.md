# Hide Page Component

A safety component that helps users exit a service, website or application quickly and safely. Designed for victims of domestic abuse or other vulnerable users viewing sensitive content.

## Features

- **Emergency Exit**: Provides a prominent red button for quick page exit
- **Keyboard Support**: Escape key support for rapid access
- **Enhanced History Management**: Multiple strategies to clear browser history entries
- **Dual Navigation**: Opens safe site in new tab while redirecting current page
- **Accessibility**: Full screen reader and assistive technology support
- **Robust Error Handling**: Graceful fallbacks when browser features are restricted

## Installation

```bash
npm install @ngx-govscot-frontend/hide-page
```

## Usage

### Basic Usage

```html
<ngx-govscot-hide-page />
```

### With Custom URLs

```html
<ngx-govscot-hide-page redirectUrl="https://www.bbc.co.uk" newTabUrl="https://www.gov.uk" />
```

### With Custom Accessibility

```html
<ngx-govscot-hide-page ariaLabel="Emergency exit - leave this page immediately" />
```

### With Additional Styling

```html
<ngx-govscot-hide-page classes="my-custom-class" />
```

## Component API

### Inputs

| Input         | Type      | Default                               | Description                          |
| ------------- | --------- | ------------------------------------- | ------------------------------------ |
| `redirectUrl` | `string`  | `'https://www.google.com'`            | URL to redirect the current tab to   |
| `newTabUrl`   | `string`  | `'https://bbc.co.uk/weather'`         | URL to open in new tab               |
| `classes`     | `string`  | `''`                                  | Additional CSS classes               |
| `ariaLabel`   | `string`  | `'Hide this page quickly and safely'` | Aria label for accessibility         |
| `showEscText` | `boolean` | `true`                                | Show the escape key instruction text |

### Computed Properties

| Property        | Type               | Description                         |
| --------------- | ------------------ | ----------------------------------- |
| `buttonClasses` | `computed<string>` | Computed CSS classes for the button |

## Behavior

When the hide page button is clicked or the Escape key is pressed:

1. **Opens New Tab**: Opens the specified `newTabUrl` in a new browser tab
2. **Clears Browser History**: Uses multiple strategies to remove history entries:
   - Goes back through recent history entries (up to 10 steps)
   - Uses `replaceState` to overwrite current history entry
   - Uses `pushState` + `replaceState` for additional cleanup
3. **Redirects Current Page**: Changes the current tab to the specified `redirectUrl`
4. **Error Handling**: Gracefully handles cases where browser restrictions prevent operations

## Enhanced History Clearing

The component uses multiple strategies to clear browser history:

### Strategy 1: Back Navigation

- Attempts to go back through recent history entries
- Limited to maximum 10 steps to prevent infinite loops
- Removes evidence of visiting sensitive pages

### Strategy 2: History State Replacement

- Uses `history.replaceState()` to overwrite current entry
- Replaces current URL with the safe redirect URL

### Strategy 3: Push and Replace

- Uses `history.pushState()` followed by `replaceState()`
- Provides additional cleanup for comprehensive history management

### Browser Compatibility

- Handles cases where browsers restrict history manipulation
- Provides fallback behavior when operations fail
- Continues with available strategies even if some fail

## Architecture

### Dependency Injection

The component uses Angular's `DOCUMENT` injection token instead of global `window`:

- Better testability with proper mocking
- Follows Angular best practices for DOM access
- Safer in SSR environments

### Error Handling

Comprehensive error handling ensures the component works across different browsers:

- Graceful degradation when features are unavailable
- Console warnings for debugging without breaking functionality
- Multiple fallback strategies for maximum compatibility

## Accessibility

### Screen Reader Support

The component includes several accessibility features:

- Descriptive `aria-label` for the button
- Visually hidden text explaining escape key functionality
- Progressive enhancement with `js-enabled-text` classes

### Keyboard Support

- **Escape Key**: Global document listener for escape key presses
- **Focus Management**: Button is keyboard accessible
- **Prevention**: Prevents default escape key behavior

### Required Accessibility Setup

For proper screen reader support, add this code above your main content:

```html
<div class="visually-hidden ds_hide-page">
  <p>To leave the page quickly, press the escape key.</p>
</div>
```

## CSS Classes

The component uses these Scottish Government Design System classes:

- `ds_hide-page` - Main container
- `ds_hide-page__button` - Button styling
- `ds_button` - Standard button styles
- `ds_hide-page__text` - Instruction text styling
- `js-hide-page` - JavaScript enhancement hook
- `js-enabled-text` - Progressive enhancement
- `visually-hidden` - Screen reader only text

## When to Use

Use this component on pages where:

- Viewing content could put someone in danger or at risk of harm
- Information is sensitive and could alert potential abusers
- Users need emergency exit capabilities (e.g., domestic violence support)
- Content relates to sensitive topics (mental health, abuse support, etc.)

## When Not to Use

Do not use this component if:

- The service or content is unlikely to put users at risk
- The page contains general public information
- Emergency exit functionality is not necessary

## Examples

### Domestic Violence Support Service

```html
<ngx-govscot-hide-page ariaLabel="Quickly and safely leave this domestic violence support page" redirectUrl="https://www.google.com" newTabUrl="https://www.bbc.co.uk/news" />
```

### Mental Health Support

```html
<ngx-govscot-hide-page ariaLabel="Exit mental health support page safely" redirectUrl="https://www.google.com" newTabUrl="https://www.bbc.co.uk/weather" />
```

### Custom Styling

```html
<ngx-govscot-hide-page classes="urgent-exit priority-button" ariaLabel="Emergency exit from sensitive content" />
```

## Testing

The component includes comprehensive unit tests covering:

- Component initialization and defaults
- Input property binding
- Computed signal functionality
- Template rendering and CSS classes
- Hide page functionality and error handling
- Enhanced history clearing with multiple strategies
- Keyboard event handling (Escape key)
- Accessibility features
- DOCUMENT injection and window access
- Browser compatibility scenarios

## Browser Support

- Modern browsers with ES2015+ support
- Requires JavaScript for full functionality
- Graceful degradation for non-JavaScript environments
- Handles browser restrictions on history manipulation
- Compatible with various popup blocking settings

## Security Considerations

- Uses `window.location.replace()` to avoid history entries
- Multiple history clearing strategies for thorough cleanup
- Handles popup blocking gracefully
- Enhanced history management compared to single-strategy approaches
- Cannot guarantee complete anonymity (depends on browser/device settings)

## Performance

- Minimal JavaScript overhead
- Event listeners only for necessary functionality
- No external dependencies
- Lightweight CSS footprint
- Efficient dependency injection with DOCUMENT token
