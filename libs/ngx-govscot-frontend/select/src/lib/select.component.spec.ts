import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { GovScotSelectComponent } from './select.component';

import { Component, inject, viewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-govscot-select
        formControlName="testSelect"
        [options]="options"
        inputId="test-select"
      ></ngx-govscot-select>
    </form>
  `,
  imports: [GovScotSelectComponent, ReactiveFormsModule],
})
class TestHostComponent {
  private fb = inject(FormBuilder);

  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  form: FormGroup = this.fb.group({
    testSelect: [null, Validators.required],
  });
  component = viewChild.required(GovScotSelectComponent);
}

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-govscot-select
        formControlName="testSelect"
        [options]="options"
        inputId="test-select-disabled"
      ></ngx-govscot-select>
    </form>
  `,
  imports: [GovScotSelectComponent, ReactiveFormsModule],
})
class TestHostWithDisabledComponent {
  private fb = inject(FormBuilder);

  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];
  form: FormGroup = this.fb.group({
    testSelect: [null],
  });
  component = viewChild.required(GovScotSelectComponent);
}

describe('GovScotSelectComponent', () => {
  let component: GovScotSelectComponent;
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

  it('should have the correct Scottish Government Design System classes', () => {
    TestBed.runInInjectionContext(() => {
      const selectWrapper =
        fixture.nativeElement.querySelector('.ds_select-wrapper');
      const selectElement = fixture.nativeElement.querySelector('.ds_select');
      const arrowElement =
        fixture.nativeElement.querySelector('.ds_select-arrow');

      expect(selectWrapper).toBeTruthy();
      expect(selectElement).toBeTruthy();
      expect(arrowElement).toBeTruthy();
      expect(arrowElement.getAttribute('aria-hidden')).toBe('true');
    });
  });

  it('should render options with correct labels and values', () => {
    TestBed.runInInjectionContext(() => {
      const options = fixture.nativeElement.querySelectorAll(
        '.ds_select > option',
      );
      expect(options.length).toBe(3);
      expect(options[0].textContent.trim()).toBe('Option 1');
      expect(options[0].value).toBe('option1');
      expect(options[1].textContent.trim()).toBe('Option 2');
      expect(options[1].value).toBe('option2');
      expect(options[2].textContent.trim()).toBe('Option 3');
      expect(options[2].value).toBe('option3');
    });
  });

  it('should update form control value when option is selected', () => {
    TestBed.runInInjectionContext(() => {
      const selectElement = fixture.nativeElement.querySelector('.ds_select');
      const hostComponent = fixture.componentInstance;

      // Select the second option
      selectElement.value = 'option2';
      selectElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();

      expect(hostComponent.form.get('testSelect')?.value).toBe('option2');
    });
  });

  it('should reflect form control value in the select element', () => {
    TestBed.runInInjectionContext(() => {
      const selectElement = fixture.nativeElement.querySelector('.ds_select');
      const hostComponent = fixture.componentInstance;

      // Set value programmatically
      hostComponent.form.get('testSelect')?.setValue('option1');
      fixture.detectChanges();

      expect(selectElement.value).toBe('option1');
    });
  });

  it('should show validation errors when form control is invalid', () => {
    TestBed.runInInjectionContext(() => {
      const selectElement = fixture.nativeElement.querySelector('.ds_select');
      const hostComponent = fixture.componentInstance;

      // Make the control touched and invalid
      hostComponent.form.get('testSelect')?.markAsTouched();
      hostComponent.form.get('testSelect')?.setValue(null);
      fixture.detectChanges();

      expect(selectElement.classList.contains('ds_select--error')).toBe(true);
    });
  });

  it('should not show error styling when form control is valid', () => {
    TestBed.runInInjectionContext(() => {
      const selectElement = fixture.nativeElement.querySelector('.ds_select');
      const hostComponent = fixture.componentInstance;

      // Set a valid value
      hostComponent.form.get('testSelect')?.setValue('option1');
      fixture.detectChanges();

      expect(selectElement.classList.contains('ds_select--error')).toBe(false);
    });
  });

  it('should have proper accessibility attributes', () => {
    TestBed.runInInjectionContext(() => {
      const selectElement = fixture.nativeElement.querySelector('.ds_select');

      expect(selectElement.getAttribute('id')).toBeTruthy();
      expect(selectElement.getAttribute('name')).toBeTruthy();
    });
  });
});

describe('GovScotSelectComponent - Disabled State', () => {
  let component: GovScotSelectComponent;
  let fixture: ComponentFixture<TestHostWithDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(TestHostWithDisabledComponent);
    component = fixture.componentInstance.component();
    fixture.detectChanges();
  });

  it('should disable the select when form control is disabled', () => {
    TestBed.runInInjectionContext(() => {
      const selectElement = fixture.nativeElement.querySelector('.ds_select');
      const hostComponent = fixture.componentInstance;

      // Disable the form control
      hostComponent.form.get('testSelect')?.disable();
      fixture.detectChanges();

      expect(selectElement.hasAttribute('disabled')).toBe(true);
    });
  });

  it('should enable the select when form control is enabled', () => {
    TestBed.runInInjectionContext(() => {
      const selectElement = fixture.nativeElement.querySelector('.ds_select');
      const hostComponent = fixture.componentInstance;

      // Enable the form control (default state)
      hostComponent.form.get('testSelect')?.enable();
      fixture.detectChanges();

      expect(selectElement.hasAttribute('disabled')).toBe(false);
    });
  });
});

describe('GovScotSelectComponent - Integration', () => {
  it('should work with empty options array', async () => {
    @Component({
      template: `
        <form [formGroup]="form">
          <ngx-govscot-select
            formControlName="testSelect"
            [options]="options"
            inputId="empty-options-select"
          ></ngx-govscot-select>
        </form>
      `,
      imports: [GovScotSelectComponent, ReactiveFormsModule],
    })
    class EmptyOptionsComponent {
      private fb = inject(FormBuilder);

      options: any[] = [];
      form: FormGroup = this.fb.group({
        testSelect: [null],
      });
    }

    await TestBed.configureTestingModule({}).compileComponents();
    const fixture = TestBed.createComponent(EmptyOptionsComponent);
    fixture.detectChanges();

    TestBed.runInInjectionContext(() => {
      const options = fixture.nativeElement.querySelectorAll(
        '.ds_select > option',
      );
      expect(options.length).toBe(0);
    });
  });

  it('should handle special characters in option labels and values', async () => {
    @Component({
      template: `
        <form [formGroup]="form">
          <ngx-govscot-select
            formControlName="testSelect"
            [options]="options"
            inputId="special-chars-select"
          ></ngx-govscot-select>
        </form>
      `,
      imports: [GovScotSelectComponent, ReactiveFormsModule],
    })
    class SpecialCharsComponent {
      private fb = inject(FormBuilder);

      options = [
        { value: 'option-1', label: 'Option & Special <chars>' },
        { value: 'option_2', label: 'Option "with quotes"' },
      ];
      form: FormGroup = this.fb.group({
        testSelect: [null],
      });
    }

    await TestBed.configureTestingModule({}).compileComponents();
    const fixture = TestBed.createComponent(SpecialCharsComponent);
    fixture.detectChanges();

    TestBed.runInInjectionContext(() => {
      const options = fixture.nativeElement.querySelectorAll(
        '.ds_select > option',
      );
      expect(options[0].value).toBe('option-1');
      expect(options[0].textContent).toContain('Option & Special <chars>');
      expect(options[1].value).toBe('option_2');
      expect(options[1].textContent).toContain('Option "with quotes"');
    });
  });
});
