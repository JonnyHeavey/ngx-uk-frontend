import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonFormInputDirective } from '@ngx-uk-frontend/core/form-utils';
import { RadioDirective } from '@ngx-uk-frontend/core/radio';
import {
  inputCommonInputs,
  ValueAccessorDirective,
} from 'ngx-govuk-frontend/form-utils';
import { GovUKRadioOptionDirective } from './radio-option.directive';

/**
 * Component for rendering a GOV.UK Design System radio button group.
 *
 * Radio buttons let users select a single option from a list.
 * This component implements the GOV.UK Design System radio button component,
 * handling form integration and accessibility requirements.
 *
 * @see https://design-system.service.gov.uk/components/radios/
 */
@Component({
  selector: 'ngx-govuk-radio-group',
  imports: [ReactiveFormsModule],
  templateUrl: './radio-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ValueAccessorDirective,
    { directive: CommonFormInputDirective, inputs: inputCommonInputs },
  ],
})
export class GovUKRadioGroupComponent extends RadioDirective {
  /**
   * Query for all radio option directives using signal-based query.
   * This allows the component to iterate through the child radio options.
   */
  readonly options = contentChildren(GovUKRadioOptionDirective);
}
