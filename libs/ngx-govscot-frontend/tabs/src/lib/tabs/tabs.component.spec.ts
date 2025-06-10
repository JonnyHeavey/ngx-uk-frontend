import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GovScotTabComponent } from '../tab/tab.component';
import { GovScotTabsComponent } from './tabs.component';

describe('GovScotTabsComponent', () => {
  let component: GovScotTabsComponent;
  let fixture: ComponentFixture<GovScotTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotTabsComponent, GovScotTabComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotTabsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'Test Tabs');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate valid HTML IDs from title', () => {
    fixture.componentRef.setInput('title', 'Corporation Tax Guide');
    expect(component.getTitleId()).toBe('ds_tabs__title_corporation-tax-guide');

    fixture.componentRef.setInput('title', 'Business Support');
    expect(component.getTitleId()).toBe('ds_tabs__title_business-support');
  });

  it('should render tabs with correct Scottish Government structure and classes', () => {
    const tabsContainer = fixture.nativeElement.querySelector(
      '.ds_tabs.js-initialised',
    );
    expect(tabsContainer).toBeTruthy();

    const navigation = fixture.nativeElement.querySelector(
      '.ds_tabs__navigation',
    );
    expect(navigation).toBeTruthy();

    const title = fixture.nativeElement.querySelector('.ds_tabs__title');
    expect(title).toBeTruthy();
    expect(title.textContent?.trim()).toBe('Test Tabs');

    const tabsList = fixture.nativeElement.querySelector(
      '.ds_tabs__list[role="tablist"]',
    );
    expect(tabsList).toBeTruthy();
  });

  it('should render empty tabs when no items provided', () => {
    const tabItems = fixture.nativeElement.querySelectorAll('.ds_tabs__tab');
    const contentPanels =
      fixture.nativeElement.querySelectorAll('.ds_tabs__content');

    expect(tabItems.length).toBe(0);
    expect(contentPanels.length).toBe(0);
    expect((component as any).tabs().length).toBe(0);
  });

  it('should implement getTabs method correctly', () => {
    // Test the getTabs method returns empty array initially
    expect((component as any).tabs()).toEqual([]);
    expect(component['getTabs']()).toEqual([]);
  });

  it('should render tab items with navigation and content', () => {
    @Component({
      selector: 'ngx-govscot-test-wrapper',
      template: `
        <ngx-govscot-tabs title="Corporation Tax Information">
          <ngx-govscot-tab id="courses" title="Courses and funding">
            <h2>Search for training courses and funding</h2>
            <p>
              A wide range of training courses for your employees are available.
            </p>
          </ngx-govscot-tab>
          <ngx-govscot-tab
            id="apprenticeships"
            title="Choosing apprenticeships"
          >
            <h2>Choosing an apprenticeship for your business</h2>
            <p>
              Apprenticeships can help you address skills gaps in your business.
            </p>
          </ngx-govscot-tab>
          <ngx-govscot-tab id="support" title="Extra skills support">
            <h2>Extra skills support</h2>
            <p>
              The Skills for Growth service can offer skills advice to
              businesses.
            </p>
          </ngx-govscot-tab>
        </ngx-govscot-tabs>
      `,
      imports: [GovScotTabsComponent, GovScotTabComponent],
    })
    class TestWrapperComponent {}

    const wrapperFixture = TestBed.createComponent(TestWrapperComponent);
    wrapperFixture.detectChanges();

    const tabsComponent = wrapperFixture.debugElement.query(
      By.directive(GovScotTabsComponent),
    ).componentInstance;

    // Test that getTabs() returns the correct number of tabs
    expect(tabsComponent.tabs().length).toBe(3);

    // Check tab navigation items
    const tabItems =
      wrapperFixture.nativeElement.querySelectorAll('.ds_tabs__tab');
    expect(tabItems.length).toBe(3);

    const tabLinks =
      wrapperFixture.nativeElement.querySelectorAll('.ds_tabs__tab-link');
    expect(tabLinks.length).toBe(3);
    expect(tabLinks[0].textContent?.trim()).toBe('Courses and funding');
    expect(tabLinks[1].textContent?.trim()).toBe('Choosing apprenticeships');
    expect(tabLinks[2].textContent?.trim()).toBe('Extra skills support');

    // Check content panels
    const contentPanels =
      wrapperFixture.nativeElement.querySelectorAll('.ds_tabs__content');
    expect(contentPanels.length).toBe(3);

    // Check first panel is visible by default
    expect(contentPanels[0].hasAttribute('hidden')).toBe(false);
    expect(contentPanels[1].hasAttribute('hidden')).toBe(true);
    expect(contentPanels[2].hasAttribute('hidden')).toBe(true);

    // Check content is rendered
    expect(contentPanels[0].textContent).toContain(
      'Search for training courses and funding',
    );
    expect(contentPanels[1].textContent).toContain(
      'Choosing an apprenticeship for your business',
    );
    expect(contentPanels[2].textContent).toContain('Extra skills support');
  });

  it('should handle tab selection correctly', () => {
    @Component({
      selector: 'ngx-govscot-test-selection',
      template: `
        <ngx-govscot-tabs title="Tax Services">
          <ngx-govscot-tab id="tab1" title="Registration">
            <p>Registration content</p>
          </ngx-govscot-tab>
          <ngx-govscot-tab id="tab2" title="Payment">
            <p>Payment content</p>
          </ngx-govscot-tab>
        </ngx-govscot-tabs>
      `,
      imports: [GovScotTabsComponent, GovScotTabComponent],
    })
    class TestSelectionComponent {}

    const selectionFixture = TestBed.createComponent(TestSelectionComponent);
    selectionFixture.detectChanges();

    const tabsComponent = selectionFixture.debugElement.query(
      By.directive(GovScotTabsComponent),
    ).componentInstance;
    expect(tabsComponent.tabs().length).toBe(2);

    const tabLinks =
      selectionFixture.nativeElement.querySelectorAll('.ds_tabs__tab-link');
    const contentPanels =
      selectionFixture.nativeElement.querySelectorAll('.ds_tabs__content');

    // Initially first tab should be active
    const tabItems =
      selectionFixture.nativeElement.querySelectorAll('.ds_tabs__tab');
    expect(tabItems[0].classList.contains('ds_current')).toBe(true);
    expect(tabItems[1].classList.contains('ds_current')).toBe(false);
    expect(contentPanels[0].hasAttribute('hidden')).toBe(false);
    expect(contentPanels[1].hasAttribute('hidden')).toBe(true);

    // Click second tab
    tabLinks[1].click();
    selectionFixture.detectChanges();

    // Second tab should now be active
    expect(tabItems[0].classList.contains('ds_current')).toBe(false);
    expect(tabItems[1].classList.contains('ds_current')).toBe(true);
    expect(contentPanels[0].hasAttribute('hidden')).toBe(true);
    expect(contentPanels[1].hasAttribute('hidden')).toBe(false);
  });

  it('should provide accessibility attributes correctly', () => {
    @Component({
      selector: 'ngx-govscot-test-accessibility',
      template: `
        <ngx-govscot-tabs title="Accessible Tabs">
          <ngx-govscot-tab id="accessible-tab" title="Accessible Tab">
            <p>Accessible content</p>
          </ngx-govscot-tab>
        </ngx-govscot-tabs>
      `,
      imports: [GovScotTabsComponent, GovScotTabComponent],
    })
    class TestAccessibilityComponent {}

    const accessibilityFixture = TestBed.createComponent(
      TestAccessibilityComponent,
    );
    accessibilityFixture.detectChanges();

    const navigation = accessibilityFixture.nativeElement.querySelector(
      '.ds_tabs__navigation',
    );
    const title =
      accessibilityFixture.nativeElement.querySelector('.ds_tabs__title');
    const tabLink =
      accessibilityFixture.nativeElement.querySelector('.ds_tabs__tab-link');
    const contentPanel =
      accessibilityFixture.nativeElement.querySelector('.ds_tabs__content');

    // Check ARIA attributes
    expect(navigation.getAttribute('aria-labelledby')).toBe(title.id);
    expect(tabLink.getAttribute('role')).toBe('tab');
    expect(tabLink.getAttribute('aria-selected')).toBe('true');
    expect(tabLink.getAttribute('aria-controls')).toBe('accessible-tab');
    expect(contentPanel.getAttribute('role')).toBe('tabpanel');
    expect(contentPanel.getAttribute('aria-labelledby')).toBe(title.id);
  });

  it('should have correct ARIA attributes for accessibility', () => {
    @Component({
      selector: 'ngx-govscot-test-aria',
      template: `
        <ngx-govscot-tabs title="Contents">
          <ngx-govscot-tab id="overview" title="Overview">
            <p>Overview content</p>
          </ngx-govscot-tab>
          <ngx-govscot-tab id="details" title="Details">
            <p>Details content</p>
          </ngx-govscot-tab>
        </ngx-govscot-tabs>
      `,
      imports: [GovScotTabsComponent, GovScotTabComponent],
    })
    class TestAriaComponent {}

    const ariaFixture = TestBed.createComponent(TestAriaComponent);
    ariaFixture.detectChanges();

    const navigation = ariaFixture.nativeElement.querySelector(
      '.ds_tabs__navigation',
    );
    const title = ariaFixture.nativeElement.querySelector('.ds_tabs__title');
    const tabsList = ariaFixture.nativeElement.querySelector('.ds_tabs__list');
    const tabLinks =
      ariaFixture.nativeElement.querySelectorAll('.ds_tabs__tab-link');
    const contentPanels =
      ariaFixture.nativeElement.querySelectorAll('.ds_tabs__content');

    // Check navigation labeling
    expect(navigation.getAttribute('aria-labelledby')).toBe(
      'ds_tabs__title_contents',
    );
    expect(title.id).toBe('ds_tabs__title_contents');

    // Check tabs list
    expect(tabsList.getAttribute('role')).toBe('tablist');

    // Check tab links
    expect(tabLinks[0].getAttribute('role')).toBe('tab');
    expect(tabLinks[0].getAttribute('aria-selected')).toBe('true');
    expect(tabLinks[0].getAttribute('aria-controls')).toBe('overview');
    expect(tabLinks[0].getAttribute('href')).toBe('#overview');

    expect(tabLinks[1].getAttribute('role')).toBe('tab');
    expect(tabLinks[1].getAttribute('aria-selected')).toBe('false');
    expect(tabLinks[1].getAttribute('aria-controls')).toBe('details');
    expect(tabLinks[1].getAttribute('href')).toBe('#details');

    // Check content panels
    expect(contentPanels[0].getAttribute('role')).toBe('tabpanel');
    expect(contentPanels[0].getAttribute('aria-labelledby')).toBe(
      'ds_tabs__title_contents',
    );
    expect(contentPanels[0].id).toBe('overview');
    expect(contentPanels[0].hasAttribute('hidden')).toBe(false);

    expect(contentPanels[1].getAttribute('role')).toBe('tabpanel');
    expect(contentPanels[1].getAttribute('aria-labelledby')).toBe(
      'ds_tabs__title_contents',
    );
    expect(contentPanels[1].id).toBe('details');
    expect(contentPanels[1].hasAttribute('hidden')).toBe(true);
  });

  it('should update ARIA attributes when switching tabs', () => {
    @Component({
      selector: 'ngx-govscot-test-switch',
      template: `
        <ngx-govscot-tabs title="Business Information">
          <ngx-govscot-tab id="first" title="First Tab">
            <p>First content</p>
          </ngx-govscot-tab>
          <ngx-govscot-tab id="second" title="Second Tab">
            <p>Second content</p>
          </ngx-govscot-tab>
        </ngx-govscot-tabs>
      `,
      imports: [GovScotTabsComponent, GovScotTabComponent],
    })
    class TestSwitchComponent {}

    const switchFixture = TestBed.createComponent(TestSwitchComponent);
    switchFixture.detectChanges();

    const tabLinks =
      switchFixture.nativeElement.querySelectorAll('.ds_tabs__tab-link');
    const contentPanels =
      switchFixture.nativeElement.querySelectorAll('.ds_tabs__content');

    // Click second tab
    tabLinks[1].click();
    switchFixture.detectChanges();

    // Check ARIA attributes are updated
    expect(tabLinks[0].getAttribute('aria-selected')).toBe('false');
    expect(tabLinks[1].getAttribute('aria-selected')).toBe('true');
    expect(contentPanels[0].hasAttribute('hidden')).toBe(true);
    expect(contentPanels[1].hasAttribute('hidden')).toBe(false);
  });

  it('should work with complex content including components', () => {
    @Component({
      selector: 'ngx-govscot-test-complex',
      template: `
        <ngx-govscot-tabs title="Corporation Tax Guide">
          <ngx-govscot-tab id="registration" title="Registration Process">
            <h2>How to register</h2>
            <p>You must register within 3 months of starting business.</p>
            <ul>
              <li>Complete the online form</li>
              <li>Provide company details</li>
              <li>Submit required documents</li>
            </ul>
          </ngx-govscot-tab>
          <ngx-govscot-tab id="deadlines" title="Important Deadlines">
            <h2>Key dates to remember</h2>
            <p>Missing deadlines can result in penalties.</p>
            <dl>
              <dt>Registration deadline</dt>
              <dd>3 months after starting business</dd>
              <dt>Payment deadline</dt>
              <dd>9 months and 1 day after accounting period end</dd>
            </dl>
          </ngx-govscot-tab>
        </ngx-govscot-tabs>
      `,
      imports: [GovScotTabsComponent, GovScotTabComponent],
    })
    class TestComplexComponent {}

    const complexFixture = TestBed.createComponent(TestComplexComponent);
    complexFixture.detectChanges();

    const contentPanels =
      complexFixture.nativeElement.querySelectorAll('.ds_tabs__content');

    // Check first tab content
    expect(contentPanels[0].querySelector('h2')?.textContent?.trim()).toBe(
      'How to register',
    );
    expect(contentPanels[0].querySelector('ul')).toBeTruthy();
    expect(contentPanels[0].querySelectorAll('li').length).toBe(3);

    // Check second tab content
    expect(contentPanels[1].querySelector('h2')?.textContent?.trim()).toBe(
      'Key dates to remember',
    );
    expect(contentPanels[1].querySelector('dl')).toBeTruthy();
    expect(contentPanels[1].querySelectorAll('dt').length).toBe(2);
    expect(contentPanels[1].querySelectorAll('dd').length).toBe(2);
  });

  it('should prevent default behavior on tab link clicks', () => {
    @Component({
      selector: 'ngx-govscot-test-prevent',
      template: `
        <ngx-govscot-tabs title="Test">
          <ngx-govscot-tab id="tab1" title="Tab 1">Content 1</ngx-govscot-tab>
          <ngx-govscot-tab id="tab2" title="Tab 2">Content 2</ngx-govscot-tab>
        </ngx-govscot-tabs>
      `,
      imports: [GovScotTabsComponent, GovScotTabComponent],
    })
    class TestPreventComponent {}

    const preventFixture = TestBed.createComponent(TestPreventComponent);
    preventFixture.detectChanges();

    const tabsComponent = preventFixture.debugElement.query(
      By.directive(GovScotTabsComponent),
    ).componentInstance;

    // Test the selectTab method directly
    const spy = jest.spyOn(tabsComponent, 'selectTab');
    const mockEvent = {
      preventDefault: jest.fn(),
    } as any;

    tabsComponent.selectTab(1, mockEvent);

    expect(spy).toHaveBeenCalledWith(1, mockEvent);
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});
