/* eslint-disable @angular-eslint/directive-selector */
import { Directive } from '@angular/core';
import { BreadcrumbDirective } from '@ngx-uk-frontend/core/breadcrumbs';

/**
 * Directive for individual breadcrumb items in the Scottish Government Design System.
 * Used as a child of GovScotBreadcrumbsComponent to define navigation items.
 *
 * Based on the official Scottish Government Design System specifications:
 * @see https://designsystem.gov.scot/components/breadcrumbs
 */
@Directive({
  selector: 'ngx-govscot-breadcrumb',
  standalone: true,
})
export class GovScotBreadcrumbDirective extends BreadcrumbDirective {}
