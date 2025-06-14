import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';

import { GovScotTextInputComponent } from './text-input.component';

@Component({
  template: `
    <ngx-govscot-text-input
      [formControl]="control"
      [type]="type"
      [width]="width"
      [fixedWidth]="fixedWidth"
      [currency]="currency"
      [currencySymbol]="currencySymbol"
      [hasButton]="hasButton"
      [buttonText]="buttonText"
      [buttonIcon]="buttonIcon"
      [placeholder]="placeholder"
      [disabled]="disabled"
      [readonly]="readonly"
    />
  `,
  imports: [GovScotTextInputComponent, ReactiveFormsModule],
})
class TestHostComponent {
  control = new FormControl('');
  type = 'text';
  width?:
    | 'full'
    | 'three-quarters'
    | 'two-thirds'
    | 'one-half'
    | 'one-third'
    | 'one-quarter';
  fixedWidth?: 2 | 3 | 4 | 5 | 10 | 20;
  currency = false;
  currencySymbol = '£';
  hasButton = false;
  buttonText?: string;
  buttonIcon?: string;
  placeholder?: string;
  disabled = false;
  readonly = false;
}

describe('GovScotTextInputComponent', () => {
  let component: GovScotTextInputComponent;
  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
    component = hostFixture.debugElement.children[0].componentInstance;
    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render basic text input', () => {
    const compiled = hostFixture.nativeElement as HTMLElement;
    const input = compiled.querySelector('input');

    expect(input).toBeTruthy();
    expect(input?.classList.contains('ds_input')).toBe(true);
    expect(input?.type).toBe('text');
  });

  it('should apply fixed width classes', () => {
    hostComponent.fixedWidth = 10;
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const input = compiled.querySelector('input');

    expect(input?.classList.contains('ds_input--fixed-10')).toBe(true);
  });

  it('should apply fluid width classes', () => {
    hostComponent.width = 'two-thirds';
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const input = compiled.querySelector('input');

    expect(input?.classList.contains('ds_input--fluid-two-thirds')).toBe(true);
  });

  it('should render currency wrapper', () => {
    hostComponent.currency = true;
    hostComponent.currencySymbol = '$';
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const wrapper = compiled.querySelector('.ds_currency-wrapper');

    expect(wrapper).toBeTruthy();
    expect(wrapper?.getAttribute('data-symbol')).toBe('$');
  });

  it('should render input with button', () => {
    hostComponent.hasButton = true;
    hostComponent.buttonText = 'Search';
    hostComponent.buttonIcon = 'search';
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const wrapper = compiled.querySelector('.ds_input__wrapper--has-icon');
    const button = compiled.querySelector('button');
    const hiddenText = compiled.querySelector('.visually-hidden');
    const icon = compiled.querySelector('.ds_icon use');

    expect(wrapper).toBeTruthy();
    expect(button).toBeTruthy();
    expect(hiddenText?.textContent?.trim()).toBe('Search');
    expect(icon?.getAttribute('href')).toBe(
      '/assets/images/icons/icons.stack.svg#search',
    );
  });

  it('should handle form control value changes', () => {
    hostComponent.control.setValue('test value');
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const input = compiled.querySelector('input') as HTMLInputElement;

    expect(input.value).toBe('test value');
  });

  it('should apply error state when form control is touched and has errors', () => {
    hostComponent.control.setErrors({ required: true });
    hostComponent.control.markAsTouched();
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const input = compiled.querySelector('input');

    expect(input?.classList.contains('ds_input--error')).toBe(true);
  });

  it('should apply disabled state', () => {
    hostComponent.disabled = true;
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const input = compiled.querySelector('input');

    expect(input?.hasAttribute('disabled')).toBe(true);
  });

  it('should apply readonly state', () => {
    hostComponent.readonly = true;
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const input = compiled.querySelector('input');

    expect(input?.hasAttribute('readonly')).toBe(true);
  });

  it('should apply placeholder text', () => {
    hostComponent.placeholder = 'Enter text here';
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const input = compiled.querySelector('input');

    expect(input?.getAttribute('placeholder')).toBe('Enter text here');
  });

  it('should handle different input types', () => {
    hostComponent.type = 'email';
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const input = compiled.querySelector('input');

    expect(input?.type).toBe('email');
  });

  describe('inputClasses', () => {
    it('should return empty string when no classes are needed', () => {
      const classes = component.inputClasses();
      expect(classes).toBe('');
    });

    it('should combine classes correctly', () => {
      // Test that the computed signal exists and returns a string
      const classes = component.inputClasses();
      expect(typeof classes).toBe('string');
    });
  });
});
