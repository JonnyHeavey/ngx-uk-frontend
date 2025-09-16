import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GovScotPaginationComponent } from './pagination.component';

@Component({
  template: `
    <ngx-govscot-pagination
      [itemCount]="itemCount"
      [itemsPerPage]="itemsPerPage"
      [currentPage]="currentPage"
      [previousTitle]="previousTitle"
      [nextTitle]="nextTitle"
      (pageChange)="onPageChange($event)"
      (previousClick)="onPreviousClick()"
      (nextClick)="onNextClick()"
    />
  `,
  imports: [GovScotPaginationComponent],
})
class TestHostComponent {
  itemCount = 100;
  itemsPerPage = 10;
  currentPage = 1;
  previousTitle = 'Previous';
  nextTitle = 'Next';

  onPageChange = jest.fn();
  onPreviousClick = jest.fn();
  onNextClick = jest.fn();
}

describe('GovScotPaginationComponent', () => {
  let component: GovScotPaginationComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.debugElement.query(
      By.directive(GovScotPaginationComponent),
    ).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render pagination with correct structure', () => {
    const nav = fixture.debugElement.query(By.css('nav.ds_pagination'));
    expect(nav).toBeTruthy();
    expect(nav.nativeElement.getAttribute('aria-label')).toBe(
      'Search result pages',
    );

    const list = fixture.debugElement.query(By.css('ul.ds_pagination__list'));
    expect(list).toBeTruthy();
  });

  it('should show next button when not on last page', () => {
    const nextButton = fixture.debugElement.query(
      By.css('a[aria-label="Next page"]'),
    );
    expect(nextButton).toBeTruthy();
    expect(nextButton.nativeElement.textContent.trim()).toContain('Next');
  });

  it('should not show previous button when on first page', () => {
    const prevButton = fixture.debugElement.query(
      By.css('a[aria-label="Previous page"]'),
    );
    expect(prevButton).toBeFalsy();
  });

  it('should show previous button when not on first page', () => {
    hostComponent.currentPage = 2;
    fixture.detectChanges();

    const prevButton = fixture.debugElement.query(
      By.css('a[aria-label="Previous page"]'),
    );
    expect(prevButton).toBeTruthy();
    expect(prevButton.nativeElement.textContent.trim()).toContain('Previous');
  });

  it('should not show next button when on last page', () => {
    hostComponent.currentPage = 10; // Last page
    fixture.detectChanges();

    const nextButton = fixture.debugElement.query(
      By.css('a[aria-label="Next page"]'),
    );
    expect(nextButton).toBeFalsy();
  });

  it('should render page numbers correctly for few pages', () => {
    hostComponent.itemCount = 50; // 5 pages total
    fixture.detectChanges();

    const pageLinks = fixture.debugElement.queryAll(
      By.css('.ds_pagination__link:not(.ds_pagination__link--text)'),
    );
    expect(pageLinks.length).toBe(5);

    // Check page numbers
    expect(pageLinks[0].nativeElement.textContent.trim()).toBe('1');
    expect(pageLinks[1].nativeElement.textContent.trim()).toBe('2');
    expect(pageLinks[2].nativeElement.textContent.trim()).toBe('3');
    expect(pageLinks[3].nativeElement.textContent.trim()).toBe('4');
    expect(pageLinks[4].nativeElement.textContent.trim()).toBe('5');
  });

  it('should render ellipsis for many pages', () => {
    hostComponent.itemCount = 1000; // 100 pages total
    hostComponent.currentPage = 50;
    fixture.detectChanges();

    const ellipsis = fixture.debugElement.queryAll(
      By.css('.ds_pagination__link--ellipsis'),
    );
    expect(ellipsis.length).toBeGreaterThan(0);
    expect(ellipsis[0].nativeElement.textContent.trim()).toBe('…');
  });

  it('should mark current page with correct attributes', () => {
    hostComponent.currentPage = 3;
    fixture.detectChanges();

    const currentPageLink = fixture.debugElement.query(
      By.css('a[aria-current="page"]'),
    );
    expect(currentPageLink).toBeTruthy();
    expect(currentPageLink.nativeElement.textContent.trim()).toBe('3');
    expect(currentPageLink.nativeElement.classList.contains('ds_current')).toBe(
      true,
    );
  });

  it('should emit pageChange when page number is clicked', () => {
    const pageLink = fixture.debugElement.query(
      By.css('a[aria-label="Page 2"]'),
    );
    expect(pageLink).toBeTruthy();

    pageLink.nativeElement.click();
    expect(hostComponent.onPageChange).toHaveBeenCalledWith(2);
  });

  it('should emit previousClick when previous button is clicked', () => {
    hostComponent.currentPage = 2;
    fixture.detectChanges();

    const prevButton = fixture.debugElement.query(
      By.css('a[aria-label="Previous page"]'),
    );
    prevButton.nativeElement.click();
    expect(hostComponent.onPreviousClick).toHaveBeenCalled();
  });

  it('should emit nextClick when next button is clicked', () => {
    const nextButton = fixture.debugElement.query(
      By.css('a[aria-label="Next page"]'),
    );
    nextButton.nativeElement.click();
    expect(hostComponent.onNextClick).toHaveBeenCalled();
  });

  it('should not emit pageChange when ellipsis is clicked', () => {
    hostComponent.itemCount = 1000; // Many pages to ensure ellipsis
    hostComponent.currentPage = 50;
    fixture.detectChanges();

    const ellipsis = fixture.debugElement.query(
      By.css('.ds_pagination__link--ellipsis'),
    );
    if (ellipsis) {
      ellipsis.nativeElement.click();
      expect(hostComponent.onPageChange).not.toHaveBeenCalled();
    }
  });

  it('should use custom previous and next titles', () => {
    hostComponent.previousTitle = 'Roimhe';
    hostComponent.nextTitle = 'Air adhart';
    hostComponent.currentPage = 2;
    fixture.detectChanges();

    const prevButton = fixture.debugElement.query(
      By.css('a[aria-label="Previous page"]'),
    );
    const nextButton = fixture.debugElement.query(
      By.css('a[aria-label="Next page"]'),
    );

    expect(prevButton.nativeElement.textContent.trim()).toContain('Roimhe');
    expect(nextButton.nativeElement.textContent.trim()).toContain('Air adhart');
  });

  it('should handle zero items correctly', () => {
    hostComponent.itemCount = 0;
    fixture.detectChanges();

    const pageLinks = fixture.debugElement.queryAll(
      By.css('.ds_pagination__link:not(.ds_pagination__link--text)'),
    );
    expect(pageLinks.length).toBe(0);

    const prevButton = fixture.debugElement.query(
      By.css('a[aria-label="Previous page"]'),
    );
    const nextButton = fixture.debugElement.query(
      By.css('a[aria-label="Next page"]'),
    );
    expect(prevButton).toBeFalsy();
    expect(nextButton).toBeFalsy();
  });

  it('should handle single page correctly', () => {
    hostComponent.itemCount = 5; // Less than itemsPerPage
    fixture.detectChanges();

    const pageLinks = fixture.debugElement.queryAll(
      By.css('.ds_pagination__link:not(.ds_pagination__link--text)'),
    );
    expect(pageLinks.length).toBe(1);
    expect(pageLinks[0].nativeElement.textContent.trim()).toBe('1');

    const prevButton = fixture.debugElement.query(
      By.css('a[aria-label="Previous page"]'),
    );
    const nextButton = fixture.debugElement.query(
      By.css('a[aria-label="Next page"]'),
    );
    expect(prevButton).toBeFalsy();
    expect(nextButton).toBeFalsy();
  });
});
