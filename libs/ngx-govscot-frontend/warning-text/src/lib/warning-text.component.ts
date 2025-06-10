import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * This component implements the Scottish Government Design System warning text component.
 * It puts a clear notice in a page to tell users about something important. This could be
 * an action they need to take, or something they need to know.
 *
 * @see https://designsystem.gov.scot/components/warning-text
 */
@Component({
  selector: 'ngx-govscot-warning-text',
  templateUrl: './warning-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotWarningTextComponent {}
