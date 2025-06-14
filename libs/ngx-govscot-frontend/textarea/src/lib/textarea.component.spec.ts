import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';

import { GovScotTextareaComponent } from './textarea.component';

@Component({
  template: `
    <ngx-govscot-textarea
      [formControl]="control"
      [rows]="rows"
      [cols]="cols"
      [wrap]="wrap"
      [placeholder]="placeholder"
      [maxlength]="maxlength"
      [minlength]="minlength"
      [readonly]="readonly"
      [disabled]="disabled"
      [autocomplete]="autocomplete"
      [spellcheck]="spellcheck"
      [autocapitalize]="autocapitalize"
    />
  `,
  imports: [GovScotTextareaComponent, ReactiveFormsModule],
})
class TestHostComponent {
  control = new FormControl('');
  rows = 3;
  cols?: number;
  wrap?: 'hard' | 'soft';
  placeholder?: string;
  maxlength?: number;
  minlength?: number;
  readonly = false;
  disabled = false;
  autocomplete?: string;
  spellcheck?: boolean;
  autocapitalize?: string;
}

describe('GovScotTextareaComponent', () => {
  let component: GovScotTextareaComponent;
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

  it('should render basic textarea', () => {
    const compiled = hostFixture.nativeElement as HTMLElement;
    const textarea = compiled.querySelector('textarea');

    expect(textarea).toBeTruthy();
    expect(textarea?.classList.contains('ds_input')).toBe(true);
  });

  it('should apply rows attribute', () => {
    hostComponent.rows = 5;
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const textarea = compiled.querySelector('textarea');

    expect(textarea?.getAttribute('rows')).toBe('5');
  });

  it('should apply cols attribute when set', () => {
    hostComponent.cols = 40;
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const textarea = compiled.querySelector('textarea');

    expect(textarea?.getAttribute('cols')).toBe('40');
  });

  it('should apply wrap attribute when set', () => {
    hostComponent.wrap = 'hard';
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const textarea = compiled.querySelector('textarea');

    expect(textarea?.getAttribute('wrap')).toBe('hard');
  });

  it('should apply placeholder text', () => {
    hostComponent.placeholder = 'Enter your message here';
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const textarea = compiled.querySelector('textarea');

    expect(textarea?.getAttribute('placeholder')).toBe(
      'Enter your message here',
    );
  });

  it('should apply maxlength attribute', () => {
    hostComponent.maxlength = 500;
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const textarea = compiled.querySelector('textarea');

    expect(textarea?.getAttribute('maxlength')).toBe('500');
  });

  it('should apply minlength attribute', () => {
    hostComponent.minlength = 10;
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const textarea = compiled.querySelector('textarea');

    expect(textarea?.getAttribute('minlength')).toBe('10');
  });

  it('should handle form control value changes', () => {
    hostComponent.control.setValue('test message');
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const textarea = compiled.querySelector('textarea') as HTMLTextAreaElement;

    expect(textarea.value).toBe('test message');
  });

  it('should apply error state when form control is touched and has errors', () => {
    hostComponent.control.setErrors({ required: true });
    hostComponent.control.markAsTouched();
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const textarea = compiled.querySelector('textarea');

    expect(textarea?.classList.contains('ds_input--error')).toBe(true);
  });

  it('should apply disabled state', () => {
    hostComponent.disabled = true;
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const textarea = compiled.querySelector('textarea');

    expect(textarea?.hasAttribute('disabled')).toBe(true);
  });

  it('should apply readonly state', () => {
    hostComponent.readonly = true;
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const textarea = compiled.querySelector('textarea');

    expect(textarea?.hasAttribute('readonly')).toBe(true);
  });

  it('should apply autocomplete attribute', () => {
    hostComponent.autocomplete = 'off';
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const textarea = compiled.querySelector('textarea');

    expect(textarea?.getAttribute('autocomplete')).toBe('off');
  });

  it('should apply spellcheck attribute', () => {
    hostComponent.spellcheck = false;
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const textarea = compiled.querySelector('textarea');

    expect(textarea?.getAttribute('spellcheck')).toBe('false');
  });

  it('should apply autocapitalize attribute', () => {
    hostComponent.autocapitalize = 'none';
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const textarea = compiled.querySelector('textarea');

    expect(textarea?.getAttribute('autocapitalize')).toBe('none');
  });
});
