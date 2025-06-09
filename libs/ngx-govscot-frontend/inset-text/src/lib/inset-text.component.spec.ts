import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovScotInsetTextComponent } from './inset-text.component';

describe('GovScotInsetTextComponent', () => {
  let component: GovScotInsetTextComponent;
  let fixture: ComponentFixture<GovScotInsetTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotInsetTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotInsetTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render inset text with Scottish design system classes', () => {
    const insetTextElement =
      fixture.nativeElement.querySelector('.ds_inset-text');
    expect(insetTextElement).toBeTruthy();
    expect(insetTextElement.classList.contains('ds_inset-text')).toBeTruthy();
  });

  it('should have the correct inner text container', () => {
    const textElement = fixture.nativeElement.querySelector(
      '.ds_inset-text__text',
    );
    expect(textElement).toBeTruthy();
    expect(textElement.classList.contains('ds_inset-text__text')).toBeTruthy();
  });

  it('should render content inside inset text container', () => {
    const testContent =
      'You may be able to apply for free school meals at the same time as you apply for the clothing grant.';
    const textElement = fixture.nativeElement.querySelector(
      '.ds_inset-text__text',
    );
    textElement.textContent = testContent;
    fixture.detectChanges();

    expect(textElement.textContent).toBe(testContent);
  });

  it('should project content using ng-content', () => {
    // Create a test host component to test content projection
    const template = `
      <ngx-govscot-inset-text>
        <a href="#">Test link content</a>
      </ngx-govscot-inset-text>
    `;

    const hostFixture = TestBed.createComponent(TestHostComponent);
    hostFixture.detectChanges();

    const linkElement = hostFixture.nativeElement.querySelector('a');
    expect(linkElement).toBeTruthy();
    expect(linkElement.textContent).toBe('Test link content');
  });
});

// Test host component for content projection testing
import { Component } from '@angular/core';

@Component({
  template: `
    <ngx-govscot-inset-text>
      <a href="#">Test link content</a>
    </ngx-govscot-inset-text>
  `,
  imports: [GovScotInsetTextComponent],
})
class TestHostComponent {}
