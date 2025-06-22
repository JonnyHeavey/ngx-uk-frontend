import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  GovScotPageMetadataComponent,
  MetadataItem,
} from './page-metadata.component';

describe('GovScotPageMetadataComponent', () => {
  let component: GovScotPageMetadataComponent;
  let fixture: ComponentFixture<GovScotPageMetadataComponent>;

  const mockItems: MetadataItem[] = [
    { key: 'Published', value: '16 April 2024' },
    {
      key: 'Directorate',
      value: 'Test Directorate',
      href: 'http://example.com',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotPageMetadataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotPageMetadataComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('items', mockItems);
    expect(component).toBeTruthy();
  });

  it('should display metadata items', () => {
    fixture.componentRef.setInput('items', mockItems);
    fixture.detectChanges();

    const keys = fixture.debugElement.queryAll(By.css('.ds_metadata__key'));
    const values = fixture.debugElement.queryAll(By.css('.ds_metadata__value'));

    expect(keys.length).toBe(2);
    expect(values.length).toBe(2);
    expect(keys[0].nativeElement.textContent.trim()).toBe('Published');
    expect(keys[1].nativeElement.textContent.trim()).toBe('Directorate');
  });

  it('should render links when href is provided', () => {
    fixture.componentRef.setInput('items', mockItems);
    fixture.detectChanges();

    const links = fixture.debugElement.queryAll(
      By.css('.ds_metadata__value a'),
    );
    expect(links.length).toBe(1);
    expect(links[0].nativeElement.href).toBe('http://example.com/');
    expect(links[0].nativeElement.textContent).toBe('Test Directorate');
  });

  it('should render plain text when href is not provided', () => {
    fixture.componentRef.setInput('items', mockItems);
    fixture.detectChanges();

    const firstValue = fixture.debugElement.queryAll(
      By.css('.ds_metadata__value'),
    )[0];
    const link = firstValue.query(By.css('a'));
    expect(link).toBeNull();
    expect(firstValue.nativeElement.textContent.trim()).toBe('16 April 2024');
  });

  it('should apply inline class when inline is true', () => {
    fixture.componentRef.setInput('items', mockItems);
    fixture.componentRef.setInput('inline', true);
    fixture.detectChanges();

    const metadataElement = fixture.debugElement.query(By.css('.ds_metadata'));
    expect(
      metadataElement.nativeElement.classList.contains('ds_metadata--inline'),
    ).toBe(true);
  });

  it('should not apply inline class when inline is false', () => {
    fixture.componentRef.setInput('items', mockItems);
    fixture.componentRef.setInput('inline', false);
    fixture.detectChanges();

    const metadataElement = fixture.debugElement.query(By.css('.ds_metadata'));
    expect(
      metadataElement.nativeElement.classList.contains('ds_metadata--inline'),
    ).toBe(false);
  });

  it('should hide keys visually when inline is true', () => {
    fixture.componentRef.setInput('items', mockItems);
    fixture.componentRef.setInput('inline', true);
    fixture.detectChanges();

    const keys = fixture.debugElement.queryAll(By.css('.ds_metadata__key'));
    keys.forEach((key) => {
      expect(key.nativeElement.classList.contains('visually-hidden')).toBe(
        true,
      );
    });
  });

  it('should show keys when inline is false', () => {
    fixture.componentRef.setInput('items', mockItems);
    fixture.componentRef.setInput('inline', false);
    fixture.detectChanges();

    const keys = fixture.debugElement.queryAll(By.css('.ds_metadata__key'));
    keys.forEach((key) => {
      expect(key.nativeElement.classList.contains('visually-hidden')).toBe(
        false,
      );
    });
  });

  it('should add visually hidden commas between inline items', () => {
    const inlineItems: MetadataItem[] = [
      { key: 'Type', value: 'Guide' },
      { key: 'Date', value: '22 April 2024' },
      { key: 'Status', value: 'Published' },
    ];

    fixture.componentRef.setInput('items', inlineItems);
    fixture.componentRef.setInput('inline', true);
    fixture.detectChanges();

    const hiddenCommas = fixture.debugElement.queryAll(
      By.css('span.visually-hidden'),
    );
    expect(hiddenCommas.length).toBe(2); // Should have commas between items, but not after the last
    hiddenCommas.forEach((comma) => {
      expect(comma.nativeElement.textContent).toBe(',');
    });
  });

  it('should not add commas when not inline', () => {
    const items: MetadataItem[] = [
      { key: 'Type', value: 'Guide' },
      { key: 'Date', value: '22 April 2024' },
    ];

    fixture.componentRef.setInput('items', items);
    fixture.componentRef.setInput('inline', false);
    fixture.detectChanges();

    const hiddenCommas = fixture.debugElement.queryAll(
      By.css('span.visually-hidden'),
    );
    expect(hiddenCommas.length).toBe(0);
  });

  it('should apply custom classes', () => {
    fixture.componentRef.setInput('items', mockItems);
    fixture.componentRef.setInput('classes', 'custom-class another-class');
    fixture.detectChanges();

    const metadataElement = fixture.debugElement.query(By.css('.ds_metadata'));
    expect(
      metadataElement.nativeElement.classList.contains('custom-class'),
    ).toBe(true);
    expect(
      metadataElement.nativeElement.classList.contains('another-class'),
    ).toBe(true);
  });

  it('should handle empty items array', () => {
    fixture.componentRef.setInput('items', []);
    fixture.detectChanges();

    const items = fixture.debugElement.queryAll(By.css('.ds_metadata__item'));
    expect(items.length).toBe(0);
  });

  it('should handle single item', () => {
    const singleItem: MetadataItem[] = [
      { key: 'Published', value: '16 April 2024' },
    ];

    fixture.componentRef.setInput('items', singleItem);
    fixture.detectChanges();

    const items = fixture.debugElement.queryAll(By.css('.ds_metadata__item'));
    expect(items.length).toBe(1);
  });

  it('should use correct semantic HTML structure', () => {
    fixture.componentRef.setInput('items', mockItems);
    fixture.detectChanges();

    const dl = fixture.debugElement.query(By.css('dl.ds_metadata'));
    const dt = fixture.debugElement.queryAll(By.css('dt.ds_metadata__key'));
    const dd = fixture.debugElement.queryAll(By.css('dd.ds_metadata__value'));

    expect(dl).toBeTruthy();
    expect(dt.length).toBe(2);
    expect(dd.length).toBe(2);
  });

  describe('signal inputs', () => {
    it('should update when items signal changes', () => {
      const newItems: MetadataItem[] = [
        { key: 'Updated', value: '20 December 2024' },
      ];

      fixture.componentRef.setInput('items', mockItems);
      fixture.detectChanges();

      let keys = fixture.debugElement.queryAll(By.css('.ds_metadata__key'));
      expect(keys.length).toBe(2);

      fixture.componentRef.setInput('items', newItems);
      fixture.detectChanges();

      keys = fixture.debugElement.queryAll(By.css('.ds_metadata__key'));
      expect(keys.length).toBe(1);
      expect(keys[0].nativeElement.textContent.trim()).toBe('Updated');
    });

    it('should update when inline signal changes', () => {
      fixture.componentRef.setInput('items', mockItems);
      fixture.componentRef.setInput('inline', false);
      fixture.detectChanges();

      let metadataElement = fixture.debugElement.query(By.css('.ds_metadata'));
      expect(
        metadataElement.nativeElement.classList.contains('ds_metadata--inline'),
      ).toBe(false);

      fixture.componentRef.setInput('inline', true);
      fixture.detectChanges();

      metadataElement = fixture.debugElement.query(By.css('.ds_metadata'));
      expect(
        metadataElement.nativeElement.classList.contains('ds_metadata--inline'),
      ).toBe(true);
    });

    it('should update when classes signal changes', () => {
      fixture.componentRef.setInput('items', mockItems);
      fixture.componentRef.setInput('classes', 'initial-class');
      fixture.detectChanges();

      let metadataElement = fixture.debugElement.query(By.css('.ds_metadata'));
      expect(
        metadataElement.nativeElement.classList.contains('initial-class'),
      ).toBe(true);

      fixture.componentRef.setInput('classes', 'updated-class');
      fixture.detectChanges();

      metadataElement = fixture.debugElement.query(By.css('.ds_metadata'));
      expect(
        metadataElement.nativeElement.classList.contains('initial-class'),
      ).toBe(false);
      expect(
        metadataElement.nativeElement.classList.contains('updated-class'),
      ).toBe(true);
    });
  });
});
