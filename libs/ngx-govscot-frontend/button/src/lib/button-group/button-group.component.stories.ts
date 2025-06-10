import {
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovScotButtonComponent } from '../button/button.component';
import { GovScotButtonGroupComponent } from './button-group.component';

const meta: Meta<GovScotButtonGroupComponent> = {
  component: GovScotButtonGroupComponent,
  title: 'Button/GovScotButtonGroupComponent',
  decorators: [
    moduleMetadata({
      imports: [GovScotButtonComponent],
    }),
  ],
};
export default meta;
type Story = StoryObj<GovScotButtonGroupComponent>;

const Template: StoryFn<GovScotButtonGroupComponent> = (args) => ({
  props: { ...args },
  template: `<ngx-govscot-button-group>
    <ngx-govscot-button>Save changes</ngx-govscot-button>
    <ngx-govscot-button color="cancel">Cancel</ngx-govscot-button>
  </ngx-govscot-button-group>`,
});

export const StandardButtonGroup: Story = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'A standard button group with a primary and cancel button. Primary buttons should be last in a button grouping.',
      },
    },
  },
};

export const InlineButtonGroup: Story = {
  render: Template,
  args: {
    inline: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A button group that always remains on a single row. At mobile sizes, the contents take up the full available width.',
      },
    },
  },
};

export const PrimaryAndSecondary: Story = {
  render: () => ({
    template: `<ngx-govscot-button-group>
      <ngx-govscot-button color="secondary">Save as draft</ngx-govscot-button>
      <ngx-govscot-button>Save and continue</ngx-govscot-button>
    </ngx-govscot-button-group>`,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'A button group with a secondary and primary button, often used for draft and continue actions.',
      },
    },
  },
};

export const ThreeButtons: Story = {
  render: () => ({
    template: `<ngx-govscot-button-group>
      <ngx-govscot-button color="cancel">Cancel</ngx-govscot-button>
      <ngx-govscot-button color="secondary">Save as draft</ngx-govscot-button>
      <ngx-govscot-button>Save and continue</ngx-govscot-button>
    </ngx-govscot-button-group>`,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'A button group with three buttons, showing how multiple actions can be presented together.',
      },
    },
  },
};

export const SmallButtons: Story = {
  render: () => ({
    template: `<ngx-govscot-button-group>
      <ngx-govscot-button size="small" color="secondary">Accept all cookies</ngx-govscot-button>
      <ngx-govscot-button size="small" color="secondary">Use essential cookies only</ngx-govscot-button>
    </ngx-govscot-button-group>`,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'A button group with small buttons, useful in contexts like cookie banners where space is limited.',
      },
    },
  },
};

export const MixedContent: Story = {
  render: () => ({
    template: `<ngx-govscot-button-group>
      <ngx-govscot-button color="secondary">Accept all cookies</ngx-govscot-button>
      <ngx-govscot-button color="secondary">Use essential cookies only</ngx-govscot-button>
      <a href="#">Set cookie preferences</a>
    </ngx-govscot-button-group>`,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'A button group with mixed content including buttons and links. Links should be placed after all other button styles.',
      },
    },
  },
};
