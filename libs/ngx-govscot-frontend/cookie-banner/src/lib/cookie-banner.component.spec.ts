import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovScotCookieBannerComponent } from './cookie-banner.component';

@Component({
  template: `
    <ngx-govscot-cookie-banner
      [text]="text"
      [description]="description"
      [showConfirmation]="showConfirmation"
      [confirmationText]="confirmationText"
      (acceptAll)="onAcceptAll()"
      (essentialOnly)="onEssentialOnly()"
      (viewPreferences)="onViewPreferences()"
      (changeSettings)="onChangeSettings()"
      (closeConfirmation)="onCloseConfirmation()"
    >
    </ngx-govscot-cookie-banner>
  `,
  imports: [GovScotCookieBannerComponent],
})
class TestHostComponent {
  text = 'Test cookie banner text';
  description = 'Test description text';
  showConfirmation = false;
  confirmationText = 'Test confirmation message';

  acceptAllCalled = false;
  essentialOnlyCalled = false;
  viewPreferencesCalled = false;
  changeSettingsCalled = false;
  closeConfirmationCalled = false;

  onAcceptAll() {
    this.acceptAllCalled = true;
  }

  onEssentialOnly() {
    this.essentialOnlyCalled = true;
  }

  onViewPreferences() {
    this.viewPreferencesCalled = true;
  }

  onChangeSettings() {
    this.changeSettingsCalled = true;
  }

  onCloseConfirmation() {
    this.closeConfirmationCalled = true;
  }
}

describe('GovScotCookieBannerComponent', () => {
  let component: GovScotCookieBannerComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotCookieBannerComponent, TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the main banner when showConfirmation is false', () => {
    hostComponent.showConfirmation = false;
    fixture.detectChanges();

    const bannerElement = fixture.nativeElement.querySelector('#cookie-notice');
    const confirmElement =
      fixture.nativeElement.querySelector('#cookie-confirm');

    expect(bannerElement).toBeTruthy();
    expect(confirmElement).toBeFalsy();
  });

  it('should display the confirmation message when showConfirmation is true', () => {
    hostComponent.showConfirmation = true;
    fixture.detectChanges();

    const bannerElement = fixture.nativeElement.querySelector('#cookie-notice');
    const confirmElement =
      fixture.nativeElement.querySelector('#cookie-confirm');

    expect(bannerElement).toBeFalsy();
    expect(confirmElement).toBeTruthy();
  });

  it('should display custom text and description', () => {
    const textElement = fixture.nativeElement.querySelector(
      '.ds_notification__text p:first-child',
    );
    const descriptionElement = fixture.nativeElement.querySelector(
      '.ds_notification__text p:last-child',
    );

    expect(textElement.textContent).toBe('Test cookie banner text');
    expect(descriptionElement.textContent).toBe('Test description text');
  });

  it('should emit acceptAll when accept all button is clicked', () => {
    const acceptButton = fixture.nativeElement.querySelector(
      '.js-accept-all-cookies',
    );
    acceptButton.click();

    expect(hostComponent.acceptAllCalled).toBe(true);
  });

  it('should emit essentialOnly when essential only button is clicked', () => {
    const essentialButton = fixture.nativeElement.querySelector(
      '.js-accept-essential-cookies',
    );
    essentialButton.click();

    expect(hostComponent.essentialOnlyCalled).toBe(true);
  });

  it('should emit viewPreferences when preferences button is clicked', () => {
    const preferencesButton = fixture.nativeElement.querySelector(
      'ngx-govscot-button[color="link"]',
    );
    preferencesButton.click();

    expect(hostComponent.viewPreferencesCalled).toBe(true);
  });

  it('should emit changeSettings when settings link is clicked in confirmation', () => {
    hostComponent.showConfirmation = true;
    fixture.detectChanges();

    const settingsButton = fixture.nativeElement.querySelector(
      '.ds_notification__text ngx-govscot-button[color="link"]',
    );
    settingsButton.click();

    expect(hostComponent.changeSettingsCalled).toBe(true);
  });

  it('should emit closeConfirmation when close button is clicked', () => {
    hostComponent.showConfirmation = true;
    fixture.detectChanges();

    const closeButton = fixture.nativeElement.querySelector(
      '.js-close-notification',
    );
    closeButton.click();

    expect(hostComponent.closeConfirmationCalled).toBe(true);
  });

  it('should have correct CSS classes for main banner', () => {
    const bannerElement = fixture.nativeElement.querySelector('#cookie-notice');

    expect(bannerElement.classList).toContain('ds_notification');
    expect(bannerElement.classList).toContain('ds_notification--large');
    expect(bannerElement.classList).toContain('ds_notification--cookie');
  });

  it('should have correct CSS classes for confirmation message', () => {
    hostComponent.showConfirmation = true;
    fixture.detectChanges();

    const confirmElement =
      fixture.nativeElement.querySelector('#cookie-confirm');

    expect(confirmElement.classList).toContain('ds_notification');
    expect(confirmElement.classList).toContain(
      'ds_notification--cookie-success',
    );
    expect(confirmElement.classList).toContain('ds_reversed');
  });

  it('should have correct close icon in confirmation message', () => {
    hostComponent.showConfirmation = true;
    fixture.detectChanges();

    const iconElement = fixture.nativeElement.querySelector(
      '.ds_notification__close svg use',
    );

    expect(iconElement.getAttribute('href')).toBe(
      '/assets/images/icons/icons.stack.svg#close',
    );
  });

  it('should use GovScot button components for main actions', () => {
    const buttonComponents =
      fixture.nativeElement.querySelectorAll('ngx-govscot-button');

    expect(buttonComponents.length).toBeGreaterThan(0);
  });
});
