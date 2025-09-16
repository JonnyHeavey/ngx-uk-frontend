import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovScotAspectBoxComponent } from './aspect-box.component';

describe('GovScotAspectBoxComponent', () => {
  let component: GovScotAspectBoxComponent;
  let fixture: ComponentFixture<GovScotAspectBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotAspectBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotAspectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default aspect ratio of 16:9', () => {
    expect(component.aspectRatio()).toBe('16:9');
  });

  it('should have empty classes by default', () => {
    expect(component.classes()).toBe('');
  });

  it('should render with base ds_aspect-box class', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const aspectBox = compiled.querySelector('.ds_aspect-box');
    expect(aspectBox).toBeTruthy();
  });

  it('should not add modifier class for default 16:9 aspect ratio', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const aspectBox = compiled.querySelector('.ds_aspect-box');
    expect(aspectBox?.classList.contains('ds_aspect-box--square')).toBe(false);
    expect(aspectBox?.classList.contains('ds_aspect-box--43')).toBe(false);
    expect(aspectBox?.classList.contains('ds_aspect-box--219')).toBe(false);
  });

  it('should add square modifier class for 1:1 aspect ratio', () => {
    fixture.componentRef.setInput('aspectRatio', '1:1');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const aspectBox = compiled.querySelector('.ds_aspect-box');
    expect(aspectBox?.classList.contains('ds_aspect-box--square')).toBe(true);
  });

  it('should add 4:3 modifier class for 4:3 aspect ratio', () => {
    fixture.componentRef.setInput('aspectRatio', '4:3');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const aspectBox = compiled.querySelector('.ds_aspect-box');
    expect(aspectBox?.classList.contains('ds_aspect-box--43')).toBe(true);
  });

  it('should add 21:9 modifier class for 21:9 aspect ratio', () => {
    fixture.componentRef.setInput('aspectRatio', '21:9');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const aspectBox = compiled.querySelector('.ds_aspect-box');
    expect(aspectBox?.classList.contains('ds_aspect-box--219')).toBe(true);
  });

  it('should apply custom classes', () => {
    fixture.componentRef.setInput('classes', 'custom-class another-class');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const aspectBox = compiled.querySelector('.ds_aspect-box');
    expect(aspectBox?.classList.contains('custom-class')).toBe(true);
    expect(aspectBox?.classList.contains('another-class')).toBe(true);
  });

  it('should combine aspect ratio modifier and custom classes', () => {
    fixture.componentRef.setInput('aspectRatio', '1:1');
    fixture.componentRef.setInput('classes', 'custom-aspect-box');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const aspectBox = compiled.querySelector('.ds_aspect-box');
    expect(aspectBox?.classList.contains('ds_aspect-box--square')).toBe(true);
    expect(aspectBox?.classList.contains('custom-aspect-box')).toBe(true);
  });

  it('should project content', () => {
    // Create a new fixture with content projection
    const TestComponent = Component({
      template: `
        <ngx-govscot-aspect-box>
          <img alt="test" src="test.jpg" />
        </ngx-govscot-aspect-box>
      `,
      imports: [GovScotAspectBoxComponent],
    })(class {});

    const testFixture = TestBed.createComponent(TestComponent);
    testFixture.detectChanges();

    const compiled = testFixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('alt')).toBe('test');
    expect(img?.getAttribute('src')).toBe('test.jpg');
  });

  describe('aspectRatioClass computed signal', () => {
    it('should return empty string for 16:9', () => {
      fixture.componentRef.setInput('aspectRatio', '16:9');
      expect(component.aspectRatioClass()).toBe('');
    });

    it('should return ds_aspect-box--square for 1:1', () => {
      fixture.componentRef.setInput('aspectRatio', '1:1');
      expect(component.aspectRatioClass()).toBe('ds_aspect-box--square');
    });

    it('should return ds_aspect-box--43 for 4:3', () => {
      fixture.componentRef.setInput('aspectRatio', '4:3');
      expect(component.aspectRatioClass()).toBe('ds_aspect-box--43');
    });

    it('should return ds_aspect-box--219 for 21:9', () => {
      fixture.componentRef.setInput('aspectRatio', '21:9');
      expect(component.aspectRatioClass()).toBe('ds_aspect-box--219');
    });
  });

  it('should handle all supported aspect ratios', () => {
    const aspectRatios: Array<{
      ratio: '1:1' | '4:3' | '16:9' | '21:9';
      expectedClass: string;
    }> = [
      { ratio: '16:9', expectedClass: '' },
      { ratio: '1:1', expectedClass: 'ds_aspect-box--square' },
      { ratio: '4:3', expectedClass: 'ds_aspect-box--43' },
      { ratio: '21:9', expectedClass: 'ds_aspect-box--219' },
    ];

    aspectRatios.forEach(({ ratio, expectedClass }) => {
      fixture.componentRef.setInput('aspectRatio', ratio);
      fixture.detectChanges();

      const compiled = fixture.nativeElement as HTMLElement;
      const aspectBox = compiled.querySelector('.ds_aspect-box');

      if (expectedClass) {
        expect(aspectBox?.classList.contains(expectedClass)).toBe(true);
      } else {
        // For 16:9, check that no modifier classes are present
        expect(aspectBox?.classList.contains('ds_aspect-box--square')).toBe(
          false,
        );
        expect(aspectBox?.classList.contains('ds_aspect-box--43')).toBe(false);
        expect(aspectBox?.classList.contains('ds_aspect-box--219')).toBe(false);
      }
    });
  });
});
