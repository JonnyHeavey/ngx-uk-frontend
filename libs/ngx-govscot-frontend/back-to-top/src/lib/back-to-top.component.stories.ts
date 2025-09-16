import type { Meta, StoryObj } from '@storybook/angular';
import { GovScotBackToTopComponent } from './back-to-top.component';

const meta: Meta<GovScotBackToTopComponent> = {
  title: 'Components/Back to Top',
  component: GovScotBackToTopComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A link that allows users to navigate back to the top of the page with a single click. 
The link improves navigation for users on long pages of content and on mobile devices.

This component follows the Scottish Government Design System specifications and appears when the user scrolls down the page.
        `,
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    scrollThreshold: {
      control: { type: 'number', min: 0, max: 1000, step: 50 },
      description: 'Scroll distance in pixels before button appears',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label for accessibility',
    },
    buttonText: {
      control: 'text',
      description: 'Text displayed on the button',
    },
  },
};

export default meta;
type Story = StoryObj<GovScotBackToTopComponent>;

const longContentTemplate = `
  <div style="padding: 20px;">
    <h1>Long Page Content</h1>
    <p>This is a long page to demonstrate the back to top functionality. Scroll down to see the button appear.</p>
    ${Array.from(
      { length: 50 },
      (_, i) => `
      <p>This is paragraph ${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    `,
    ).join('')}
  </div>
`;

export const Default: Story = {
  args: {
    scrollThreshold: 200,
    ariaLabel: 'Back to top of page',
    buttonText: 'Back to top',
  },
  render: (args) => ({
    props: args,
    template: `
      ${longContentTemplate}
      <ngx-govscot-back-to-top 
        [scrollThreshold]="scrollThreshold"
        [ariaLabel]="ariaLabel"
        [buttonText]="buttonText">
      </ngx-govscot-back-to-top>
    `,
  }),
};

export const CustomThreshold: Story = {
  args: {
    scrollThreshold: 500,
    ariaLabel: 'Back to top of page',
    buttonText: 'Back to top',
  },
  render: (args) => ({
    props: args,
    template: `
      ${longContentTemplate}
      <ngx-govscot-back-to-top 
        [scrollThreshold]="scrollThreshold"
        [ariaLabel]="ariaLabel"
        [buttonText]="buttonText">
      </ngx-govscot-back-to-top>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Back to top button with a higher scroll threshold (500px).',
      },
    },
  },
};

export const CustomText: Story = {
  args: {
    scrollThreshold: 200,
    ariaLabel: 'Return to page top',
    buttonText: 'Top',
  },
  render: (args) => ({
    props: args,
    template: `
      ${longContentTemplate}
      <ngx-govscot-back-to-top 
        [scrollThreshold]="scrollThreshold"
        [ariaLabel]="ariaLabel"
        [buttonText]="buttonText">
      </ngx-govscot-back-to-top>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Back to top button with custom button text and aria label.',
      },
    },
  },
};

export const LowThreshold: Story = {
  args: {
    scrollThreshold: 100,
    ariaLabel: 'Back to top of page',
    buttonText: 'Back to top',
  },
  render: (args) => ({
    props: args,
    template: `
      ${longContentTemplate}
      <ngx-govscot-back-to-top 
        [scrollThreshold]="scrollThreshold"
        [ariaLabel]="ariaLabel"
        [buttonText]="buttonText">
      </ngx-govscot-back-to-top>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Back to top button that appears quickly after just 100px of scrolling.',
      },
    },
  },
};
