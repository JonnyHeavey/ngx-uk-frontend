import type { Meta, StoryObj } from '@storybook/angular';
import { GovScotSummaryListComponent } from './summary-list.component';

const meta: Meta<GovScotSummaryListComponent> = {
  title: 'Components/Summary List',
  component: GovScotSummaryListComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A summary list is used to summarize information, for example, a user's responses at the end of a form.

This component implements the Scottish Government Design System summary list component.

## Usage

\`\`\`html
<ngx-govscot-summary-list>
  <ngx-govscot-summary-list-item key="Name" value="Jane Smith">
    <ngx-govscot-summary-list-actions>
      <ngx-govscot-summary-list-action href="/change-name">
        Change
      </ngx-govscot-summary-list-action>
    </ngx-govscot-summary-list-actions>
  </ngx-govscot-summary-list-item>
</ngx-govscot-summary-list>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    noBorder: {
      control: 'boolean',
      description: 'Whether to render the summary list without a border',
    },
  },
};

export default meta;
type Story = StoryObj<GovScotSummaryListComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-summary-list [noBorder]="noBorder">
        <ngx-govscot-summary-list-item key="Name" value="Jane Smith">
          <ngx-govscot-summary-list-actions>
            <ngx-govscot-summary-list-action href="/change-name">
              Change
            </ngx-govscot-summary-list-action>
          </ngx-govscot-summary-list-actions>
        </ngx-govscot-summary-list-item>
        <ngx-govscot-summary-list-item key="Date of birth" value="13 April 2001">
          <ngx-govscot-summary-list-actions>
            <ngx-govscot-summary-list-action href="/change-dob">
              Change
            </ngx-govscot-summary-list-action>
          </ngx-govscot-summary-list-actions>
        </ngx-govscot-summary-list-item>
        <ngx-govscot-summary-list-item key="Address">
          <div ngxGovScotSummaryListValue>
            Scottish Government<br>
            St Andrew's House<br>
            Regent Road<br>
            Edinburgh<br>
            EH1 3DG
          </div>
          <ngx-govscot-summary-list-actions>
            <ngx-govscot-summary-list-action href="/change-address">
              Change
            </ngx-govscot-summary-list-action>
          </ngx-govscot-summary-list-actions>
        </ngx-govscot-summary-list-item>
        <ngx-govscot-summary-list-item key="Contact details">
          <div ngxGovScotSummaryListValue>
            <ul class="ds_no-bullets">
              <li>email@gov.scot</li>
              <li>0123 456 7000</li>
            </ul>
          </div>
          <ngx-govscot-summary-list-actions>
            <ngx-govscot-summary-list-action href="/add-contact">
              Add
            </ngx-govscot-summary-list-action>
            <ngx-govscot-summary-list-action href="/change-contact">
              Change
            </ngx-govscot-summary-list-action>
          </ngx-govscot-summary-list-actions>
        </ngx-govscot-summary-list-item>
      </ngx-govscot-summary-list>
    `,
  }),
  args: {
    noBorder: false,
  },
};

export const WithoutBorders: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-summary-list [noBorder]="noBorder">
        <ngx-govscot-summary-list-item 
          key="Have you had the grant 3 times or more since 1 May 2022?" 
          value="No" />
        <ngx-govscot-summary-list-item 
          key="Which council area do you live in?" 
          value="City of Edinburgh" />
        <ngx-govscot-summary-list-item 
          key="Do you work?" 
          value="Yes" />
        <ngx-govscot-summary-list-item 
          key="Will you lose earnings because you need to self-isolate?" 
          value="Yes" />
        <ngx-govscot-summary-list-item 
          key="Have you tested positive for Covid?" 
          value="No - I need a PCR test or to rebook a PCR test" />
      </ngx-govscot-summary-list>
    `,
  }),
  args: {
    noBorder: true,
  },
};

export const SummaryCards: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-summary-list-card title="Joe Bloggs">
        <ngx-govscot-summary-list-card-actions>
          <ngx-govscot-summary-list-action href="/change-joe">
            Change
          </ngx-govscot-summary-list-action>
          <ngx-govscot-summary-list-action href="/delete-joe">
            Delete
          </ngx-govscot-summary-list-action>
        </ngx-govscot-summary-list-card-actions>
        <ngx-govscot-summary-list>
          <ngx-govscot-summary-list-item key="Phone number" value="01234 567 890" />
          <ngx-govscot-summary-list-item key="Address">
            <div ngxGovScotSummaryListValue>
              Victoria Quay<br>
              Edinburgh<br>
              EH6 6QQ
            </div>
          </ngx-govscot-summary-list-item>
        </ngx-govscot-summary-list>
      </ngx-govscot-summary-list-card>

      <br>

      <ngx-govscot-summary-list-card title="Mary Smith">
        <ngx-govscot-summary-list-card-actions>
          <ngx-govscot-summary-list-action href="/change-mary">
            Change
          </ngx-govscot-summary-list-action>
          <ngx-govscot-summary-list-action href="/delete-mary">
            Delete
          </ngx-govscot-summary-list-action>
        </ngx-govscot-summary-list-card-actions>
        <ngx-govscot-summary-list>
          <ngx-govscot-summary-list-item key="Phone number" value="01234 098 765" />
          <ngx-govscot-summary-list-item key="Address">
            <div ngxGovScotSummaryListValue>
              St. Andrew's House<br>
              Regent Road<br>
              Edinburgh<br>
              EH1 3DG
            </div>
          </ngx-govscot-summary-list-item>
        </ngx-govscot-summary-list>
      </ngx-govscot-summary-list-card>
    `,
  }),
  args: {
    noBorder: false,
  },
};
