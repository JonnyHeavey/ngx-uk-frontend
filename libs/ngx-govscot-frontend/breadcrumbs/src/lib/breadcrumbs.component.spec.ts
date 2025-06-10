import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { GovScotBreadcrumbDirective } from './breadcrumb/breadcrumb.directive';
import { GovScotBreadcrumbsComponent } from './breadcrumbs.component';

describe('GovScotBreadcrumbsComponent', () => {
  let component: GovScotBreadcrumbsComponent;
  let fixture: ComponentFixture<GovScotBreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotBreadcrumbsComponent, GovScotBreadcrumbDirective],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render breadcrumbs with correct structure and classes', () => {
    const nav = fixture.nativeElement.querySelector(
      'nav[aria-label="Breadcrumb"]',
    );
    expect(nav).toBeTruthy();

    const breadcrumbsList =
      fixture.nativeElement.querySelector('.ds_breadcrumbs');
    expect(breadcrumbsList).toBeTruthy();
    expect(breadcrumbsList.tagName.toLowerCase()).toBe('ol');
  });

  it('should render empty breadcrumbs when no items provided', () => {
    const items = fixture.nativeElement.querySelectorAll(
      '.ds_breadcrumbs__item',
    );
    expect(items.length).toBe(0);
  });

  it('should render breadcrumb items with links', () => {
    @Component({
      selector: 'ngx-govscot-test-wrapper',
      template: `
        <ngx-govscot-breadcrumbs>
          <ngx-govscot-breadcrumb
            label="Home"
            link="/"
          ></ngx-govscot-breadcrumb>
          <ngx-govscot-breadcrumb
            label="Justice and the law"
            link="/justice"
          ></ngx-govscot-breadcrumb>
          <ngx-govscot-breadcrumb
            label="Your rights and the law"
            link="/justice/rights"
          ></ngx-govscot-breadcrumb>
          <ngx-govscot-breadcrumb
            label="Data sharing of personal information"
            [current]="true"
          ></ngx-govscot-breadcrumb>
        </ngx-govscot-breadcrumbs>
      `,
      imports: [GovScotBreadcrumbsComponent, GovScotBreadcrumbDirective],
    })
    class TestWrapperComponent {}

    const wrapperFixture = TestBed.createComponent(TestWrapperComponent);
    wrapperFixture.detectChanges();

    const items = wrapperFixture.nativeElement.querySelectorAll(
      '.ds_breadcrumbs__item',
    );
    expect(items.length).toBe(4);

    // Check linked items
    const homeItem = items[0];
    const homeLink = homeItem.querySelector('.ds_breadcrumbs__link');
    expect(homeLink).toBeTruthy();
    expect(homeLink.textContent?.trim()).toBe('Home');

    const justiceItem = items[1];
    const justiceLink = justiceItem.querySelector('.ds_breadcrumbs__link');
    expect(justiceLink).toBeTruthy();
    expect(justiceLink.textContent?.trim()).toBe('Justice and the law');

    const rightsItem = items[2];
    const rightsLink = rightsItem.querySelector('.ds_breadcrumbs__link');
    expect(rightsLink).toBeTruthy();
    expect(rightsLink.textContent?.trim()).toBe('Your rights and the law');

    // Check current page item (no link)
    const currentItem = items[3];
    const currentLink = currentItem.querySelector('.ds_breadcrumbs__link');
    expect(currentLink).toBeFalsy();
    expect(currentItem.textContent?.trim()).toBe(
      'Data sharing of personal information',
    );
    expect(currentItem.getAttribute('aria-current')).toBe('page');
  });

  it('should handle current page aria-current attribute correctly', () => {
    @Component({
      selector: 'ngx-govscot-test-current',
      template: `
        <ngx-govscot-breadcrumbs>
          <ngx-govscot-breadcrumb
            label="Home"
            link="/"
          ></ngx-govscot-breadcrumb>
          <ngx-govscot-breadcrumb
            label="Current Page"
            [current]="true"
          ></ngx-govscot-breadcrumb>
        </ngx-govscot-breadcrumbs>
      `,
      imports: [GovScotBreadcrumbsComponent, GovScotBreadcrumbDirective],
    })
    class TestCurrentComponent {}

    const currentFixture = TestBed.createComponent(TestCurrentComponent);
    currentFixture.detectChanges();

    const items = currentFixture.nativeElement.querySelectorAll(
      '.ds_breadcrumbs__item',
    );
    expect(items.length).toBe(2);

    // First item should not have aria-current
    expect(items[0].getAttribute('aria-current')).toBeNull();

    // Second item should have aria-current="page"
    expect(items[1].getAttribute('aria-current')).toBe('page');
  });

  it('should handle complex routing configurations', () => {
    @Component({
      selector: 'ngx-govscot-test-complex',
      template: `
        <ngx-govscot-breadcrumbs>
          <ngx-govscot-breadcrumb
            label="Home"
            [link]="['/']"
          ></ngx-govscot-breadcrumb>
          <ngx-govscot-breadcrumb
            label="Services"
            [link]="['/services']"
          ></ngx-govscot-breadcrumb>
          <ngx-govscot-breadcrumb
            label="Corporation Tax"
            [link]="['/services', 'tax', 'corporation']"
          ></ngx-govscot-breadcrumb>
          <ngx-govscot-breadcrumb
            label="Register"
            [current]="true"
          ></ngx-govscot-breadcrumb>
        </ngx-govscot-breadcrumbs>
      `,
      imports: [GovScotBreadcrumbsComponent, GovScotBreadcrumbDirective],
    })
    class TestComplexComponent {}

    const complexFixture = TestBed.createComponent(TestComplexComponent);
    complexFixture.detectChanges();

    const items = complexFixture.nativeElement.querySelectorAll(
      '.ds_breadcrumbs__item',
    );
    expect(items.length).toBe(4);

    // Check that all non-current items have links
    for (let i = 0; i < 3; i++) {
      const link = items[i].querySelector('.ds_breadcrumbs__link');
      expect(link).toBeTruthy();
    }

    // Check that current item has no link
    const currentLink = items[3].querySelector('.ds_breadcrumbs__link');
    expect(currentLink).toBeFalsy();
  });

  it('should have correct HTML structure', () => {
    @Component({
      selector: 'ngx-govscot-test-structure',
      template: `
        <ngx-govscot-breadcrumbs>
          <ngx-govscot-breadcrumb
            label="Home"
            link="/"
          ></ngx-govscot-breadcrumb>
          <ngx-govscot-breadcrumb
            label="Current"
            [current]="true"
          ></ngx-govscot-breadcrumb>
        </ngx-govscot-breadcrumbs>
      `,
      imports: [GovScotBreadcrumbsComponent, GovScotBreadcrumbDirective],
    })
    class TestStructureComponent {}

    const structureFixture = TestBed.createComponent(TestStructureComponent);
    structureFixture.detectChanges();

    const nav = structureFixture.nativeElement.querySelector('nav');
    expect(nav.getAttribute('aria-label')).toBe('Breadcrumb');

    const ol = nav.querySelector('ol');
    expect(ol.classList.contains('ds_breadcrumbs')).toBe(true);

    const items = ol.querySelectorAll('li');
    expect(items.length).toBe(2);

    items.forEach((item: Element) => {
      expect(item.classList.contains('ds_breadcrumbs__item')).toBe(true);
    });
  });

  it('should work with no current page specified', () => {
    @Component({
      selector: 'ngx-govscot-test-no-current',
      template: `
        <ngx-govscot-breadcrumbs>
          <ngx-govscot-breadcrumb
            label="Home"
            link="/"
          ></ngx-govscot-breadcrumb>
          <ngx-govscot-breadcrumb
            label="Services"
            link="/services"
          ></ngx-govscot-breadcrumb>
        </ngx-govscot-breadcrumbs>
      `,
      imports: [GovScotBreadcrumbsComponent, GovScotBreadcrumbDirective],
    })
    class TestNoCurrentComponent {}

    const noCurrentFixture = TestBed.createComponent(TestNoCurrentComponent);
    noCurrentFixture.detectChanges();

    const items = noCurrentFixture.nativeElement.querySelectorAll(
      '.ds_breadcrumbs__item',
    );
    expect(items.length).toBe(2);

    // All items should have links when no current page is specified
    items.forEach((item: Element) => {
      const link = item.querySelector('.ds_breadcrumbs__link');
      expect(link).toBeTruthy();
      expect(item.getAttribute('aria-current')).toBeNull();
    });
  });
});
