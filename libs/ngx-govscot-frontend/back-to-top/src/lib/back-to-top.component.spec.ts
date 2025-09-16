import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovScotBackToTopComponent } from './back-to-top.component';

describe('GovScotBackToTopComponent', () => {
  let component: GovScotBackToTopComponent;
  let fixture: ComponentFixture<GovScotBackToTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotBackToTopComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotBackToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default input values', () => {
    expect(component.scrollThreshold()).toBe(200);
    expect(component.ariaLabel()).toBe('Back to top of page');
    expect(component.buttonText()).toBe('Back to top');
  });

  it('should accept custom input values', () => {
    fixture.componentRef.setInput('scrollThreshold', 300);
    fixture.componentRef.setInput('ariaLabel', 'Custom aria label');
    fixture.componentRef.setInput('buttonText', 'Custom button text');

    expect(component.scrollThreshold()).toBe(300);
    expect(component.ariaLabel()).toBe('Custom aria label');
    expect(component.buttonText()).toBe('Custom button text');
  });

  it('should initially be hidden', () => {
    expect(component.isVisible()).toBe(false);
  });

  it('should render button with correct attributes', () => {
    const button = fixture.nativeElement.querySelector('button');

    expect(button).toBeTruthy();
    expect(button.type).toBe('button');
    expect(button.className).toBe('ds_back-to-top__button');
    expect(button.getAttribute('aria-label')).toBe('Back to top of page');
    expect(button.textContent.trim()).toContain('Back to top');
  });

  it('should render with ds_back-to-top class', () => {
    const container = fixture.nativeElement.querySelector('.ds_back-to-top');

    expect(container).toBeTruthy();
    expect(container.getAttribute('data-module')).toBe('ds-back-to-top');
  });

  it('should add active class when visible', () => {
    component.isVisible.set(true);
    fixture.detectChanges();

    const container = fixture.nativeElement.querySelector('.ds_back-to-top');
    expect(container.classList.contains('active')).toBe(true);
  });

  it('should not have active class when hidden', () => {
    component.isVisible.set(false);
    fixture.detectChanges();

    const container = fixture.nativeElement.querySelector('.ds_back-to-top');
    expect(container.classList.contains('active')).toBe(false);
  });

  it('should render SVG icon with correct attributes', () => {
    const svg = fixture.nativeElement.querySelector('svg');

    expect(svg).toBeTruthy();
    expect(svg.getAttribute('aria-hidden')).toBe('true');
    expect(svg.getAttribute('role')).toBe('img');
    expect(svg.getAttribute('focusable')).toBe('false');
    expect(svg.classList.contains('ds_icon')).toBe(true);
    expect(svg.classList.contains('ds_back-to-top__icon')).toBe(true);
  });

  it('should render correct path in SVG', () => {
    const path = fixture.nativeElement.querySelector('svg path');

    expect(path).toBeTruthy();
    expect(path.getAttribute('d')).toBe(
      'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z',
    );
  });

  it('should call scrollToTop when button is clicked', () => {
    jest.spyOn(component, 'scrollToTop').mockImplementation();

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(component.scrollToTop).toHaveBeenCalled();
  });
});
