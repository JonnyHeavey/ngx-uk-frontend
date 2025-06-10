# Button Component

The button component allows users to perform actions, such as starting or submitting a form. It's an essential interactive element for helping users complete tasks and move through a service.

## Scottish Government Design System

This component follows the [Scottish Government Design System Button component](https://designsystem.gov.scot/components/button).

## Usage

### Import

```typescript
import { Component } from '@angular/core';
import { GovScotButtonComponent, GovScotButtonGroupComponent } from 'ngx-govscot-frontend/button';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [GovScotButtonComponent, GovScotButtonGroupComponent],
  template: `
    <ngx-govscot-button>Start now</ngx-govscot-button>

    <ngx-govscot-button-group>
      <ngx-govscot-button color="cancel">Cancel</ngx-govscot-button>
      <ngx-govscot-button>Save changes</ngx-govscot-button>
    </ngx-govscot-button-group>
  `,
})
export class ExampleComponent {}
```

### Button Examples

```html
<!-- Primary button (default) -->
<ngx-govscot-button>Start now</ngx-govscot-button>

<!-- Secondary button -->
<ngx-govscot-button color="secondary">View summary</ngx-govscot-button>

<!-- Cancel button -->
<ngx-govscot-button color="cancel">Cancel</ngx-govscot-button>

<!-- Button styled as link -->
<ngx-govscot-button color="link">Delete</ngx-govscot-button>

<!-- Disabled button -->
<ngx-govscot-button [disabled]="true">Download</ngx-govscot-button>

<!-- Small button -->
<ngx-govscot-button size="small">Start now</ngx-govscot-button>

<!-- Fixed width button -->
<ngx-govscot-button width="fixed">Start now</ngx-govscot-button>

<!-- Maximum width button -->
<ngx-govscot-button width="max">Start now</ngx-govscot-button>

<!-- Button with right icon -->
<ngx-govscot-button [hasIcon]="true">
  Search
  <svg slot="icon-right" class="ds_icon" aria-hidden="true" role="img">
    <use href="/assets/images/icons/icons.stack.svg#search"></use>
  </svg>
</ngx-govscot-button>

<!-- Button with left icon -->
<ngx-govscot-button [hasIcon]="true" [iconLeft]="true">
  <svg slot="icon-left" class="ds_icon" aria-hidden="true" role="img">
    <use href="/assets/images/icons/icons.stack.svg#chevron_left"></use>
  </svg>
  Back
</ngx-govscot-button>

<!-- Icon-only button -->
<ngx-govscot-button>
  <span class="visually-hidden">Search</span>
  <svg class="ds_icon" aria-hidden="true" role="img">
    <use href="/assets/images/icons/icons.stack.svg#search"></use>
  </svg>
</ngx-govscot-button>
```

### Button Group Examples

```html
<!-- Standard button group -->
<ngx-govscot-button-group>
  <ngx-govscot-button color="cancel">Cancel</ngx-govscot-button>
  <ngx-govscot-button>Save changes</ngx-govscot-button>
</ngx-govscot-button-group>

<!-- Inline button group -->
<ngx-govscot-button-group [inline]="true">
  <ngx-govscot-button color="cancel">Cancel</ngx-govscot-button>
  <ngx-govscot-button>Save changes</ngx-govscot-button>
</ngx-govscot-button-group>

<!-- Mixed content button group -->
<ngx-govscot-button-group>
  <ngx-govscot-button color="secondary">Accept all cookies</ngx-govscot-button>
  <ngx-govscot-button color="secondary">Use essential cookies only</ngx-govscot-button>
  <a href="#">Set cookie preferences</a>
</ngx-govscot-button-group>
```

## Available Options

### Button Colors

- `primary` (default) - Default button for main call to action
- `secondary` - Button for most other actions with less visual prominence
- `cancel` - Button for actions that cancel or abandon an action
- `link` - Button styled as a link

### Button Sizes

- `default` (default) - Standard button size
- `small` - Smaller button for limited space or non-primary actions

### Button Widths

- `flexible` (default) - Button expands to fit text
- `fixed` - Fixed width buttons for uniformity
- `max` - Maximum width buttons (fills screen up to 480px)

### Button Features

- `disabled` - Boolean to disable the button
- `hasIcon` - Boolean to indicate the button has an icon
- `iconLeft` - Boolean to position icon on the left (default is right)

### Button Group Features

- `inline` - Boolean to keep button group on single row at all screen sizes

## Design System Guidelines

### When to Use Buttons

- **Primary button**: Use for your main call to action. Use only one primary button on a page.
- **Secondary button**: Use for most other actions with less visual prominence.
- **Cancel button**: Use for actions that cancel or abandon an action.
- **Button styled as link**: Use sparingly, only when other button types would be too visually prominent.

### Button Grouping

- Use a button group when buttons are placed next to other buttons or links
- Primary buttons should be last in a button grouping
- Use consistent sizing within a group
- Links should be placed after all other button styles

### Writing Button Text

Write button text in sentence case and describe the action the button performs:

- 'Start now' to launch a user into a service
- 'Sign in' to an account a user has created
- 'Continue' when the service does not save information
- 'Save and continue' when the service saves information
- 'Cancel' to cancel or abandon an action

### Icons

Icons can be added to buttons to make actions clearer. Icons must:

- Be recognisable and understandable
- Represent one action only
- Directly relate to the button action and text
- Match the label colour

Do not use icons as decoration or inconsistently.
