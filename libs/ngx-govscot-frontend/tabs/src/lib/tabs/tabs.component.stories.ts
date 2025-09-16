import { type Meta, type StoryObj } from '@storybook/angular';
import { GovScotTabComponent } from '../tab/tab.component';
import { GovScotTabsComponent } from './tabs.component';

const meta: Meta<GovScotTabsComponent> = {
  component: GovScotTabsComponent,
  title: 'Tabs/GovScotTabsComponent',
  decorators: [
    (story) => ({
      template: `<div style="margin: 20px;">${story}</div>`,
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
Tabs organise content and allow navigation across the page between sections of related content. They allow the user to view one section of content at a time.

Based on the Scottish Government Design System specifications:
- Tabs should be used when you need to split content into distinct sections
- One tab must always be selected when the page is first loaded (usually the first tab)
- At smaller viewport widths, tabs become a list of anchor links
- Tab labels should be clear and succinct

**Note:** This component is currently experimental in the Scottish Government Design System and needs more research to validate it.
        `,
      },
    },
  },
};
export default meta;
type Story = StoryObj<GovScotTabsComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-tabs [title]="title">
        <ngx-govscot-tab id="courses" title="Courses and funding">
          <h2>Search for training courses and funding</h2>
          <p>A wide range of training courses for your employees are available.</p>
          <p>Opportunities include distance learning, short courses and vocational training.</p>
          <p><a href="#">Visit My World of Work to search for training courses</a>.</p>
          <p>You can also <a href="#">search for training courses, and funding towards training</a>.</p>
        </ngx-govscot-tab>
        <ngx-govscot-tab id="apprenticeships" title="Choosing apprenticeships">
          <h2>Choosing an apprenticeship for your business</h2>
          <p>Apprenticeships can help you address skills gaps in your business. The government provides help with the cost of training an apprentice.</p>
          <p>There are 3 different types of apprenticeship:</p>
          <ul>
            <li>Foundation Apprenticeships let school or college students do short-term work experience at your business as part of a qualification</li>
            <li>Modern Apprenticeships let your new or current employees gain a qualification while working in a paid role at your business</li>
            <li>Graduate Apprenticeships let your new or current employees gain a degree while working in a paid role at your business</li>
          </ul>
          <p>You can find more information on the <a href="#">apprenticeships.scot</a> website.</p>
        </ngx-govscot-tab>
        <ngx-govscot-tab id="support" title="Extra skills support">
          <h2>Extra skills support</h2>
          <p>The <a href="#">Skills for Growth</a> service can offer skills advice to businesses with fewer than 250 employees.</p>
          <p>Businesses of any size can get skills advice by completing a <a href="#">skills support request form</a>.</p>
          <p>Businesses of any size can also get skills advice by calling Skills Development Scotland on 0800 783 6000.</p>
        </ngx-govscot-tab>
      </ngx-govscot-tabs>
    `,
    moduleMetadata: {
      imports: [GovScotTabsComponent, GovScotTabComponent],
    },
  }),
  args: {
    title: 'Contents',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Default tabs example matching the Scottish Government Design System documentation, showing training and apprenticeship information.',
      },
    },
  },
};

export const CorporationTaxExample: Story = {
  render: () => ({
    template: `
      <ngx-govscot-tabs title="Corporation Tax Information">
        <ngx-govscot-tab id="overview" title="Overview">
          <h2>What is Corporation Tax?</h2>
          <p>Corporation Tax is charged on the 'chargeable profits' of limited companies, members' clubs, societies, associations, co-operatives and other unincorporated bodies.</p>
          <p>The rate of Corporation Tax depends on the amount of profit your company makes and when your accounting period ends.</p>
          <h3>Current rates</h3>
          <ul>
            <li>19% for companies with profits up to £250,000</li>
            <li>25% for companies with profits over £250,000</li>
          </ul>
        </ngx-govscot-tab>
        <ngx-govscot-tab id="registration" title="Registration">
          <h2>Who must register?</h2>
          <p>You must register for Corporation Tax if your company or organisation is based in the UK or has an office or branch here.</p>
          <p>This includes:</p>
          <ul>
            <li>Limited companies</li>
            <li>Foreign companies with a UK branch or office</li>
            <li>Clubs, societies, associations and other unincorporated bodies</li>
            <li>Co-operatives</li>
          </ul>
          <h3>Registration deadline</h3>
          <p>You must register within 3 months of starting to do business. You could be fined if you do not register in time.</p>
        </ngx-govscot-tab>
        <ngx-govscot-tab id="deadlines" title="Important deadlines">
          <h2>Key dates to remember</h2>
          <p>Make sure you're aware of these important Corporation Tax deadlines:</p>
          <dl>
            <dt><strong>Registration</strong></dt>
            <dd>Within 3 months of starting business</dd>
            <dt><strong>Filing return</strong></dt>
            <dd>12 months after the end of your accounting period</dd>
            <dt><strong>Paying tax</strong></dt>
            <dd>9 months and 1 day after the end of your accounting period</dd>
          </dl>
          <p>Missing these deadlines can result in penalties and interest charges.</p>
        </ngx-govscot-tab>
      </ngx-govscot-tabs>
    `,
    moduleMetadata: {
      imports: [GovScotTabsComponent, GovScotTabComponent],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Example showing tabs used for Corporation Tax information, organized into logical sections for better user navigation.',
      },
    },
  },
};

export const SimpleTwoTab: Story = {
  render: () => ({
    template: `
      <ngx-govscot-tabs title="Service Information">
        <ngx-govscot-tab id="eligibility" title="Eligibility">
          <h2>Who can use this service</h2>
          <p>This service is available to:</p>
          <ul>
            <li>UK limited companies</li>
            <li>Companies with fewer than 250 employees</li>
            <li>Businesses established within the last 3 years</li>
          </ul>
          <p>You'll need your company registration number and recent financial information to proceed.</p>
        </ngx-govscot-tab>
        <ngx-govscot-tab id="process" title="Application process">
          <h2>How to apply</h2>
          <p>The application process typically takes 15-20 minutes to complete.</p>
          <ol>
            <li>Gather your required documents</li>
            <li>Complete the online application form</li>
            <li>Submit supporting documentation</li>
            <li>Wait for confirmation (usually within 5 working days)</li>
          </ol>
          <p>You'll receive an email confirmation once your application has been processed.</p>
        </ngx-govscot-tab>
      </ngx-govscot-tabs>
    `,
    moduleMetadata: {
      imports: [GovScotTabsComponent, GovScotTabComponent],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Minimal example with just two tabs, useful for simpler content organization.',
      },
    },
  },
};

export const WithComplexContent: Story = {
  render: () => ({
    template: `
      <ngx-govscot-tabs title="Business Support">
        <ngx-govscot-tab id="grants" title="Available grants">
          <h2>Funding opportunities</h2>
          <p>Several grant schemes are available to support Scottish businesses:</p>
          
          <h3>Start-up grants</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 1em 0;">
            <thead>
              <tr style="background: #f8f8f8;">
                <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Grant name</th>
                <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Amount</th>
                <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Eligibility</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border: 1px solid #ccc; padding: 8px;">Business Gateway Start-up Grant</td>
                <td style="border: 1px solid #ccc; padding: 8px;">Up to £2,000</td>
                <td style="border: 1px solid #ccc; padding: 8px;">New businesses under 12 months</td>
              </tr>
              <tr>
                <td style="border: 1px solid #ccc; padding: 8px;">Innovation Grant</td>
                <td style="border: 1px solid #ccc; padding: 8px;">Up to £10,000</td>
                <td style="border: 1px solid #ccc; padding: 8px;">Technology-focused startups</td>
              </tr>
            </tbody>
          </table>
          
          <p><strong>Note:</strong> Grant availability and criteria may change. Check the latest information before applying.</p>
        </ngx-govscot-tab>
        <ngx-govscot-tab id="advice" title="Business advice">
          <h2>Get expert guidance</h2>
          <p>Free business advice is available from various sources:</p>
          
          <div style="border: 1px solid #ccc; padding: 1em; margin: 1em 0; background: #f9f9f9;">
            <h3>Business Gateway</h3>
            <p>Scotland's national business support service offering:</p>
            <ul>
              <li>One-to-one advice sessions</li>
              <li>Market research support</li>
              <li>Financial planning guidance</li>
              <li>Digital skills training</li>
            </ul>
            <p><strong>Contact:</strong> 0300 013 4753 or visit your local Business Gateway office.</p>
          </div>
          
          <div style="border: 1px solid #ccc; padding: 1em; margin: 1em 0; background: #f9f9f9;">
            <h3>HMRC Business Support</h3>
            <p>Tax and compliance guidance including:</p>
            <ul>
              <li>VAT registration support</li>
              <li>PAYE setup assistance</li>
              <li>Corporation Tax guidance</li>
            </ul>
            <p><strong>Contact:</strong> 0300 200 3410 for new business enquiries.</p>
          </div>
        </ngx-govscot-tab>
        <ngx-govscot-tab id="resources" title="Additional resources">
          <h2>Useful links and downloads</h2>
          <p>Access additional resources to support your business journey:</p>
          
          <h3>Downloads</h3>
          <ul>
            <li><a href="#" download>Business plan template (PDF, 450KB)</a></li>
            <li><a href="#" download>Financial forecasting spreadsheet (Excel, 125KB)</a></li>
            <li><a href="#" download>Marketing strategy guide (PDF, 1.2MB)</a></li>
          </ul>
          
          <h3>External links</h3>
          <ul>
            <li><a href="https://www.gov.scot/business" target="_blank" rel="noopener">Scottish Government business information</a></li>
            <li><a href="https://www.gov.uk/browse/business" target="_blank" rel="noopener">UK Government business guidance</a></li>
            <li><a href="https://www.companieshouse.gov.uk" target="_blank" rel="noopener">Companies House</a></li>
          </ul>
          
          <h3>Training courses</h3>
          <p>Upcoming free workshops in your area:</p>
          <ul>
            <li><strong>Digital Marketing Essentials</strong> - Edinburgh, 15th March 2024</li>
            <li><strong>Financial Management for Small Business</strong> - Glasgow, 22nd March 2024</li>
            <li><strong>Export Opportunities Workshop</strong> - Aberdeen, 5th April 2024</li>
          </ul>
        </ngx-govscot-tab>
      </ngx-govscot-tabs>
    `,
    moduleMetadata: {
      imports: [GovScotTabsComponent, GovScotTabComponent],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Example showing tabs with complex content including tables, styled sections, links, and rich formatting.',
      },
    },
  },
};

export const AccessibilityExample: Story = {
  render: () => ({
    template: `
      <div>
        <p style="margin-bottom: 1em; padding: 1em; background: #f0f8ff; border: 1px solid #0066cc;">
          <strong>Accessibility note:</strong> This tabs component includes proper ARIA attributes. 
          Try navigating with the Tab key and using arrow keys when focused on tab links.
        </p>
        
        <ngx-govscot-tabs title="Accessibility Features">
          <ngx-govscot-tab id="keyboard" title="Keyboard navigation">
            <h2>Keyboard support</h2>
            <p>This tabs component supports full keyboard navigation:</p>
            <ul>
              <li><strong>Tab key:</strong> Moves focus to the tab navigation and then to content</li>
              <li><strong>Left/Right arrows:</strong> Navigate between tab headers (when focused on tabs)</li>
              <li><strong>Enter/Space:</strong> Activate the focused tab</li>
              <li><strong>Home/End:</strong> Move to first/last tab (when focused on tabs)</li>
            </ul>
            <p>The currently active tab is indicated by <code>aria-selected="true"</code> and visual styling.</p>
          </ngx-govscot-tab>
          <ngx-govscot-tab id="screen-readers" title="Screen reader support">
            <h2>Screen reader compatibility</h2>
            <p>The component uses proper ARIA roles and properties:</p>
            <ul>
              <li><code>role="tablist"</code> on the tab navigation</li>
              <li><code>role="tab"</code> on each tab link</li>
              <li><code>role="tabpanel"</code> on each content panel</li>
              <li><code>aria-labelledby</code> linking panels to the tabs title</li>
              <li><code>aria-controls</code> linking tabs to their content panels</li>
            </ul>
            <p>Hidden content panels use the <code>hidden</code> attribute to prevent screen reader access.</p>
          </ngx-govscot-tab>
          <ngx-govscot-tab id="responsive" title="Responsive behavior">
            <h2>Mobile and small screen support</h2>
            <p>On smaller screens, the tabs component transforms to improve usability:</p>
            <ul>
              <li>Tab navigation becomes a vertical list of links</li>
              <li>All content sections are displayed sequentially</li>
              <li>Users can scroll through all content naturally</li>
              <li>This prevents horizontal scrolling and cramped tab buttons</li>
            </ul>
            <p>This responsive behavior requires JavaScript and appropriate CSS to function correctly.</p>
          </ngx-govscot-tab>
        </ngx-govscot-tabs>
      </div>
    `,
    moduleMetadata: {
      imports: [GovScotTabsComponent, GovScotTabComponent],
    },
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Example demonstrating the accessibility features of the tabs component, including keyboard navigation and screen reader support.',
      },
    },
  },
};
