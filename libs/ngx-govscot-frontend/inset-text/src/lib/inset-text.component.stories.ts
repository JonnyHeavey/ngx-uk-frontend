import { type Meta, type StoryFn, type StoryObj } from '@storybook/angular';
import { GovScotInsetTextComponent } from './inset-text.component';

const meta: Meta<GovScotInsetTextComponent> = {
  component: GovScotInsetTextComponent,
  title: 'Inset Text/GovScotInsetTextComponent',
  parameters: {
    docs: {
      description: {
        component: `
The Scottish Government Design System inset text component is used to highlight a block of text from the content that surrounds it. 
For example, a quote or something added to the main content.

Based on the component from the Scottish Government Design System.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<GovScotInsetTextComponent>;

const Template: StoryFn<GovScotInsetTextComponent> = (
  args: GovScotInsetTextComponent,
) => ({
  props: { ...args },
  template: `<ngx-govscot-inset-text>
  You may be able to <a href="#">apply for free school meals</a> at the same time as you apply for the clothing grant.
  </ngx-govscot-inset-text>`,
});

const SimpleTemplate: StoryFn<GovScotInsetTextComponent> = (
  args: GovScotInsetTextComponent,
) => ({
  props: { ...args },
  template: `<ngx-govscot-inset-text>
  This is important information that stands out from the main content.
  </ngx-govscot-inset-text>`,
});

const WithLinkTemplate: StoryFn<GovScotInsetTextComponent> = (
  args: GovScotInsetTextComponent,
) => ({
  props: { ...args },
  template: `<ngx-govscot-inset-text>
  You may be able to <a href="#">apply for free school meals</a> at the same time as you apply for the clothing grant.
  </ngx-govscot-inset-text>`,
});

/**
 * Default example as shown in the Scottish Government Design System documentation
 */
export const Primary: Story = {
  render: Template,
};

/**
 * Simple text example without links
 */
export const SimpleText: Story = {
  render: SimpleTemplate,
};

/**
 * Example with a link, demonstrating the component can contain interactive elements
 */
export const WithLink: Story = {
  render: WithLinkTemplate,
};
