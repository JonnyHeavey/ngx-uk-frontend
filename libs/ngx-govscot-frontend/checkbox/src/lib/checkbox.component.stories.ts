import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import type { Meta, StoryObj } from '@storybook/angular';

import { GovScotCheckboxComponent } from './checkbox.component';

@Component({
  selector: 'ngx-govscot-storybook-checkbox-wrapper',
  template: `
    <div class="ds_form-group">
      <div class="ds_checkboxes">
        <ngx-govscot-checkbox
          [formControl]="control"
          [inputId]="inputId"
          [label]="label"
          [hint]="hint"
          [disabled]="disabled"
        />
        @if (showError && control.errors && control.touched) {
          <div class="ds_error-message">
            <strong>Error:</strong> {{ errorMessage }}
          </div>
        }
      </div>
    </div>
  `,
  imports: [GovScotCheckboxComponent, ReactiveFormsModule],
})
class StorybookCheckboxWrapperComponent {
  @Input() label = 'Accept terms and conditions';
  @Input() hint?: string;
  @Input() inputId = 'checkbox-example';
  @Input() control = new FormControl(false);
  @Input() disabled = false;
  @Input() showError = false;
  @Input() errorMessage = 'You must accept the terms and conditions';
}

const meta: Meta<StorybookCheckboxWrapperComponent> = {
  title: 'Components/Gov Scot/Checkbox',
  component: StorybookCheckboxWrapperComponent,
  parameters: {
    docs: {
      description: {
        component: `
The checkbox component allows users to select one or more options by ticking a box.

## Features
- Single checkbox selection
- Form validation support
- Accessibility features
- Error state handling
- Hint text support
- Disabled state

## Usage
\`\`\`html
<ngx-govscot-checkbox
  [formControl]="control"
  inputId="terms"
  label="I accept the terms and conditions"
  hint="You must accept to continue"
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the checkbox',
    },
    hint: {
      control: 'text',
      description: 'Optional hint text to help the user',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the checkbox',
    },
    showError: {
      control: 'boolean',
      description: 'Show error state (for demonstration)',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message text',
    },
  },
};

export default meta;
type Story = StoryObj<StorybookCheckboxWrapperComponent>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const WithHint: Story = {
  args: {
    label: 'Send me email updates',
    hint: 'We will only send you important updates about your application',
  },
};

export const Disabled: Story = {
  args: {
    label: 'This option is disabled',
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Accept terms and conditions',
    showError: true,
    errorMessage: 'You must accept the terms and conditions to continue',
  },
  render: (args) => ({
    props: {
      ...args,
      control: (() => {
        const control = new FormControl(false);
        control.setErrors({ required: true });
        control.markAsTouched();
        return control;
      })(),
    },
    template: `
      <div class="ds_form-group ds_form-group--error">
        <div class="ds_checkboxes">
          <ngx-govscot-checkbox
            [formControl]="control"
            [inputId]="inputId"
            [label]="label"
            [hint]="hint"
            [disabled]="disabled"
          />
          <div class="ds_error-message">
            <strong>Error:</strong> {{ errorMessage }}
          </div>
        </div>
      </div>
    `,
  }),
};

export const MultipleOptions: Story = {
  render: () => ({
    template: `
      <div class="ds_form-group">
        <fieldset class="ds_fieldset">
          <legend class="ds_legend">Which types of waste do you transport?</legend>
          <div class="ds_hint-text">Select all that apply</div>
          <div class="ds_checkboxes">
            <ngx-govscot-checkbox
              [formControl]="wasteControl1"
              inputId="waste-1"
              label="Waste from animal carcasses"
            />
            <ngx-govscot-checkbox
              [formControl]="wasteControl2"
              inputId="waste-2" 
              label="Waste from mines or quarries"
            />
            <ngx-govscot-checkbox
              [formControl]="wasteControl3"
              inputId="waste-3"
              label="Farm or agricultural waste"
            />
          </div>
        </fieldset>
      </div>
    `,
    props: {
      wasteControl1: new FormControl(false),
      wasteControl2: new FormControl(false),
      wasteControl3: new FormControl(false),
    },
  }),
};
