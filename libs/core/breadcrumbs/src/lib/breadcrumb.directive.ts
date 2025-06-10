/* eslint-disable @angular-eslint/directive-selector */
import { Directive, input } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Base directive for individual breadcrumb items across different design systems.
 * Provides common functionality for managing breadcrumb item properties.
 */
@Directive()
export abstract class BreadcrumbDirective {
  /** The label text for the breadcrumb item. This input is required. */
  readonly label = input.required<string>();

  /** The link/route for the breadcrumb item. Can be a string, array, or RouterLink compatible value. */
  readonly link = input<RouterLink['routerLink']>();

  /** Whether this breadcrumb item represents the current page. */
  readonly current = input<boolean>(false);
}
