import { Phase } from '@ngx-uk-frontend/core/phase-banner';
import {
  argsToTemplate,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKPhaseBannerComponent } from './phase-banner.component';

const meta: Meta<GovUKPhaseBannerComponent> = {
  component: GovUKPhaseBannerComponent,
  title: 'Phase Banner/GovUKPhaseBannerComponent',
  argTypes: {
    phase: {
      options: ['alpha', 'beta'],
      control: { type: 'select' },
    },
  },
};
export default meta;
type Story = StoryObj<GovUKPhaseBannerComponent>;

const Template: StoryFn<GovUKPhaseBannerComponent> = (args) => ({
  props: { ...args },
  template: `<ngx-govuk-phase-banner ${argsToTemplate(args)}>
    <span class="govuk-phase-banner__text">
      This is a new service - your <a class="govuk-link" href="#">feedback</a> will help us to improve it.
    </span>
  </ngx-govuk-phase-banner>`,
});

export const Primary: Story = {
  render: Template,
  args: {
    phase: 'beta' as Phase,
  },
};
