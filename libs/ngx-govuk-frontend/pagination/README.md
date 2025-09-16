# ngx-govuk-frontend/pagination

## Overview

The pagination component helps users navigate through a series of pages of search results or documents. This is an Angular implementation of the [GOV.UK Design System Pagination component](https://design-system.service.gov.uk/components/pagination/).

## Components

- `GovUKPaginationComponent` - The main pagination component

## Usage

```typescript
import { GovUKPaginationComponent } from 'ngx-govuk-frontend/pagination';

@Component({
  // ...
  imports: [
    GovUKPaginationComponent
  ]
})
```

### Basic example with list-style pagination

```html
<ngx-govuk-pagination [itemCount]="100" [itemsPerPage]="10" [currentPage]="1" (pageChange)="onPageChange($event)"> </ngx-govuk-pagination>
```

```typescript
onPageChange(page: number) {
  // Handle page change logic
  console.log(`Navigating to page ${page}`);
}
```

### Block-style pagination

```html
<ngx-govuk-pagination mode="block" [currentPage]="3" [totalPages]="5" previousLabel="1 of 3" nextLabel="3 of 3" (previousClick)="onPreviousClick()" (nextClick)="onNextClick()"> </ngx-govuk-pagination>
```

```typescript
onPreviousClick() {
  // Handle previous page navigation
}

onNextClick() {
  // Handle next page navigation
}
```

### Customizing labels

```html
<ngx-govuk-pagination [itemCount]="50" [itemsPerPage]="10" [currentPage]="3" previousTitle="Previous page" nextTitle="Next page" (pageChange)="onPageChange($event)"> </ngx-govuk-pagination>
```

## API Reference

### Inputs

| Name            | Type                | Default      | Description                                        |
| --------------- | ------------------- | ------------ | -------------------------------------------------- |
| `itemCount`     | `number`            | `0`          | Total number of items                              |
| `itemsPerPage`  | `number`            | `10`         | Number of items per page                           |
| `currentPage`   | `number`            | `1`          | Current page number (1-based)                      |
| `mode`          | `'list' \| 'block'` | `'list'`     | Pagination mode                                    |
| `previousTitle` | `string`            | `'Previous'` | Title for the previous button                      |
| `previousLabel` | `string \| null`    | `null`       | Label for the previous button (additional context) |
| `nextTitle`     | `string`            | `'Next'`     | Title for the next button                          |
| `nextLabel`     | `string \| null`    | `null`       | Label for the next button (additional context)     |

### Outputs

| Name            | Type                   | Description                                                         |
| --------------- | ---------------------- | ------------------------------------------------------------------- |
| `pageChange`    | `EventEmitter<number>` | Emitted when a pagination item is clicked, provides the page number |
| `previousClick` | `EventEmitter<void>`   | Emitted when the previous link is clicked                           |
| `nextClick`     | `EventEmitter<void>`   | Emitted when the next link is clicked                               |
