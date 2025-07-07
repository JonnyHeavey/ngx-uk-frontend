# ngx-govuk-frontend/task-list

## Overview

The task list component helps users understand the tasks they need to complete, the order they need to complete tasks in, and when they have completed a task. This is an Angular implementation of the [GOV.UK Design System Task List pattern](https://design-system.service.gov.uk/patterns/task-list-pages/).

## Components and Directives

- `GovUKTaskListComponent` - The main container component for a task list
- `GovUKTaskListItemDirective` - Applied to individual task list items

## Usage

```typescript
import {
  GovUKTaskListComponent,
  GovUKTaskListItemDirective
} from 'ngx-govuk-frontend/task-list';

@Component({
  // ...
  imports: [
    GovUKTaskListComponent,
    GovUKTaskListItemDirective
  ]
})
```

### Basic example

```html
<ngx-govuk-task-list>
  <ngx-govuk-task-list-item title="Check eligibility" href="/check-eligibility" statusText="Completed"> </ngx-govuk-task-list-item>

  <ngx-govuk-task-list-item title="Personal details" routerLink="/personal-details" statusText="In progress" tagColor="blue"> </ngx-govuk-task-list-item>

  <ngx-govuk-task-list-item title="Submit application" noLink="true" statusText="Cannot start yet"> </ngx-govuk-task-list-item>
</ngx-govuk-task-list>
```

### With hints

```html
<ngx-govuk-task-list>
  <ngx-govuk-task-list-item title="Review your answers" routerLink="/review" hint="Check your application before submitting" statusText="Not started" tagColor="grey"> </ngx-govuk-task-list-item>

  <ngx-govuk-task-list-item title="Declaration" routerLink="/declaration" hint="Agree to our terms and conditions" statusText="Not started" tagColor="grey"> </ngx-govuk-task-list-item>
</ngx-govuk-task-list>
```

### With custom status tags

```html
<ngx-govuk-task-list>
  <ngx-govuk-task-list-item title="Personal details" routerLink="/personal-details" statusText="Completed" tagColor="green"> </ngx-govuk-task-list-item>

  <ngx-govuk-task-list-item title="Employment history" routerLink="/employment" statusText="In progress" tagColor="blue"> </ngx-govuk-task-list-item>

  <ngx-govuk-task-list-item title="References" routerLink="/references" statusText="Not started" tagColor="grey"> </ngx-govuk-task-list-item>
</ngx-govuk-task-list>
```

## API Reference

### GovUKTaskListItemDirective Inputs

| Name         | Type            | Required | Description                                                                         |
| ------------ | --------------- | -------- | ----------------------------------------------------------------------------------- |
| `title`      | `string`        | Yes      | The title of the task to display                                                    |
| `statusText` | `string`        | Yes      | Text to display as the status of the task                                           |
| `href`       | `string`        | No       | URL for the task link                                                               |
| `routerLink` | `string`        | No       | Angular router link for the task                                                    |
| `hint`       | `string`        | No       | Hint text to display below the task title                                           |
| `tagColor`   | `GovUKTagColor` | No       | Color of the tag to use for the status (if provided, status will be shown as a tag) |
| `noLink`     | `boolean`       | No       | When true, the task item will not be rendered as a link (default: false)            |
