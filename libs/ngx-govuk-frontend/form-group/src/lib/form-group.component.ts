import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroupDirective } from '@ngx-uk-frontend/core/form-group';

/**
 * This component implements the GOV.UK Design System form group wrapper.
 * It provides the GOV.UK form group styling and layout for form controls.
 */
@Component({
  selector: 'ngx-govuk-form-group',
  templateUrl: './form-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKFormGroupComponent extends FormGroupDirective {}
