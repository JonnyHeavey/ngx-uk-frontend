import type { Meta, StoryObj } from '@storybook/angular';
import { GovScotContactDetailsComponent } from './contact-details.component';

const meta: Meta<GovScotContactDetailsComponent> = {
  title: 'Components/Contact Details',
  component: GovScotContactDetailsComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title for the contact details section',
    },
    twoColumn: {
      control: 'boolean',
      description: 'Whether to display in two-column layout',
    },
    classes: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<GovScotContactDetailsComponent>;

export const Basic: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-contact-details 
        [title]="title"
        [twoColumn]="twoColumn"
        [classes]="classes">
        <ngx-govscot-contact-item label="Address" type="address">
          <ng-template #itemContent>
            Scottish Government<br />
            St Andrew's House<br />
            Regent Road<br />
            Edinburgh<br />
            EH1 3DG
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item label="Email" type="email" href="email@gov.scot">
          <ng-template #itemContent>
            email@gov.scot
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item label="Phone" type="phone" additionalInfo="Main line is open 8am to 5pm">
          <ng-template #itemContent>
            0123 456 7000
          </ng-template>
        </ngx-govscot-contact-item>
      </ngx-govscot-contact-details>
    `,
  }),
  args: {
    title: 'Contact',
    twoColumn: false,
    classes: '',
  },
};

export const FullContactDetails: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-contact-details 
        [title]="title"
        [twoColumn]="twoColumn"
        [classes]="classes">
        <ngx-govscot-contact-item label="Address" type="address">
          <ng-template #itemContent>
            Scottish Government<br />
            St Andrew's House<br />
            Regent Road<br />
            Edinburgh<br />
            EH1 3DG
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item label="Email" type="email" href="email@gov.scot">
          <ng-template #itemContent>
            email@gov.scot
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item label="Phone" type="phone" additionalInfo="Main line is open 8am to 5pm<br />Find out about call charges on GOV.UK">
          <ng-template #itemContent>
            0123 456 7000
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item label="Out of hours" type="phone">
          <ng-template #itemContent>
            0123 456 7001
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item label="Fax" type="fax">
          <ng-template #itemContent>
            0123 456 7002
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item label="Website" type="website" href="https://www.gov.scot">
          <ng-template #itemContent>
            www.gov.scot
          </ng-template>
        </ngx-govscot-contact-item>
      </ngx-govscot-contact-details>
    `,
  }),
  args: {
    title: 'Contact',
    twoColumn: false,
    classes: '',
  },
};

export const WithSocialMedia: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-contact-details 
        [title]="title"
        [twoColumn]="twoColumn"
        [classes]="classes">
        <ngx-govscot-contact-item label="Address" type="address">
          <ng-template #itemContent>
            Scottish Government<br />
            St Andrew's House<br />
            Regent Road<br />
            Edinburgh<br />
            EH1 3DG
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item label="Email" type="email" href="email@gov.scot">
          <ng-template #itemContent>
            email@gov.scot
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item label="Phone" type="phone" additionalInfo="Main line is open 8am to 5pm">
          <ng-template #itemContent>
            0123 456 7000
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item 
          label="Follow" 
          type="social" 
          href="https://facebook.com/scottishgovernment"
          icon="https://placehold.co/24x24/1877f2/ffffff?text=f">
          <ng-template #itemContent>
            Facebook
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item 
          label="Follow" 
          type="social" 
          href="https://x.com/scotgov"
          icon="https://placehold.co/24x24/000000/ffffff?text=X">
          <ng-template #itemContent>
            X
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item 
          label="Follow" 
          type="social" 
          href="https://linkedin.com/company/scottish-government"
          icon="https://placehold.co/24x24/0a66c2/ffffff?text=in">
          <ng-template #itemContent>
            LinkedIn
          </ng-template>
        </ngx-govscot-contact-item>
      </ngx-govscot-contact-details>
    `,
  }),
  args: {
    title: 'Contact',
    twoColumn: false,
    classes: '',
  },
};

export const TwoColumnLayout: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-contact-details 
        [title]="title"
        [twoColumn]="twoColumn"
        [classes]="classes">
        <ngx-govscot-contact-item label="Address" type="address">
          <ng-template #itemContent>
            First Minister<br />
            Scottish Government<br />
            St Andrew's House<br />
            Regent Road<br />
            Edinburgh<br />
            EH1 3DG
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item label="Email" type="email" href="firstminister@gov.scot">
          <ng-template #itemContent>
            firstminister@gov.scot
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item 
          label="Follow" 
          type="social" 
          href="https://x.com/scotgovfm"
          icon="https://placehold.co/24x24/000000/ffffff?text=X"
          additionalInfo="on X">
          <ng-template #itemContent>
            @ScotGovFM
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item 
          label="Follow" 
          type="social" 
          href="https://x.com/johnswinney"
          additionalInfo="on X">
          <ng-template #itemContent>
            @JohnSwinney
          </ng-template>
        </ngx-govscot-contact-item>
      </ngx-govscot-contact-details>
    `,
  }),
  args: {
    title: 'Contact',
    twoColumn: true,
    classes: '',
  },
};

export const CustomTitle: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-contact-details 
        [title]="title"
        [twoColumn]="twoColumn"
        [classes]="classes">
        <ngx-govscot-contact-item label="Address" type="address">
          <ng-template #itemContent>
            Scottish Government<br />
            St Andrew's House<br />
            Regent Road<br />
            Edinburgh<br />
            EH1 3DG
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item label="Email" type="email" href="email@gov.scot">
          <ng-template #itemContent>
            email@gov.scot
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item label="Phone" type="phone" additionalInfo="Main line is open 8am to 5pm">
          <ng-template #itemContent>
            0123 456 7000
          </ng-template>
        </ngx-govscot-contact-item>
      </ngx-govscot-contact-details>
    `,
  }),
  args: {
    title: 'Get in Touch',
    twoColumn: false,
    classes: '',
  },
};

export const WithCustomClasses: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-contact-details 
        [title]="title"
        [twoColumn]="twoColumn"
        [classes]="classes">
        <ngx-govscot-contact-item label="Address" type="address">
          <ng-template #itemContent>
            Scottish Government<br />
            St Andrew's House<br />
            Regent Road<br />
            Edinburgh<br />
            EH1 3DG
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item label="Email" type="email" href="email@gov.scot">
          <ng-template #itemContent>
            email@gov.scot
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item label="Phone" type="phone" additionalInfo="Main line is open 8am to 5pm">
          <ng-template #itemContent>
            0123 456 7000
          </ng-template>
        </ngx-govscot-contact-item>
      </ngx-govscot-contact-details>
    `,
  }),
  args: {
    title: 'Contact',
    twoColumn: false,
    classes: 'custom-contact-details',
  },
};

export const DepartmentContact: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-contact-details 
        [title]="title"
        [twoColumn]="twoColumn"
        [classes]="classes">
        <ngx-govscot-contact-item label="Address" type="address">
          <ng-template #itemContent>
            Education Department<br />
            Scottish Government<br />
            2A-South Victoria Quay<br />
            Edinburgh<br />
            EH6 6QQ
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item label="General enquiries" type="email" href="education.enquiries@gov.scot">
          <ng-template #itemContent>
            education.enquiries@gov.scot
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item label="Phone" type="phone" additionalInfo="Monday to Friday, 9am to 5pm">
          <ng-template #itemContent>
            0131 244 0330
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item label="Website" type="website" href="https://education.gov.scot">
          <ng-template #itemContent>
            Education Scotland
          </ng-template>
        </ngx-govscot-contact-item>
      </ngx-govscot-contact-details>
    `,
  }),
  args: {
    title: 'Department Contact',
    twoColumn: false,
    classes: '',
  },
};

export const MinimalContact: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-contact-details 
        [title]="title"
        [twoColumn]="twoColumn"
        [classes]="classes">
        <ngx-govscot-contact-item label="Email" type="email" href="info@gov.scot">
          <ng-template #itemContent>
            info@gov.scot
          </ng-template>
        </ngx-govscot-contact-item>
        <ngx-govscot-contact-item label="Phone" type="phone">
          <ng-template #itemContent>
            0131 556 8400
          </ng-template>
        </ngx-govscot-contact-item>
      </ngx-govscot-contact-details>
    `,
  }),
  args: {
    title: 'Contact',
    twoColumn: false,
    classes: '',
  },
};
