import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  GovScotAccordionComponent,
  GovScotAccordionItemComponent,
} from 'ngx-govscot-frontend/accordion';
import {
  GovScotButtonComponent,
  GovScotButtonGroupComponent,
} from 'ngx-govscot-frontend/button';
import { GovScotDetailsComponent } from 'ngx-govscot-frontend/details';
import { GovScotPhaseBannerComponent } from 'ngx-govscot-frontend/phase-banner';
import { GovScotSkipLinkComponent } from 'ngx-govscot-frontend/skip-link';
import { GovScotWarningTextComponent } from 'ngx-govscot-frontend/warning-text';

@Component({
  imports: [
    RouterModule,
    GovScotDetailsComponent,
    GovScotAccordionComponent,
    GovScotAccordionItemComponent,
    GovScotButtonComponent,
    GovScotButtonGroupComponent,
    GovScotPhaseBannerComponent,
    GovScotSkipLinkComponent,
    GovScotWarningTextComponent,
  ],
  selector: 'ngx-govscot-frontend-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'govscot-service';

  // Example methods for button interactions
  onStartApplication() {
    console.log('Starting Corporation Tax application...');
    // Navigate to application form
  }

  onSaveProgress() {
    console.log('Saving application progress...');
    // Save form data
  }

  onCancelApplication() {
    if (
      confirm('Are you sure you want to cancel? All progress will be lost.')
    ) {
      console.log('Application cancelled');
      // Navigate back to start
    }
  }

  onDownloadGuide() {
    console.log('Downloading Corporation Tax guide...');
    // Trigger file download
  }

  onContactSupport() {
    console.log('Opening support contact...');
    // Open contact modal or navigate to contact page
  }

  onSubmitApplication() {
    console.log('Submitting Corporation Tax application...');
    // Validate and submit form
  }
}
