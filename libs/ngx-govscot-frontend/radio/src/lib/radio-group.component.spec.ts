import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { GovScotRadioGroupComponent } from './radio-group.component';

import { Component, inject, viewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GovScotRadioOptionDirective } from './radio-option.directive';

interface GovScotRadioOption {
  value: string;
  label: string;
  hint?: string;
  isDivided?: boolean;
}

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-govscot-radio-group
        formControlName="testRadio"
        [inline]="inline"
        [small]="small"
        inputId="test-radio-group"
      >
        @for (option of options; track option.value) {
          <ngx-govscot-radio-option
            [value]="option.value"
            [label]="option.label"
            [hint]="option.hint"
            [isDivided]="option.isDivided"
          />
        }
      </ngx-govscot-radio-group>
    </form>
  `,
  imports: [
    GovScotRadioGroupComponent,
    GovScotRadioOptionDirective,
    ReactiveFormsModule,
  ],
})
class TestHostComponent {
  private fb = inject(FormBuilder);

  options: GovScotRadioOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  inline = false;
  small = false;
  form: FormGroup = this.fb.group({
    testRadio: [null, Validators.required],
  });
  component = viewChild.required(GovScotRadioGroupComponent);
}

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-govscot-radio-group
        formControlName="testRadio"
        inputId="test-radio-disabled"
      >
        @for (option of options; track option.value) {
          <ngx-govscot-radio-option
            [value]="option.value"
            [label]="option.label"
          />
        }
      </ngx-govscot-radio-group>
    </form>
  `,
  imports: [
    GovScotRadioGroupComponent,
    GovScotRadioOptionDirective,
    ReactiveFormsModule,
  ],
})
class TestHostWithDisabledComponent {
  private fb = inject(FormBuilder);

  options: GovScotRadioOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];
  form: FormGroup = this.fb.group({
    testRadio: [null],
  });
  component = viewChild.required(GovScotRadioGroupComponent);
}

describe('GovScotRadioGroupComponent', () => {
  let component: GovScotRadioGroupComponent;
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
      const fieldGroup = fixture.nativeElement.querySelector('.ds_field-group');
      const radioElements = fixture.nativeElement.querySelectorAll('.ds_radio');
      const radioInputs =
        fixture.nativeElement.querySelectorAll('.ds_radio__input');
      const radioLabels =
        fixture.nativeElement.querySelectorAll('.ds_radio__label');

      expect(fieldGroup).toBeTruthy();
      expect(radioElements.length).toBe(3);
      expect(radioInputs.length).toBe(3);
      expect(radioLabels.length).toBe(3);
    });
  });

  it('should render radio options with correct labels', () => {
    TestBed.runInInjectionContext(() => {
      const labels = fixture.nativeElement.querySelectorAll('.ds_radio__label');
      expect(labels.length).toBe(3);
      expect(labels[0].textContent.trim()).toBe('Option 1');
      expect(labels[1].textContent.trim()).toBe('Option 2');
      expect(labels[2].textContent.trim()).toBe('Option 3');
    });
  });

  it('should have proper radio input types', () => {
    TestBed.runInInjectionContext(() => {
      const radioInputs =
        fixture.nativeElement.querySelectorAll('.ds_radio__input');

      radioInputs.forEach((input: HTMLInputElement) => {
        expect(input.getAttribute('type')).toBe('radio');
      });
    });
  });

  it('should update form control value when radio option is selected', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      const radioInputs =
        fixture.nativeElement.querySelectorAll('.ds_radio__input');

      // Select the second option
      radioInputs[1].click();
      fixture.detectChanges();

      expect(hostComponent.form.get('testRadio')?.value).toBe('option2');
    });
  });

  it('should reflect form control value in the radio inputs', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      const radioInputs =
        fixture.nativeElement.querySelectorAll('.ds_radio__input');

      // Set value programmatically
      hostComponent.form.get('testRadio')?.setValue('option1');
      fixture.detectChanges();

      expect(radioInputs[0].checked).toBe(true);
      expect(radioInputs[1].checked).toBe(false);
      expect(radioInputs[2].checked).toBe(false);
    });
  });

  it('should handle form validation', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      const control = hostComponent.form.get('testRadio');

      // Initially invalid (required but no value)
      expect(control?.valid).toBeFalsy();

      // Set a value
      control?.setValue('option1');
      expect(control?.valid).toBeTruthy();

      // Clear value
      control?.setValue(null);
      expect(control?.valid).toBeFalsy();
    });
  });

  it('should apply inline class when inline input is set', () => {
    TestBed.runInInjectionContext(() => {
      fixture.componentInstance.inline = true;
      fixture.detectChanges();

      const fieldGroup = fixture.nativeElement.querySelector('.ds_field-group');
      expect(
        fieldGroup.classList.contains('ds_field-group--inline'),
      ).toBeTruthy();
    });
  });

  it('should not apply inline class when inline input is false', () => {
    TestBed.runInInjectionContext(() => {
      fixture.componentInstance.inline = false;
      fixture.detectChanges();

      const fieldGroup = fixture.nativeElement.querySelector('.ds_field-group');
      expect(
        fieldGroup.classList.contains('ds_field-group--inline'),
      ).toBeFalsy();
    });
  });

  it('should apply small class to individual radio elements when small input is set', () => {
    TestBed.runInInjectionContext(() => {
      fixture.componentInstance.small = true;
      fixture.detectChanges();

      const radioElements = fixture.nativeElement.querySelectorAll('.ds_radio');
      radioElements.forEach((radio: HTMLElement) => {
        expect(radio.classList.contains('ds_radio--small')).toBeTruthy();
      });
    });
  });

  it('should not apply small class when small input is false', () => {
    TestBed.runInInjectionContext(() => {
      fixture.componentInstance.small = false;
      fixture.detectChanges();

      const radioElements = fixture.nativeElement.querySelectorAll('.ds_radio');
      radioElements.forEach((radio: HTMLElement) => {
        expect(radio.classList.contains('ds_radio--small')).toBeFalsy();
      });
    });
  });

  it('should render hint text when present on an option', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      hostComponent.options = [
        {
          value: 'option1',
          label: 'Option 1',
          hint: 'This is a hint for option 1',
        },
        { value: 'option2', label: 'Option 2' },
      ];
      fixture.detectChanges();

      const hint = fixture.nativeElement.querySelector('.ds_hint-text');
      expect(hint).toBeTruthy();
      expect(hint.textContent.trim()).toBe('This is a hint for option 1');
    });
  });

  it('should render divider when isDivided is true on an option (not first)', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      hostComponent.options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2', isDivided: true },
      ];
      fixture.detectChanges();

      const divider = fixture.nativeElement.querySelector('.ds_radio__divider');
      expect(divider).toBeTruthy();
      expect(divider.textContent.trim()).toBe('Or');
    });
  });

  it('should not render divider when no option has isDivided set', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      hostComponent.options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
      ];
      fixture.detectChanges();

      const divider = fixture.nativeElement.querySelector('.ds_radio__divider');
      expect(divider).toBeFalsy();
    });
  });

  it('should not render divider when isDivided is set on first option', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      hostComponent.options = [
        { value: 'option1', label: 'Option 1', isDivided: true },
        { value: 'option2', label: 'Option 2' },
      ];
      fixture.detectChanges();

      const divider = fixture.nativeElement.querySelector('.ds_radio__divider');
      expect(divider).toBeFalsy();
    });
  });

  it('should handle click events on radio containers', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      const radioContainers =
        fixture.nativeElement.querySelectorAll('.ds_radio');

      // Click on the first radio container
      radioContainers[0].click();
      fixture.detectChanges();

      expect(hostComponent.form.get('testRadio')?.value).toBe('option1');
    });
  });
});

describe('GovScotRadioGroupComponent - Disabled State', () => {
  let component: GovScotRadioGroupComponent;
  let fixture: ComponentFixture<TestHostWithDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(TestHostWithDisabledComponent);
    component = fixture.componentInstance.component();
    fixture.detectChanges();
  });

  it('should disable all radio inputs when form control is disabled', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      const radioInputs =
        fixture.nativeElement.querySelectorAll('.ds_radio__input');

      // Disable the form control
      hostComponent.form.get('testRadio')?.disable();
      fixture.detectChanges();

      radioInputs.forEach((input: HTMLInputElement) => {
        expect(input.disabled).toBe(true);
      });
    });
  });

  it('should enable all radio inputs when form control is enabled', () => {
    TestBed.runInInjectionContext(() => {
      const hostComponent = fixture.componentInstance;
      const radioInputs =
        fixture.nativeElement.querySelectorAll('.ds_radio__input');

      // Ensure form control is enabled (default state)
      hostComponent.form.get('testRadio')?.enable();
      fixture.detectChanges();

      radioInputs.forEach((input: HTMLInputElement) => {
        expect(input.disabled).toBe(false);
      });
    });
  });
});

describe('GovScotRadioGroupComponent - Integration', () => {
  it('should work with empty options', async () => {
    @Component({
      template: `
        <form [formGroup]="form">
          <ngx-govscot-radio-group
            formControlName="testRadio"
            inputId="empty-radio-group"
          >
          </ngx-govscot-radio-group>
        </form>
      `,
      imports: [
        GovScotRadioGroupComponent,
        GovScotRadioOptionDirective,
        ReactiveFormsModule,
      ],
    })
    class EmptyOptionsComponent {
      private fb = inject(FormBuilder);

      form: FormGroup = this.fb.group({
        testRadio: [null],
      });
    }

    await TestBed.configureTestingModule({}).compileComponents();
    const fixture = TestBed.createComponent(EmptyOptionsComponent);
    fixture.detectChanges();

    TestBed.runInInjectionContext(() => {
      const radioInputs =
        fixture.nativeElement.querySelectorAll('.ds_radio__input');
      expect(radioInputs.length).toBe(0);
    });
  });

  it('should handle radio input values correctly', async () => {
    @Component({
      template: `
        <form [formGroup]="form">
          <ngx-govscot-radio-group
            formControlName="testRadio"
            inputId="simple-radio-group"
          >
            <ngx-govscot-radio-option
              value="test1"
              label="Test Option 1"
            ></ngx-govscot-radio-option>
            <ngx-govscot-radio-option
              value="test2"
              label="Test Option 2"
            ></ngx-govscot-radio-option>
          </ngx-govscot-radio-group>
        </form>
      `,
      imports: [
        GovScotRadioGroupComponent,
        GovScotRadioOptionDirective,
        ReactiveFormsModule,
      ],
    })
    class SimpleRadioComponent {
      private fb = inject(FormBuilder);

      form: FormGroup = this.fb.group({
        testRadio: [null],
      });
    }

    await TestBed.configureTestingModule({}).compileComponents();
    const fixture = TestBed.createComponent(SimpleRadioComponent);
    fixture.detectChanges();

    TestBed.runInInjectionContext(() => {
      const radioInputs =
        fixture.nativeElement.querySelectorAll('.ds_radio__input');
      const radioLabels =
        fixture.nativeElement.querySelectorAll('.ds_radio__label');

      expect(radioInputs.length).toBe(2);
      expect(radioLabels.length).toBe(2);
      expect(radioLabels[0].textContent.trim()).toBe('Test Option 1');
      expect(radioLabels[1].textContent.trim()).toBe('Test Option 2');
    });
  });
});
