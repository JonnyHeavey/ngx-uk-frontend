import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovScotErrorSummaryItemDirective } from './error-summary-item.directive';
import { GovScotErrorSummaryComponent } from './error-summary.component';

@Component({
  template: `
    <ngx-govscot-error-summary>
      <ngx-govscot-error-summary-item text="Test error" targetId="test-field" />
    </ngx-govscot-error-summary>
  `,
  imports: [GovScotErrorSummaryComponent, GovScotErrorSummaryItemDirective],
})
class TestHostComponent {}

describe('GovScotErrorSummaryComponent', () => {
  let component: GovScotErrorSummaryComponent;
  let fixture: ComponentFixture<GovScotErrorSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotErrorSummaryComponent, GovScotErrorSummaryItemDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotErrorSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render error summary with correct CSS classes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const errorSummary = compiled.querySelector('.ds_error-summary');
    expect(errorSummary).toBeTruthy();

    const title = compiled.querySelector('.ds_error-summary__title');
    expect(title?.textContent?.trim()).toBe('There is a problem');

    const list = compiled.querySelector('.ds_error-summary__list');
    expect(list).toBeTruthy();
  });

  it('should render with host component', async () => {
    const hostFixture = TestBed.createComponent(TestHostComponent);
    hostFixture.detectChanges();

    const compiled = hostFixture.nativeElement as HTMLElement;
    const errorSummary = compiled.querySelector('.ds_error-summary');
    expect(errorSummary).toBeTruthy();
  });
});
