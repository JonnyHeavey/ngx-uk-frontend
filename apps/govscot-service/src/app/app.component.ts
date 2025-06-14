import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  GovScotAccordionComponent,
  GovScotAccordionItemComponent,
} from 'ngx-govscot-frontend/accordion';
import {
  GovScotBreadcrumbDirective,
  GovScotBreadcrumbsComponent,
} from 'ngx-govscot-frontend/breadcrumbs';
import {
  GovScotButtonComponent,
  GovScotButtonGroupComponent,
} from 'ngx-govscot-frontend/button';
import { GovScotDetailsComponent } from 'ngx-govscot-frontend/details';
import { GovScotNotificationPanelComponent } from 'ngx-govscot-frontend/notification-panel';
import { GovScotPaginationComponent } from 'ngx-govscot-frontend/pagination';
import { GovScotPhaseBannerComponent } from 'ngx-govscot-frontend/phase-banner';
import { GovScotSkipLinkComponent } from 'ngx-govscot-frontend/skip-link';
import { GovScotStatusTagComponent } from 'ngx-govscot-frontend/status-tag';
import {
  GovScotSummaryListActionComponent,
  GovScotSummaryListActionsComponent,
  GovScotSummaryListCardActionsComponent,
  GovScotSummaryListCardComponent,
  GovScotSummaryListComponent,
  GovScotSummaryListItemComponent,
  GovScotSummaryListValueDirective,
} from 'ngx-govscot-frontend/summary-list';
import {
  GovScotTabComponent,
  GovScotTabsComponent,
} from 'ngx-govscot-frontend/tabs';
import { GovScotTextInputComponent } from 'ngx-govscot-frontend/text-input';
import { GovScotWarningTextComponent } from 'ngx-govscot-frontend/warning-text';

@Component({
  imports: [
    RouterModule,
    ReactiveFormsModule,
    GovScotDetailsComponent,
    GovScotAccordionComponent,
    GovScotAccordionItemComponent,
    GovScotBreadcrumbDirective,
    GovScotBreadcrumbsComponent,
    GovScotButtonComponent,
    GovScotButtonGroupComponent,
    GovScotNotificationPanelComponent,
    GovScotPaginationComponent,
    GovScotPhaseBannerComponent,
    GovScotSkipLinkComponent,
    GovScotStatusTagComponent,
    GovScotSummaryListComponent,
    GovScotSummaryListItemComponent,
    GovScotSummaryListActionsComponent,
    GovScotSummaryListActionComponent,
    GovScotSummaryListValueDirective,
    GovScotSummaryListCardComponent,
    GovScotSummaryListCardActionsComponent,
    GovScotTabComponent,
    GovScotTabsComponent,
    GovScotTextInputComponent,
    GovScotWarningTextComponent,
  ],
  selector: 'ngx-govscot-frontend-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'govscot-service';

  // Make Math available in template
  Math = Math;

  // Text input form controls
  companyNameControl = new FormControl('');
  emailControl = new FormControl('');
  postcodeControl = new FormControl('');
  phoneControl = new FormControl('');
  yearControl = new FormControl('');
  address1Control = new FormControl('');
  address2Control = new FormControl('');
  cityControl = new FormControl('');
  priceGbpControl = new FormControl('');
  priceUsdControl = new FormControl('');
  searchControl = new FormControl('');
  dayControl = new FormControl('');
  monthControl = new FormControl('');
  yearBirthControl = new FormControl('');

  // Pagination state
  searchResults = {
    total: 247,
    currentPage: 1,
    itemsPerPage: 20,
  };

  documentArchive = {
    total: 1543,
    currentPage: 15,
    itemsPerPage: 25,
  };

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

  // Pagination event handlers
  onSearchPageChange(page: number) {
    console.log(`Navigating to search results page ${page}`);
    this.searchResults.currentPage = page;
    // Perform search with new page
  }

  onSearchPreviousClick() {
    if (this.searchResults.currentPage > 1) {
      this.searchResults.currentPage--;
      console.log(
        `Previous: Now on search page ${this.searchResults.currentPage}`,
      );
    }
  }

  onSearchNextClick() {
    const totalPages = Math.ceil(
      this.searchResults.total / this.searchResults.itemsPerPage,
    );
    if (this.searchResults.currentPage < totalPages) {
      this.searchResults.currentPage++;
      console.log(`Next: Now on search page ${this.searchResults.currentPage}`);
    }
  }

  onArchivePageChange(page: number) {
    console.log(`Navigating to archive page ${page}`);
    this.documentArchive.currentPage = page;
    // Load archive data for new page
  }

  onArchivePreviousClick() {
    if (this.documentArchive.currentPage > 1) {
      this.documentArchive.currentPage--;
      console.log(
        `Previous: Now on archive page ${this.documentArchive.currentPage}`,
      );
    }
  }

  onArchiveNextClick() {
    const totalPages = Math.ceil(
      this.documentArchive.total / this.documentArchive.itemsPerPage,
    );
    if (this.documentArchive.currentPage < totalPages) {
      this.documentArchive.currentPage++;
      console.log(
        `Next: Now on archive page ${this.documentArchive.currentPage}`,
      );
    }
  }

  // Computed properties for template
  get searchTotalPages() {
    return Math.ceil(
      this.searchResults.total / this.searchResults.itemsPerPage,
    );
  }

  get searchStartItem() {
    return (
      (this.searchResults.currentPage - 1) * this.searchResults.itemsPerPage + 1
    );
  }

  get searchEndItem() {
    return Math.min(
      this.searchResults.currentPage * this.searchResults.itemsPerPage,
      this.searchResults.total,
    );
  }

  get archiveTotalPages() {
    return Math.ceil(
      this.documentArchive.total / this.documentArchive.itemsPerPage,
    );
  }

  get archiveStartItem() {
    return (
      (this.documentArchive.currentPage - 1) *
        this.documentArchive.itemsPerPage +
      1
    );
  }

  get archiveEndItem() {
    return Math.min(
      this.documentArchive.currentPage * this.documentArchive.itemsPerPage,
      this.documentArchive.total,
    );
  }
}
