import { type Meta, type StoryObj } from '@storybook/angular';
import { GovScotWarningTextComponent } from './warning-text.component';

const meta: Meta<GovScotWarningTextComponent> = {
  component: GovScotWarningTextComponent,
  title: 'Warning Text/GovScotWarningTextComponent',
};
export default meta;
type Story = StoryObj<GovScotWarningTextComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <ngx-govscot-warning-text>
        Call 999 if you or someone else is in immediate danger, or if the crime is in progress.
      </ngx-govscot-warning-text>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'The default warning text component. Use it to tell users about something important - an action they need to take, or something they need to know.',
      },
    },
  },
};

export const ShortWarning: Story = {
  render: () => ({
    template: `
      <ngx-govscot-warning-text>
        You must be 18 or over to apply.
      </ngx-govscot-warning-text>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'A shorter warning message for simple but important information.',
      },
    },
  },
};

export const ActionRequired: Story = {
  render: () => ({
    template: `
      <ngx-govscot-warning-text>
        You must submit your application by 5pm on 31 December 2024.
      </ngx-govscot-warning-text>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Warning text for time-sensitive actions that users need to take.',
      },
    },
  },
};

export const LegalRequirement: Story = {
  render: () => ({
    template: `
      <ngx-govscot-warning-text>
        It's an offence not to register an air weapon. You could be fined up to £1,000.
      </ngx-govscot-warning-text>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Warning text for legal requirements or consequences.',
      },
    },
  },
};
