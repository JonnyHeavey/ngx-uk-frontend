/* eslint-disable @angular-eslint/directive-selector */
import { Directive } from '@angular/core';
import { BreadcrumbDirective } from '@ngx-uk-frontend/core/breadcrumbs';

/**
 * Directive for individual breadcrumb items in the GOV.UK Design System.
 * Used as a child of GovUKBreadcrumbsComponent to define navigation items.
 *
 * Based on the official GOV.UK Design System specifications:
 * @see https://design-system.service.gov.uk/components/breadcrumbs/
 */
@Directive({
  selector: 'ngx-govuk-breadcrumb',
})
export class GovUKBreadcrumbDirective extends BreadcrumbDirective {}
