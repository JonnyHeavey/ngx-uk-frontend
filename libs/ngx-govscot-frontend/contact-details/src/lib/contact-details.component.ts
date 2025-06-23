import { NgClass, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  input,
} from '@angular/core';
import { GovScotContactItemDirective } from './contact-item.directive';

/**
 * This component implements the Scottish Government Design System contact details component.
 * Use the contact details component to show users ways to get in touch with your organisation.
 *
 * Based on the official Scottish Government Design System:
 * https://designsystem.gov.scot/components/contact-details/
 *
 * @example
 * ```html
 * <ngx-govscot-contact-details title="Contact">
 *   <ngx-govscot-contact-item label="Address" type="address">
 *     <ng-template #itemContent>
 *       Scottish Government<br>
 *       St Andrew's House<br>
 *       Regent Road<br>
 *       Edinburgh<br>
 *       EH1 3DG
 *     </ng-template>
 *   </ngx-govscot-contact-item>
 *   <ngx-govscot-contact-item label="Email" type="email" href="email@gov.scot">
 *     <ng-template #itemContent>
 *       email@gov.scot
 *     </ng-template>
 *   </ngx-govscot-contact-item>
 *   <ngx-govscot-contact-item label="Phone" type="phone" additionalInfo="Main line is open 8am to 5pm">
 *     <ng-template #itemContent>
 *       0123 456 7000
 *     </ng-template>
 *   </ngx-govscot-contact-item>
 * </ngx-govscot-contact-details>
 * ```
 */
@Component({
  selector: 'ngx-govscot-contact-details',
  imports: [NgClass, NgTemplateOutlet],
  templateUrl: './contact-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotContactDetailsComponent {
  /** The title for the contact details section */
  readonly title = input<string>('Contact');

  /** Whether to display in a two-column layout */
  readonly twoColumn = input<boolean>(false);

  /** Additional CSS classes to apply */
  readonly classes = input<string>('');

  /** Collection of contact item directives that are children of this component */
  readonly contactItems = contentChildren(GovScotContactItemDirective);

  /** Computed CSS classes for the main container */
  readonly contactDetailsClasses = computed(() => {
    const baseClass = 'ds_contact-details';
    const customClasses = this.classes();
    return customClasses ? `${baseClass} ${customClasses}` : baseClass;
  });

  /** Computed CSS classes for the grid layout */
  readonly gridClasses = computed(() => {
    return this.twoColumn() ? 'ds_contact-details-grid' : '';
  });
}
