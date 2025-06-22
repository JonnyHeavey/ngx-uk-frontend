import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GovScotNotificationBannerComponent } from './notification-banner.component';

describe('GovScotNotificationBannerComponent', () => {
  let component: GovScotNotificationBannerComponent;
  let fixture: ComponentFixture<GovScotNotificationBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotNotificationBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotNotificationBannerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default property values', () => {
    expect(component.showClose).toBe(true);
    expect(component.showIcon).toBe(false);
    expect(component.icon).toBe('priority_high');
    expect(component.iconInverse).toBe(false);
    expect(component.iconColour).toBe(false);
    expect(component.reversed).toBe(true);
  });

  it('should render the notification banner with basic structure', () => {
    fixture.detectChanges();

    const bannerElement = fixture.debugElement.query(
      By.css('.ds_notification'),
    );
    expect(bannerElement).toBeTruthy();

    const wrapperElement = fixture.debugElement.query(By.css('.ds_wrapper'));
    expect(wrapperElement).toBeTruthy();

    const contentElement = fixture.debugElement.query(
      By.css('.ds_notification__content'),
    );
    expect(contentElement).toBeTruthy();

    const textElement = fixture.debugElement.query(
      By.css('.ds_notification__text'),
    );
    expect(textElement).toBeTruthy();
  });

  it('should apply reversed class by default', () => {
    fixture.detectChanges();

    const bannerElement = fixture.debugElement.query(
      By.css('.ds_notification'),
    );
    expect(bannerElement.nativeElement.className).toContain('ds_reversed');
  });

  it('should not apply reversed class when reversed is false', () => {
    component.reversed = false;
    fixture.detectChanges();

    const bannerElement = fixture.debugElement.query(
      By.css('.ds_notification'),
    );
    expect(bannerElement.nativeElement.className).not.toContain('ds_reversed');
  });

  it('should apply has-close class to content by default', () => {
    fixture.detectChanges();

    const contentElement = fixture.debugElement.query(
      By.css('.ds_notification__content'),
    );
    expect(contentElement.nativeElement.className).toContain(
      'ds_notification__content--has-close',
    );
  });

  it('should emit closed event when onClose is called', () => {
    jest.spyOn(component.closed, 'emit');

    component.onClose();

    expect(component.closed.emit).toHaveBeenCalled();
  });

  it('should set text property', () => {
    const testText = 'Test notification message';
    component.text = testText;

    expect(component.text).toBe(testText);
  });

  it('should set showIcon property', () => {
    component.showIcon = true;
    expect(component.showIcon).toBe(true);

    component.showIcon = false;
    expect(component.showIcon).toBe(false);
  });

  it('should set icon property', () => {
    const testIcon = 'test-icon';
    component.icon = testIcon;

    expect(component.icon).toBe(testIcon);
  });

  it('should set iconInverse property', () => {
    component.iconInverse = true;
    expect(component.iconInverse).toBe(true);
  });

  it('should set iconColour property', () => {
    component.iconColour = true;
    expect(component.iconColour).toBe(true);
  });

  it('should set showClose property', () => {
    component.showClose = false;
    expect(component.showClose).toBe(false);
  });
});
