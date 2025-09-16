import {
  argsToTemplate,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovScotButtonComponent } from './button.component';

const meta: Meta<GovScotButtonComponent> = {
  component: GovScotButtonComponent,
  title: 'Button/GovScotButtonComponent',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'cancel', 'link'],
      control: { type: 'select' },
    },
    size: {
      options: ['default', 'small'],
      control: { type: 'select' },
    },
    width: {
      options: ['flexible', 'fixed', 'max'],
      control: { type: 'select' },
    },
  },
};
export default meta;
type Story = StoryObj<GovScotButtonComponent>;

const Template: StoryFn<GovScotButtonComponent> = (args) => ({
  props: { ...args },
  template: `<ngx-govscot-button ${argsToTemplate(args)}>Start now</ngx-govscot-button>`,
});

export const Primary: Story = {
  render: Template,
  args: {
    color: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The default primary button style. Use this for your main call to action. Use only one primary button on a page.',
      },
    },
  },
};

export const Secondary: Story = {
  render: Template,
  args: {
    color: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use a secondary button for most other actions. It has less visual prominence than the primary and cancel buttons.',
      },
    },
  },
};

export const Cancel: Story = {
  render: Template,
  args: {
    color: 'cancel',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use this button for actions that cancel or abandon an action. A cancel button is usually grouped with a primary button.',
      },
    },
  },
};

export const Link: Story = {
  render: Template,
  args: {
    color: 'link',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Buttons can be styled as links. Use sparingly - only when all other button types would be too visually prominent.',
      },
    },
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use this style for buttons in a disabled state. Only include them if user research shows they are helpful.',
      },
    },
  },
};

export const Small: Story = {
  render: Template,
  args: {
    size: 'small',
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can use a small button when space is limited or the action is not the primary action on a page.',
      },
    },
  },
};

export const FixedWidth: Story = {
  render: Template,
  args: {
    width: 'fixed',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use fixed-width buttons to force uniformity in button widths. Button text will wrap onto multiple lines if there is insufficient space.',
      },
    },
  },
};

export const MaxWidth: Story = {
  render: Template,
  args: {
    width: 'max',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Use maximum-width buttons for large buttons. These will fill the width of small screens, up to a maximum width of 480px.',
      },
    },
  },
};

export const WithIcon: Story = {
  render: () => ({
    template: `
      <ngx-govscot-button [hasIcon]="true">
        Search
        <svg slot="icon-right" class="ds_icon" aria-hidden="true" role="img">
          <use href="/assets/images/icons/icons.stack.svg#search"></use>
        </svg>
      </ngx-govscot-button>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'You can add an icon to a button to make an action clearer and help users scan the page. Icons should be recognisable and directly relate to the button action.',
      },
    },
  },
};

export const WithLeftIcon: Story = {
  render: () => ({
    template: `
      <ngx-govscot-button [hasIcon]="true" [iconLeft]="true">
        <svg slot="icon-left" class="ds_icon" aria-hidden="true" role="img">
          <use href="/assets/images/icons/icons.stack.svg#chevron_left"></use>
        </svg>
        Back
      </ngx-govscot-button>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Icons can be aligned to either side of the button. This example shows a left-aligned icon.',
      },
    },
  },
};

export const IconOnly: Story = {
  render: () => ({
    template: `
      <ngx-govscot-button>
        <span class="visually-hidden">Search</span>
        <svg class="ds_icon" aria-hidden="true" role="img">
          <use href="/assets/images/icons/icons.stack.svg#search"></use>
        </svg>
      </ngx-govscot-button>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Buttons can contain an icon with no visible text. Use icon-only buttons where space is limited. Make sure users of assistive technology can understand what the button does.',
      },
    },
  },
};
