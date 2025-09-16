import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  TemplateRef,
  viewChild,
} from '@angular/core';

/**
 * Component for individual contact detail items.
 * Represents a single contact detail with label and content.
 *
 * This component is used with content projection to build up contact details
 * in a declarative way, similar to how tab components work.
 */
@Component({
  selector: 'ngx-govscot-contact-item',
  template: '<ng-template #itemContent><ng-content /></ng-template>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotContactItemDirective {
  /** The label/title for this contact detail item */
  readonly label = input.required<string>();

  /** The type of contact detail for semantic and styling purposes */
  readonly type = input.required<
    'address' | 'email' | 'phone' | 'website' | 'social' | 'fax' | 'other'
  >();

  /** Optional href for contact details that should be links */
  readonly href = input<string>();

  /** Optional icon URL for social media items */
  readonly icon = input<string>();

  /** Optional additional information to display */
  readonly additionalInfo = input<string>();

  /** Reference to the template containing the item's content */
  readonly itemContent =
    viewChild.required<TemplateRef<unknown>>('itemContent');

  /**
   * Computed signal that determines if this contact item should display an icon.
   * Only social media items can have icons.
   */
  readonly hasIcon = computed(() => {
    return this.type() === 'social' && !!this.icon();
  });

  /**
   * Computed signal that determines if this contact item should be rendered as a link.
   * Email, website, and social items can be links if they have an href.
   */
  readonly hasLink = computed(() => {
    const linkableTypes = ['email', 'website', 'social'];
    return linkableTypes.includes(this.type()) && !!this.href();
  });

  /**
   * Computed signal that gets the href for this contact item, adding mailto: prefix for email items.
   */
  readonly contactHref = computed(() => {
    if (!this.href()) {
      return '';
    }

    // Add mailto: prefix for email items if not already present
    if (this.type() === 'email' && !this.href()!.startsWith('mailto:')) {
      return `mailto:${this.href()}`;
    }

    return this.href()!;
  });
}
