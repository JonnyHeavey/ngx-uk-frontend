import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import {
  GovScotAccordionComponent,
  GovScotAccordionItemComponent,
} from 'ngx-govscot-frontend/accordion';
import { GovScotAspectBoxComponent } from 'ngx-govscot-frontend/aspect-box';
import { GovScotBackToTopComponent } from 'ngx-govscot-frontend/back-to-top';
import {
  GovScotBreadcrumbDirective,
  GovScotBreadcrumbsComponent,
} from 'ngx-govscot-frontend/breadcrumbs';
import {
  GovScotButtonComponent,
  GovScotButtonGroupComponent,
} from 'ngx-govscot-frontend/button';
import { GovScotCheckboxComponent } from 'ngx-govscot-frontend/checkbox';
import { GovScotConfirmationMessageComponent } from 'ngx-govscot-frontend/confirmation-message';
import {
  GovScotContactDetailsComponent,
  GovScotContactItemDirective,
} from 'ngx-govscot-frontend/contact-details';
import { GovScotCookieBannerComponent } from 'ngx-govscot-frontend/cookie-banner';
import { GovScotDetailsComponent } from 'ngx-govscot-frontend/details';
import {
  GovScotErrorSummaryComponent,
  GovScotErrorSummaryItemDirective,
} from 'ngx-govscot-frontend/error-summary';
import { GovScotFeatureHeaderComponent } from 'ngx-govscot-frontend/feature-header';
import { GovScotFileDownloadComponent } from 'ngx-govscot-frontend/file-download';
import { GovScotHidePageComponent } from 'ngx-govscot-frontend/hide-page';
import { GovScotNotificationBannerComponent } from 'ngx-govscot-frontend/notification-banner';
import { GovScotNotificationPanelComponent } from 'ngx-govscot-frontend/notification-panel';
import { GovScotPageHeaderComponent } from 'ngx-govscot-frontend/page-header';
import {
  GovScotPageMetadataComponent,
  MetadataItem,
} from 'ngx-govscot-frontend/page-metadata';
import { GovScotPaginationComponent } from 'ngx-govscot-frontend/pagination';
import { GovScotPhaseBannerComponent } from 'ngx-govscot-frontend/phase-banner';
import { GovScotQuestionComponent } from 'ngx-govscot-frontend/question';
import {
  GovScotRadioGroupComponent,
  GovScotRadioOptionDirective,
} from 'ngx-govscot-frontend/radio';
import { GovScotSelectComponent } from 'ngx-govscot-frontend/select';
import {
  GovScotSequentialNavigationComponent,
  SequentialNavigationItem,
} from 'ngx-govscot-frontend/sequential-navigation';
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
import { GovScotTableComponent } from 'ngx-govscot-frontend/table';
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
    GovScotAspectBoxComponent,
    GovScotBackToTopComponent,
    GovScotBreadcrumbDirective,
    GovScotBreadcrumbsComponent,
    GovScotButtonComponent,
    GovScotButtonGroupComponent,
    GovScotCheckboxComponent,
    GovScotConfirmationMessageComponent,
    GovScotContactDetailsComponent,
    GovScotCookieBannerComponent,
    GovScotFeatureHeaderComponent,
    GovScotFileDownloadComponent,
    GovScotHidePageComponent,
    GovScotNotificationBannerComponent,
    GovScotNotificationPanelComponent,
    GovScotPageHeaderComponent,
    GovScotPageMetadataComponent,
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
    GovScotTableComponent,
    GovScotTabComponent,
    GovScotTabsComponent,
    GovScotTextInputComponent,
    GovScotTextareaComponent,
    GovScotWarningTextComponent,
    GovScotRadioGroupComponent,
    GovScotRadioOptionDirective,
    GovScotSelectComponent,
    GovScotSequentialNavigationComponent,
    GovScotErrorSummaryComponent,
    GovScotErrorSummaryItemDirective,
    GovScotContactItemDirective,
    RouterOutlet,
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

  // Character count textarea form controls
  basicCharCountControl = new FormControl('');
  businessActivitiesControl = new FormControl('');

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

  // Notification banner state
  showBasicNotification = true;
  showCloseableNotification = true;
  showIconNotification = true;
  showReversedNotification = true;

  // Page header examples data
  pageHeaderMetadata = [
    { key: 'Last updated', value: '8 November 2016' },
    { key: 'Published', value: '1 January 2016' },
  ];

  newsMetadata = [
    { key: 'Published', value: '10 April 2024' },
    { key: 'Author', value: 'Scottish Government Press Office' },
  ];

  serviceMetadata = [
    { key: 'Service type', value: 'Online application' },
    { key: 'Processing time', value: '10 working days' },
  ];

  // Page metadata examples data
  basicMetadata: MetadataItem[] = [
    { key: 'Published', value: '15 December 2023' },
    { key: 'Last updated', value: '20 December 2023' },
    { key: 'Directorate', value: 'Digital Directorate' },
  ];

  publicationMetadata = [
    { key: 'Published', value: '22 November 2023' },
    { key: 'Last updated', value: '15 January 2024' },
    { key: 'ISBN', value: '978-1-80525-123-4' },
    { key: 'Reference', value: 'GOV/2024/001' },
  ];

  newsArticleMetadata = [
    { key: 'Published', value: '10 December 2024' },
    { key: 'Category', value: 'Health and social care', href: '#' },
    { key: 'Author', value: 'Scottish Government Communications' },
  ];

  consultationMetadata = [
    { key: 'Published', value: '5 November 2024' },
    { key: 'Consultation closes', value: '7 February 2025' },
    {
      key: 'Directorate',
      value: 'Environment and Climate Change Directorate',
      href: '#',
    },
    { key: 'Topic', value: 'Climate change', href: '#' },
  ];

  metadataWithLinks: MetadataItem[] = [
    { key: 'Published', value: '15 December 2023' },
    { key: 'Last updated', value: '20 December 2023' },
    {
      key: 'Directorate',
      value: 'Digital Directorate',
      href: '/directorates/digital',
    },
    {
      key: 'Part of',
      value: 'Digital Scotland',
      href: '/topics/digital-scotland',
    },
  ];

  inlineMetadata: MetadataItem[] = [
    { key: 'Published', value: '15 December 2023' },
    { key: 'Last updated', value: '20 December 2023' },
  ];

  inlineWithLinksMetadata = [
    { key: 'Category', value: 'Health and social care', href: '#' },
    { key: 'Date', value: '22 April 2024' },
  ];

  // Sequential navigation examples data
  basicSequentialNavigation = {
    previous: {
      text: 'Apply for or renew a Blue Badge',
      link: '/blue-badge/apply',
    } as SequentialNavigationItem,
    next: {
      text: 'Eligibility: who can have one?',
      link: '/blue-badge/eligibility',
    } as SequentialNavigationItem,
  };

  guidanceSequentialNavigation = {
    previous: {
      text: 'What you need to know before applying',
      link: '/guidance/before-applying',
    } as SequentialNavigationItem,
    next: {
      text: 'How to complete your application',
      link: '/guidance/completing-application',
    } as SequentialNavigationItem,
  };

  serviceSequentialNavigation = {
    previous: {
      text: 'Check if you need a licence',
      link: '/licence/check',
    } as SequentialNavigationItem,
    next: {
      text: 'Apply for your licence online',
      link: '/licence/apply',
    } as SequentialNavigationItem,
  };

  policySequentialNavigation = {
    previous: {
      text: 'Policy background and context',
      link: '/policy/background',
    } as SequentialNavigationItem,
    next: {
      text: 'Implementation timeline and next steps',
      link: '/policy/timeline',
    } as SequentialNavigationItem,
  };

  firstPageSequentialNavigation = {
    next: {
      text: 'Understanding the eligibility criteria',
      link: '/eligibility/criteria',
    } as SequentialNavigationItem,
  };

  lastPageSequentialNavigation = {
    previous: {
      text: 'Completing your application form',
      link: '/application/form',
    } as SequentialNavigationItem,
  };

  longTitlesSequentialNavigation = {
    previous: {
      text: 'How to apply for a Blue Badge if you have a permanent disability or health condition that affects your mobility',
      link: '/blue-badge/apply-permanent-disability',
    } as SequentialNavigationItem,
    next: {
      text: 'Understanding the detailed eligibility criteria and requirements for Blue Badge applications in Scotland',
      link: '/blue-badge/eligibility-criteria',
    } as SequentialNavigationItem,
  };

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

  // Cookie banner event handlers
  onAcceptAllCookies() {
    console.log('User accepted all cookies');
    // Set cookies and update preferences
  }

  onAcceptEssentialCookies() {
    console.log('User accepted essential cookies only');
    // Set only essential cookies
  }

  onViewCookiePreferences() {
    console.log('User wants to view cookie preferences');
    // Navigate to cookie preferences page
  }

  onChangeCookieSettings() {
    console.log('User wants to change cookie settings');
    // Navigate to cookie settings page
  }

  onCloseCookieConfirmation() {
    console.log('User closed cookie confirmation message');
    // Hide the confirmation message
  }

  // Notification banner event handlers
  onCloseBasicNotification() {
    console.log('User closed basic notification banner');
    this.showBasicNotification = false;
  }

  onCloseCloseableNotification() {
    console.log('User closed closeable notification banner');
    this.showCloseableNotification = false;
  }

  onCloseIconNotification() {
    console.log('User closed icon notification banner');
    this.showIconNotification = false;
  }

  onCloseReversedNotification() {
    console.log('User closed reversed notification banner');
    this.showReversedNotification = false;
  }
}
