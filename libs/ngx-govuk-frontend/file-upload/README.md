# ngx-govuk-frontend/file-upload

## Overview

The file upload component allows users to select and upload files. This is an Angular implementation of the [GOV.UK Design System File Upload component](https://design-system.service.gov.uk/components/file-upload/).

## Components

- `GovUKFileUploadComponent` - The main file upload component

## Usage

```typescript
import { GovUKFileUploadComponent } from 'ngx-govuk-frontend/file-upload';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  // ...
  imports: [
    GovUKFileUploadComponent,
    ReactiveFormsModule
  ]
})
```

### Basic example

```html
<form [formGroup]="uploadForm">
  <ngx-govuk-file-upload inputId="file-upload" label="Upload a file" formControlName="fileUpload"> </ngx-govuk-file-upload>
</form>
```

```typescript
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  // ...
})
export class MyComponent implements OnInit {
  uploadForm!: FormGroup;

  ngOnInit() {
    this.uploadForm = new FormGroup({
      fileUpload: new FormControl(null),
    });
  }

  onSubmit() {
    const file = this.uploadForm.get('fileUpload')?.value;
    // Process the file upload
  }
}
```

### With hint text and error message

```html
<ngx-govuk-file-upload inputId="file-upload" label="Upload your CV" hint="Files must be PDF, DOC or DOCX format, and no larger than 2MB" [errorMessage]="getErrorMessage()" formControlName="fileUpload"> </ngx-govuk-file-upload>
```

```typescript
getErrorMessage(): string | null {
  const control = this.uploadForm.get('fileUpload');
  if (control?.hasError('required') && control.touched) {
    return 'Please upload a file';
  }
  if (control?.hasError('fileType')) {
    return 'The selected file must be a PDF, DOC or DOCX';
  }
  if (control?.hasError('fileSize')) {
    return 'The selected file must be smaller than 2MB';
  }
  return null;
}
```
