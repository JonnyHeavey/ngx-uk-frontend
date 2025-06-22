import type { Meta, StoryObj } from '@storybook/angular';
import { GovScotNotificationBannerComponent } from './notification-banner.component';

const meta: Meta<GovScotNotificationBannerComponent> = {
  title: 'GovScot/Notification Banner',
  component: GovScotNotificationBannerComponent,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'The text content of the notification banner',
    },
    showClose: {
      control: 'boolean',
      description: 'Whether to show the close button',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show an icon',
    },
    icon: {
      control: 'text',
      description: 'The icon to display (when showIcon is true)',
    },
    iconInverse: {
      control: 'boolean',
      description: 'Whether to use the inverse icon style',
    },
    iconColour: {
      control: 'boolean',
      description: 'Whether to use the colored icon style',
    },
    reversed: {
      control: 'boolean',
      description: 'Whether the banner is reversed (dark background)',
    },
    closed: {
      action: 'closed',
      description: 'Event emitted when the close button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<GovScotNotificationBannerComponent>;

export const Default: Story = {
  args: {
    text: 'We need to tell you about <a href="#">something</a>',
    showClose: true,
    showIcon: false,
    reversed: true,
  },
};

export const WithIcon: Story = {
  args: {
    text: 'Something bad has <a href="#">happened</a>',
    showClose: true,
    showIcon: true,
    icon: 'priority_high',
    iconInverse: true,
    iconColour: true,
    reversed: true,
  },
};

export const WithoutCloseButton: Story = {
  args: {
    text: 'This is an important message that cannot be dismissed',
    showClose: false,
    showIcon: false,
    reversed: true,
  },
};

export const WithProjectedContent: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-notification-banner 
        [showClose]="showClose"
        [showIcon]="showIcon"
        [reversed]="reversed"
        (closed)="closed($event)">
        <p>We need to tell you about <a href="#">something important</a></p>
        <p>This is additional content projected into the banner.</p>
      </ngx-govscot-notification-banner>
    `,
  }),
  args: {
    showClose: true,
    showIcon: false,
    reversed: true,
  },
};

export const IconOnly: Story = {
  args: {
    text: 'Warning: Please review your application',
    showClose: true,
    showIcon: true,
    icon: 'priority_high',
    iconInverse: false,
    iconColour: true,
    reversed: true,
  },
};

export const NonReversed: Story = {
  args: {
    text: 'This is a notification with light background',
    showClose: true,
    showIcon: false,
    reversed: false,
  },
};
