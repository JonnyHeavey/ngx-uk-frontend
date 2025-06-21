import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  CommonFormInputDirective,
  inputCommonInputs,
  ValueAccessorDirective,
} from '@ngx-uk-frontend/core/form-utils';
import { RadioDirective } from '@ngx-uk-frontend/core/radio';
import { GovScotRadioOptionDirective } from './radio-option.directive';

/**
 * This component implements the Scottish Government Design System radio component.
 * Radio buttons let users select a single option from a list.
 *
 * @see https://designsystem.gov.scot/components/radio-buttons
 */
@Component({
  selector: 'ngx-govscot-radio-group',
  imports: [ReactiveFormsModule],
  templateUrl: './radio-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ValueAccessorDirective,
    { directive: CommonFormInputDirective, inputs: inputCommonInputs },
  ],
})
export class GovScotRadioGroupComponent extends RadioDirective {
  /**
   * Query for all radio option directives using signal-based query.
   * This allows the component to iterate through the child radio options.
   */
  readonly options = contentChildren(GovScotRadioOptionDirective);
}
