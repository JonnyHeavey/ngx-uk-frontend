import { type Meta, type StoryFn, type StoryObj } from '@storybook/angular';
import { GovScotAccordionComponent } from './accordion.component';

const meta: Meta<GovScotAccordionComponent> = {
  component: GovScotAccordionComponent,
  title: 'Accordion/GovScotAccordionComponent',
  parameters: {
    docs: {
      description: {
        component: `
The Scottish Government Design System accordion component is a list of collapsed content items. 
A user can expand any item in the list to view its contents. This component uses a checkbox-based 
approach for accessibility and interaction.

Based on the component from the Scottish Government Design System.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<GovScotAccordionComponent>;

const DefaultTemplate: StoryFn<GovScotAccordionComponent> = (args) => ({
  props: { ...args },
  template: `
    <ngx-govscot-accordion [id]="id">
      <ngx-govscot-accordion-item itemId="panel-1" heading="Healthcare for veterans">
        <p>Veterans are entitled to the same healthcare as any citizen. And there are <a href="#">health care options and support</a> available specifically for veterans.</p>
        <p>If you have a health condition that's related to your service, you're entitled to priority treatment based on clinical need.</p>
      </ngx-govscot-accordion-item>

      <ngx-govscot-accordion-item itemId="panel-2" heading="Employability for veterans">
        <p>If you're looking for a job, there are several organisations that can help you <a href="#">find a job or develop new skills</a>.</p>
      </ngx-govscot-accordion-item>

      <ngx-govscot-accordion-item itemId="panel-3" heading="Housing for veterans">
        <p>If you need <a href="#">help finding a place to live</a> there's support specifically for veterans.</p>
      </ngx-govscot-accordion-item>
    </ngx-govscot-accordion>
  `,
});

const WithInitialExpandedTemplate: StoryFn<GovScotAccordionComponent> = (
  args,
) => ({
  props: { ...args },
  template: `
    <ngx-govscot-accordion [id]="id" [initialExpanded]="initialExpanded">
      <ngx-govscot-accordion-item itemId="panel-1" heading="Healthcare for veterans">
        <p>Veterans are entitled to the same healthcare as any citizen. And there are <a href="#">health care options and support</a> available specifically for veterans.</p>
        <p>If you have a health condition that's related to your service, you're entitled to priority treatment based on clinical need.</p>
      </ngx-govscot-accordion-item>

      <ngx-govscot-accordion-item itemId="panel-2" heading="Employability for veterans">
        <p>If you're looking for a job, there are several organisations that can help you <a href="#">find a job or develop new skills</a>.</p>
      </ngx-govscot-accordion-item>

      <ngx-govscot-accordion-item itemId="panel-3" heading="Housing for veterans">
        <p>If you need <a href="#">help finding a place to live</a> there's support specifically for veterans.</p>
      </ngx-govscot-accordion-item>
    </ngx-govscot-accordion>
  `,
});

/**
 * Default accordion example as shown in the Scottish Government Design System documentation
 */
export const Primary: Story = {
  render: DefaultTemplate,
  args: {
    id: 'accordion-default',
  },
};

/**
 * Example with some accordion sections initially expanded
 */
export const WithInitialExpanded: Story = {
  render: WithInitialExpandedTemplate,
  args: {
    id: 'accordion-expanded',
    initialExpanded: ['panel-1', 'panel-3'],
  },
};

/**
 * Simple two-section accordion
 */
export const TwoSections: Story = {
  render: (args) => ({
    props: { ...args },
    template: `
      <ngx-govscot-accordion [id]="id">
        <ngx-govscot-accordion-item itemId="section-1" heading="Important information">
          <p>This is some important information that users need to know about.</p>
        </ngx-govscot-accordion-item>

        <ngx-govscot-accordion-item itemId="section-2" heading="Additional details">
          <p>Here are some additional details that users might find helpful.</p>
          <ul>
            <li>Point one</li>
            <li>Point two</li>
            <li>Point three</li>
          </ul>
        </ngx-govscot-accordion-item>
      </ngx-govscot-accordion>
    `,
  }),
  args: {
    id: 'accordion-two-sections',
  },
};
