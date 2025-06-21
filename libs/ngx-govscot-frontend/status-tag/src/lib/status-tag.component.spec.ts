import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  GovScotStatusTagColor,
  GovScotStatusTagComponent,
} from './status-tag.component';

describe('GovScotStatusTagComponent', () => {
  let component: GovScotStatusTagComponent;
  let fixture: ComponentFixture<GovScotStatusTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotStatusTagComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotStatusTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render with ds_tag class', () => {
    const element = fixture.nativeElement.querySelector('span');
    expect(element).toBeTruthy();
    expect(element.classList.contains('ds_tag')).toBe(true);
  });

  it('should render with default blue color class', () => {
    const element = fixture.nativeElement.querySelector('span');
    expect(element.classList.contains('ds_tag--blue')).toBe(true);
  });

  it('should render content projected text', () => {
    @Component({
      selector: 'ngx-govscot-test-wrapper',
      template: '<ngx-govscot-status-tag>Active</ngx-govscot-status-tag>',
      imports: [GovScotStatusTagComponent],
    })
    class TestWrapperComponent {}

    const wrapperFixture = TestBed.createComponent(TestWrapperComponent);
    wrapperFixture.detectChanges();

    const element = wrapperFixture.nativeElement.querySelector('span');
    expect(element.textContent?.trim()).toBe('Active');
  });

  describe('Color variants', () => {
    const colors: GovScotStatusTagColor[] = [
      'grey',
      'green',
      'teal',
      'blue',
      'purple',
      'pink',
      'red',
      'orange',
      'yellow',
    ];

    colors.forEach((color) => {
      it(`should apply correct CSS class for ${color} color`, () => {
        fixture.componentRef.setInput('color', color);
        fixture.detectChanges();

        const element = fixture.nativeElement.querySelector('span');
        expect(element.classList.contains('ds_tag')).toBe(true);
        expect(element.classList.contains(`ds_tag--${color}`)).toBe(true);
      });
    });
  });

  it('should apply extra classes when provided', () => {
    fixture.componentRef.setInput('extraClasses', 'custom-class another-class');
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('span');
    expect(element.classList.contains('ds_tag')).toBe(true);
    expect(element.classList.contains('custom-class')).toBe(true);
    expect(element.classList.contains('another-class')).toBe(true);
  });

  it('should combine color and extra classes correctly', () => {
    fixture.componentRef.setInput('color', 'green');
    fixture.componentRef.setInput('extraClasses', 'priority-high');
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('span');
    expect(element.classList.contains('ds_tag')).toBe(true);
    expect(element.classList.contains('ds_tag--green')).toBe(true);
    expect(element.classList.contains('priority-high')).toBe(true);
  });

  it('should handle empty extra classes gracefully', () => {
    fixture.componentRef.setInput('color', 'red');
    fixture.componentRef.setInput('extraClasses', '');
    fixture.detectChanges();

    const element = fixture.nativeElement.querySelector('span');
    expect(element.classList.contains('ds_tag')).toBe(true);
    expect(element.classList.contains('ds_tag--red')).toBe(true);
  });

  describe('Accessibility', () => {
    it('should use span element for semantic appropriateness', () => {
      const element = fixture.nativeElement.querySelector('span');
      expect(element).toBeTruthy();
      expect(element.tagName.toLowerCase()).toBe('span');
    });

    it('should not have interactive elements styling', () => {
      const element = fixture.nativeElement.querySelector('span');
      expect(element.getAttribute('role')).toBeNull();
      expect(element.getAttribute('tabindex')).toBeNull();
    });
  });

  describe('Real-world usage scenarios', () => {
    it('should work with green color and Complete text', () => {
      @Component({
        selector: 'ngx-govscot-test-wrapper-green',
        template: `
          <ngx-govscot-status-tag color="green">
            Complete
          </ngx-govscot-status-tag>
        `,
        imports: [GovScotStatusTagComponent],
      })
      class TestWrapperComponent {}

      const wrapperFixture = TestBed.createComponent(TestWrapperComponent);
      wrapperFixture.detectChanges();

      const element = wrapperFixture.nativeElement.querySelector('span');
      expect(element.textContent?.trim()).toBe('Complete');
      expect(element.classList.contains('ds_tag--green')).toBe(true);
    });

    it('should work with blue color and In progress text', () => {
      @Component({
        selector: 'ngx-govscot-test-wrapper-blue',
        template: `
          <ngx-govscot-status-tag color="blue">
            In progress
          </ngx-govscot-status-tag>
        `,
        imports: [GovScotStatusTagComponent],
      })
      class TestWrapperComponent {}

      const wrapperFixture = TestBed.createComponent(TestWrapperComponent);
      wrapperFixture.detectChanges();

      const element = wrapperFixture.nativeElement.querySelector('span');
      expect(element.textContent?.trim()).toBe('In progress');
      expect(element.classList.contains('ds_tag--blue')).toBe(true);
    });

    it('should work with grey color and Not started text', () => {
      @Component({
        selector: 'ngx-govscot-test-wrapper-grey',
        template: `
          <ngx-govscot-status-tag color="grey">
            Not started
          </ngx-govscot-status-tag>
        `,
        imports: [GovScotStatusTagComponent],
      })
      class TestWrapperComponent {}

      const wrapperFixture = TestBed.createComponent(TestWrapperComponent);
      wrapperFixture.detectChanges();

      const element = wrapperFixture.nativeElement.querySelector('span');
      expect(element.textContent?.trim()).toBe('Not started');
      expect(element.classList.contains('ds_tag--grey')).toBe(true);
    });

    it('should work with red color and Failed text', () => {
      @Component({
        selector: 'ngx-govscot-test-wrapper-red',
        template: `
          <ngx-govscot-status-tag color="red"> Failed </ngx-govscot-status-tag>
        `,
        imports: [GovScotStatusTagComponent],
      })
      class TestWrapperComponent {}

      const wrapperFixture = TestBed.createComponent(TestWrapperComponent);
      wrapperFixture.detectChanges();

      const element = wrapperFixture.nativeElement.querySelector('span');
      expect(element.textContent?.trim()).toBe('Failed');
      expect(element.classList.contains('ds_tag--red')).toBe(true);
    });
  });
});
