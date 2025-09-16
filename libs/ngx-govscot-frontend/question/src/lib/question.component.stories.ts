import type { Meta, StoryObj } from '@storybook/angular';
import { GovScotQuestionComponent } from './question.component';

const meta: Meta<GovScotQuestionComponent> = {
  title: 'GovScot/Question',
  component: GovScotQuestionComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text for the question',
    },
    labelFor: {
      control: 'text',
      description: 'The ID of the form control this label is for',
    },
    hint: {
      control: 'text',
      description: 'Optional hint text to help users',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display when validation fails',
    },
    isPageTitle: {
      control: 'boolean',
      description: 'Whether the label should be styled as a page title',
    },
  },
};

export default meta;
type Story = StoryObj<GovScotQuestionComponent>;

export const Default: Story = {
  args: {
    label: 'What is your name?',
    labelFor: 'name',
  },
};

export const WithHint: Story = {
  args: {
    label: 'What is your National Insurance number?',
    labelFor: 'ni-number',
    hint: 'For example, QQ123456A',
  },
};

export const WithError: Story = {
  args: {
    label: 'What is your email address?',
    labelFor: 'email',
    errorMessage: 'Enter a valid email address',
  },
};

export const AsPageTitle: Story = {
  args: {
    label: 'Are you a British citizen?',
    labelFor: 'citizenship',
    isPageTitle: true,
  },
};
