import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import {
  GovScotFileDownloadComponent,
  GovScotFileDownloadMetadataItem,
} from './file-download.component';

describe('GovScotFileDownloadComponent', () => {
  let component: GovScotFileDownloadComponent;
  let fixture: ComponentFixture<GovScotFileDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotFileDownloadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotFileDownloadComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render basic file download with title and href', () => {
    fixture.componentRef.setInput('title', 'Test Document');
    fixture.componentRef.setInput('href', '/test-document.pdf');
    fixture.detectChanges();

    const titleLink = fixture.debugElement.query(
      By.css('.ds_file-download__title'),
    );
    expect(titleLink).toBeTruthy();
    expect(titleLink.nativeElement.textContent.trim()).toBe('Test Document');
    expect(titleLink.nativeElement.getAttribute('href')).toBe(
      '/test-document.pdf',
    );
  });

  it('should apply highlighted class when highlighted is true', () => {
    fixture.componentRef.setInput('title', 'Test Document');
    fixture.componentRef.setInput('href', '/test-document.pdf');
    fixture.componentRef.setInput('highlighted', true);
    fixture.detectChanges();

    const fileDownload = fixture.debugElement.query(
      By.css('.ds_file-download'),
    );
    expect(fileDownload.nativeElement.classList).toContain(
      'ds_file-download--highlighted',
    );
  });

  it('should not apply highlighted class when highlighted is false', () => {
    fixture.componentRef.setInput('title', 'Test Document');
    fixture.componentRef.setInput('href', '/test-document.pdf');
    fixture.componentRef.setInput('highlighted', false);
    fixture.detectChanges();

    const fileDownload = fixture.debugElement.query(
      By.css('.ds_file-download'),
    );
    expect(fileDownload.nativeElement.classList).not.toContain(
      'ds_file-download--highlighted',
    );
  });

  it('should render thumbnail when all thumbnail properties are provided', () => {
    fixture.componentRef.setInput('title', 'Test Document');
    fixture.componentRef.setInput('href', '/test-document.pdf');
    fixture.componentRef.setInput('thumbnailSrc', '/test-thumbnail.jpg');
    fixture.componentRef.setInput('thumbnailAlt', 'Test thumbnail');
    fixture.componentRef.setInput('thumbnailWidth', 200);
    fixture.componentRef.setInput('thumbnailHeight', 150);
    fixture.detectChanges();

    const thumbnail = fixture.debugElement.query(
      By.css('.ds_file-download__thumbnail'),
    );
    expect(thumbnail).toBeTruthy();

    const thumbnailImage = fixture.debugElement.query(
      By.css('.ds_file-download__thumbnail-image'),
    );
    expect(thumbnailImage).toBeTruthy();
    expect(thumbnailImage.nativeElement.getAttribute('alt')).toBe(
      'Test thumbnail',
    );
    expect(thumbnailImage.nativeElement.getAttribute('width')).toBe('200');
    expect(thumbnailImage.nativeElement.getAttribute('height')).toBe('150');
  });

  it('should not render thumbnail when thumbnailSrc is missing', () => {
    fixture.componentRef.setInput('title', 'Test Document');
    fixture.componentRef.setInput('href', '/test-document.pdf');
    fixture.componentRef.setInput('thumbnailWidth', 200);
    fixture.componentRef.setInput('thumbnailHeight', 150);
    fixture.detectChanges();

    const thumbnail = fixture.debugElement.query(
      By.css('.ds_file-download__thumbnail'),
    );
    expect(thumbnail).toBeFalsy();
  });

  it('should not render thumbnail when width or height is missing', () => {
    fixture.componentRef.setInput('title', 'Test Document');
    fixture.componentRef.setInput('href', '/test-document.pdf');
    fixture.componentRef.setInput('thumbnailSrc', '/test-thumbnail.jpg');
    fixture.componentRef.setInput('thumbnailAlt', 'Test thumbnail');
    fixture.detectChanges();

    const thumbnail = fixture.debugElement.query(
      By.css('.ds_file-download__thumbnail'),
    );
    expect(thumbnail).toBeFalsy();
  });

  it('should render metadata when provided', () => {
    const metadata: GovScotFileDownloadMetadataItem[] = [
      { key: 'File type', value: '44 page PDF' },
      { key: 'File size', value: '7.2 MB' },
    ];

    fixture.componentRef.setInput('title', 'Test Document');
    fixture.componentRef.setInput('href', '/test-document.pdf');
    fixture.componentRef.setInput('metadata', metadata);
    fixture.detectChanges();

    const metadataElement = fixture.debugElement.query(
      By.css('.ds_file-download__details'),
    );
    expect(metadataElement).toBeTruthy();

    const metadataItems = fixture.debugElement.queryAll(
      By.css('.ds_metadata__item'),
    );
    expect(metadataItems.length).toBe(2);

    const firstValue = metadataItems[0].query(By.css('.ds_metadata__value'));
    expect(firstValue.nativeElement.textContent.trim()).toBe('44 page PDF');

    const secondValue = metadataItems[1].query(By.css('.ds_metadata__value'));
    expect(secondValue.nativeElement.textContent.trim()).toBe('7.2 MB');
  });

  it('should render metadata with links when provided', () => {
    const metadata: GovScotFileDownloadMetadataItem[] = [
      { key: 'Category', value: 'Health', link: '/health' },
      { key: 'File type', value: 'PDF' },
    ];

    fixture.componentRef.setInput('title', 'Test Document');
    fixture.componentRef.setInput('href', '/test-document.pdf');
    fixture.componentRef.setInput('metadata', metadata);
    fixture.detectChanges();

    const metadataItems = fixture.debugElement.queryAll(
      By.css('.ds_metadata__item'),
    );
    expect(metadataItems.length).toBe(2);

    const firstValueLink = metadataItems[0].query(
      By.css('.ds_metadata__value a'),
    );
    expect(firstValueLink).toBeTruthy();
    expect(firstValueLink.nativeElement.textContent.trim()).toBe('Health');
    expect(firstValueLink.nativeElement.getAttribute('href')).toBe('/health');

    const secondValue = metadataItems[1].query(By.css('.ds_metadata__value'));
    const secondValueLink = metadataItems[1].query(
      By.css('.ds_metadata__value a'),
    );
    expect(secondValueLink).toBeFalsy();
    expect(secondValue.nativeElement.textContent.trim()).toBe('PDF');
  });

  it('should set aria-describedby when metadata is present', () => {
    const metadata: GovScotFileDownloadMetadataItem[] = [
      { key: 'File type', value: 'PDF' },
    ];

    fixture.componentRef.setInput('title', 'Test Document');
    fixture.componentRef.setInput('href', '/test-document.pdf');
    fixture.componentRef.setInput('metadata', metadata);
    fixture.detectChanges();

    const titleLink = fixture.debugElement.query(
      By.css('.ds_file-download__title'),
    );
    const ariaDescribedBy =
      titleLink.nativeElement.getAttribute('aria-describedby');
    expect(ariaDescribedBy).toBeTruthy();
    expect(ariaDescribedBy).toMatch(/^file-download-/);
  });

  it('should not set aria-describedby when metadata is empty', () => {
    fixture.componentRef.setInput('title', 'Test Document');
    fixture.componentRef.setInput('href', '/test-document.pdf');
    fixture.componentRef.setInput('metadata', []);
    fixture.detectChanges();

    const titleLink = fixture.debugElement.query(
      By.css('.ds_file-download__title'),
    );
    const ariaDescribedBy =
      titleLink.nativeElement.getAttribute('aria-describedby');
    expect(ariaDescribedBy).toBeFalsy();
  });

  it('should have correct thumbnail link attributes', () => {
    fixture.componentRef.setInput('title', 'Test Document');
    fixture.componentRef.setInput('href', '/test-document.pdf');
    fixture.componentRef.setInput('thumbnailSrc', '/test-thumbnail.jpg');
    fixture.componentRef.setInput('thumbnailWidth', 200);
    fixture.componentRef.setInput('thumbnailHeight', 150);
    fixture.detectChanges();

    const thumbnailLink = fixture.debugElement.query(
      By.css('.ds_file-download__thumbnail-link'),
    );
    expect(thumbnailLink).toBeTruthy();
    expect(thumbnailLink.nativeElement.getAttribute('aria-hidden')).toBe(
      'true',
    );
    expect(thumbnailLink.nativeElement.getAttribute('tabindex')).toBe('-1');
    expect(thumbnailLink.nativeElement.getAttribute('href')).toBe(
      '/test-document.pdf',
    );
  });

  it('should apply correct CSS classes', () => {
    fixture.componentRef.setInput('title', 'Test Document');
    fixture.componentRef.setInput('href', '/test-document.pdf');
    fixture.detectChanges();

    const fileDownload = fixture.debugElement.query(
      By.css('.ds_file-download'),
    );
    expect(fileDownload).toBeTruthy();

    const content = fixture.debugElement.query(
      By.css('.ds_file-download__content'),
    );
    expect(content).toBeTruthy();

    const title = fixture.debugElement.query(
      By.css('.ds_file-download__title'),
    );
    expect(title).toBeTruthy();
  });

  it('should handle empty metadata array', () => {
    fixture.componentRef.setInput('title', 'Test Document');
    fixture.componentRef.setInput('href', '/test-document.pdf');
    fixture.componentRef.setInput('metadata', []);
    fixture.detectChanges();

    const metadataElement = fixture.debugElement.query(
      By.css('.ds_file-download__details'),
    );
    expect(metadataElement).toBeFalsy();
  });
});
