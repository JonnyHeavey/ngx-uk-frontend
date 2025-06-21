import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { GovUKTextareaComponent } from './textarea.component';

import { Component, viewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  template: `
    <form [formGroup]="form">
      <ngx-govuk-textarea
        formControlName="testTextarea"
        [inputId]="inputId"
        [autocomplete]="autocomplete"
        [extraClasses]="extraClasses"
        [rows]="rows"
        [maxlength]="maxlength"
        [showCharacterCount]="showCharacterCount"
      ></ngx-govuk-textarea>
    </form>
  `,
  imports: [GovUKTextareaComponent, ReactiveFormsModule],
})
class TestHostComponent {
  inputId = '';
  autocomplete = 'off';
  extraClasses = '';
  rows = 2;
  maxlength: number | null = null;
  showCharacterCount = false;
  form: FormGroup;
  component = viewChild.required(GovUKTextareaComponent);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      testTextarea: ['', Validators.required],
    });
  }
}

describe('GovUKTextareaComponent', () => {
  let component: GovUKTextareaComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({}).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.componentInstance.component();

    hostComponent.inputId = 'test-textarea';

    fixture.detectChanges();
  });

  it('should create', () => {
    TestBed.runInInjectionContext(() => {
      expect(component).toBeTruthy();
    });
  });

  it('should update form control value', () => {
    const testValue = 'test textarea content';
    const control = hostComponent.form.get('testTextarea');

    control?.setValue(testValue);
    fixture.detectChanges();

    expect(control?.value).toBe(testValue);
  });

  it('should handle form validation', () => {
    const control = hostComponent.form.get('testTextarea');

    control?.setValue('');
    expect(control?.valid).toBeFalsy();

    control?.setValue('testing');
    expect(control?.valid).toBeTruthy();
  });

  it('should render id attribute in DOM when inputId is set', () => {
    hostComponent.inputId = 'test-textarea-id';
    fixture.detectChanges();

    const textareaElement =
      fixture.nativeElement.querySelector('.govuk-textarea');
    expect(textareaElement.getAttribute('id')).toBe('test-textarea-id');
  });

  it('should render autocomplete attribute in DOM when autocomplete is set', () => {
    hostComponent.autocomplete = 'on';
    fixture.detectChanges();

    const textareaElement =
      fixture.nativeElement.querySelector('.govuk-textarea');
    expect(textareaElement.getAttribute('autocomplete')).toBe('on');
  });

  it('should render extraClasses in DOM when set', () => {
    hostComponent.extraClasses = 'custom-class another-class';
    fixture.detectChanges();

    const textareaElement =
      fixture.nativeElement.querySelector('.govuk-textarea');
    expect(textareaElement.classList.contains('custom-class')).toBeTruthy();
    expect(textareaElement.classList.contains('another-class')).toBeTruthy();
  });

  it('should render rows attribute in DOM when rows is set', () => {
    hostComponent.rows = 5;
    fixture.detectChanges();

    const textareaElement =
      fixture.nativeElement.querySelector('.govuk-textarea');
    expect(textareaElement.getAttribute('rows')).toBe('5');
  });

  it('should render maxlength attribute in DOM when maxlength is set', () => {
    hostComponent.maxlength = 100;
    fixture.detectChanges();

    const textareaElement =
      fixture.nativeElement.querySelector('.govuk-textarea');
    expect(textareaElement.getAttribute('maxlength')).toBe('100');
  });

  it('should add error class when form control has validation error', () => {
    const control = hostComponent.form.get('testTextarea');
    control?.setValue('');
    control?.markAsTouched();
    fixture.detectChanges();

    const textareaElement =
      fixture.nativeElement.querySelector('.govuk-textarea');
    expect(
      textareaElement.classList.contains('govuk-textarea--error'),
    ).toBeTruthy();
  });

  it('should not have error class when form control has no validation errors', () => {
    const control = hostComponent.form.get('testTextarea');
    control?.setValue('valid value');
    control?.markAsTouched();
    fixture.detectChanges();

    const textareaElement =
      fixture.nativeElement.querySelector('.govuk-textarea');
    expect(
      textareaElement.classList.contains('govuk-textarea--error'),
    ).toBeFalsy();
  });

  it('should not have error class when form control has not been touched', () => {
    const control = hostComponent.form.get('testTextarea');
    control?.setValue('');
    fixture.detectChanges();

    const textareaElement =
      fixture.nativeElement.querySelector('.govuk-textarea');
    expect(
      textareaElement.classList.contains('govuk-textarea--error'),
    ).toBeFalsy();
  });

  describe('Character count functionality', () => {
    it('should not show character count by default', () => {
      const characterCountMessage = fixture.nativeElement.querySelector(
        '.govuk-character-count__message',
      );
      expect(characterCountMessage).toBeNull();
    });

    it('should show character count when showCharacterCount is true and maxlength is set', () => {
      TestBed.runInInjectionContext(() => {
        hostComponent.showCharacterCount = true;
        hostComponent.maxlength = 100;
        fixture.detectChanges();

        const characterCountMessage = fixture.nativeElement.querySelector(
          '.govuk-character-count__message',
        );
        expect(characterCountMessage).not.toBeNull();
        expect(component.characterCountMessage()).toBe(
          'You have 100 characters remaining',
        );
      });
    });

    it('should update character count when text is entered', () => {
      TestBed.runInInjectionContext(() => {
        hostComponent.showCharacterCount = true;
        hostComponent.maxlength = 100;
        const control = hostComponent.form.get('testTextarea');
        control?.setValue('This is a test');
        fixture.detectChanges();

        expect(component.characterCountMessage()).toBe(
          'You have 86 characters remaining',
        );
      });
    });

    it('should show "too many" message when text exceeds maxlength', () => {
      TestBed.runInInjectionContext(() => {
        hostComponent.showCharacterCount = true;
        hostComponent.maxlength = 10;
        const control = hostComponent.form.get('testTextarea');
        control?.setValue('This is a test that is too long');
        fixture.detectChanges();

        expect(component.characterCountMessage()).toBe(
          'You have 21 characters too many',
        );
      });
    });

    it('should add govuk-character-count class when showCharacterCount is true', () => {
      hostComponent.showCharacterCount = true;
      fixture.detectChanges();

      const containerElement = fixture.nativeElement.querySelector('div');
      expect(
        containerElement.classList.contains('govuk-character-count'),
      ).toBeTruthy();
    });

    it('should add govuk-js-character-count class to textarea when showCharacterCount is true', () => {
      hostComponent.showCharacterCount = true;
      fixture.detectChanges();

      const textareaElement =
        fixture.nativeElement.querySelector('.govuk-textarea');
      expect(
        textareaElement.classList.contains('govuk-js-character-count'),
      ).toBeTruthy();
    });

    it('should set aria-describedby attribute when showCharacterCount is true', () => {
      hostComponent.showCharacterCount = true;
      hostComponent.maxlength = 100;
      fixture.detectChanges();

      const textareaElement =
        fixture.nativeElement.querySelector('.govuk-textarea');
      expect(textareaElement.getAttribute('aria-describedby')).toBe(
        'test-textarea-info',
      );
    });

    it('should handle singular form correctly when one character remaining', () => {
      TestBed.runInInjectionContext(() => {
        hostComponent.showCharacterCount = true;
        hostComponent.maxlength = 10;
        const control = hostComponent.form.get('testTextarea');
        control?.setValue('Nine char');
        fixture.detectChanges();

        expect(component.characterCountMessage()).toBe(
          'You have 1 character remaining',
        );
      });
    });

    it('should handle singular form correctly when one character too many', () => {
      TestBed.runInInjectionContext(() => {
        hostComponent.showCharacterCount = true;
        hostComponent.maxlength = 10;
        const control = hostComponent.form.get('testTextarea');
        control?.setValue('Eleven char');
        fixture.detectChanges();

        expect(component.characterCountMessage()).toBe(
          'You have 1 character too many',
        );
      });
    });

    it('should have aria-live attribute set to polite on character count message', () => {
      hostComponent.showCharacterCount = true;
      hostComponent.maxlength = 100;
      fixture.detectChanges();

      const characterCountMessage = fixture.nativeElement.querySelector(
        '.govuk-character-count__message',
      );
      expect(characterCountMessage.getAttribute('aria-live')).toBe('polite');
    });

    it('should have correct ID on character count message', () => {
      hostComponent.showCharacterCount = true;
      hostComponent.maxlength = 100;
      fixture.detectChanges();

      const characterCountMessage = fixture.nativeElement.querySelector(
        '.govuk-character-count__message',
      );
      expect(characterCountMessage.getAttribute('id')).toBe(
        'test-textarea-info',
      );
    });
  });
});
