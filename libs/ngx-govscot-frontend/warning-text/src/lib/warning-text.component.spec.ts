import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovScotWarningTextComponent } from './warning-text.component';

describe('GovScotWarningTextComponent', () => {
  let component: GovScotWarningTextComponent;
  let fixture: ComponentFixture<GovScotWarningTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotWarningTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotWarningTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render warning text with correct classes', () => {
    const warningElement =
      fixture.nativeElement.querySelector('.ds_warning-text');
    expect(warningElement).toBeTruthy();

    const iconElement = fixture.nativeElement.querySelector(
      '.ds_warning-text__icon',
    );
    expect(iconElement).toBeTruthy();
    expect(iconElement.getAttribute('aria-hidden')).toBe('true');

    const textElement = fixture.nativeElement.querySelector(
      '.ds_warning-text__text',
    );
    expect(textElement).toBeTruthy();
  });

  it('should have visually hidden warning text', () => {
    const hiddenWarning =
      fixture.nativeElement.querySelector('.visually-hidden');
    expect(hiddenWarning).toBeTruthy();
    expect(hiddenWarning.textContent.trim()).toBe('Warning');
  });

  it('should project content correctly', () => {
    @Component({
      selector: 'ngx-govscot-test-wrapper',
      template:
        '<ngx-govscot-warning-text>Call 999 if you or someone else is in immediate danger.</ngx-govscot-warning-text>',
      imports: [GovScotWarningTextComponent],
    })
    class TestWrapperComponent {}

    const wrapperFixture = TestBed.createComponent(TestWrapperComponent);
    wrapperFixture.detectChanges();

    const textElement = wrapperFixture.nativeElement.querySelector(
      '.ds_warning-text__text',
    );
    expect(textElement).toBeTruthy();
    expect(textElement.textContent?.trim()).toBe(
      'Call 999 if you or someone else is in immediate danger.',
    );
  });

  it('should have correct structure', () => {
    const warningElement =
      fixture.nativeElement.querySelector('.ds_warning-text');
    expect(warningElement.children.length).toBe(3);

    expect(
      warningElement.children[0].classList.contains('ds_warning-text__icon'),
    ).toBeTruthy();
    expect(
      warningElement.children[1].classList.contains('visually-hidden'),
    ).toBeTruthy();
    expect(
      warningElement.children[2].classList.contains('ds_warning-text__text'),
    ).toBeTruthy();
  });
});
