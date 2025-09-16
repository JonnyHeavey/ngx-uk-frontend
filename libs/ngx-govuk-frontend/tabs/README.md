# ngx-govuk-frontend/tabs

## Overview

The tabs component lets users navigate between related sections of content on the same page. This is an Angular implementation of the [GOV.UK Design System Tabs component](https://design-system.service.gov.uk/components/tabs/).

## Components

- `GovUKTabsComponent` - The main container component for a set of tabs
- `GovUKTabComponent` - Individual tab panel component containing content

## Usage

```typescript
import {
  GovUKTabsComponent,
  GovUKTabComponent
} from 'ngx-govuk-frontend/tabs';

@Component({
  // ...
  imports: [
    GovUKTabsComponent,
    GovUKTabComponent
  ]
})
```

### Basic example

```html
<ngx-govuk-tabs title="Contents">
  <ngx-govuk-tab id="past-day" title="Past day">
    <p>Content for the past day tab panel</p>
  </ngx-govuk-tab>
  <ngx-govuk-tab id="past-week" title="Past week">
    <p>Content for the past week tab panel</p>
  </ngx-govuk-tab>
  <ngx-govuk-tab id="past-month" title="Past month">
    <p>Content for the past month tab panel</p>
  </ngx-govuk-tab>
  <ngx-govuk-tab id="past-year" title="Past year">
    <p>Content for the past year tab panel</p>
  </ngx-govuk-tab>
</ngx-govuk-tabs>
```

### Two-way binding for active tab

```html
<ngx-govuk-tabs title="Contents" [(activeTab)]="selectedTabIndex">
  <ngx-govuk-tab id="first" title="First tab">
    <p>Content for the first tab</p>
  </ngx-govuk-tab>
  <ngx-govuk-tab id="second" title="Second tab">
    <p>Content for the second tab</p>
  </ngx-govuk-tab>
</ngx-govuk-tabs>

<p>Selected tab index: {{ selectedTabIndex }}</p>
<button (click)="selectedTabIndex = 1">Select second tab</button>
```

```typescript
@Component({
  // ...
})
export class TabsExampleComponent {
  selectedTabIndex = 0;
}
```

### With complex content

```html
<ngx-govuk-tabs title="Housing application">
  <ngx-govuk-tab id="personal-details" title="Personal details">
    <h2 class="govuk-heading-l">Personal details</h2>
    <div class="govuk-form-group">
      <label class="govuk-label" for="name">Full name</label>
      <input class="govuk-input" id="name" type="text" />
    </div>
    <div class="govuk-form-group">
      <label class="govuk-label" for="dob">Date of birth</label>
      <input class="govuk-input" id="dob" type="date" />
    </div>
  </ngx-govuk-tab>
  <ngx-govuk-tab id="housing-details" title="Housing details">
    <h2 class="govuk-heading-l">Housing details</h2>
    <!-- More form content -->
  </ngx-govuk-tab>
</ngx-govuk-tabs>
```

## API Reference

### GovUKTabsComponent

#### Inputs

| Name        | Type     | Required | Description                                                              |
| ----------- | -------- | -------- | ------------------------------------------------------------------------ |
| `title`     | `string` | Yes      | The title for the tabs component                                         |
| `activeTab` | `number` | No       | Two-way binding for the index of the currently selected tab (default: 0) |

### GovUKTabComponent

#### Inputs

| Name    | Type     | Required | Description                       |
| ------- | -------- | -------- | --------------------------------- |
| `id`    | `string` | Yes      | The unique identifier for the tab |
| `title` | `string` | Yes      | The text displayed in the tab     |
