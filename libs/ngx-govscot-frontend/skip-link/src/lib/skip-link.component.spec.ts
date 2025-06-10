import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovScotSkipLinkComponent } from './skip-link.component';

describe('GovScotSkipLinkComponent', () => {
  let component: GovScotSkipLinkComponent;
  let fixture: ComponentFixture<GovScotSkipLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotSkipLinkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotSkipLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render skip link with correct structure and classes', () => {
    const skipLinkContainer =
      fixture.nativeElement.querySelector('.ds_skip-links');
    expect(skipLinkContainer).toBeTruthy();

    const skipLinksList = fixture.nativeElement.querySelector(
      '.ds_skip-links__list',
    );
    expect(skipLinksList).toBeTruthy();

    const skipLinksItem = fixture.nativeElement.querySelector(
      '.ds_skip-links__item',
    );
    expect(skipLinksItem).toBeTruthy();

    const skipLink = fixture.nativeElement.querySelector(
      '.ds_skip-links__link',
    );
    expect(skipLink).toBeTruthy();
  });

  it('should have default href to #main-content', () => {
    const skipLink = fixture.nativeElement.querySelector(
      '.ds_skip-links__link',
    );
    expect(skipLink.getAttribute('href')).toBe('#main-content');
  });

  it('should use custom href when provided', () => {
    fixture.componentRef.setInput('href', '#custom-content');
    fixture.detectChanges();

    const skipLink = fixture.nativeElement.querySelector(
      '.ds_skip-links__link',
    );
    expect(skipLink.getAttribute('href')).toBe('#custom-content');
  });

  it('should display default text content', () => {
    const skipLink = fixture.nativeElement.querySelector(
      '.ds_skip-links__link',
    );
    expect(skipLink.textContent?.trim()).toBe('Skip to main content');
  });

  it('should project custom content correctly', () => {
    @Component({
      selector: 'ngx-govscot-test-wrapper',
      template:
        '<ngx-govscot-skip-link>Skip to content area</ngx-govscot-skip-link>',
      imports: [GovScotSkipLinkComponent],
    })
    class TestWrapperComponent {}

    const wrapperFixture = TestBed.createComponent(TestWrapperComponent);
    wrapperFixture.detectChanges();

    const skipLink = wrapperFixture.nativeElement.querySelector(
      '.ds_skip-links__link',
    );
    expect(skipLink.textContent?.trim()).toBe('Skip to content area');
  });

  it('should have correct HTML structure', () => {
    const container = fixture.nativeElement.querySelector('.ds_skip-links');
    expect(container.children.length).toBe(1);
    expect(container.children[0].tagName.toLowerCase()).toBe('ul');

    const list = container.children[0];
    expect(list.children.length).toBe(1);
    expect(list.children[0].tagName.toLowerCase()).toBe('li');

    const listItem = list.children[0];
    expect(listItem.children.length).toBe(1);
    expect(listItem.children[0].tagName.toLowerCase()).toBe('a');
  });
});
