import {
  argsToTemplate,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovScotPhaseBannerComponent } from './phase-banner.component';

const meta: Meta<GovScotPhaseBannerComponent> = {
  component: GovScotPhaseBannerComponent,
  title: 'Phase Banner/GovScotPhaseBannerComponent',
  argTypes: {
    phase: {
      control: 'select',
      options: ['alpha', 'beta'],
      description: 'The phase of the service',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
The phase banner component lets users know that a website is being worked on or tested.

It should be included on a website when it is still in alpha or beta, describe what the phase status means, 
and be removed once the website has been made live.

Based on the Scottish Government Design System specifications.
        `,
      },
    },
  },
};
export default meta;
type Story = StoryObj<GovScotPhaseBannerComponent>;

const Template: StoryFn<GovScotPhaseBannerComponent> = (args) => ({
  props: { ...args },
  template: `
    <ngx-govscot-phase-banner ${argsToTemplate(args)}>
      This is a new service. Your <a href="#">feedback</a> will help us to improve it.
    </ngx-govscot-phase-banner>
  `,
});

export const Default: Story = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Default phase banner with beta phase and standard feedback message.',
      },
    },
  },
};

export const Alpha: Story = {
  render: Template,
  args: {
    phase: 'alpha',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Phase banner in alpha phase. Use this for very early stage services that are still being developed.',
      },
    },
  },
};

export const Beta: Story = {
  render: Template,
  args: {
    phase: 'beta',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Phase banner in beta phase. Use this for services that are live but still being improved.',
      },
    },
  },
};

export const CustomContent: Story = {
  render: () => ({
    template: `
      <ngx-govscot-phase-banner phase="alpha">
        This is a new website – your <a href="/feedback">feedback</a> will help us to improve it.
      </ngx-govscot-phase-banner>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Phase banner with custom content. You can include links and other HTML content.',
      },
    },
  },
};

export const TaxServiceExample: Story = {
  render: () => ({
    template: `
      <ngx-govscot-phase-banner phase="beta">
        This is a new tax service. Your <a href="/feedback">feedback</a> will help us to improve it.
      </ngx-govscot-phase-banner>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Example phase banner for a tax service, showing how to tailor the message to the specific service.',
      },
    },
  },
};

export const MultipleLinks: Story = {
  render: () => ({
    template: `
      <ngx-govscot-phase-banner phase="alpha">
        This is a new service. Your <a href="/feedback">feedback</a> will help us to improve it. 
        You can also <a href="/contact">contact us</a> for support.
      </ngx-govscot-phase-banner>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Phase banner with multiple links. Each link should have a distinct label for analytics tracking.',
      },
    },
  },
};

export const InPageContext: Story = {
  render: () => ({
    template: `
      <div style="min-height: 200px; border: 1px solid #ccc;">
        <ngx-govscot-phase-banner phase="beta">
          This is a new service. Your <a href="#">feedback</a> will help us to improve it.
        </ngx-govscot-phase-banner>
        
        <div style="padding: 20px; background: #f8f8f8;">
          <h2>Corporation Tax Registration</h2>
          <p>Register your company for Corporation Tax using this new digital service.</p>
          <p>The phase banner above shows that this service is still being improved based on user feedback.</p>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Example showing how the phase banner appears in the context of a page header area.',
      },
    },
  },
};
