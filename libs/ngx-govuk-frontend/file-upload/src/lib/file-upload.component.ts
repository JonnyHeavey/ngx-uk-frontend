import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonFormInputDirective } from '@ngx-uk-frontend/core/form-utils';
import {
  ValueAccessorDirective,
  injectNgControl,
  inputCommonInputs,
} from 'ngx-govuk-frontend/form-utils';

/**
 * This component implements the GOV.UK Design System file upload component.
 * It allows users to select and upload files.
 *
 * @see https://design-system.service.gov.uk/components/file-upload/
 */
@Component({
  selector: 'ngx-govuk-file-upload',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './file-upload.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ValueAccessorDirective,
    { directive: CommonFormInputDirective, inputs: inputCommonInputs },
  ],
})
export class GovUKFileUploadComponent {
  /** The Angular form control associated with this file upload input. */
  readonly ngControl = injectNgControl();

  /** Reference to the common form input directive that provides shared functionality. */
  readonly commonFormInput = inject(CommonFormInputDirective);
}
