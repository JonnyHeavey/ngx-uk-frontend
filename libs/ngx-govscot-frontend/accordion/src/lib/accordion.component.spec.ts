import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovScotAccordionItemComponent } from './accordion-item.component';
import { GovScotAccordionComponent } from './accordion.component';

describe('GovScotAccordionComponent', () => {
  let component: GovScotAccordionComponent;
  let fixture: ComponentFixture<GovScotAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotAccordionComponent, GovScotAccordionItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotAccordionComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('id', 'test-accordion');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render accordion with Scottish design system classes', () => {
    const accordionElement =
      fixture.nativeElement.querySelector('.ds_accordion');
    expect(accordionElement).toBeTruthy();
    expect(accordionElement.classList.contains('ds_accordion')).toBeTruthy();
  });

  it('should have open/close all button', () => {
    const openAllButton = fixture.nativeElement.querySelector(
      '.ds_accordion__open-all',
    );
    expect(openAllButton).toBeTruthy();
    expect(openAllButton.textContent.trim()).toContain('Open all');
  });

  it('should have data-module attribute', () => {
    const accordionElement =
      fixture.nativeElement.querySelector('.ds_accordion');
    expect(accordionElement.getAttribute('data-module')).toBe('ds-accordion');
  });
});

describe('GovScotAccordionItemComponent', () => {
  let component: GovScotAccordionItemComponent;
  let fixture: ComponentFixture<GovScotAccordionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotAccordionItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotAccordionItemComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('itemId', 'test-item');
    fixture.componentRef.setInput('heading', 'Test Heading');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have content template reference', () => {
    expect(component.content()).toBeTruthy();
  });
});

// Test host component for content projection testing
@Component({
  template: `
    <ngx-govscot-accordion [id]="accordionId" [(expandedItems)]="expandedItems">
      <ngx-govscot-accordion-item
        itemId="item1"
        heading="Healthcare for veterans"
      >
        <p>Veterans are entitled to the same healthcare as any citizen.</p>
      </ngx-govscot-accordion-item>
      <ngx-govscot-accordion-item
        itemId="item2"
        heading="Employability for veterans"
      >
        <p>
          If you're looking for a job, there are several organisations that can
          help you.
        </p>
      </ngx-govscot-accordion-item>
    </ngx-govscot-accordion>
  `,
  imports: [GovScotAccordionComponent, GovScotAccordionItemComponent],
})
class TestHostComponent {
  accordionId = 'test-accordion';
  expandedItems: string[] = [];
}

describe('GovScotAccordionComponent Integration', () => {
  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
    hostFixture.detectChanges();
  });

  it('should render accordion items with checkboxes', () => {
    const accordionItems =
      hostFixture.nativeElement.querySelectorAll('.ds_accordion-item');
    expect(accordionItems.length).toBe(2);

    const checkboxes = hostFixture.nativeElement.querySelectorAll(
      'input[type="checkbox"]',
    );
    expect(checkboxes.length).toBe(2);
  });

  it('should render accordion item headers and titles', () => {
    const titles = hostFixture.nativeElement.querySelectorAll(
      '.ds_accordion-item__title',
    );
    expect(titles.length).toBe(2);
    expect(titles[0].textContent.trim()).toBe('Healthcare for veterans');
    expect(titles[1].textContent.trim()).toBe('Employability for veterans');
  });

  it('should render accordion item bodies with content', () => {
    const bodies = hostFixture.nativeElement.querySelectorAll(
      '.ds_accordion-item__body',
    );
    expect(bodies.length).toBe(2);
    expect(bodies[0].textContent.trim()).toContain(
      'Veterans are entitled to the same healthcare',
    );
    expect(bodies[1].textContent.trim()).toContain(
      "If you're looking for a job",
    );
  });

  it('should have proper accessibility attributes', () => {
    const checkboxes = hostFixture.nativeElement.querySelectorAll(
      'input[type="checkbox"]',
    );
    const labels = hostFixture.nativeElement.querySelectorAll(
      '.ds_accordion-item__label',
    );

    expect(checkboxes[0].id).toBe('test-accordion-item1');
    expect(labels[0].getAttribute('for')).toBe('test-accordion-item1');
    expect(checkboxes[0].getAttribute('aria-labelledby')).toBe(
      'test-accordion-item1-heading',
    );
  });
});
