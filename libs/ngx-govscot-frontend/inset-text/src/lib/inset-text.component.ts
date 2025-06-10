import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * This component implements the Scottish Government Design System inset text component.
 * It distinguishes a block of text from the surrounding content.
 *
 * @see https://designsystem.gov.scot/components/inset-text
 */
@Component({
  selector: 'ngx-govscot-inset-text',
  templateUrl: './inset-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GovScotInsetTextComponent {}
