import type { Meta, StoryObj } from '@storybook/angular';
import { GovScotNotificationPanelComponent } from './notification-panel.component';

const meta: Meta<GovScotNotificationPanelComponent> = {
  title: 'Scottish Government/Notification Panel',
  component: GovScotNotificationPanelComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description:
        'The title text displayed in the notification panel (required)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
A highlight block that shows the user important information after they have completed a task, such as a success message.

Based on the Scottish Government Design System, notification panels present important content when a task completes. Use them on confirmation pages to tell users both that they have completed the thing they wanted to do and the outcome.

## When to use this component

- To tell users when they complete a task they started, such as submitting a form
- On confirmation pages after successful task completion
- To display important completion information prominently

## When not to use this component

- If a page still has further actions a user can take
- When further form fields remain on the page after submitting changes
- For error messages or warnings (use appropriate error components instead)

## Design System Guidelines

- Place at the top of the main content, either as the page's main heading or immediately after it
- Only use one notification panel per page
- Keep titles short and high-level explanations of what has happened
- Do not include buttons or links in the notification panel's content
- For dynamic panels, add \`role="alert"\` to help screen readers

## Accessibility

- Uses H1 heading for the title when used as page's main heading
- Can use different heading levels if page already has H1
- Supports \`role="alert"\` for dynamically added panels
- Maintains proper semantic structure
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<GovScotNotificationPanelComponent>;

export const Default: Story = {
  args: {
    title: 'Thank you',
  },
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-notification-panel [title]="title">
        <p>Your Saltire Scholarship Application form has been successfully submitted.</p>
      </ngx-govscot-notification-panel>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Basic notification panel showing a successful form submission. This matches the first example from the Scottish Government Design System.',
      },
    },
  },
};

export const WithReferenceNumber: Story = {
  args: {
    title: 'Application complete',
  },
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-notification-panel [title]="title">
        <p>Your reference number is <br><strong class="beta">SG0123456</strong></p>
      </ngx-govscot-notification-panel>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Notification panel with a reference number that users need to record. This matches the second example from the Scottish Government Design System.',
      },
    },
  },
};

export const CorporationTaxSubmission: Story = {
  render: () => ({
    template: `
      <ngx-govscot-notification-panel title="Corporation Tax registration submitted">
        <p>Your Corporation Tax registration has been successfully submitted.</p>
        <p>Your reference number is <strong>CT-2024-001234</strong></p>
      </ngx-govscot-notification-panel>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Example of notification panel for Corporation Tax registration submission with reference number.',
      },
    },
  },
};

export const PaymentConfirmation: Story = {
  render: () => ({
    template: `
      <ngx-govscot-notification-panel title="Payment successful">
        <p>Your payment of £150.00 has been processed successfully.</p>
        <p>Transaction ID: <strong>TXN-789456123</strong></p>
        <p>You will receive a confirmation email within 24 hours.</p>
      </ngx-govscot-notification-panel>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Payment confirmation with transaction details and follow-up information.',
      },
    },
  },
};

export const BusinessLicenceApproval: Story = {
  render: () => ({
    template: `
      <ngx-govscot-notification-panel title="Business licence approved">
        <p>Your business licence application has been approved.</p>
        <p>Licence number: <strong>BL-2024-SCT-7891</strong></p>
        <p>Your licence is valid from today until 31 March 2025.</p>
      </ngx-govscot-notification-panel>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Business licence approval notification with licence details and validity period.',
      },
    },
  },
};

export const VATRegistrationComplete: Story = {
  render: () => ({
    template: `
      <ngx-govscot-notification-panel title="VAT registration complete">
        <p>Your VAT registration has been completed successfully.</p>
        <p>VAT number: <strong>GB 123 4567 89</strong></p>
        <p>You can now charge VAT on your goods and services.</p>
      </ngx-govscot-notification-panel>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'VAT registration completion with VAT number and next steps information.',
      },
    },
  },
};

export const GrantApplicationSubmitted: Story = {
  render: () => ({
    template: `
      <ngx-govscot-notification-panel title="Grant application submitted">
        <p>Your Small Business Support Grant application has been submitted.</p>
        <p>Application reference: <strong>SBSG-2024-0987</strong></p>
        <p>You will receive a decision within 28 working days.</p>
      </ngx-govscot-notification-panel>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Grant application submission with reference and timeline information.',
      },
    },
  },
};

export const PermitRenewal: Story = {
  render: () => ({
    template: `
      <ngx-govscot-notification-panel title="Permit renewed successfully">
        <p>Your environmental permit has been renewed.</p>
        <p>New permit number: <strong>EP-2024-REN-456</strong></p>
        <p>Valid until: <strong>15 December 2027</strong></p>
        <p>A confirmation letter will be posted to your registered address.</p>
      </ngx-govscot-notification-panel>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Permit renewal confirmation with new permit details and follow-up actions.',
      },
    },
  },
};

export const AppealSubmission: Story = {
  render: () => ({
    template: `
      <ngx-govscot-notification-panel title="Appeal submitted">
        <p>Your planning decision appeal has been submitted to the Scottish Government.</p>
        <p>Appeal reference: <strong>PL-APP-2024-3456</strong></p>
        <p>The appeal process typically takes 12-16 weeks.</p>
      </ngx-govscot-notification-panel>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Appeal submission notification with reference and process timeline.',
      },
    },
  },
};

export const LongTitleExample: Story = {
  render: () => ({
    template: `
      <ngx-govscot-notification-panel title="Your Social Security Scotland application has been successfully processed">
        <p>Thank you for submitting your application.</p>
        <p>Reference number: <strong>SSS-2024-9876543</strong></p>
        <p>You will be contacted within 21 days if we need additional information.</p>
      </ngx-govscot-notification-panel>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Example with a longer title to demonstrate text wrapping behavior on smaller devices.',
      },
    },
  },
};

export const AccessibilityExample: Story = {
  render: () => ({
    template: `
      <div>
        <p>This example shows how the notification panel can be used with role="alert" for dynamic content:</p>
        <ngx-govscot-notification-panel title="Form saved" role="alert">
          <p>Your form has been automatically saved.</p>
          <p>Last saved: <strong>14:35 on 15 January 2024</strong></p>
        </ngx-govscot-notification-panel>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Example showing accessibility features including role="alert" for dynamically added panels.',
      },
    },
  },
};
