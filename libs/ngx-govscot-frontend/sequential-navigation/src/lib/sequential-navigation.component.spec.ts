import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  GovScotSequentialNavigationComponent,
  SequentialNavigationItem,
} from './sequential-navigation.component';

describe('GovScotSequentialNavigationComponent', () => {
  let component: GovScotSequentialNavigationComponent;
  let fixture: ComponentFixture<GovScotSequentialNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotSequentialNavigationComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotSequentialNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render any navigation items when no inputs are provided', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.ds_sequential-nav__item')).toBeNull();
  });

  it('should render previous navigation item when provided', () => {
    const previousItem: SequentialNavigationItem = {
      text: 'Previous Article',
      link: '/previous',
    };
    fixture.componentRef.setInput('previous', previousItem);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const prevItem = compiled.querySelector('.ds_sequential-nav__item--prev');
    expect(prevItem).toBeTruthy();

    const prevLink = prevItem?.querySelector('a');
    expect(prevLink).toBeTruthy();
    expect(prevLink?.textContent?.trim()).toBe('Previous Article');

    const textSpan = prevLink?.querySelector('.ds_sequential-nav__text');
    expect(textSpan?.getAttribute('data-label')).toBe('previous');
  });

  it('should render next navigation item when provided', () => {
    const nextItem: SequentialNavigationItem = {
      text: 'Next Article',
      link: '/next',
    };
    fixture.componentRef.setInput('next', nextItem);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const nextItemElement = compiled.querySelector(
      '.ds_sequential-nav__item--next',
    );
    expect(nextItemElement).toBeTruthy();

    const nextLink = nextItemElement?.querySelector('a');
    expect(nextLink).toBeTruthy();
    expect(nextLink?.textContent?.trim()).toBe('Next Article');

    const textSpan = nextLink?.querySelector('.ds_sequential-nav__text');
    expect(textSpan?.getAttribute('data-label')).toBe('next');
  });

  it('should render both previous and next navigation items', () => {
    const previousItem: SequentialNavigationItem = {
      text: 'Previous Article',
      link: '/previous',
    };
    const nextItem: SequentialNavigationItem = {
      text: 'Next Article',
      link: '/next',
    };
    fixture.componentRef.setInput('previous', previousItem);
    fixture.componentRef.setInput('next', nextItem);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const prevItem = compiled.querySelector('.ds_sequential-nav__item--prev');
    const nextItemElement = compiled.querySelector(
      '.ds_sequential-nav__item--next',
    );

    expect(prevItem).toBeTruthy();
    expect(nextItemElement).toBeTruthy();
  });

  it('should apply custom aria-label', () => {
    fixture.componentRef.setInput('ariaLabel', 'Custom navigation');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav');
    expect(nav?.getAttribute('aria-label')).toBe('Custom navigation');
  });

  it('should use default aria-label when not provided', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav');
    expect(nav?.getAttribute('aria-label')).toBe('Article navigation');
  });

  it('should apply custom classes', () => {
    fixture.componentRef.setInput('classes', 'custom-class another-class');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav');
    expect(nav?.classList.contains('custom-class')).toBe(true);
    expect(nav?.classList.contains('another-class')).toBe(true);
  });

  it('should always have base ds_sequential-nav class', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const nav = compiled.querySelector('nav');
    expect(nav?.classList.contains('ds_sequential-nav')).toBe(true);
  });

  it('should handle array-based routing links', () => {
    const previousItem: SequentialNavigationItem = {
      text: 'Previous Article',
      link: ['/section', 'previous'],
    };
    const nextItem: SequentialNavigationItem = {
      text: 'Next Article',
      link: ['/section', 'next'],
    };
    fixture.componentRef.setInput('previous', previousItem);
    fixture.componentRef.setInput('next', nextItem);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const prevLink = compiled.querySelector('.ds_sequential-nav__item--prev a');
    const nextLink = compiled.querySelector('.ds_sequential-nav__item--next a');

    expect(prevLink).toBeTruthy();
    expect(nextLink).toBeTruthy();
  });

  it('should render correct structure for previous item', () => {
    const previousItem: SequentialNavigationItem = {
      text: 'Previous Article Title',
      link: '/previous',
    };
    fixture.componentRef.setInput('previous', previousItem);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const prevButton = compiled.querySelector(
      '.ds_sequential-nav__button--left',
    );

    expect(prevButton).toBeTruthy();
    expect(prevButton?.classList.contains('ds_sequential-nav__button')).toBe(
      true,
    );

    const textSpan = prevButton?.querySelector('.ds_sequential-nav__text');
    expect(textSpan?.getAttribute('data-label')).toBe('previous');
    expect(textSpan?.textContent?.trim()).toBe('Previous Article Title');
  });

  it('should render correct structure for next item', () => {
    const nextItem: SequentialNavigationItem = {
      text: 'Next Article Title',
      link: '/next',
    };
    fixture.componentRef.setInput('next', nextItem);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const nextButton = compiled.querySelector(
      '.ds_sequential-nav__button--right',
    );

    expect(nextButton).toBeTruthy();
    expect(nextButton?.classList.contains('ds_sequential-nav__button')).toBe(
      true,
    );

    const textSpan = nextButton?.querySelector('.ds_sequential-nav__text');
    expect(textSpan?.getAttribute('data-label')).toBe('next');
    expect(textSpan?.textContent?.trim()).toBe('Next Article Title');
  });

  it('should have correct data-label attributes for analytics', () => {
    const previousItem: SequentialNavigationItem = {
      text: 'Apply for or renew a Blue Badge',
      link: '/blue-badge/apply',
    };
    const nextItem: SequentialNavigationItem = {
      text: 'Eligibility: who can have one?',
      link: '/blue-badge/eligibility',
    };
    fixture.componentRef.setInput('previous', previousItem);
    fixture.componentRef.setInput('next', nextItem);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const prevTextSpan = compiled.querySelector(
      '.ds_sequential-nav__item--prev .ds_sequential-nav__text',
    );
    const nextTextSpan = compiled.querySelector(
      '.ds_sequential-nav__item--next .ds_sequential-nav__text',
    );

    expect(prevTextSpan?.getAttribute('data-label')).toBe('previous');
    expect(nextTextSpan?.getAttribute('data-label')).toBe('next');
  });
});
