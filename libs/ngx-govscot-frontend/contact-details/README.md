# Contact Details

This component implements the Scottish Government Design System contact details component. Use the contact details component to show users ways to get in touch with your organisation.

Based on the official Scottish Government Design System: https://designsystem.gov.scot/components/contact-details/

## Usage

### Basic Example

```html
<ngx-govscot-contact-details title="Contact">
  <ngx-govscot-contact-item label="Address" type="address">
    Scottish Government<br />
    St Andrew's House<br />
    Regent Road<br />
    Edinburgh<br />
    EH1 3DG
  </ngx-govscot-contact-item>
  <ngx-govscot-contact-item label="Email" type="email" href="email@gov.scot"> email@gov.scot </ngx-govscot-contact-item>
  <ngx-govscot-contact-item label="Phone" type="phone" additionalInfo="Main line is open 8am to 5pm"> 0123 456 7000 </ngx-govscot-contact-item>
</ngx-govscot-contact-details>
```

### With Social Media

```html
<ngx-govscot-contact-details title="Contact">
  <ngx-govscot-contact-item label="Address" type="address">
    Scottish Government<br />
    St Andrew's House<br />
    Regent Road<br />
    Edinburgh<br />
    EH1 3DG
  </ngx-govscot-contact-item>
  <ngx-govscot-contact-item label="Email" type="email" href="email@gov.scot"> email@gov.scot </ngx-govscot-contact-item>
  <ngx-govscot-contact-item label="Follow" type="social" href="https://facebook.com/scottishgovernment" icon="path/to/facebook-icon.svg"> Facebook </ngx-govscot-contact-item>
  <ngx-govscot-contact-item label="Follow" type="social" href="https://x.com/scotgov" additionalInfo="on X"> @ScotGov </ngx-govscot-contact-item>
</ngx-govscot-contact-details>
```

### Two-Column Layout

```html
<ngx-govscot-contact-details title="Contact" [twoColumn]="true">
  <ngx-govscot-contact-item label="Address" type="address">
    First Minister<br />
    Scottish Government<br />
    St Andrew's House<br />
    Regent Road<br />
    Edinburgh<br />
    EH1 3DG
  </ngx-govscot-contact-item>
  <ngx-govscot-contact-item label="Email" type="email" href="firstminister@gov.scot"> firstminister@gov.scot </ngx-govscot-contact-item>
</ngx-govscot-contact-details>
```

## API

### GovScotContactDetailsComponent

The main container component for contact details.

#### Inputs

| Input       | Type      | Default     | Description                               |
| ----------- | --------- | ----------- | ----------------------------------------- |
| `title`     | `string`  | `'Contact'` | The title for the contact details section |
| `twoColumn` | `boolean` | `false`     | Whether to display in a two-column layout |
| `classes`   | `string`  | `''`        | Additional CSS classes to apply           |

### GovScotContactItemComponent

Individual contact detail item component.

#### Inputs

| Input            | Type                                                                           | Default     | Description                                                  |
| ---------------- | ------------------------------------------------------------------------------ | ----------- | ------------------------------------------------------------ |
| `label`          | `string`                                                                       | Required    | The label/title for this contact detail item                 |
| `type`           | `'address' \| 'email' \| 'phone' \| 'website' \| 'social' \| 'fax' \| 'other'` | `'other'`   | The type of contact detail for semantic and styling purposes |
| `href`           | `string`                                                                       | `undefined` | Optional href for linkable items (email, website, social)    |
| `icon`           | `string`                                                                       | `undefined` | Optional icon URL (primarily for social media items)         |
| `additionalInfo` | `string`                                                                       | `undefined` | Additional information or context                            |

#### Content Projection

The content of each contact item is projected into the appropriate location in the template. This allows for flexible content including HTML markup like `<br>` tags for addresses.

## Contact Types

### Address

- Does not create links
- Content is projected as-is, allowing HTML like `<br>` tags

### Email

- Automatically creates `mailto:` links if `href` is provided
- Uses `ds_break-word` class for long email addresses

### Phone

- Does not create links
- Can include `additionalInfo` for opening hours or charges

### Website

- Creates links if `href` is provided
- Content is projected as link text

### Social

- Creates links if `href` is provided
- Can display icons if `icon` is provided
- Uses special social media styling with `ds_contact-details__social-item` class
- Can include `additionalInfo` for platform context (e.g., "on X")

### Fax / Other

- Does not create links
- Basic text display

## Accessibility

- Uses semantic `<address>` element for contact information
- Uses definition list (`<dl>`, `<dt>`, `<dd>`) structure for proper semantic markup
- Social media icons include appropriate `alt` text and `aria-hidden="true"` attributes
- Links are properly marked up with appropriate `href` attributes

## Styling

The component uses the Scottish Government Design System CSS classes:

- `.ds_contact-details` - Main container
- `.ds_contact-details__title` - Section title
- `.ds_contact-details__item` - Individual contact item
- `.ds_contact-details__social-item` - Social media items
- `.ds_contact-details__social-icon` - Social media icons
- `.ds_contact-details__social-link` - Social media links
- `.ds_contact-details__social-context` - Additional social media context
- `.ds_contact-details-grid` - Two-column layout grid
- `.ds_contact-details__list` - Contact list in two-column layout
- `.ds_break-word` - Word breaking for long text (emails)

## Examples

See the Storybook stories for comprehensive examples of all contact types and layouts.
