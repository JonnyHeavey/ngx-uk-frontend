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
import { GovUKTextareaComponent } from './textarea.component';

const meta: Meta<GovUKTextareaComponent> = {
  component: GovUKTextareaComponent,
  title: 'Forms/GovUKTextareaComponent',
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule, GovUKFormGroupComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<CommonFormInputDirective & GovUKTextareaComponent>;

const Template: StoryFn<GovUKTextareaComponent> = (args) => ({
  props: { ...args, form: new FormGroup({ input: new FormControl('') }) },
  template: `<form [formGroup]="form">
      <ngx-govuk-textarea
        formControlName="input"
         ${argsToTemplate(args)}
      ></ngx-govuk-textarea>
    </form>`,
});

export const Basic: Story = {
  render: Template,
  args: {
    inputId: 'basic',
    autocomplete: 'off',
    rows: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'A basic textarea with 5 rows.',
      },
    },
  },
};

export const WithCharacterCount: Story = {
  render: Template,
  args: {
    inputId: 'with-character-count',
    autocomplete: 'off',
    rows: 5,
    maxlength: 200,
    showCharacterCount: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'A textarea with character count feature limiting input to 200 characters.',
      },
    },
  },
};

export const WithCharacterCountAndInitialValue: Story = {
  render: () => {
    const formControl = new FormControl(
      'This is some initial text to demonstrate the character count functionality.',
    );
    const form = new FormGroup({ input: formControl });

    return {
      props: {
        form,
        inputId: 'with-initial-value',
        autocomplete: 'off',
        rows: 5,
        maxLength: 100,
        showCharacterCount: true,
      },
      template: `<form [formGroup]="form">
        <ngx-govuk-form-group [label]="'Description'" [labelFor]="inputId">
          <ngx-govuk-textarea
            formControlName="input"
            [inputId]="inputId"
            [autocomplete]="autocomplete"
            [rows]="rows"
            [maxLength]="maxLength"
            [showCharacterCount]="showCharacterCount"
          ></ngx-govuk-textarea>
        </ngx-govuk-form-group>
      </form>`,
    };
  },
  parameters: {
    docs: {
      description: {
        story: 'A textarea with character count and initial value.',
      },
    },
  },
};

export const WithLabelAndHint: Story = {
  render: () => {
    const form = new FormGroup({ input: new FormControl('') });

    return {
      props: {
        form,
        inputId: 'with-label-hint',
      },
      template: `<form [formGroup]="form">
        <ngx-govuk-form-group 
          [label]="'Tell us about your experience'" 
          [labelFor]="inputId"
          [hint]="'Include any relevant details that might help us understand your situation better.'">
          <ngx-govuk-textarea
            formControlName="input"
            [inputId]="inputId"
            [rows]="6"
          ></ngx-govuk-textarea>
        </ngx-govuk-form-group>
      </form>`,
    };
  },
  parameters: {
    docs: {
      description: {
        story: 'A textarea with a label and hint text.',
      },
    },
  },
};

export const Required: Story = {
  render: () => {
    const formControl = new FormControl('', Validators.required);
    const form = new FormGroup({ input: formControl });

    return {
      props: {
        form,
        inputId: 'required',
        getErrorMessage: () => {
          return formControl.touched && formControl.errors?.['required']
            ? 'Please enter your feedback'
            : '';
        },
        markAsTouched: () => {
          formControl.markAsTouched();
        },
      },
      template: `<form [formGroup]="form">
        <ngx-govuk-form-group 
          [label]="'Your feedback'" 
          [labelFor]="inputId"
          [errorMessage]="getErrorMessage()">
          <ngx-govuk-textarea
            formControlName="input"
            [inputId]="inputId"
            [rows]="5"
          ></ngx-govuk-textarea>
        </ngx-govuk-form-group>
        <button (click)="markAsTouched()" type="button" class="govuk-button">Submit</button>
      </form>`,
    };
  },
  parameters: {
    docs: {
      description: {
        story: 'A required textarea with validation.',
      },
    },
  },
};

export const WithMinMaxLength: Story = {
  render: () => {
    const formControl = new FormControl('', [
      Validators.required,
      Validators.minLength(20),
      Validators.maxLength(200),
    ]);
    const form = new FormGroup({ input: formControl });

    return {
      props: {
        form,
        inputId: 'min-max-length',
        getErrorMessage: () => {
          if (formControl.touched) {
            if (formControl.errors?.['required']) {
              return 'Please enter your comments';
            }
            if (formControl.errors?.['minlength']) {
              return 'Please enter at least 20 characters';
            }
            if (formControl.errors?.['maxlength']) {
              return 'Your comments must be 200 characters or fewer';
            }
          }
          return '';
        },
        markAsTouched: () => {
          formControl.markAsTouched();
        },
      },
      template: `<form [formGroup]="form">
        <ngx-govuk-form-group 
          [label]="'Your comments'" 
          [labelFor]="inputId"
          [hint]="'Comments should be between 20 and 200 characters'"
          [errorMessage]="getErrorMessage()">
          <ngx-govuk-textarea
            formControlName="input"
            [inputId]="inputId"
            [rows]="5"
            [maxLength]="200"
            [showCharacterCount]="true"
          ></ngx-govuk-textarea>
        </ngx-govuk-form-group>
        <button (click)="markAsTouched()" type="button" class="govuk-button">Submit</button>
      </form>`,
    };
  },
  parameters: {
    docs: {
      description: {
        story:
          'A textarea with minimum and maximum length validation and character count.',
      },
    },
  },
};

export const DifferentSizes: Story = {
  render: () => {
    const form = new FormGroup({
      small: new FormControl(''),
      medium: new FormControl(''),
      large: new FormControl(''),
    });

    return {
      props: {
        form,
      },
      template: `<form [formGroup]="form">
        <div style="margin-bottom: 20px;">
          <ngx-govuk-form-group [label]="'Small (2 rows)'" [labelFor]="'small'">
            <ngx-govuk-textarea
              formControlName="small"
              inputId="small"
              [rows]="2"
            ></ngx-govuk-textarea>
          </ngx-govuk-form-group>
        </div>
        
        <div style="margin-bottom: 20px;">
          <ngx-govuk-form-group [label]="'Medium (5 rows)'" [labelFor]="'medium'">
            <ngx-govuk-textarea
              formControlName="medium"
              inputId="medium"
              [rows]="5"
            ></ngx-govuk-textarea>
          </ngx-govuk-form-group>
        </div>
        
        <div>
          <ngx-govuk-form-group [label]="'Large (10 rows)'" [labelFor]="'large'">
            <ngx-govuk-textarea
              formControlName="large"
              inputId="large"
              [rows]="10"
            ></ngx-govuk-textarea>
          </ngx-govuk-form-group>
        </div>
      </form>`,
    };
  },
  parameters: {
    docs: {
      description: {
        story: 'Textareas with different numbers of rows.',
      },
    },
  },
};
