import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputDirective } from '@ngx-uk-frontend/core/text-input';
import {
  GovUKCommonFormInputDirective,
  ValueAccessorDirective,
  inputCommonInputs,
} from 'ngx-govuk-frontend/form-utils';

/**
 * This component implements the GOV.UK Design System text input component.
 * It allows users to enter text that's a single line.
 *
 * @see https://design-system.service.gov.uk/components/text-input/
 */
@Component({
  selector: 'ngx-govuk-text-input',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ValueAccessorDirective,
    { directive: GovUKCommonFormInputDirective, inputs: inputCommonInputs },
  ],
})
export class GovUKTextInputComponent extends TextInputDirective {
  readonly prefix = input<string>();
  readonly suffix = input<string>();
}
