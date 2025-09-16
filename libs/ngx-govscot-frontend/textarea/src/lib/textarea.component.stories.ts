import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import type { Meta, StoryObj } from '@storybook/angular';

import { GovScotTextareaComponent } from './textarea.component';

@Component({
  selector: 'ngx-govscot-storybook-textarea-wrapper',
  template: `
    <div class="ds_form-group">
      <label class="ds_label" [for]="inputId">{{ label }}</label>
      @if (hint) {
        <div class="ds_hint-text">{{ hint }}</div>
      }
      <ngx-govscot-textarea
        [formControl]="control"
        [rows]="rows"
        [cols]="cols"
        [wrap]="wrap"
        [placeholder]="placeholder"
        [maxlength]="maxlength"
        [minlength]="minlength"
        [readonly]="readonly"
        [disabled]="disabled"
        [autocomplete]="autocomplete"
        [spellcheck]="spellcheck"
        [autocapitalize]="autocapitalize"
      />
      @if (showError && control.errors && control.touched) {
        <div class="ds_error-message">
          <strong>Error:</strong> {{ errorMessage }}
        </div>
      }
    </div>
  `,
  imports: [GovScotTextareaComponent, ReactiveFormsModule],
})
class StorybookTextareaWrapperComponent {
  @Input() label = 'Description';
  @Input() hint?: string;
  @Input() inputId = 'textarea-example';
  @Input() control = new FormControl('');
  @Input() rows = 3;
  @Input() cols?: number;
  @Input() wrap?: 'hard' | 'soft';
  @Input() placeholder?: string;
  @Input() maxlength?: number;
  @Input() minlength?: number;
  @Input() readonly = false;
  @Input() disabled = false;
  @Input() autocomplete?: string;
  @Input() spellcheck?: boolean;
  @Input() autocapitalize?: string;
  @Input() showError = false;
  @Input() errorMessage = 'This field is required';
}

const meta: Meta<StorybookTextareaWrapperComponent> = {
  title: 'Components/Gov Scot/Textarea',
  component: StorybookTextareaWrapperComponent,
  parameters: {
    docs: {
      description: {
        component: `
The textarea component allows users to enter multiple lines of text.

## Features
- Multi-line text input
- Configurable rows and columns
- Form validation support
- Accessibility features
- Error state handling
- Various input attributes (placeholder, maxlength, etc.)

## Usage
\`\`\`html
<ngx-govscot-textarea
  [formControl]="control"
  [rows]="5"
  placeholder="Enter your message"
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the textarea',
    },
    hint: {
      control: 'text',
      description: 'Optional hint text',
    },
    rows: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Number of visible text rows',
    },
    cols: {
      control: { type: 'number', min: 1, max: 100 },
      description: 'Number of visible character columns',
    },
    wrap: {
      control: 'select',
      options: ['hard', 'soft'],
      description: 'Text wrapping behavior',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    maxlength: {
      control: { type: 'number', min: 1 },
      description: 'Maximum number of characters',
    },
    minlength: {
      control: { type: 'number', min: 0 },
      description: 'Minimum number of characters',
    },
    readonly: {
      control: 'boolean',
      description: 'Make textarea read-only',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the textarea',
    },
    autocomplete: {
      control: 'text',
      description: 'Autocomplete attribute value',
    },
    spellcheck: {
      control: 'boolean',
      description: 'Enable/disable spellcheck',
    },
    autocapitalize: {
      control: 'select',
      options: ['none', 'sentences', 'words', 'characters'],
      description: 'Auto-capitalization behavior',
    },
    showError: {
      control: 'boolean',
      description: 'Show error state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message text',
    },
  },
};

export default meta;
type Story = StoryObj<StorybookTextareaWrapperComponent>;

export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter your description here',
    rows: 3,
  },
};

export const WithHint: Story = {
  args: {
    label: 'Additional comments',
    hint: 'Please provide any additional information that might be helpful',
    placeholder: 'Enter your comments',
    rows: 4,
  },
};

export const LargeTextarea: Story = {
  args: {
    label: 'Detailed feedback',
    hint: 'Please provide detailed feedback about your experience',
    placeholder: 'Enter your detailed feedback here...',
    rows: 8,
    cols: 60,
  },
};

export const WithCharacterLimit: Story = {
  args: {
    label: 'Short message',
    hint: 'Maximum 200 characters',
    placeholder: 'Enter a short message',
    maxlength: 200,
    rows: 3,
  },
};

export const WithMinimumLength: Story = {
  args: {
    label: 'Review',
    hint: 'Please write at least 50 characters',
    placeholder: 'Write your review here...',
    minlength: 50,
    rows: 5,
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Terms and conditions',
    control: new FormControl(
      'This is a read-only textarea with some predefined content that cannot be edited by the user.',
    ),
    readonly: true,
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled textarea',
    placeholder: 'This textarea is disabled',
    disabled: true,
    rows: 3,
  },
};

export const WithError: Story = {
  args: {
    label: 'Required field',
    hint: 'This field is required',
    placeholder: 'Enter required information',
    control: (() => {
      const control = new FormControl('');
      control.setErrors({ required: true });
      control.markAsTouched();
      return control;
    })(),
    showError: true,
    errorMessage: 'This field is required',
    rows: 3,
  },
};

export const ContactForm: Story = {
  args: {
    label: 'Message',
    hint: 'Please describe your enquiry in detail',
    placeholder: 'Enter your message here...',
    rows: 6,
    maxlength: 1000,
    spellcheck: true,
    autocapitalize: 'sentences',
  },
};

export const CodeInput: Story = {
  args: {
    label: 'Code snippet',
    hint: 'Paste your code here',
    placeholder: 'Enter or paste your code...',
    rows: 10,
    cols: 80,
    wrap: 'off' as any,
    spellcheck: false,
    autocapitalize: 'none',
  },
};
