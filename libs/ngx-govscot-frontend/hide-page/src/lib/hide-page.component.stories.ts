import type { Meta, StoryObj } from '@storybook/angular';
import { GovScotHidePageComponent } from './hide-page.component';

const meta: Meta<GovScotHidePageComponent> = {
  title: 'Components/Hide Page',
  component: GovScotHidePageComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
The Hide Page component is a safety feature that helps users exit a service, website or application quickly and safely. 

It's designed for victims of domestic abuse or other vulnerable users viewing sensitive content.

## Features
- Prominent red button that's always visible
- Keyboard support (Esc key)
- Opens new tab and redirects current page
- Removes page from browser history
- Accessible with screen reader support

## When to use
- Pages where viewing content could put someone in danger
- Services containing sensitive information that could alert potential abusers
- Any content that says something about a potential victim's plans

## Accessibility
- Uses escape key for quick access
- Includes aria-label for assistive technology
- Provides visually hidden instructions for screen readers
        `,
      },
    },
    layout: 'centered',
  },
  argTypes: {
    redirectUrl: {
      control: 'text',
      description: 'URL to redirect the current tab to',
    },
    newTabUrl: {
      control: 'text',
      description: 'URL to open in new tab',
    },
    classes: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    ariaLabel: {
      control: 'text',
      description: 'Aria label for the button',
    },
    showEscText: {
      control: 'boolean',
      description: 'Show the text instruction about Esc key',
    },
  },
};

export default meta;
type Story = StoryObj<GovScotHidePageComponent>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Default hide page button with standard URLs (Google and BBC Weather).',
      },
    },
  },
};

export const CustomUrls: Story = {
  args: {
    redirectUrl: 'https://www.bbc.co.uk',
    newTabUrl: 'https://www.gov.uk',
  },
  parameters: {
    docs: {
      description: {
        story: 'Hide page button with custom redirect and new tab URLs.',
      },
    },
  },
};

export const WithCustomAriaLabel: Story = {
  args: {
    ariaLabel: 'Emergency exit - leave this page immediately',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Hide page button with custom aria label for better accessibility.',
      },
    },
  },
};

export const WithCustomClasses: Story = {
  args: {
    classes: 'my-custom-hide-page',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Hide page button with additional CSS classes for custom styling.',
      },
    },
  },
};

export const WithoutEscText: Story = {
  args: {
    showEscText: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Hide page button without the escape key instruction text (note: this is not recommended for accessibility).',
      },
    },
  },
};

export const DomesticViolenceService: Story = {
  args: {
    redirectUrl: 'https://www.google.com',
    newTabUrl: 'https://www.bbc.co.uk/news',
    ariaLabel: 'Quickly and safely leave this domestic violence support page',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Example usage for a domestic violence support service with descriptive aria label.',
      },
    },
  },
};

export const MentalHealthSupport: Story = {
  args: {
    redirectUrl: 'https://www.google.com',
    newTabUrl: 'https://www.bbc.co.uk/weather',
    ariaLabel: 'Exit mental health support page safely',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example usage for a mental health support service.',
      },
    },
  },
};

export const WithAllOptions: Story = {
  args: {
    redirectUrl: 'https://www.nhs.uk',
    newTabUrl: 'https://www.bbc.co.uk/sport',
    classes: 'urgent-exit',
    ariaLabel: 'Emergency exit from sensitive content',
    showEscText: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Hide page button showcasing all available options and customizations.',
      },
    },
  },
};
