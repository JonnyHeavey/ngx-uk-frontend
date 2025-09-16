import type { Meta, StoryObj } from '@storybook/angular';
import { GovScotPaginationComponent } from './pagination.component';

const meta: Meta<GovScotPaginationComponent> = {
  title: 'Components/Pagination',
  component: GovScotPaginationComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The pagination component helps users navigate through large groups of content that are separated into pages.

## Features

- **Page navigation**: Click on page numbers to jump directly to specific pages
- **Previous/Next navigation**: Navigate sequentially through pages
- **Ellipsis handling**: Shows ellipsis (...) when there are many pages
- **Current page indication**: Clearly marks the current active page
- **Accessibility**: Full keyboard navigation and screen reader support
- **Customizable labels**: Support for different languages and custom text

## Usage

Use pagination when you have a large set of content items that need to be divided into pages. This is most effective when users are looking for specific content items and want to navigate directly to particular pages.

## When to use

- Search results with many items
- Lists of documents or articles
- Data tables with many rows
- Any content collection that would be overwhelming to display all at once

## When not to use

- For sequential content that should be read in order (use sequential navigation instead)
- For unrelated pages (use regular navigation instead)
- When there are very few items (less than one page worth)
        `,
      },
    },
  },
  argTypes: {
    itemCount: {
      control: { type: 'number', min: 0, max: 10000, step: 1 },
      description: 'Total number of items to paginate',
    },
    itemsPerPage: {
      control: { type: 'number', min: 1, max: 100, step: 1 },
      description: 'Number of items to show per page',
    },
    currentPage: {
      control: { type: 'number', min: 1, max: 100, step: 1 },
      description: 'Current active page (1-based)',
    },
    previousTitle: {
      control: { type: 'text' },
      description: 'Text for the previous button',
    },
    nextTitle: {
      control: { type: 'text' },
      description: 'Text for the next button',
    },
    pageChange: {
      action: 'pageChange',
      description: 'Emitted when a page number is clicked',
    },
    previousClick: {
      action: 'previousClick',
      description: 'Emitted when the previous button is clicked',
    },
    nextClick: {
      action: 'nextClick',
      description: 'Emitted when the next button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<GovScotPaginationComponent>;

/**
 * Default pagination with a moderate number of pages.
 * Shows the basic functionality with page numbers, previous/next buttons.
 */
export const Default: Story = {
  args: {
    itemCount: 100,
    itemsPerPage: 10,
    currentPage: 1,
    previousTitle: 'Previous',
    nextTitle: 'Next',
  },
};

/**
 * Pagination with few pages (7 or fewer).
 * All page numbers are shown without ellipsis.
 */
export const FewPages: Story = {
  args: {
    itemCount: 50,
    itemsPerPage: 10,
    currentPage: 3,
    previousTitle: 'Previous',
    nextTitle: 'Next',
  },
  parameters: {
    docs: {
      description: {
        story:
          'When there are 7 or fewer pages, all page numbers are displayed without ellipsis.',
      },
    },
  },
};

/**
 * Pagination with many pages showing ellipsis.
 * Demonstrates how the component handles large numbers of pages.
 */
export const ManyPages: Story = {
  args: {
    itemCount: 1000,
    itemsPerPage: 10,
    currentPage: 50,
    previousTitle: 'Previous',
    nextTitle: 'Next',
  },
  parameters: {
    docs: {
      description: {
        story:
          'With many pages, ellipsis (...) are used to indicate skipped pages. The first and last pages are always shown.',
      },
    },
  },
};

/**
 * Single page scenario.
 * When there's only one page, no navigation controls are shown.
 */
export const SinglePage: Story = {
  args: {
    itemCount: 8,
    itemsPerPage: 10,
    currentPage: 1,
    previousTitle: 'Previous',
    nextTitle: 'Next',
  },
  parameters: {
    docs: {
      description: {
        story:
          'When there is only one page of content, only the current page number is shown without navigation controls.',
      },
    },
  },
};

/**
 * Pagination with custom labels.
 * Demonstrates support for different languages or custom text.
 */
export const CustomLabels: Story = {
  args: {
    itemCount: 200,
    itemsPerPage: 20,
    currentPage: 5,
    previousTitle: 'Roimhe',
    nextTitle: 'Air adhart',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The pagination component supports custom labels for previous and next buttons, useful for internationalization.',
      },
    },
  },
};
