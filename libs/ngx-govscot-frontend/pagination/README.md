# Scottish Government Design System - Pagination

This library provides the pagination component for the Scottish Government Design System.

## Installation

```bash
npm install @ngx-govscot-frontend/pagination
```

## Usage

Import the component in your Angular application:

```typescript
import { GovScotPaginationComponent } from '@ngx-govscot-frontend/pagination';

@Component({
  selector: 'app-example',
  imports: [GovScotPaginationComponent],
  template: ` <ngx-govscot-pagination [itemCount]="totalItems" [itemsPerPage]="itemsPerPage" [currentPage]="currentPage" (pageChange)="onPageChange($event)" (previousClick)="onPreviousClick()" (nextClick)="onNextClick()" /> `,
})
export class ExampleComponent {
  totalItems = 250;
  itemsPerPage = 20;
  currentPage = 1;

  onPageChange(page: number) {
    this.currentPage = page;
    // Load data for the new page
  }

  onPreviousClick() {
    if (this.currentPage > 1) {
      this.currentPage--;
      // Load data for the previous page
    }
  }

  onNextClick() {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      // Load data for the next page
    }
  }
}
```

## API

### Inputs

| Property        | Type     | Default      | Description                       |
| --------------- | -------- | ------------ | --------------------------------- |
| `itemCount`     | `number` | `0`          | Total number of items to paginate |
| `itemsPerPage`  | `number` | `10`         | Number of items to show per page  |
| `currentPage`   | `number` | `1`          | Current active page (1-based)     |
| `previousTitle` | `string` | `'Previous'` | Text for the previous button      |
| `nextTitle`     | `string` | `'Next'`     | Text for the next button          |

### Outputs

| Event           | Type     | Description                                 |
| --------------- | -------- | ------------------------------------------- |
| `pageChange`    | `number` | Emitted when a page number is clicked       |
| `previousClick` | `void`   | Emitted when the previous button is clicked |
| `nextClick`     | `void`   | Emitted when the next button is clicked     |

## Features

- **Smart pagination**: Automatically handles ellipsis for large page sets
- **Accessibility**: Full keyboard navigation and screen reader support
- **Responsive**: Works well on all screen sizes
- **Customizable**: Support for custom labels and internationalization
- **Scottish Government Design System**: Follows official design guidelines

## Examples

### Basic Pagination

```html
<ngx-govscot-pagination [itemCount]="100" [itemsPerPage]="10" [currentPage]="1" (pageChange)="onPageChange($event)" />
```

### Custom Labels (Gaelic)

```html
<ngx-govscot-pagination [itemCount]="200" [itemsPerPage]="20" [currentPage]="5" previousTitle="Roimhe" nextTitle="Air adhart" (pageChange)="onPageChange($event)" />
```

### Search Results

```html
<ngx-govscot-pagination [itemCount]="searchResults.total" [itemsPerPage]="20" [currentPage]="searchResults.currentPage" (pageChange)="performSearch($event)" (previousClick)="goToPreviousPage()" (nextClick)="goToNextPage()" />
```

## Accessibility

The pagination component includes:

- Proper ARIA labels for screen readers
- Keyboard navigation support
- Clear indication of the current page
- Descriptive text for navigation buttons

## Design System Compliance

This component follows the [Scottish Government Design System pagination guidelines](https://designsystem.gov.scot/components/pagination/).

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Please refer to the main repository for contribution guidelines.
