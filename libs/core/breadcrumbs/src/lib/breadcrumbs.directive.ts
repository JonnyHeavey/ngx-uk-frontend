import { Directive, contentChildren } from '@angular/core';
import { BreadcrumbDirective } from './breadcrumb.directive';

/**
 * Base directive for breadcrumbs components across different design systems.
 * Provides common functionality for managing breadcrumb collections and navigation.
 */
@Directive()
export abstract class BreadcrumbsDirective {
  /** Collection of breadcrumb items that are children of this component. */
  readonly items = contentChildren(BreadcrumbDirective, { descendants: true });
}
