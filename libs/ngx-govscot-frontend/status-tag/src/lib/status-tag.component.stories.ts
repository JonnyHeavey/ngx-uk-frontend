import type { Meta, StoryObj } from '@storybook/angular';
import { GovScotStatusTagComponent } from './status-tag.component';

const meta: Meta<GovScotStatusTagComponent> = {
  title: 'Scottish Government/Status Tag',
  component: GovScotStatusTagComponent,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'grey',
        'green',
        'teal',
        'blue',
        'purple',
        'pink',
        'red',
        'orange',
        'yellow',
      ],
      description: 'The color variant of the status tag',
    },
    extraClasses: {
      control: 'text',
      description: 'Additional CSS classes to apply to the status tag',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Use the status tag component to show the status of something.

Based on the Scottish Government Design System, status tags help users understand the current state of content, processes, or applications.

## When to use status tags

- To show a particular state when something can have more than one status
- In task lists to show completion status
- In phase banners to indicate website development phase
- To highlight critical statuses that need user attention

## Accessibility

- Do not use color alone to convey status - always include descriptive text
- Use the same color for the same status consistently
- Text has sufficient contrast ratio against background colors
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<GovScotStatusTagComponent>;

export const Default: Story = {
  args: {
    color: 'blue',
  },
  render: (args) => ({
    props: args,
    template: `<ngx-govscot-status-tag [color]="color" [extraClasses]="extraClasses">Active</ngx-govscot-status-tag>`,
  }),
};

export const AllColors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
        <ngx-govscot-status-tag color="grey">Grey</ngx-govscot-status-tag>
        <ngx-govscot-status-tag color="green">Green</ngx-govscot-status-tag>
        <ngx-govscot-status-tag color="teal">Teal</ngx-govscot-status-tag>
        <ngx-govscot-status-tag color="blue">Blue</ngx-govscot-status-tag>
        <ngx-govscot-status-tag color="purple">Purple</ngx-govscot-status-tag>
        <ngx-govscot-status-tag color="pink">Pink</ngx-govscot-status-tag>
        <ngx-govscot-status-tag color="red">Red</ngx-govscot-status-tag>
        <ngx-govscot-status-tag color="orange">Orange</ngx-govscot-status-tag>
        <ngx-govscot-status-tag color="yellow">Yellow</ngx-govscot-status-tag>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'All available color variants for status tags. The default color is blue.',
      },
    },
  },
};

export const TaskListExample: Story = {
  render: () => ({
    template: `
      <div style="max-width: 600px;">
        <h3>Corporation Tax Registration</h3>
        <div style="border: 1px solid #ccc; border-radius: 4px;">
          <div style="padding: 1rem; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;">
            <span>1. Check if you need to register</span>
            <ngx-govscot-status-tag color="green">Complete</ngx-govscot-status-tag>
          </div>
          <div style="padding: 1rem; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;">
            <span>2. Gather required documents</span>
            <ngx-govscot-status-tag color="blue">In progress</ngx-govscot-status-tag>
          </div>
          <div style="padding: 1rem; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;">
            <span>3. Submit registration form</span>
            <ngx-govscot-status-tag color="grey">Not started</ngx-govscot-status-tag>
          </div>
          <div style="padding: 1rem; display: flex; justify-content: space-between; align-items: center;">
            <span>4. Set up payment method</span>
            <ngx-govscot-status-tag color="grey">Not started</ngx-govscot-status-tag>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Example of status tags used in a task list to show progress through a multi-step process.',
      },
    },
  },
};

export const ApplicationStatusExample: Story = {
  render: () => ({
    template: `
      <div style="max-width: 800px;">
        <h3>Recent Applications</h3>
        <table style="width: 100%; border-collapse: collapse; border: 1px solid #ccc;">
          <thead>
            <tr style="background-color: #f5f5f5;">
              <th style="padding: 0.75rem; text-align: left; border-bottom: 1px solid #ccc;">Application</th>
              <th style="padding: 0.75rem; text-align: left; border-bottom: 1px solid #ccc;">Reference</th>
              <th style="padding: 0.75rem; text-align: left; border-bottom: 1px solid #ccc;">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 0.75rem; border-bottom: 1px solid #eee;">Business Rate Relief</td>
              <td style="padding: 0.75rem; border-bottom: 1px solid #eee;">BRR-2024-001</td>
              <td style="padding: 0.75rem; border-bottom: 1px solid #eee;">
                <ngx-govscot-status-tag color="green">Approved</ngx-govscot-status-tag>
              </td>
            </tr>
            <tr>
              <td style="padding: 0.75rem; border-bottom: 1px solid #eee;">Planning Permission</td>
              <td style="padding: 0.75rem; border-bottom: 1px solid #eee;">PP-2024-015</td>
              <td style="padding: 0.75rem; border-bottom: 1px solid #eee;">
                <ngx-govscot-status-tag color="orange">Under review</ngx-govscot-status-tag>
              </td>
            </tr>
            <tr>
              <td style="padding: 0.75rem; border-bottom: 1px solid #eee;">Licence Renewal</td>
              <td style="padding: 0.75rem; border-bottom: 1px solid #eee;">LR-2024-008</td>
              <td style="padding: 0.75rem; border-bottom: 1px solid #eee;">
                <ngx-govscot-status-tag color="red">Rejected</ngx-govscot-status-tag>
              </td>
            </tr>
            <tr>
              <td style="padding: 0.75rem;">Export Certification</td>
              <td style="padding: 0.75rem;">EC-2024-023</td>
              <td style="padding: 0.75rem;">
                <ngx-govscot-status-tag color="yellow">Awaiting documents</ngx-govscot-status-tag>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Example of status tags used to show application statuses in a table format.',
      },
    },
  },
};

export const ServiceStatusExample: Story = {
  render: () => ({
    template: `
      <div style="max-width: 600px;">
        <h3>Service Status Dashboard</h3>
        <div style="display: grid; gap: 1rem;">
          <div style="padding: 1rem; border: 1px solid #ccc; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <strong>DVLA Services</strong>
              <p style="margin: 0.25rem 0 0 0; color: #666; font-size: 0.9rem;">Vehicle registration and licensing</p>
            </div>
            <ngx-govscot-status-tag color="green">Operational</ngx-govscot-status-tag>
          </div>
          <div style="padding: 1rem; border: 1px solid #ccc; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <strong>Tax Portal</strong>
              <p style="margin: 0.25rem 0 0 0; color: #666; font-size: 0.9rem;">Online tax filing and payments</p>
            </div>
            <ngx-govscot-status-tag color="orange">Maintenance</ngx-govscot-status-tag>
          </div>
          <div style="padding: 1rem; border: 1px solid #ccc; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <strong>Benefits System</strong>
              <p style="margin: 0.25rem 0 0 0; color: #666; font-size: 0.9rem;">Benefits applications and updates</p>
            </div>
            <ngx-govscot-status-tag color="red">Outage</ngx-govscot-status-tag>
          </div>
          <div style="padding: 1rem; border: 1px solid #ccc; border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <strong>NHS Portal</strong>
              <p style="margin: 0.25rem 0 0 0; color: #666; font-size: 0.9rem;">Health services and appointments</p>
            </div>
            <ngx-govscot-status-tag color="green">Operational</ngx-govscot-status-tag>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Example of status tags used in a service status dashboard to show system health.',
      },
    },
  },
};

export const WithExtraClasses: Story = {
  args: {
    color: 'red',
    extraClasses: 'urgent-priority',
  },
  render: (args) => ({
    props: args,
    template: `
      <style>
        .urgent-priority {
          animation: pulse 2s infinite;
          font-weight: bold;
        }
        
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.7; }
          100% { opacity: 1; }
        }
      </style>
      <ngx-govscot-status-tag [color]="color" [extraClasses]="extraClasses">Urgent</ngx-govscot-status-tag>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Example of using extra CSS classes to add custom styling like animations for urgent statuses.',
      },
    },
  },
};
