import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovScotButtonComponent } from './button.component';

describe('GovScotButtonComponent', () => {
  let component: GovScotButtonComponent;
  let fixture: ComponentFixture<GovScotButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render primary button with default class', () => {
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.classList.contains('ds_button')).toBeTruthy();
    expect(
      buttonElement.classList.contains('ds_button--secondary'),
    ).toBeFalsy();
    expect(buttonElement.classList.contains('ds_button--cancel')).toBeFalsy();
  });

  it('should render secondary button when color is secondary', () => {
    fixture.componentRef.setInput('color', 'secondary');
    fixture.detectChanges();

    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.classList.contains('ds_button')).toBeTruthy();
    expect(
      buttonElement.classList.contains('ds_button--secondary'),
    ).toBeTruthy();
  });

  it('should render cancel button when color is cancel', () => {
    fixture.componentRef.setInput('color', 'cancel');
    fixture.detectChanges();

    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.classList.contains('ds_button')).toBeTruthy();
    expect(buttonElement.classList.contains('ds_button--cancel')).toBeTruthy();
  });

  it('should render link button when color is link', () => {
    fixture.componentRef.setInput('color', 'link');
    fixture.detectChanges();

    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.classList.contains('ds_link')).toBeTruthy();
    expect(buttonElement.classList.contains('ds_button')).toBeFalsy();
  });

  it('should render small button when size is small', () => {
    fixture.componentRef.setInput('size', 'small');
    fixture.detectChanges();

    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.classList.contains('ds_button--small')).toBeTruthy();
  });

  it('should render fixed width button when width is fixed', () => {
    fixture.componentRef.setInput('width', 'fixed');
    fixture.detectChanges();

    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.classList.contains('ds_button--fixed')).toBeTruthy();
  });

  it('should render max width button when width is max', () => {
    fixture.componentRef.setInput('width', 'max');
    fixture.detectChanges();

    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.classList.contains('ds_button--max')).toBeTruthy();
  });

  it('should render icon classes when hasIcon is true', () => {
    fixture.componentRef.setInput('hasIcon', true);
    fixture.detectChanges();

    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(
      buttonElement.classList.contains('ds_button--has-icon'),
    ).toBeTruthy();
  });

  it('should render left icon class when iconLeft is true', () => {
    fixture.componentRef.setInput('hasIcon', true);
    fixture.componentRef.setInput('iconLeft', true);
    fixture.detectChanges();

    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(
      buttonElement.classList.contains('ds_button--has-icon'),
    ).toBeTruthy();
    expect(
      buttonElement.classList.contains('ds_button--has-icon--left'),
    ).toBeTruthy();
  });

  it('should be disabled when disabled is true', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.disabled).toBeTruthy();
  });

  it('should project content correctly', () => {
    // Create a test wrapper component that uses the button with content
    @Component({
      selector: 'ngx-govscot-test-wrapper',
      template: '<ngx-govscot-button>Test Button</ngx-govscot-button>',
      imports: [GovScotButtonComponent],
    })
    class TestWrapperComponent {}

    const wrapperFixture = TestBed.createComponent(TestWrapperComponent);
    wrapperFixture.detectChanges();

    const buttonElement = wrapperFixture.nativeElement.querySelector('button');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.textContent?.trim()).toBe('Test Button');
  });
});
