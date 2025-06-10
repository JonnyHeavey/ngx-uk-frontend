import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  GovScotAccordionComponent,
  GovScotAccordionItemComponent,
} from 'ngx-govscot-frontend/accordion';
import { GovScotDetailsComponent } from 'ngx-govscot-frontend/details';

@Component({
  imports: [
    RouterModule,
    GovScotDetailsComponent,
    GovScotAccordionComponent,
    GovScotAccordionItemComponent,
  ],
  selector: 'ngx-govscot-frontend-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'govscot-service';
}
