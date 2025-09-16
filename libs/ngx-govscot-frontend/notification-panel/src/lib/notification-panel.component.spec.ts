import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovScotNotificationPanelComponent } from './notification-panel.component';

describe('GovScotNotificationPanelComponent', () => {
  let component: GovScotNotificationPanelComponent;
  let fixture: ComponentFixture<GovScotNotificationPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotNotificationPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotNotificationPanelComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render with correct structure and classes', () => {
    fixture.componentRef.setInput('title', 'Thank you');
    fixture.detectChanges();

    const panelContainer = fixture.nativeElement.querySelector(
      '.ds_notification-panel',
    );
    expect(panelContainer).toBeTruthy();

    const title = fixture.nativeElement.querySelector(
      '.ds_notification-panel__title',
    );
    expect(title).toBeTruthy();
    expect(title.tagName.toLowerCase()).toBe('h1');

    const content = fixture.nativeElement.querySelector(
      '.ds_notification-panel__content',
    );
    expect(content).toBeTruthy();
  });

  it('should display the title text', () => {
    const titleText = 'Application complete';
    fixture.componentRef.setInput('title', titleText);
    fixture.detectChanges();

    const title = fixture.nativeElement.querySelector(
      '.ds_notification-panel__title',
    );
    expect(title.textContent?.trim()).toBe(titleText);
  });

  it('should project content correctly', () => {
    @Component({
      selector: 'ngx-govscot-test-wrapper',
      template: `
        <ngx-govscot-notification-panel title="Thank you">
          <p>
            Your Saltire Scholarship Application form has been successfully
            submitted.
          </p>
        </ngx-govscot-notification-panel>
      `,
      imports: [GovScotNotificationPanelComponent],
    })
    class TestWrapperComponent {}

    const wrapperFixture = TestBed.createComponent(TestWrapperComponent);
    wrapperFixture.detectChanges();

    const content = wrapperFixture.nativeElement.querySelector(
      '.ds_notification-panel__content',
    );
    expect(content.textContent?.trim()).toContain(
      'Your Saltire Scholarship Application form has been successfully submitted.',
    );

    const paragraph = content.querySelector('p');
    expect(paragraph).toBeTruthy();
  });

  it('should work with reference number content', () => {
    @Component({
      selector: 'ngx-govscot-test-wrapper',
      template: `
        <ngx-govscot-notification-panel title="Application complete">
          <p>
            Your reference number is <br /><strong class="beta"
              >SG0123456</strong
            >
          </p>
        </ngx-govscot-notification-panel>
      `,
      imports: [GovScotNotificationPanelComponent],
    })
    class TestWrapperComponent {}

    const wrapperFixture = TestBed.createComponent(TestWrapperComponent);
    wrapperFixture.detectChanges();

    const content = wrapperFixture.nativeElement.querySelector(
      '.ds_notification-panel__content',
    );
    expect(content.textContent?.trim()).toContain('Your reference number is');
    expect(content.textContent?.trim()).toContain('SG0123456');

    const strong = content.querySelector('strong.beta');
    expect(strong).toBeTruthy();
    expect(strong.textContent?.trim()).toBe('SG0123456');

    const br = content.querySelector('br');
    expect(br).toBeTruthy();
  });

  it('should handle multiple paragraphs in content', () => {
    @Component({
      selector: 'ngx-govscot-test-wrapper',
      template: `
        <ngx-govscot-notification-panel title="Thank you">
          <p>Your application has been submitted successfully.</p>
          <p>You will receive a confirmation email within 24 hours.</p>
        </ngx-govscot-notification-panel>
      `,
      imports: [GovScotNotificationPanelComponent],
    })
    class TestWrapperComponent {}

    const wrapperFixture = TestBed.createComponent(TestWrapperComponent);
    wrapperFixture.detectChanges();

    const content = wrapperFixture.nativeElement.querySelector(
      '.ds_notification-panel__content',
    );
    const paragraphs = content.querySelectorAll('p');
    expect(paragraphs.length).toBe(2);
    expect(paragraphs[0].textContent?.trim()).toBe(
      'Your application has been submitted successfully.',
    );
    expect(paragraphs[1].textContent?.trim()).toBe(
      'You will receive a confirmation email within 24 hours.',
    );
  });

  describe('Accessibility', () => {
    it('should use h1 element for title', () => {
      fixture.componentRef.setInput('title', 'Test Title');
      fixture.detectChanges();

      const title = fixture.nativeElement.querySelector(
        '.ds_notification-panel__title',
      );
      expect(title.tagName.toLowerCase()).toBe('h1');
    });

    it('should have proper HTML structure', () => {
      fixture.componentRef.setInput('title', 'Test');
      fixture.detectChanges();

      const container = fixture.nativeElement.querySelector(
        '.ds_notification-panel',
      );
      expect(container.children.length).toBe(2);
      expect(container.children[0].tagName.toLowerCase()).toBe('h1');
      expect(container.children[1].tagName.toLowerCase()).toBe('div');
    });

    it('should work with role="alert" when added dynamically', () => {
      fixture.componentRef.setInput('title', 'Dynamic Alert');
      fixture.detectChanges();

      const container = fixture.nativeElement.querySelector(
        '.ds_notification-panel',
      );
      container.setAttribute('role', 'alert');
      expect(container.getAttribute('role')).toBe('alert');
    });
  });

  describe('Design System Compliance', () => {
    it('should use correct CSS classes as per Scottish Government Design System', () => {
      fixture.componentRef.setInput('title', 'Test');
      fixture.detectChanges();

      const container = fixture.nativeElement.querySelector(
        '.ds_notification-panel',
      );
      expect(container).toBeTruthy();

      const title = fixture.nativeElement.querySelector(
        '.ds_notification-panel__title',
      );
      expect(title).toBeTruthy();

      const content = fixture.nativeElement.querySelector(
        '.ds_notification-panel__content',
      );
      expect(content).toBeTruthy();
    });

    it('should support the structure from the design system examples', () => {
      @Component({
        selector: 'ngx-govscot-test-example',
        template: `
          <ngx-govscot-notification-panel title="Thank you">
            <p>
              Your Saltire Scholarship Application form has been successfully
              submitted.
            </p>
          </ngx-govscot-notification-panel>
        `,
        imports: [GovScotNotificationPanelComponent],
      })
      class TestExampleComponent {}

      const exampleFixture = TestBed.createComponent(TestExampleComponent);
      exampleFixture.detectChanges();

      // Verify the structure matches the design system HTML
      const panel = exampleFixture.nativeElement.querySelector(
        '.ds_notification-panel',
      );
      const title = panel.querySelector('.ds_notification-panel__title');
      const content = panel.querySelector('.ds_notification-panel__content');

      expect(title.textContent?.trim()).toBe('Thank you');
      expect(content.querySelector('p')).toBeTruthy();
      expect(content.textContent?.trim()).toContain(
        'Saltire Scholarship Application form',
      );
    });
  });

  describe('Real-world usage scenarios', () => {
    it('should work for form submission confirmation', () => {
      @Component({
        selector: 'ngx-govscot-test-form-success',
        template: `
          <ngx-govscot-notification-panel title="Application submitted">
            <p>
              Your Corporation Tax registration has been successfully submitted.
            </p>
            <p>Your reference number is <strong>CT-2024-001234</strong></p>
          </ngx-govscot-notification-panel>
        `,
        imports: [GovScotNotificationPanelComponent],
      })
      class TestFormSuccessComponent {}

      const formFixture = TestBed.createComponent(TestFormSuccessComponent);
      formFixture.detectChanges();

      const title = formFixture.nativeElement.querySelector(
        '.ds_notification-panel__title',
      );
      expect(title.textContent?.trim()).toBe('Application submitted');

      const content = formFixture.nativeElement.querySelector(
        '.ds_notification-panel__content',
      );
      expect(content.textContent?.trim()).toContain(
        'Corporation Tax registration',
      );
      expect(content.textContent?.trim()).toContain('CT-2024-001234');
    });

    it('should work for payment confirmation', () => {
      @Component({
        selector: 'ngx-govscot-test-payment',
        template: `
          <ngx-govscot-notification-panel title="Payment successful">
            <p>Your payment of £150.00 has been processed.</p>
            <p>Transaction ID: <strong>TXN-789456</strong></p>
          </ngx-govscot-notification-panel>
        `,
        imports: [GovScotNotificationPanelComponent],
      })
      class TestPaymentComponent {}

      const paymentFixture = TestBed.createComponent(TestPaymentComponent);
      paymentFixture.detectChanges();

      const content = paymentFixture.nativeElement.querySelector(
        '.ds_notification-panel__content',
      );
      expect(content.textContent?.trim()).toContain('£150.00');
      expect(content.textContent?.trim()).toContain('TXN-789456');
    });
  });
});
