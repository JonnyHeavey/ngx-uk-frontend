import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';

import { GovScotCheckboxComponent } from './checkbox.component';

@Component({
  template: `
    <ngx-govscot-checkbox
      [formControl]="control"
      [inputId]="inputId"
      [label]="label"
      [hint]="hint"
      [disabled]="disabled"
    />
  `,
  imports: [GovScotCheckboxComponent, ReactiveFormsModule],
})
class TestHostComponent {
  control = new FormControl(false);
  inputId = 'test-checkbox';
  label = 'Test Label';
  hint?: string;
  disabled = false;
}

describe('GovScotCheckboxComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render checkbox with correct id and label', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const checkbox = compiled.querySelector('input[type="checkbox"]');
    const label = compiled.querySelector('label');

    expect(checkbox?.getAttribute('id')).toBe('test-checkbox');
    expect(label?.getAttribute('for')).toBe('test-checkbox');
    expect(label?.textContent?.trim()).toBe('Test Label');
  });

  it('should apply Scottish Government Design System classes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const wrapper = compiled.querySelector('.ds_checkbox');
    const checkbox = compiled.querySelector('.ds_checkbox__input');
    const label = compiled.querySelector('.ds_checkbox__label');

    expect(wrapper).toBeTruthy();
    expect(checkbox).toBeTruthy();
    expect(label).toBeTruthy();
  });

  it('should show hint text when provided', () => {
    component.hint = 'This is a hint';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const hint = compiled.querySelector('.ds_hint-text');

    expect(hint?.textContent?.trim()).toBe('This is a hint');
  });

  it('should not show hint text when not provided', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const hint = compiled.querySelector('.ds_hint-text');

    expect(hint).toBeFalsy();
  });

  it('should handle form control value changes', () => {
    component.control.setValue(true);
    fixture.detectChanges();

    expect(component.control.value).toBe(true);
  });

  it('should apply error state when form control is touched and has errors', () => {
    component.control.setErrors({ required: true });
    component.control.markAsTouched();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const checkbox = compiled.querySelector('input');

    expect(checkbox?.classList.contains('ds_checkbox__input--error')).toBe(
      true,
    );
  });

  it('should apply disabled state', () => {
    component.disabled = true;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const checkbox = compiled.querySelector('input');

    expect(checkbox?.hasAttribute('disabled')).toBe(true);
  });
});
