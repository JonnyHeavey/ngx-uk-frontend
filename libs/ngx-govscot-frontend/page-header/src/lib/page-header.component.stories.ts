import type { Meta, StoryObj } from '@storybook/angular';
import { GovScotPageHeaderComponent } from './page-header.component';

const meta: Meta<GovScotPageHeaderComponent> = {
  title: 'GovScot/Page Header',
  component: GovScotPageHeaderComponent,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The content type label (e.g., "Guide", "Article")',
    },
    title: {
      control: 'text',
      description: 'The main title/heading of the page (H1)',
    },
    metadata: {
      control: 'object',
      description: 'Optional metadata items to display below the title',
    },
    classes: {
      control: 'text',
      description: 'Additional CSS classes to apply to the page header',
    },
  },
};

export default meta;
type Story = StoryObj<GovScotPageHeaderComponent>;

export const Default: Story = {
  args: {
    title: 'Apply for or renew a disabled parking permit',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Guide',
    title: 'Apply for or renew a disabled parking permit',
  },
};

export const WithMetadata: Story = {
  args: {
    label: 'Guide',
    title: 'Apply for or renew a disabled parking permit',
    metadata: [{ key: 'Last updated', value: '8 November 2016' }],
  },
};

export const WithMultipleMetadata: Story = {
  args: {
    label: 'Article',
    title: 'Scottish Government announces new environmental policies',
    metadata: [
      { key: 'Published', value: '15 March 2024' },
      { key: 'Last updated', value: '22 March 2024' },
      { key: 'Category', value: 'Environment' },
    ],
  },
};

export const NewsArticle: Story = {
  args: {
    label: 'News',
    title: 'First Minister announces investment in renewable energy',
    metadata: [
      { key: 'Published', value: '10 April 2024' },
      { key: 'Author', value: 'Scottish Government Press Office' },
    ],
  },
};

export const ServicePage: Story = {
  args: {
    label: 'Service',
    title: 'Register for Corporation Tax',
    metadata: [
      { key: 'Service type', value: 'Online application' },
      { key: 'Processing time', value: '10 working days' },
    ],
  },
};

export const LongTitle: Story = {
  args: {
    label: 'Policy',
    title:
      "Scotland's comprehensive strategy for sustainable development and environmental protection in the 21st century",
    metadata: [
      { key: 'Published', value: '1 January 2024' },
      { key: 'Document type', value: 'Policy paper' },
    ],
  },
};

export const MinimalExample: Story = {
  args: {
    title: 'Contact us',
  },
};
