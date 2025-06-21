import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonFormInputDirective } from '@ngx-uk-frontend/core/form-utils';
import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKFormGroupComponent } from 'ngx-govuk-frontend/form-group';
import { GovUKTextInputComponent } from './text-input.component';

const meta: Meta<GovUKTextInputComponent> = {
  component: GovUKTextInputComponent,
  title: 'Forms/GovUKTextInputComponent',
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, GovUKFormGroupComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<CommonFormInputDirective & GovUKTextInputComponent>;

const Template: StoryFn<GovUKTextInputComponent> = (args) => ({
  props: { ...args, form: new FormGroup({ input: new FormControl('') }) },
  template: `<form [formGroup]="form">
      <ngx-govuk-text-input
        formControlName="input"
         ${argsToTemplate(args)}
      ></ngx-govuk-text-input>
    </form>`,
});

// Standard text input
export const Standard: Story = {
  render: Template,
  args: {
    inputId: 'standard',
    autocomplete: 'off',
    extraClasses: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'A standard text input field.',
      },
    },
  },
};

// With Prefix
export const WithPrefix: Story = {
  render: Template,
  args: {
    inputId: 'with-prefix',
    autocomplete: 'off',
    prefix: '£',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A text input with a prefix character, commonly used for currency inputs.',
      },
    },
  },
};

// With Suffix
export const WithSuffix: Story = {
  render: Template,
  args: {
    inputId: 'with-suffix',
    autocomplete: 'off',
    suffix: 'kg',
  },
  parameters: {
    docs: {
      description: {
        story:
          'A text input with a suffix character, commonly used for units of measurement.',
      },
    },
  },
};

// With both prefix and suffix
export const WithPrefixAndSuffix: Story = {
  render: Template,
  args: {
    inputId: 'with-prefix-suffix',
    autocomplete: 'off',
    prefix: '£',
    suffix: '.00',
  },
  parameters: {
    docs: {
      description: {
        story: 'A text input with both prefix and suffix characters.',
      },
    },
  },
};

// With validation - required
export const Required: Story = {
  render: () => {
    const formControl = new FormControl('', Validators.required);
    const form = new FormGroup({ input: formControl });

    return {
      props: {
        form,
        errorMessage: 'Please enter a value',
        markAsTouched: () => {
          formControl.markAsTouched();
        },
      },
      template: `<form [formGroup]="form">
        <ngx-govuk-form-group [label]="'Enter a value'" [labelFor]="'required'" [errorMessage]="form.get('input')?.touched && form.get('input')?.errors ? errorMessage : ''">
          <ngx-govuk-text-input
            formControlName="input"
            inputId="required"
          ></ngx-govuk-text-input>
        </ngx-govuk-form-group>
        <button (click)="markAsTouched()" type="button" class="govuk-button">Submit</button>
      </form>`,
    };
  },
  parameters: {
    docs: {
      description: {
        story:
          'A required text input that shows validation error when submitted empty.',
      },
    },
  },
};

// With validation - email
export const Email: Story = {
  render: () => {
    const formControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    const form = new FormGroup({ input: formControl });

    return {
      props: {
        form,
        getErrorMessage: function () {
          const control = form.get('input');
          if (control?.errors?.['required']) {
            return 'Please enter an email address';
          }
          if (control?.errors?.['email']) {
            return 'Please enter a valid email address';
          }
          return '';
        },
        markAsTouched: function () {
          formControl.markAsTouched();
        },
      },
      template: `<form [formGroup]="form">
        <ngx-govuk-form-group [label]="'Email address'" [labelFor]="'email'" [errorMessage]="form.get('input')?.touched && form.get('input')?.errors ? getErrorMessage() : ''">
          <ngx-govuk-text-input
            formControlName="input"
            inputId="email"
            autocomplete="email"
          ></ngx-govuk-text-input>
        </ngx-govuk-form-group>
        <button (click)="markAsTouched()" type="button" class="govuk-button">Submit</button>
      </form>`,
    };
  },
  parameters: {
    docs: {
      description: {
        story: 'An email text input with validation.',
      },
    },
  },
};

// With initial value
export const WithInitialValue: Story = {
  render: (args) => ({
    props: {
      ...args,
      form: new FormGroup({
        input: new FormControl('Initial value example'),
      }),
    },
    template: `<form [formGroup]="form">
      <ngx-govuk-form-group [label]="'Example with initial value'" [labelFor]="'initial-value'">
        <ngx-govuk-text-input
          formControlName="input"
          inputId="initial-value"
        ></ngx-govuk-text-input>
      </ngx-govuk-form-group>
    </form>`,
  }),
  parameters: {
    docs: {
      description: {
        story: 'A text input with an initial value.',
      },
    },
  },
};

// With hint text
export const WithHint: Story = {
  render: (args) => ({
    props: {
      ...args,
      form: new FormGroup({
        input: new FormControl(''),
      }),
    },
    template: `<form [formGroup]="form">
      <ngx-govuk-form-group 
        [label]="'National Insurance number'" 
        [labelFor]="'nino'"
        hint="It's on your National Insurance card, benefit letter, payslip or P60. For example, QQ 12 34 56 C.">
        <ngx-govuk-text-input
          formControlName="input"
          inputId="nino"
          autocomplete="off"
        ></ngx-govuk-text-input>
      </ngx-govuk-form-group>
    </form>`,
  }),
  parameters: {
    docs: {
      description: {
        story: 'A text input with hint text to guide the user.',
      },
    },
  },
};

// Width classes
export const DifferentWidths: Story = {
  render: () => ({
    props: {
      form: new FormGroup({
        full: new FormControl(''),
        twentyChars: new FormControl(''),
        tenChars: new FormControl(''),
        fiveChars: new FormControl(''),
        fourChars: new FormControl(''),
        threeChars: new FormControl(''),
        twoChars: new FormControl(''),
      }),
    },
    template: `<form [formGroup]="form">
      <h3 class="govuk-heading-s">Full width</h3>
      <ngx-govuk-form-group [label]="'Full width'" [labelFor]="'full'">
        <ngx-govuk-text-input formControlName="full" inputId="full"></ngx-govuk-text-input>
      </ngx-govuk-form-group>
      
      <h3 class="govuk-heading-s">20 character width</h3>
      <ngx-govuk-form-group [label]="'20 characters'" [labelFor]="'twenty'">
        <ngx-govuk-text-input formControlName="twentyChars" inputId="twenty" extraClasses="govuk-input--width-20"></ngx-govuk-text-input>
      </ngx-govuk-form-group>
      
      <h3 class="govuk-heading-s">10 character width</h3>
      <ngx-govuk-form-group [label]="'10 characters'" [labelFor]="'ten'">
        <ngx-govuk-text-input formControlName="tenChars" inputId="ten" extraClasses="govuk-input--width-10"></ngx-govuk-text-input>
      </ngx-govuk-form-group>
      
      <h3 class="govuk-heading-s">5 character width</h3>
      <ngx-govuk-form-group [label]="'5 characters'" [labelFor]="'five'">
        <ngx-govuk-text-input formControlName="fiveChars" inputId="five" extraClasses="govuk-input--width-5"></ngx-govuk-text-input>
      </ngx-govuk-form-group>
      
      <h3 class="govuk-heading-s">4 character width</h3>
      <ngx-govuk-form-group [label]="'4 characters'" [labelFor]="'four'">
        <ngx-govuk-text-input formControlName="fourChars" inputId="four" extraClasses="govuk-input--width-4"></ngx-govuk-text-input>
      </ngx-govuk-form-group>
      
      <h3 class="govuk-heading-s">3 character width</h3>
      <ngx-govuk-form-group [label]="'3 characters'" [labelFor]="'three'">
        <ngx-govuk-text-input formControlName="threeChars" inputId="three" extraClasses="govuk-input--width-3"></ngx-govuk-text-input>
      </ngx-govuk-form-group>
      
      <h3 class="govuk-heading-s">2 character width</h3>
      <ngx-govuk-form-group [label]="'2 characters'" [labelFor]="'two'">
        <ngx-govuk-text-input formControlName="twoChars" inputId="two" extraClasses="govuk-input--width-2"></ngx-govuk-text-input>
      </ngx-govuk-form-group>
    </form>`,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Examples of different text input widths using GOV.UK Design System width classes.',
      },
    },
  },
};
