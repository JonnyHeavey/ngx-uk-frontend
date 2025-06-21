import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovScotConfirmationMessageComponent } from './confirmation-message.component';

@Component({
  template: `
    <ngx-govscot-confirmation-message [title]="title" [body]="body">
    </ngx-govscot-confirmation-message>
  `,
  imports: [GovScotConfirmationMessageComponent],
})
class TestHostComponent {
  title = 'Test confirmation title';
  body = 'Test confirmation body';
}

describe('GovScotConfirmationMessageComponent', () => {
  let component: GovScotConfirmationMessageComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const titleElement = fixture.nativeElement.querySelector(
      '.ds_confirmation-message__title',
    );
    expect(titleElement.textContent.trim()).toBe('Test confirmation title');
  });

  it('should display the body when provided', () => {
    const bodyElement = fixture.nativeElement.querySelector(
      '.ds_confirmation-message__body p',
    );
    expect(bodyElement.textContent.trim()).toBe('Test confirmation body');
  });

  it('should not display body when not provided', () => {
    hostComponent.body = '';
    fixture.detectChanges();

    const bodyElement = fixture.nativeElement.querySelector(
      '.ds_confirmation-message__body',
    );
    expect(bodyElement).toBeNull();
  });

  it('should have correct CSS classes', () => {
    const containerElement = fixture.nativeElement.querySelector(
      '.ds_confirmation-message',
    );
    expect(containerElement).toBeTruthy();
    expect(containerElement.getAttribute('aria-live')).toBe('polite');
  });

  it('should have correct icon', () => {
    const iconElement = fixture.nativeElement.querySelector(
      '.ds_confirmation-message__icon',
    );
    expect(iconElement).toBeTruthy();
    expect(iconElement.getAttribute('aria-hidden')).toBe('true');

    const useElement = iconElement.querySelector('use');
    expect(useElement.getAttribute('href')).toBe(
      '/assets/images/icons/icons.stack.svg#check_circle',
    );
  });
});
