import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GovScotPageHeaderComponent } from './page-header.component';

describe('GovScotPageHeaderComponent', () => {
  let component: GovScotPageHeaderComponent;
  let fixture: ComponentFixture<GovScotPageHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotPageHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotPageHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('title', 'Test Title');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have default signal values', () => {
    expect(component.label()).toBeUndefined();
    expect(component.metadata()).toBeUndefined();
    expect(component.classes()).toBeUndefined();
  });

  it('should render the page header with basic structure', () => {
    fixture.componentRef.setInput('title', 'Test Page Title');
    fixture.detectChanges();

    const headerElement = fixture.debugElement.query(
      By.css('header.ds_page-header'),
    );
    expect(headerElement).toBeTruthy();

    const titleElement = fixture.debugElement.query(
      By.css('h1.ds_page-header__title'),
    );
    expect(titleElement).toBeTruthy();
    expect(titleElement.nativeElement.textContent.trim()).toBe(
      'Test Page Title',
    );
  });

  it('should display label when provided', () => {
    fixture.componentRef.setInput('title', 'Test Title');
    fixture.componentRef.setInput('label', 'Guide');
    fixture.detectChanges();

    const labelElement = fixture.debugElement.query(
      By.css('.ds_page-header__label'),
    );
    expect(labelElement).toBeTruthy();
    expect(labelElement.nativeElement.textContent.trim()).toBe('Guide');
    expect(
      labelElement.nativeElement.classList.contains('ds_content-label'),
    ).toBe(true);
  });

  it('should not display label when not provided', () => {
    fixture.componentRef.setInput('title', 'Test Title');
    fixture.detectChanges();

    const labelElement = fixture.debugElement.query(
      By.css('.ds_page-header__label'),
    );
    expect(labelElement).toBeFalsy();
  });

  it('should display metadata when provided', () => {
    fixture.componentRef.setInput('title', 'Test Title');
    fixture.componentRef.setInput('metadata', [
      { key: 'Last updated', value: '8 November 2016' },
      { key: 'Published', value: '1 January 2016' },
    ]);
    fixture.detectChanges();

    const metadataElement = fixture.debugElement.query(
      By.css('.ds_page-header__metadata'),
    );
    expect(metadataElement).toBeTruthy();
    expect(
      metadataElement.nativeElement.classList.contains('ds_metadata'),
    ).toBe(true);

    const metadataItems = fixture.debugElement.queryAll(
      By.css('.ds_metadata__item'),
    );
    expect(metadataItems.length).toBe(2);

    const firstKey = metadataItems[0].query(By.css('.ds_metadata__key'));
    const firstValue = metadataItems[0].query(By.css('.ds_metadata__value'));
    expect(firstKey.nativeElement.textContent.trim()).toBe('Last updated');
    expect(firstValue.nativeElement.textContent.trim()).toBe('8 November 2016');

    const secondKey = metadataItems[1].query(By.css('.ds_metadata__key'));
    const secondValue = metadataItems[1].query(By.css('.ds_metadata__value'));
    expect(secondKey.nativeElement.textContent.trim()).toBe('Published');
    expect(secondValue.nativeElement.textContent.trim()).toBe('1 January 2016');
  });

  it('should not display metadata when not provided', () => {
    fixture.componentRef.setInput('title', 'Test Title');
    fixture.detectChanges();

    const metadataElement = fixture.debugElement.query(
      By.css('.ds_page-header__metadata'),
    );
    expect(metadataElement).toBeFalsy();
  });

  it('should not display metadata when empty array provided', () => {
    fixture.componentRef.setInput('title', 'Test Title');
    fixture.componentRef.setInput('metadata', []);
    fixture.detectChanges();

    const metadataElement = fixture.debugElement.query(
      By.css('.ds_page-header__metadata'),
    );
    expect(metadataElement).toBeFalsy();
  });

  it('should apply custom classes when provided', () => {
    fixture.componentRef.setInput('title', 'Test Title');
    fixture.componentRef.setInput('classes', 'custom-class another-class');
    fixture.detectChanges();

    const headerElement = fixture.debugElement.query(By.css('header'));
    expect(headerElement.nativeElement.classList.contains('custom-class')).toBe(
      true,
    );
    expect(
      headerElement.nativeElement.classList.contains('another-class'),
    ).toBe(true);
  });

  it('should read title signal value', () => {
    fixture.componentRef.setInput('title', 'New Page Title');
    expect(component.title()).toBe('New Page Title');
  });

  it('should read label signal value', () => {
    fixture.componentRef.setInput('label', 'Article');
    expect(component.label()).toBe('Article');
  });

  it('should read metadata signal value', () => {
    const testMetadata = [{ key: 'Author', value: 'John Doe' }];
    fixture.componentRef.setInput('metadata', testMetadata);
    expect(component.metadata()).toBe(testMetadata);
  });

  it('should read classes signal value', () => {
    fixture.componentRef.setInput('classes', 'test-class');
    expect(component.classes()).toBe('test-class');
  });
});
