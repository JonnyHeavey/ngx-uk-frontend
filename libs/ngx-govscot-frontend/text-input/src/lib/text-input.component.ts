import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  CommonFormInputDirective,
  ValueAccessorDirective,
  inputCommonInputs,
} from '@ngx-uk-frontend/core/form-utils';
import { TextInputDirective } from '@ngx-uk-frontend/core/text-input';

/**
 * This component implements the Scottish Government Design System text input component.
 * It allows users to enter text that's a single line.
 *
 * @see https://designsystem.gov.scot/components/text-input/
 */
@Component({
  selector: 'ngx-govscot-text-input',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ValueAccessorDirective,
    { directive: CommonFormInputDirective, inputs: inputCommonInputs },
  ],
})
export class GovScotTextInputComponent extends TextInputDirective {
  // Scottish Government Design System specific inputs

  // Currency support
  readonly currency = input<boolean>(false);
  readonly currencySymbol = input<string>('£');

  // Button integration (for search inputs, etc.)
  readonly hasButton = input<boolean>(false);
  readonly buttonText = input<string>();
  readonly buttonIcon = input<string>();

  /**
   * Computed signal for CSS classes based on width settings
   */
  readonly inputClasses = computed(() => {
    const classes: string[] = [];

    // Width classes
    if (this.fixedWidth()) {
      classes.push(`ds_input--fixed-${this.fixedWidth()}`);
    } else if (this.width()) {
      const width = this.width();
      switch (width) {
        case 'full':
          // No additional class needed for full width
          break;
        case 'three-quarters':
          classes.push('ds_input--fluid-three-quarters');
          break;
        case 'two-thirds':
          classes.push('ds_input--fluid-two-thirds');
          break;
        case 'one-half':
          classes.push('ds_input--fluid-half');
          break;
        case 'one-third':
          classes.push('ds_input--fluid-one-third');
          break;
        case 'one-quarter':
          classes.push('ds_input--fluid-one-quarter');
          break;
      }
    }

    // Combine with any extra classes from common form input
    const extraClasses = this.commonFormInput.extraClasses();
    if (extraClasses) {
      classes.push(extraClasses);
    }

    return classes.join(' ');
  });
}
