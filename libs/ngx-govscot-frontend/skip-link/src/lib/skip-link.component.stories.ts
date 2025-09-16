import {
  argsToTemplate,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovScotSkipLinkComponent } from './skip-link.component';

const meta: Meta<GovScotSkipLinkComponent> = {
  component: GovScotSkipLinkComponent,
  title: 'Skip Link/GovScotSkipLinkComponent',
  argTypes: {
    href: {
      control: 'text',
      description: 'The target ID to skip to',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
The skip link component helps keyboard-only users skip to the main content on a page. 
It is visually hidden on page load and revealed when users navigate to it with their keyboard.

This component must be used on all Scottish Government websites to meet WCAG AA accessibility requirements.
        `,
      },
    },
  },
};
export default meta;
type Story = StoryObj<GovScotSkipLinkComponent>;

const Template: StoryFn<GovScotSkipLinkComponent> = (args) => ({
  props: { ...args },
  template: `<ngx-govscot-skip-link ${argsToTemplate(args)}>Skip to main content</ngx-govscot-skip-link>`,
});

export const Default: Story = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'The default skip link component with the recommended "Skip to main content" text and default href to #main-content.',
      },
    },
  },
};

export const CustomHref: Story = {
  render: Template,
  args: {
    href: '#content',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Skip link with a custom href target. You can point to any element ID on the page.',
      },
    },
  },
};

export const CustomText: Story = {
  render: () => ({
    template: `
      <ngx-govscot-skip-link href="#main-content">
        Skip to content
      </ngx-govscot-skip-link>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Skip link with custom text content. However, "Skip to main content" is recommended as screen readers pronounce it correctly.',
      },
    },
  },
};

export const MultipleSkipLinks: Story = {
  render: () => ({
    template: `
      <div style="margin-bottom: 20px;">
        <ngx-govscot-skip-link href="#main-content">
          Skip to main content
        </ngx-govscot-skip-link>
      </div>
      <div>
        <ngx-govscot-skip-link href="#navigation">
          Skip to navigation
        </ngx-govscot-skip-link>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Multiple skip links can be used to provide users with options to skip to different parts of the page.',
      },
    },
  },
};

export const InPageContext: Story = {
  render: () => ({
    template: `
      <div style="background: #f8f8f8; padding: 20px; border: 1px solid #ccc;">
        <h3>Page Header Area</h3>
        <ngx-govscot-skip-link href="#main-content">
          Skip to main content
        </ngx-govscot-skip-link>
        <nav style="margin: 20px 0; padding: 20px; background: #e8e8e8;">
          <h4>Navigation (would be skipped)</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <main id="main-content" style="padding: 20px; background: #fff; border: 2px solid #0065bd;">
          <h4>Main Content (skip target)</h4>
          <p>This is where the user would land after using the skip link.</p>
          <p>The skip link helps keyboard users bypass navigation and other repeated elements.</p>
        </main>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Example showing how the skip link works in the context of a page layout. The skip link should be placed immediately after the opening body tag.',
      },
    },
  },
};
