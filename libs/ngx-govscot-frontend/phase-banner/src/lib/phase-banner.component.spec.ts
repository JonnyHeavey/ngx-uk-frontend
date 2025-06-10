import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovScotPhaseBannerComponent } from './phase-banner.component';

describe('GovScotPhaseBannerComponent', () => {
  let component: GovScotPhaseBannerComponent;
  let fixture: ComponentFixture<GovScotPhaseBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotPhaseBannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotPhaseBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render phase banner with correct structure and classes', () => {
    const phaseBannerContainer =
      fixture.nativeElement.querySelector('.ds_phase-banner');
    expect(phaseBannerContainer).toBeTruthy();

    const wrapper = fixture.nativeElement.querySelector('.ds_wrapper');
    expect(wrapper).toBeTruthy();

    const content = fixture.nativeElement.querySelector(
      '.ds_phase-banner__content',
    );
    expect(content).toBeTruthy();

    const tag = fixture.nativeElement.querySelector(
      '.ds_tag.ds_phase-banner__tag',
    );
    expect(tag).toBeTruthy();

    const text = fixture.nativeElement.querySelector('.ds_phase-banner__text');
    expect(text).toBeTruthy();
  });

  it('should display default phase as "Beta"', () => {
    const tag = fixture.nativeElement.querySelector(
      '.ds_tag.ds_phase-banner__tag',
    );
    expect(tag.textContent?.trim()).toBe('Beta');
  });

  it('should display alpha phase when specified', () => {
    fixture.componentRef.setInput('phase', 'alpha');
    fixture.detectChanges();

    const tag = fixture.nativeElement.querySelector(
      '.ds_tag.ds_phase-banner__tag',
    );
    expect(tag.textContent?.trim()).toBe('Alpha');
  });

  it('should display beta phase when specified', () => {
    fixture.componentRef.setInput('phase', 'beta');
    fixture.detectChanges();

    const tag = fixture.nativeElement.querySelector(
      '.ds_tag.ds_phase-banner__tag',
    );
    expect(tag.textContent?.trim()).toBe('Beta');
  });

  it('should project content correctly', () => {
    @Component({
      selector: 'ngx-govscot-test-wrapper',
      template: `
        <ngx-govscot-phase-banner>
          This is a new service. Your <a href="#feedback">feedback</a> will help
          us to improve it.
        </ngx-govscot-phase-banner>
      `,
      imports: [GovScotPhaseBannerComponent],
    })
    class TestWrapperComponent {}

    const wrapperFixture = TestBed.createComponent(TestWrapperComponent);
    wrapperFixture.detectChanges();

    const textSpan = wrapperFixture.nativeElement.querySelector(
      '.ds_phase-banner__text',
    );
    expect(textSpan.textContent?.trim()).toContain('This is a new service');
    expect(textSpan.textContent?.trim()).toContain('feedback');
    expect(textSpan.textContent?.trim()).toContain(
      'will help us to improve it',
    );

    const feedbackLink = textSpan.querySelector('a[href="#feedback"]');
    expect(feedbackLink).toBeTruthy();
  });

  it('should have correct HTML structure', () => {
    const container = fixture.nativeElement.querySelector('.ds_phase-banner');
    expect(container.children.length).toBe(1);
    expect(container.children[0].classList.contains('ds_wrapper')).toBe(true);

    const wrapper = container.children[0];
    expect(wrapper.children.length).toBe(1);
    expect(wrapper.children[0].tagName.toLowerCase()).toBe('p');
    expect(
      wrapper.children[0].classList.contains('ds_phase-banner__content'),
    ).toBe(true);

    const content = wrapper.children[0];
    expect(content.children.length).toBe(2);
    expect(content.children[0].tagName.toLowerCase()).toBe('strong');
    expect(content.children[0].classList.contains('ds_tag')).toBe(true);
    expect(content.children[0].classList.contains('ds_phase-banner__tag')).toBe(
      true,
    );
    expect(content.children[1].tagName.toLowerCase()).toBe('span');
    expect(
      content.children[1].classList.contains('ds_phase-banner__text'),
    ).toBe(true);
  });

  it('should work with complex content projection', () => {
    @Component({
      selector: 'ngx-govscot-test-complex',
      template: `
        <ngx-govscot-phase-banner phase="alpha">
          This is a new service – your <a href="/feedback">feedback</a> will
          help us to improve it.
          <br />
          You can also <a href="/contact">contact us</a> for support.
        </ngx-govscot-phase-banner>
      `,
      imports: [GovScotPhaseBannerComponent],
    })
    class TestComplexComponent {}

    const complexFixture = TestBed.createComponent(TestComplexComponent);
    complexFixture.detectChanges();

    const tag = complexFixture.nativeElement.querySelector(
      '.ds_tag.ds_phase-banner__tag',
    );
    expect(tag.textContent?.trim()).toBe('Alpha');

    const textSpan = complexFixture.nativeElement.querySelector(
      '.ds_phase-banner__text',
    );
    expect(textSpan.querySelector('a[href="/feedback"]')).toBeTruthy();
    expect(textSpan.querySelector('a[href="/contact"]')).toBeTruthy();
    expect(textSpan.querySelector('br')).toBeTruthy();
  });
});
