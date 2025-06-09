import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InsetTextDirective } from '@ngx-uk-frontend/core/inset-text';

/**
 * This component implements the GOV.UK Design System inset text component.
 * It distinguishes a block of text from the surrounding content.
 *
 * @see https://design-system.service.gov.uk/components/inset-text/
 */
@Component({
  selector: 'ngx-govuk-inset-text',
  templateUrl: './inset-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GovUKInsetTextComponent extends InsetTextDirective {}
