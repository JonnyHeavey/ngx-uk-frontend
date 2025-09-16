import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { GovScotSummaryListActionComponent } from './summary-list-action.component';
import { GovScotSummaryListActionsComponent } from './summary-list-actions.component';
import { GovScotSummaryListItemComponent } from './summary-list-item.component';
import { GovScotSummaryListComponent } from './summary-list.component';

@Component({
  standalone: true,
  imports: [
    GovScotSummaryListComponent,
    GovScotSummaryListItemComponent,
    GovScotSummaryListActionsComponent,
    GovScotSummaryListActionComponent,
  ],
  template: `
    <ngx-govscot-summary-list [noBorder]="noBorder">
      <ngx-govscot-summary-list-item key="Name" value="Jane Smith">
        <ngx-govscot-summary-list-actions>
          <ngx-govscot-summary-list-action href="/change-name">
            Change
          </ngx-govscot-summary-list-action>
        </ngx-govscot-summary-list-actions>
      </ngx-govscot-summary-list-item>
      <ngx-govscot-summary-list-item
        key="Date of birth"
        value="13 April 2001"
      />
    </ngx-govscot-summary-list>
  `,
})
class TestHostComponent {
  noBorder = false;
}

describe('GovScotSummaryListComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render summary list with correct Scottish Design System classes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const summaryList = compiled.querySelector('.ds_summary-list');
    expect(summaryList).toBeTruthy();
  });

  it('should apply no border class when noBorder is true', () => {
    component.noBorder = true;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const summaryList = compiled.querySelector('.ds_summary-list');
    expect(summaryList?.classList.contains('ds_summary-list--no-border')).toBe(
      true,
    );
  });

  it('should not apply no border class when noBorder is false', () => {
    component.noBorder = false;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const summaryList = compiled.querySelector('.ds_summary-list');
    expect(summaryList?.classList.contains('ds_summary-list--no-border')).toBe(
      false,
    );
  });

  it('should render summary list items', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('.ds_summary-list__item');
    expect(items.length).toBe(2);
  });

  it('should render keys and values correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const keys = compiled.querySelectorAll('.ds_summary-list__key');
    const values = compiled.querySelectorAll(
      '.ds_summary-list__value .ds_summary-list__answer',
    );

    expect(keys[0]?.textContent?.trim()).toBe('Name');
    expect(values[0]?.textContent?.trim()).toBe('Jane Smith');
    expect(keys[1]?.textContent?.trim()).toBe('Date of birth');
    expect(values[1]?.textContent?.trim()).toBe('13 April 2001');
  });

  it('should render actions when provided', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const actionsContainer = compiled.querySelector(
      '.ds_summary-list__actions',
    );
    const actionLink = compiled.querySelector(
      '.ds_summary-list__actions .ds_link',
    );

    expect(actionsContainer).toBeTruthy();
    expect(actionLink).toBeTruthy();

    // Check if the link exists and has the correct href
    expect(actionLink?.getAttribute('href')).toBe('/change-name');

    // The text content should be "Change"
    expect(actionLink?.textContent?.trim()).toBe('Change');
  });
});
