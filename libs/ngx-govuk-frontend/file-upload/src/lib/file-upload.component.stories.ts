import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonFormInputDirective } from '@ngx-uk-frontend/core/form-utils';
import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryFn,
  type StoryObj,
} from '@storybook/angular';
import { GovUKFileUploadComponent } from './file-upload.component';

const meta: Meta<GovUKFileUploadComponent> = {
  component: GovUKFileUploadComponent,
  title: 'Forms/GovUKFileUploadComponent',
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<CommonFormInputDirective & GovUKFileUploadComponent>;

const Template: StoryFn<GovUKFileUploadComponent> = (args) => ({
  props: { ...args, form: new FormGroup({ input: new FormControl('') }) },
  template: `<form [formGroup]="form">
      <ngx-govuk-file-upload
        formControlName="input"
         ${argsToTemplate(args)}
      ></ngx-govuk-file-upload>
    </form>`,
});

export const Primary: Story = {
  render: Template,
  args: {
    inputId: 'story1',
    extraClasses: '',
  },
};
