import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PhaseBannerDirective } from '@ngx-uk-frontend/core/phase-banner';

/**
 * This component implements the Scottish Government Design System phase banner component.
 * It shows users that the service is still being worked on and in a particular phase.
 *
 * Based on the official Scottish Government Design System specifications:
 * @see https://designsystem.gov.scot/components/phase-banner
 */
@Component({
  selector: 'ngx-govscot-phase-banner',
  imports: [TitleCasePipe],
  templateUrl: './phase-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotPhaseBannerComponent extends PhaseBannerDirective {}
