import type { Meta, StoryObj } from '@storybook/angular';
import {
  GovScotPageMetadataComponent,
  MetadataItem,
} from './page-metadata.component';

const meta: Meta<GovScotPageMetadataComponent> = {
  title: 'GovScot/Page Metadata',
  component: GovScotPageMetadataComponent,
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of metadata items to display',
      control: { type: 'object' },
    },
    inline: {
      description: 'Whether to display metadata inline (shortened version)',
      control: { type: 'boolean' },
    },
    classes: {
      description: 'Additional CSS classes to apply',
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<GovScotPageMetadataComponent>;

const basicItems: MetadataItem[] = [
  { key: 'Published', value: '16 April 2024' },
  {
    key: 'Directorate',
    value: 'Equality, Inclusion and Human Rights Directorate',
    href: '#',
  },
];

const multipleLinksItems: MetadataItem[] = [
  { key: 'Published', value: '16 April 2024' },
  {
    key: 'Directorate',
    value: 'Equality, Inclusion and Human Rights Directorate',
    href: '#',
  },
  { key: 'Part of', value: 'Equality and rights, Law and order' },
];

const publicationItems: MetadataItem[] = [
  { key: 'Published', value: '22 November 2023' },
  { key: 'Last updated', value: '15 January 2024' },
  { key: 'ISBN', value: '978-1-80525-123-4' },
  { key: 'Reference', value: 'GOV/2024/001' },
];

const inlineItems: MetadataItem[] = [
  { key: 'Type', value: 'Advice and guidance' },
  { key: 'Date', value: '22 April 2024' },
];

export const Default: Story = {
  args: {
    items: basicItems,
  },
};

export const WithMultipleLinks: Story = {
  args: {
    items: multipleLinksItems,
  },
};

export const Publication: Story = {
  args: {
    items: publicationItems,
  },
};

export const Inline: Story = {
  args: {
    items: inlineItems,
    inline: true,
  },
};

export const InlineWithLinks: Story = {
  args: {
    items: [
      { key: 'Type', value: 'Policy document', href: '#' },
      { key: 'Date', value: '18 March 2024' },
    ],
    inline: true,
  },
};

export const NewsArticle: Story = {
  args: {
    items: [
      { key: 'Published', value: '10 December 2024' },
      { key: 'Category', value: 'Health and social care', href: '#' },
      { key: 'Author', value: 'Scottish Government Communications' },
    ],
  },
};

export const ConsultationDocument: Story = {
  args: {
    items: [
      { key: 'Published', value: '5 November 2024' },
      { key: 'Consultation closes', value: '7 February 2025' },
      {
        key: 'Directorate',
        value: 'Environment and Climate Change Directorate',
        href: '#',
      },
      { key: 'Topic', value: 'Climate change', href: '#' },
    ],
  },
};

export const WithCustomClasses: Story = {
  args: {
    items: basicItems,
    classes: 'custom-metadata-class',
  },
};
