import { provideRouter } from '@angular/router';
import type { Meta, StoryObj } from '@storybook/angular';
import {
  GovScotSequentialNavigationComponent,
  SequentialNavigationItem,
} from './sequential-navigation.component';

const meta: Meta<GovScotSequentialNavigationComponent> = {
  title: 'GovScot/Sequential Navigation',
  component: GovScotSequentialNavigationComponent,
  tags: ['autodocs'],
  decorators: [
    (story) => ({
      template: `<div style="margin: 20px;">${story}</div>`,
      providers: [provideRouter([])],
    }),
  ],
  argTypes: {
    previous: {
      description: 'Previous navigation item with text and link',
      control: { type: 'object' },
    },
    next: {
      description: 'Next navigation item with text and link',
      control: { type: 'object' },
    },
    ariaLabel: {
      description: 'Aria label for the navigation element',
      control: { type: 'text' },
    },
    classes: {
      description: 'Additional CSS classes to apply',
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<GovScotSequentialNavigationComponent>;

const previousItem: SequentialNavigationItem = {
  text: 'Apply for or renew a Blue Badge',
  link: '/blue-badge/apply',
};

const nextItem: SequentialNavigationItem = {
  text: 'Eligibility: who can have one?',
  link: '/blue-badge/eligibility',
};

export const Default: Story = {
  args: {
    previous: previousItem,
    next: nextItem,
  },
};

export const PreviousOnly: Story = {
  args: {
    previous: previousItem,
  },
};

export const NextOnly: Story = {
  args: {
    next: nextItem,
  },
};

export const LongTitles: Story = {
  args: {
    previous: {
      text: 'How to apply for a Blue Badge if you have a permanent disability or health condition',
      link: '/blue-badge/apply-permanent-disability',
    },
    next: {
      text: 'Understanding the eligibility criteria and requirements for Blue Badge applications',
      link: '/blue-badge/eligibility-criteria',
    },
  },
};

export const GuidanceNavigation: Story = {
  args: {
    previous: {
      text: 'What you need to know before applying',
      link: '/guidance/before-applying',
    },
    next: {
      text: 'How to complete your application',
      link: '/guidance/completing-application',
    },
    ariaLabel: 'Guidance navigation',
  },
};

export const ServiceNavigation: Story = {
  args: {
    previous: {
      text: 'Check if you need a licence',
      link: '/licence/check',
    },
    next: {
      text: 'Apply for your licence online',
      link: '/licence/apply',
    },
    ariaLabel: 'Service navigation',
  },
};

export const PolicyNavigation: Story = {
  args: {
    previous: {
      text: 'Policy background and context',
      link: '/policy/background',
    },
    next: {
      text: 'Implementation timeline',
      link: '/policy/timeline',
    },
    ariaLabel: 'Policy document navigation',
  },
};

export const WithCustomClasses: Story = {
  args: {
    previous: previousItem,
    next: nextItem,
    classes: 'custom-sequential-nav',
  },
};

export const ArrayBasedRouting: Story = {
  args: {
    previous: {
      text: 'Previous section',
      link: ['/section', 'previous'],
    },
    next: {
      text: 'Next section',
      link: ['/section', 'next'],
    },
    ariaLabel: 'Section navigation',
  },
};
