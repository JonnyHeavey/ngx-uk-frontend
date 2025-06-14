import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import type { Meta, StoryObj } from '@storybook/angular';

import { GovScotTextInputComponent } from './text-input.component';

@Component({
  selector: 'ngx-govscot-story-wrapper',
  template: `
    <div
      class="ds_form-group"
      [class.ds_form-group--error]="control.touched && control.errors"
    >
      @if (label) {
        <label class="ds_label" [for]="inputId">{{ label }}</label>
      }
      @if (hint) {
        <div class="ds_hint-text">{{ hint }}</div>
      }
      @if (control.touched && control.errors) {
        <div class="ds_error-message">
          @if (control.errors?.['required']) {
            This field is required
          }
          @if (control.errors?.['email']) {
            Enter a valid email address
          }
        </div>
      }

      <ngx-govscot-text-input
        [formControl]="control"
        [type]="type"
        [prefix]="prefix"
        [suffix]="suffix"
        [width]="width"
        [fixedWidth]="fixedWidth"
        [currency]="currency"
        [currencySymbol]="currencySymbol"
        [hasButton]="hasButton"
        [buttonText]="buttonText"
        [buttonIcon]="buttonIcon"
        [placeholder]="placeholder"
        [disabled]="disabled"
        [readonly]="readonly"
        [inputId]="inputId"
      />
    </div>
  `,
  imports: [GovScotTextInputComponent, ReactiveFormsModule],
})
class StoryWrapperComponent {
  @Input() control = new FormControl('');
  @Input() label?: string;
  @Input() hint?: string;
  @Input() inputId = 'text-input';
  @Input() type = 'text';
  @Input() prefix?: string;
  @Input() suffix?: string;
  @Input() width?:
    | 'full'
    | 'three-quarters'
    | 'two-thirds'
    | 'one-half'
    | 'one-third'
    | 'one-quarter';
  @Input() fixedWidth?: 2 | 3 | 4 | 5 | 10 | 20;
  @Input() currency = false;
  @Input() currencySymbol = '£';
  @Input() hasButton = false;
  @Input() buttonText?: string;
  @Input() buttonIcon?: string;
  @Input() placeholder?: string;
  @Input() disabled = false;
  @Input() readonly = false;
}

const meta: Meta<StoryWrapperComponent> = {
  title: 'Components/Gov Scot/Text Input',
  component: StoryWrapperComponent,
  parameters: {
    docs: {
      description: {
        component:
          'The text input component allows users to enter text that is a single line. Based on the Scottish Government Design System text input component.',
      },
    },
  },
  argTypes: {
    control: { control: false },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url', 'search'],
    },
    width: {
      control: 'select',
      options: [
        'full',
        'three-quarters',
        'two-thirds',
        'one-half',
        'one-third',
        'one-quarter',
      ],
    },
    fixedWidth: {
      control: 'select',
      options: [2, 3, 4, 5, 10, 20],
    },
    currencySymbol: {
      control: 'text',
    },
    buttonIcon: {
      control: 'select',
      options: ['search', 'calendar', 'download'],
    },
  },
};

export default meta;
type Story = StoryObj<StoryWrapperComponent>;

export const Default: Story = {
  args: {
    control: new FormControl(''),
    label: 'What is your name?',
    inputId: 'name',
  },
};

export const WithHint: Story = {
  args: {
    control: new FormControl(''),
    label: 'What is your email address?',
    hint: 'We will use this to send you updates',
    type: 'email',
    inputId: 'email',
  },
};

export const WithPrefixAndSuffix: Story = {
  args: {
    control: new FormControl(''),
    label: 'Website URL',
    prefix: 'https://',
    suffix: '.com',
    inputId: 'website',
  },
};

export const FixedWidth: Story = {
  args: {
    control: new FormControl(''),
    label: 'Postcode',
    fixedWidth: 10,
    inputId: 'postcode',
  },
};

export const FluidWidth: Story = {
  args: {
    control: new FormControl(''),
    label: 'Address line 1',
    width: 'two-thirds',
    inputId: 'address',
  },
};

export const WithButton: Story = {
  args: {
    control: new FormControl(''),
    label: 'Search',
    hasButton: true,
    buttonText: 'Search',
    buttonIcon: 'search',
    fixedWidth: 20,
    inputId: 'search',
  },
};

export const CurrencyInput: Story = {
  args: {
    control: new FormControl(''),
    label: 'Price per month',
    currency: true,
    currencySymbol: '$',
    fixedWidth: 4,
    inputId: 'price',
  },
};

export const WithValidation: Story = {
  args: {
    control: new FormControl('', [Validators.required, Validators.email]),
    label: 'Email address',
    hint: 'Enter a valid email address',
    type: 'email',
    inputId: 'email-validation',
  },
};

export const Disabled: Story = {
  args: {
    control: new FormControl({ value: 'Disabled input', disabled: true }),
    label: 'Disabled input',
    disabled: true,
    inputId: 'disabled',
  },
};

export const Readonly: Story = {
  args: {
    control: new FormControl('Read-only value'),
    label: 'Read-only input',
    readonly: true,
    inputId: 'readonly',
  },
};
