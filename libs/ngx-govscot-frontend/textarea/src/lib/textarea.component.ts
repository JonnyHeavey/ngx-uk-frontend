import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  CommonFormInputDirective,
  ValueAccessorDirective,
  inputCommonInputs,
} from '@ngx-uk-frontend/core/form-utils';
import { TextareaDirective } from '@ngx-uk-frontend/core/textarea';

/**
 * This component implements the Scottish Government Design System textarea component.
 * It allows users to enter multiple lines of text.
 *
 * @see https://designsystem.gov.scot/components/textarea
 */
@Component({
  selector: 'ngx-govscot-textarea',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ValueAccessorDirective,
    { directive: CommonFormInputDirective, inputs: inputCommonInputs },
  ],
})
export class GovScotTextareaComponent extends TextareaDirective {}
