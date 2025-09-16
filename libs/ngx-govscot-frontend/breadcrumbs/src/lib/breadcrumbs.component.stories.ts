import { provideRouter } from '@angular/router';
import { type Meta, type StoryObj } from '@storybook/angular';
import { GovScotBreadcrumbDirective } from './breadcrumb/breadcrumb.directive';
import { GovScotBreadcrumbsComponent } from './breadcrumbs.component';

const meta: Meta<GovScotBreadcrumbsComponent> = {
  component: GovScotBreadcrumbsComponent,
  title: 'Breadcrumbs/GovScotBreadcrumbsComponent',
  decorators: [
    (story) => ({
      template: `<div style="margin: 20px;">${story}</div>`,
      providers: [provideRouter([])],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
A breadcrumb shows a user where they are in a website's structure. 
It also presents links to pages higher in the site's structure, such as a home page.

Based on the Scottish Government Design System specifications:
- Should be used if a website has 2 or more levels in its structure
- Should include the user's current page
- Current page item should be displayed in a different style from other items
        `,
      },
    },
  },
};
export default meta;
type Story = StoryObj<GovScotBreadcrumbsComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <ngx-govscot-breadcrumbs>
        <ngx-govscot-breadcrumb label="Home" link="/"></ngx-govscot-breadcrumb>
        <ngx-govscot-breadcrumb label="Justice and the law" link="/justice"></ngx-govscot-breadcrumb>
        <ngx-govscot-breadcrumb label="Your rights and the law" link="/justice/rights"></ngx-govscot-breadcrumb>
        <ngx-govscot-breadcrumb label="Data sharing of personal information" [current]="true"></ngx-govscot-breadcrumb>
      </ngx-govscot-breadcrumbs>
    `,
    moduleMetadata: {
      imports: [GovScotBreadcrumbsComponent, GovScotBreadcrumbDirective],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Default breadcrumbs with multiple levels including the current page without a link.',
      },
    },
  },
};

export const WithoutCurrentPage: Story = {
  render: () => ({
    template: `
      <ngx-govscot-breadcrumbs>
        <ngx-govscot-breadcrumb label="Home" link="/"></ngx-govscot-breadcrumb>
        <ngx-govscot-breadcrumb label="Justice and the law" link="/justice"></ngx-govscot-breadcrumb>
        <ngx-govscot-breadcrumb label="Your rights and the law" link="/justice/rights"></ngx-govscot-breadcrumb>
      </ngx-govscot-breadcrumbs>
    `,
    moduleMetadata: {
      imports: [GovScotBreadcrumbsComponent, GovScotBreadcrumbDirective],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Breadcrumbs without specifying a current page. You can leave the current page out if there are issues with repetition or long page titles.',
      },
    },
  },
};

export const TaxServiceExample: Story = {
  render: () => ({
    template: `
      <ngx-govscot-breadcrumbs>
        <ngx-govscot-breadcrumb label="Home" link="/"></ngx-govscot-breadcrumb>
        <ngx-govscot-breadcrumb label="Taxes and benefits" link="/taxes"></ngx-govscot-breadcrumb>
        <ngx-govscot-breadcrumb label="Corporation Tax" link="/taxes/corporation"></ngx-govscot-breadcrumb>
        <ngx-govscot-breadcrumb label="Register your company" [current]="true"></ngx-govscot-breadcrumb>
      </ngx-govscot-breadcrumbs>
    `,
    moduleMetadata: {
      imports: [GovScotBreadcrumbsComponent, GovScotBreadcrumbDirective],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Example breadcrumbs for a Corporation Tax service showing the navigation hierarchy.',
      },
    },
  },
};

export const ShortPath: Story = {
  render: () => ({
    template: `
      <ngx-govscot-breadcrumbs>
        <ngx-govscot-breadcrumb label="Home" link="/"></ngx-govscot-breadcrumb>
        <ngx-govscot-breadcrumb label="Current page" [current]="true"></ngx-govscot-breadcrumb>
      </ngx-govscot-breadcrumbs>
    `,
    moduleMetadata: {
      imports: [GovScotBreadcrumbsComponent, GovScotBreadcrumbDirective],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Minimal breadcrumbs with just two levels - home and current page.',
      },
    },
  },
};

export const ComplexRouting: Story = {
  render: () => ({
    template: `
      <ngx-govscot-breadcrumbs>
        <ngx-govscot-breadcrumb label="Home" [link]="['/']"></ngx-govscot-breadcrumb>
        <ngx-govscot-breadcrumb label="Services" [link]="['/services']"></ngx-govscot-breadcrumb>
        <ngx-govscot-breadcrumb label="Business taxes" [link]="['/services', 'business', 'taxes']"></ngx-govscot-breadcrumb>
        <ngx-govscot-breadcrumb label="Corporation Tax registration" [current]="true"></ngx-govscot-breadcrumb>
      </ngx-govscot-breadcrumbs>
    `,
    moduleMetadata: {
      imports: [GovScotBreadcrumbsComponent, GovScotBreadcrumbDirective],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Breadcrumbs using array-based routing for complex URL structures.',
      },
    },
  },
};

export const LongTitles: Story = {
  render: () => ({
    template: `
      <ngx-govscot-breadcrumbs>
        <ngx-govscot-breadcrumb label="Home" link="/"></ngx-govscot-breadcrumb>
        <ngx-govscot-breadcrumb label="Environment, farming and marine" link="/environment"></ngx-govscot-breadcrumb>
        <ngx-govscot-breadcrumb label="Environment and countryside protection policies" link="/environment/countryside"></ngx-govscot-breadcrumb>
        <ngx-govscot-breadcrumb label="An incredibly long nonsense title, as an example of a problematically long title, for demonstration purposes only" [current]="true"></ngx-govscot-breadcrumb>
      </ngx-govscot-breadcrumbs>
    `,
    moduleMetadata: {
      imports: [GovScotBreadcrumbsComponent, GovScotBreadcrumbDirective],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Example showing how breadcrumbs handle long titles. Consider using the visually-hidden variant for very long current page titles.',
      },
    },
  },
};

export const InPageContext: Story = {
  render: () => ({
    template: `
      <div style="background: #f8f8f8; padding: 20px; border: 1px solid #ccc;">
        <h3>Scottish Government Service</h3>
        
        <ngx-govscot-breadcrumbs>
          <ngx-govscot-breadcrumb label="Home" link="/"></ngx-govscot-breadcrumb>
          <ngx-govscot-breadcrumb label="Taxes and benefits" link="/taxes"></ngx-govscot-breadcrumb>
          <ngx-govscot-breadcrumb label="Corporation Tax" link="/taxes/corporation"></ngx-govscot-breadcrumb>
          <ngx-govscot-breadcrumb label="Register your company" [current]="true"></ngx-govscot-breadcrumb>
        </ngx-govscot-breadcrumbs>

        <main style="margin-top: 20px; padding: 20px; background: #fff;">
          <h1>Register your company for Corporation Tax</h1>
          <p>You must register your company for Corporation Tax within 3 months of starting to do business.</p>
          <p>The breadcrumbs above help users understand where they are in the service structure.</p>
        </main>
      </div>
    `,
    moduleMetadata: {
      imports: [GovScotBreadcrumbsComponent, GovScotBreadcrumbDirective],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Example showing how breadcrumbs appear in the context of a full page layout.',
      },
    },
  },
};
