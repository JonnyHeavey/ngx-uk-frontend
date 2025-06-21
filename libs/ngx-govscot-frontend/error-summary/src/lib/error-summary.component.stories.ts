import type { Meta, StoryObj } from '@storybook/angular';
import { GovScotErrorSummaryItemDirective } from './error-summary-item.directive';
import { GovScotErrorSummaryComponent } from './error-summary.component';

const meta: Meta<GovScotErrorSummaryComponent> = {
  title: 'GovScot/Error Summary',
  component: GovScotErrorSummaryComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title text for the error summary',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
The Error Summary component is used at the top of a page to summarise any errors a user has made.

Based on the GovScot Design System error summary component.

## Usage

\`\`\`html
<ngx-govscot-error-summary>
  <ngx-govscot-error-summary-item text="Enter your full name" targetId="full-name" />
  <ngx-govscot-error-summary-item text="Select an option" targetId="option-1" />
</ngx-govscot-error-summary>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<GovScotErrorSummaryComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-error-summary [title]="title">
        <ngx-govscot-error-summary-item text="Enter your full name" targetId="full-name" />
        <ngx-govscot-error-summary-item text="The date your passport was issued must be in the past" targetId="passport-date" />
      </ngx-govscot-error-summary>
    `,
    moduleMetadata: {
      imports: [GovScotErrorSummaryComponent, GovScotErrorSummaryItemDirective],
    },
  }),
  args: {
    title: 'There is a problem',
  },
};

export const SingleError: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-error-summary [title]="title">
        <ngx-govscot-error-summary-item text="Enter your full name" targetId="full-name" />
      </ngx-govscot-error-summary>
    `,
    moduleMetadata: {
      imports: [GovScotErrorSummaryComponent, GovScotErrorSummaryItemDirective],
    },
  }),
  args: {
    title: 'There is a problem',
  },
};

export const MultipleErrors: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-error-summary [title]="title">
        <ngx-govscot-error-summary-item text="Are you a British citizen? Select one of the options" targetId="answer-1" />
        <ngx-govscot-error-summary-item text="How much is the first rent payment? Enter an amount" targetId="unique-id" />
        <ngx-govscot-error-summary-item text="When will your tenant make the first payment? Enter a date" targetId="start-date" />
        <ngx-govscot-error-summary-item text="The first payment covers rent from the start date of the tenancy until: Enter a date" targetId="end-date" />
      </ngx-govscot-error-summary>
    `,
    moduleMetadata: {
      imports: [GovScotErrorSummaryComponent, GovScotErrorSummaryItemDirective],
    },
  }),
  args: {
    title: 'There is a problem',
  },
};

export const CustomTitle: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-error-summary [title]="title">
        <ngx-govscot-error-summary-item text="Enter your full name" targetId="full-name" />
        <ngx-govscot-error-summary-item text="Select an option" targetId="option-1" />
      </ngx-govscot-error-summary>
    `,
    moduleMetadata: {
      imports: [GovScotErrorSummaryComponent, GovScotErrorSummaryItemDirective],
    },
  }),
  args: {
    title: 'Please fix the following errors',
  },
};
