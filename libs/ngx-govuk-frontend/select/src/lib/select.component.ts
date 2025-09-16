import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonFormInputDirective } from '@ngx-uk-frontend/core/form-utils';
import { SelectDirective, SelectOption } from '@ngx-uk-frontend/core/select';
import {
  ValueAccessorDirective,
  inputCommonInputs,
} from 'ngx-govuk-frontend/form-utils';

/**
 * Interface defining an option in the select dropdown.
 */
export type GovUKSelectOption = SelectOption;

/**
 * This component implements the GOV.UK Design System select component.
 * It allows users to choose an option from a dropdown list.
 *
 * @see https://design-system.service.gov.uk/components/select/
 */
@Component({
  selector: 'ngx-govuk-select',
  imports: [ReactiveFormsModule],
  templateUrl: './select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ValueAccessorDirective,
    { directive: CommonFormInputDirective, inputs: inputCommonInputs },
  ],
})
export class GovUKSelectComponent extends SelectDirective {}
