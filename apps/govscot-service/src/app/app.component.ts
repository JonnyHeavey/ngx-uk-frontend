import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
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
import { GovScotCheckboxComponent } from 'ngx-govscot-frontend/checkbox';
import { GovScotDetailsComponent } from 'ngx-govscot-frontend/details';
import { GovScotNotificationPanelComponent } from 'ngx-govscot-frontend/notification-panel';
import { GovScotPaginationComponent } from 'ngx-govscot-frontend/pagination';
import { GovScotPhaseBannerComponent } from 'ngx-govscot-frontend/phase-banner';
import { GovScotQuestionComponent } from 'ngx-govscot-frontend/question';
import {
  GovScotRadioGroupComponent,
  GovScotRadioOptionDirective,
} from 'ngx-govscot-frontend/radio';
import { GovScotSelectComponent } from 'ngx-govscot-frontend/select';
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
import { GovScotTextareaComponent } from 'ngx-govscot-frontend/textarea';
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
    GovScotCheckboxComponent,
    GovScotNotificationPanelComponent,
    GovScotPaginationComponent,
    GovScotPhaseBannerComponent,
    GovScotQuestionComponent,
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
    GovScotTextareaComponent,
    GovScotWarningTextComponent,
    GovScotRadioGroupComponent,
    GovScotRadioOptionDirective,
    GovScotSelectComponent,
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

  // Textarea form controls
  descriptionControl = new FormControl('');
  commentsControl = new FormControl('');
  feedbackControl = new FormControl('');
  messageControl = new FormControl('');

  // Checkbox form controls
  termsControl = new FormControl(false);
  wasteControl1 = new FormControl(false);
  wasteControl2 = new FormControl(false);
  wasteControl3 = new FormControl(false);
  requiredCheckboxControl = new FormControl(false, Validators.requiredTrue);
  emailUpdatesControl = new FormControl(false);
  smsUpdatesControl = new FormControl(false);
  postalUpdatesControl = new FormControl(false);
  ctRegisterControl = new FormControl(false);
  ctReturnControl = new FormControl(false);
  ctPaymentControl = new FormControl(false);

  // Radio form controls
  businessTypeControl = new FormControl('');
  contactMethodControl = new FormControl('');
  experienceControl = new FormControl('');
  supportControl = new FormControl('');

  // Select form controls
  countryControl = new FormControl('');
  industryControl = new FormControl('');
  companyYearControl = new FormControl('');
  priorityControl = new FormControl('');

  // Select options data
  countryOptions = [
    { value: '', label: 'Please select a country' },
    { value: 'scotland', label: 'Scotland' },
    { value: 'england', label: 'England' },
    { value: 'wales', label: 'Wales' },
    { value: 'northern-ireland', label: 'Northern Ireland' },
    { value: 'republic-of-ireland', label: 'Republic of Ireland' },
    { value: 'other', label: 'Other' },
  ];

  industryOptions = [
    { value: '', label: 'Select your industry' },
    { value: 'agriculture', label: 'Agriculture, forestry and fishing' },
    { value: 'mining', label: 'Mining and quarrying' },
    { value: 'manufacturing', label: 'Manufacturing' },
    {
      value: 'utilities',
      label: 'Electricity, gas, steam and air conditioning supply',
    },
    { value: 'construction', label: 'Construction' },
    { value: 'retail', label: 'Wholesale and retail trade' },
    { value: 'transport', label: 'Transportation and storage' },
    {
      value: 'accommodation',
      label: 'Accommodation and food service activities',
    },
    { value: 'information', label: 'Information and communication' },
    { value: 'financial', label: 'Financial and insurance activities' },
    { value: 'real-estate', label: 'Real estate activities' },
    {
      value: 'professional',
      label: 'Professional, scientific and technical activities',
    },
    {
      value: 'administrative',
      label: 'Administrative and support service activities',
    },
    { value: 'public', label: 'Public administration and defence' },
    { value: 'education', label: 'Education' },
    { value: 'health', label: 'Human health and social work activities' },
    { value: 'arts', label: 'Arts, entertainment and recreation' },
    { value: 'other-services', label: 'Other service activities' },
  ];

  companyYearOptions = [
    { value: '', label: 'Select accounting period end' },
    { value: '31-march', label: '31 March' },
    { value: '30-april', label: '30 April' },
    { value: '31-may', label: '31 May' },
    { value: '30-june', label: '30 June' },
    { value: '31-july', label: '31 July' },
    { value: '31-august', label: '31 August' },
    { value: '30-september', label: '30 September' },
    { value: '31-october', label: '31 October' },
    { value: '30-november', label: '30 November' },
    { value: '31-december', label: '31 December' },
    { value: '31-january', label: '31 January' },
    { value: '28-february', label: '28 February' },
  ];

  priorityOptions = [
    { value: '', label: 'Select priority level' },
    { value: 'low', label: 'Low - General enquiry' },
    { value: 'medium', label: 'Medium - Requires response within 5 days' },
    { value: 'high', label: 'High - Requires response within 2 days' },
    { value: 'urgent', label: 'Urgent - Requires immediate response' },
  ];

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
