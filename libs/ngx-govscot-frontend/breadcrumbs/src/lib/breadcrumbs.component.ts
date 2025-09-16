import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbsDirective } from '@ngx-uk-frontend/core/breadcrumbs';
import { GovScotBreadcrumbDirective } from './breadcrumb/breadcrumb.directive';

/**
 * This component implements the Scottish Government Design System breadcrumbs component.
 * It helps users understand where they are in a website's structure and navigate back to previous pages.
 *
 * Based on the official Scottish Government Design System specifications:
 * @see https://designsystem.gov.scot/components/breadcrumbs
 */
@Component({
  selector: 'ngx-govscot-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GovScotBreadcrumbsComponent extends BreadcrumbsDirective {
  /** Collection of Scottish Government breadcrumb items that are children of this component. */
  override readonly items = contentChildren(GovScotBreadcrumbDirective);
}
