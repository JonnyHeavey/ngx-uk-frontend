import type { Meta, StoryObj } from '@storybook/angular';
import { GovScotTableComponent } from './table.component';

const meta: Meta<GovScotTableComponent> = {
  title: 'GovScot/Table',
  component: GovScotTableComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    caption: {
      control: 'text',
      description: 'Optional caption for the table to describe its contents',
    },
    smallScreenBehavior: {
      control: 'select',
      options: ['scrolling', 'boxes'],
      description: 'How the table behaves on small screens',
    },
  },
};

export default meta;
type Story = StoryObj<GovScotTableComponent>;

export const Default: Story = {
  args: {
    caption: 'Public holidays in 2020',
  },
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-table [caption]="caption">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Day</th>
            <th scope="col">Holiday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10 April</td>
            <td>Friday</td>
            <td>Good Friday</td>
          </tr>
          <tr>
            <td>8 May</td>
            <td>Friday</td>
            <td>Early May Bank Holiday</td>
          </tr>
          <tr>
            <td>25 May</td>
            <td>Monday</td>
            <td>Spring Bank Holiday</td>
          </tr>
          <tr>
            <td>3 August</td>
            <td>Monday</td>
            <td>Summer Bank Holiday</td>
          </tr>
        </tbody>
      </ngx-govscot-table>
    `,
  }),
};

export const ScrollingTable: Story = {
  args: {
    caption: 'Highest peaks in Scotland',
    smallScreenBehavior: 'scrolling',
  },
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-table [caption]="caption" [smallScreenBehavior]="smallScreenBehavior">
        <thead>
          <tr>
            <th>Name</th>
            <th>Height (m)</th>
            <th>Height (ft)</th>
            <th>Region</th>
            <th>County</th>
            <th>Grid reference</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ben Nevis</td>
            <td align="right">1,345</td>
            <td align="right">4,411</td>
            <td>Fort William to Loch Treig & Loch Leven</td>
            <td>Highland</td>
            <td>NN166712</td>
          </tr>
          <tr>
            <td>Ben Macdui</td>
            <td align="right">1,309</td>
            <td align="right">4,295</td>
            <td>Cairngorms</td>
            <td>Aberdeenshire/Moray</td>
            <td>NN988989</td>
          </tr>
          <tr>
            <td>Braeriach</td>
            <td align="right">1,296</td>
            <td align="right">4,252</td>
            <td>Cairngorms</td>
            <td>Aberdeenshire/Highland</td>
            <td>NN953999</td>
          </tr>
          <tr>
            <td>Cairn Toul</td>
            <td align="right">1,291</td>
            <td align="right">4,236</td>
            <td>Cairngorms</td>
            <td>Aberdeenshire</td>
            <td>NN963972</td>
          </tr>
        </tbody>
      </ngx-govscot-table>
    `,
  }),
};

export const BoxesTable: Story = {
  args: {
    caption: 'Highest peaks in Scotland',
    smallScreenBehavior: 'boxes',
  },
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-table [caption]="caption" [smallScreenBehavior]="smallScreenBehavior">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th>Height (m)</th>
            <th>Height (ft)</th>
            <th>Region</th>
            <th>County</th>
            <th>Grid reference</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ben Nevis</td>
            <td align="right">1,345</td>
            <td align="right">4,411</td>
            <td>Fort William to Loch Treig & Loch Leven</td>
            <td>Highland</td>
            <td>NN166712</td>
          </tr>
          <tr>
            <td>Ben Macdui</td>
            <td align="right">1,309</td>
            <td align="right">4,295</td>
            <td>Cairngorms</td>
            <td>Aberdeenshire/Moray</td>
            <td>NN988989</td>
          </tr>
          <tr>
            <td>Braeriach</td>
            <td align="right">1,296</td>
            <td align="right">4,252</td>
            <td>Cairngorms</td>
            <td>Aberdeenshire/Highland</td>
            <td>NN953999</td>
          </tr>
          <tr>
            <td>Cairn Toul</td>
            <td align="right">1,291</td>
            <td align="right">4,236</td>
            <td>Cairngorms</td>
            <td>Aberdeenshire</td>
            <td>NN963972</td>
          </tr>
        </tbody>
      </ngx-govscot-table>
    `,
  }),
};
