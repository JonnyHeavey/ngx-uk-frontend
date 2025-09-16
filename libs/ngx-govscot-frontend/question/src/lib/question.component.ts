import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroupDirective } from '@ngx-uk-frontend/core/form-group';

/**
 * This component implements the GovScot Design System question wrapper.
 * It provides the GovScot question styling and layout for form controls.
 */
@Component({
  selector: 'ngx-govscot-question',
  templateUrl: './question.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotQuestionComponent extends FormGroupDirective {}
