/* eslint-disable @angular-eslint/directive-selector */
import { Directive } from '@angular/core';
import { RadioOptionDirective } from '@ngx-uk-frontend/core/radio';

/**
 * GovScot-specific radio option directive that extends the common radio option functionality.
 * This directive provides the Scottish Government Design System selector while inheriting
 * all common radio option behavior.
 */
@Directive({
  selector: 'ngx-govscot-radio-option',
})
export class GovScotRadioOptionDirective extends RadioOptionDirective {}
