import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * This component implements the GOV.UK Design System inset text component.
 * It distinguishes a block of text from the content around it, for example,
 * by using a border on the left side.
 *
 * @see https://design-system.service.gov.uk/components/inset-text/
 */
@Component({
  selector: 'ngx-govuk-inset-text',
  templateUrl: './inset-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GovUKInsetTextComponent {}
