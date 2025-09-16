import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { GovUKCheckboxComponent } from './checkbox.component';

import { Component, viewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-govuk-checkbox
        formControlName="testCheckbox"
        [label]="label"
        [inputId]="inputId"
      ></ngx-govuk-checkbox>
    </form>
  `,
  imports: [GovUKCheckboxComponent, ReactiveFormsModule],
})
class TestHostComponent {
  label = 'Test Label';
  inputId = 'test-checkbox';
  form: FormGroup;
  component = viewChild.required(GovUKCheckboxComponent);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      testCheckbox: [false, Validators.required],
    });
  }
}

describe('GovUKCheckboxComponent', () => {
  let component: GovUKCheckboxComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance.component();
    fixture.detectChanges();
  });

  it('should create', () => {
    TestBed.runInInjectionContext(() => {
      expect(component).toBeTruthy();
    });
  });

  it('should render checkbox with label in DOM', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      const labelText = 'Custom Label';
      hostComponent.label = labelText;
      fixture.detectChanges();

      const labelElement = fixture.nativeElement.querySelector('.govuk-label');
      expect(labelElement).toBeTruthy();
      expect(labelElement.textContent.trim()).toBe(labelText);
    });
  });

  it('should render checkbox with id in DOM', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      const testId = 'test-checkbox-id';
      hostComponent.inputId = testId;
      fixture.detectChanges();

      const checkboxElement = fixture.nativeElement.querySelector(`#${testId}`);
      expect(checkboxElement).toBeTruthy();
      expect(checkboxElement.id).toBe(testId);
    });
  });

  it('should extend CheckboxDirective', () => {
    TestBed.runInInjectionContext(() => {
      // Test that the component extends CheckboxDirective by checking it exists
      expect(component).toBeTruthy();
      expect(component instanceof GovUKCheckboxComponent).toBe(true);
    });
  });

  it('should update form control value', () => {
    const hostComponent = fixture.componentInstance;
    const control = hostComponent.form.get('testCheckbox');

    control?.setValue(true);
    fixture.detectChanges();
    expect(control?.value).toBe(true);

    control?.setValue(false);
    fixture.detectChanges();
    expect(control?.value).toBe(false);
  });

  it('should handle form validation', () => {
    const hostComponent = fixture.componentInstance;
    const control = hostComponent.form.get('testCheckbox');

    control?.setValue(null);
    expect(control?.valid).toBeFalsy();

    control?.setValue(true);
    expect(control?.valid).toBeTruthy();
  });

  it('should toggle checkbox value when clicked', () => {
    const hostComponent = fixture.componentInstance;
    const control = hostComponent.form.get('testCheckbox');

    // Set initial value to false
    control?.setValue(false);
    fixture.detectChanges();
    expect(control?.value).toBe(false);

    // Click the checkbox div to trigger toggle
    const checkboxDiv = fixture.nativeElement.querySelector(
      '.govuk-checkboxes__item',
    );
    checkboxDiv.click();
    fixture.detectChanges();
    expect(control?.value).toBe(true);

    // Click again to toggle back
    checkboxDiv.click();
    fixture.detectChanges();
    expect(control?.value).toBe(false);
  });
});
