# ngx-govuk-frontend/table

## Overview

The table component makes information easier to compare and scan for users. This is an Angular implementation of the [GOV.UK Design System Table component](https://design-system.service.gov.uk/components/table/), built on top of Angular CDK's table capabilities.

## Components and Interfaces

- `GovUKTableComponent` - The main table component
- `GovUKTableColumn` - Interface defining the structure of table columns

## Usage

```typescript
import { GovUKTableComponent, GovUKTableColumn } from 'ngx-govuk-frontend/table';

@Component({
  // ...
  imports: [
    GovUKTableComponent
  ]
})
```

### Basic example

```typescript
import { Component } from '@angular/core';
import { GovUKTableColumn } from 'ngx-govuk-frontend/table';

@Component({
  // ...
})
export class TableExampleComponent {
  columns: GovUKTableColumn[] = [
    { header: 'Month', key: 'month', isRowHeader: true },
    { header: 'Rate', key: 'rate', isNumeric: true },
  ];

  dataSource = [
    { month: 'January', rate: '£3.50' },
    { month: 'February', rate: '£5.00' },
    { month: 'March', rate: '£4.25' },
  ];
}
```

```html
<ngx-govuk-table caption="Payment rates" [columns]="columns" [dataSource]="dataSource"> </ngx-govuk-table>
```

### With custom styling

```typescript
columns: GovUKTableColumn[] = [
  { header: 'Name', key: 'name', isRowHeader: true },
  { header: 'Status', key: 'status', customClass: 'status-column' },
  { header: 'Amount', key: 'amount', isNumeric: true }
];
```

### With small text variant

```html
<ngx-govuk-table [columns]="columns" [dataSource]="dataSource" [small]="true"> </ngx-govuk-table>
```

## API Reference

### Component Inputs

| Name         | Type                 | Required | Description                                                       |
| ------------ | -------------------- | -------- | ----------------------------------------------------------------- |
| `columns`    | `GovUKTableColumn[]` | Yes      | Configuration for the table columns                               |
| `dataSource` | `any[]`              | Yes      | Array of data objects to display in the table                     |
| `caption`    | `string`             | No       | Caption text to describe the table contents                       |
| `small`      | `boolean`            | No       | Whether to use a smaller font size for the table (default: false) |

### GovUKTableColumn Interface

| Property      | Type      | Required | Description                                                           |
| ------------- | --------- | -------- | --------------------------------------------------------------------- |
| `header`      | `string`  | Yes      | The column header text                                                |
| `key`         | `string`  | Yes      | The key to access the data in each row object                         |
| `isRowHeader` | `boolean` | No       | Whether this column contains row headers (typically the first column) |
| `isNumeric`   | `boolean` | No       | Whether this column contains numeric data (affects alignment)         |
| `customClass` | `string`  | No       | Additional CSS class to apply to the column                           |
