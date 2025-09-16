import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  CommonFormInputDirective,
  ValueAccessorDirective,
  inputCommonInputs,
} from '@ngx-uk-frontend/core/form-utils';
import { SelectDirective, SelectOption } from '@ngx-uk-frontend/core/select';

/**
 * Interface defining an option in the select dropdown for GovScot.
 */
export type GovScotSelectOption = SelectOption;

/**
 * This component implements the Scottish Government Design System select component.
 * It allows users to choose an option from a dropdown list.
 *
 * @see https://designsystem.gov.scot/components/select
 */
@Component({
  selector: 'ngx-govscot-select',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ValueAccessorDirective,
    {
      directive: CommonFormInputDirective,
      inputs: inputCommonInputs,
    },
  ],
})
export class GovScotSelectComponent extends SelectDirective {}
