import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InsetTextDirective } from '@ngx-uk-frontend/core/inset-text';

/**
 * This component implements the Scottish Government Design System inset text component.
 * It highlights a block of text from the content that surrounds it.
 *
 * @see https://designsystem.gov.scot/components/inset-text
 */
@Component({
  selector: 'ngx-govscot-inset-text',
  templateUrl: './inset-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GovScotInsetTextComponent extends InsetTextDirective {}
