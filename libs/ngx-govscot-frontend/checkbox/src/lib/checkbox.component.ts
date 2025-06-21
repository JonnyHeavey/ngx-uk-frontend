import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxDirective } from '@ngx-uk-frontend/core/checkbox';
import {
  CommonFormInputDirective,
  inputCommonInputs,
  ValueAccessorDirective,
} from '@ngx-uk-frontend/core/form-utils';

/**
 * This component implements the Scottish Government Design System checkbox component.
 * It allows users to select one or more options by ticking a box.
 *
 * @see https://designsystem.gov.scot/components/checkboxes
 */
@Component({
  selector: 'ngx-govscot-checkbox',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ValueAccessorDirective,
    { directive: CommonFormInputDirective, inputs: inputCommonInputs },
  ],
})
export class GovScotCheckboxComponent extends CheckboxDirective {}
