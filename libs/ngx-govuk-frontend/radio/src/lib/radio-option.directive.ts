/* eslint-disable @angular-eslint/directive-selector */
import { Directive } from '@angular/core';
import { RadioOptionDirective } from '@ngx-uk-frontend/core/radio';

/**
 * GovUK-specific radio option directive that extends the common radio option functionality.
 * This directive provides the GovUK selector while inheriting all common radio option behavior.
 */
@Directive({
  selector: 'ngx-govuk-radio-option',
})
export class GovUKRadioOptionDirective extends RadioOptionDirective {}
