import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxDirective } from '@ngx-uk-frontend/core/checkbox';
import { CommonFormInputDirective } from '@ngx-uk-frontend/core/form-utils';
import {
  inputCommonInputs,
  ValueAccessorDirective,
} from 'ngx-govuk-frontend/form-utils';

/**
 * This component implements the GOV.UK Design System checkbox component.
 * It allows users to select one or more options by ticking a box.
 *
 * @see https://design-system.service.gov.uk/components/checkboxes/
 */
@Component({
  selector: 'ngx-govuk-checkbox',
  imports: [ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ValueAccessorDirective,
    { directive: CommonFormInputDirective, inputs: inputCommonInputs },
  ],
})
export class GovUKCheckboxComponent extends CheckboxDirective {}
