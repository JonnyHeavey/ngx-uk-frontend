import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PhaseBannerDirective } from '@ngx-uk-frontend/core/phase-banner';
import { GovUKTagComponent } from 'ngx-govuk-frontend/tag';

/**
 * This component implements the GOV.UK Design System phase banner component.
 * It shows users that the service is still being worked on and in a particular phase.
 *
 * @see https://design-system.service.gov.uk/components/phase-banner/
 */
@Component({
  selector: 'ngx-govuk-phase-banner',
  imports: [TitleCasePipe, GovUKTagComponent],
  templateUrl: './phase-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKPhaseBannerComponent extends PhaseBannerDirective {}
