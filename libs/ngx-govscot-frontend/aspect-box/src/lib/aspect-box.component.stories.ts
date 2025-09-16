import type { Meta, StoryObj } from '@storybook/angular';
import { GovScotAspectBoxComponent } from './aspect-box.component';

const meta: Meta<GovScotAspectBoxComponent> = {
  title: 'Components/Aspect Box',
  component: GovScotAspectBoxComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'An aspect box crops images to a particular aspect ratio. It supports common aspect ratios of 1:1 (square), 4:3 (standard fullscreen), 16:9 (standard widescreen), and 21:9 (anamorphic widescreen).',
      },
    },
  },
  argTypes: {
    aspectRatio: {
      control: 'select',
      options: ['16:9', '1:1', '4:3', '21:9'],
      description: 'The aspect ratio for the image',
    },
    classes: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
  },
};

export default meta;
type Story = StoryObj<GovScotAspectBoxComponent>;

export const Default: Story = {
  args: {
    aspectRatio: '16:9',
  },
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-aspect-box [aspectRatio]="aspectRatio" [classes]="classes">
        <img 
          class="ds_aspect-box__inner"
          alt="Thistle flowers in a field" 
          src="https://placehold.co/800x450/059669/ffffff?text=16:9+Default"
        />
      </ngx-govscot-aspect-box>
    `,
  }),
};

export const Square: Story = {
  args: {
    aspectRatio: '1:1',
  },
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-aspect-box [aspectRatio]="aspectRatio" [classes]="classes">
        <img 
          class="ds_aspect-box__inner"
          alt="Square crop example" 
          src="https://placehold.co/400x400/dc2626/ffffff?text=1:1+Square"
        />
      </ngx-govscot-aspect-box>
    `,
  }),
};

export const StandardFullscreen: Story = {
  args: {
    aspectRatio: '4:3',
  },
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-aspect-box [aspectRatio]="aspectRatio" [classes]="classes">
        <img 
          class="ds_aspect-box__inner"
          alt="Standard fullscreen example" 
          src="https://placehold.co/640x480/5b21b6/ffffff?text=4:3+Standard"
        />
      </ngx-govscot-aspect-box>
    `,
  }),
};

export const AnamorphicWidescreen: Story = {
  args: {
    aspectRatio: '21:9',
  },
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-aspect-box [aspectRatio]="aspectRatio" [classes]="classes">
        <img 
          class="ds_aspect-box__inner"
          alt="Anamorphic widescreen example" 
          src="https://placehold.co/840x360/ea580c/ffffff?text=21:9+Anamorphic"
        />
      </ngx-govscot-aspect-box>
    `,
  }),
};

export const WithCustomClasses: Story = {
  args: {
    aspectRatio: '1:1',
    classes: 'custom-aspect-box',
  },
  render: (args) => ({
    props: args,
    template: `
      <ngx-govscot-aspect-box [aspectRatio]="aspectRatio" [classes]="classes">
        <img 
          class="ds_aspect-box__inner"
          alt="Custom classes example" 
          src="https://placehold.co/400x400/059669/ffffff?text=Custom+Classes"
        />
      </ngx-govscot-aspect-box>
    `,
  }),
};

export const MultipleAspectRatios: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
        <div>
          <h4>16:9 (Default)</h4>
          <ngx-govscot-aspect-box aspectRatio="16:9">
            <img class="ds_aspect-box__inner" alt="16:9 example" src="https://placehold.co/800x450/059669/ffffff?text=16:9" />
          </ngx-govscot-aspect-box>
        </div>
        <div>
          <h4>1:1 (Square)</h4>
          <ngx-govscot-aspect-box aspectRatio="1:1">
            <img class="ds_aspect-box__inner" alt="1:1 example" src="https://placehold.co/400x400/dc2626/ffffff?text=1:1" />
          </ngx-govscot-aspect-box>
        </div>
        <div>
          <h4>4:3 (Standard)</h4>
          <ngx-govscot-aspect-box aspectRatio="4:3">
            <img class="ds_aspect-box__inner" alt="4:3 example" src="https://placehold.co/640x480/5b21b6/ffffff?text=4:3" />
          </ngx-govscot-aspect-box>
        </div>
        <div>
          <h4>21:9 (Anamorphic)</h4>
          <ngx-govscot-aspect-box aspectRatio="21:9">
            <img class="ds_aspect-box__inner" alt="21:9 example" src="https://placehold.co/840x360/ea580c/ffffff?text=21:9" />
          </ngx-govscot-aspect-box>
        </div>
      </div>
    `,
  }),
};
