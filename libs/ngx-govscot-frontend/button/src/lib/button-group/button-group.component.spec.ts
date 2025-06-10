import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovScotButtonGroupComponent } from './button-group.component';

describe('GovScotButtonGroupComponent', () => {
  let component: GovScotButtonGroupComponent;
  let fixture: ComponentFixture<GovScotButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotButtonGroupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render button group with default class', () => {
    const buttonGroupElement = fixture.nativeElement.querySelector('div');
    expect(buttonGroupElement).toBeTruthy();
    expect(
      buttonGroupElement.classList.contains('ds_button-group'),
    ).toBeTruthy();
    expect(
      buttonGroupElement.classList.contains('ds_button-group--inline'),
    ).toBeFalsy();
  });

  it('should render inline button group when inline is true', () => {
    fixture.componentRef.setInput('inline', true);
    fixture.detectChanges();

    const buttonGroupElement = fixture.nativeElement.querySelector('div');
    expect(
      buttonGroupElement.classList.contains('ds_button-group'),
    ).toBeTruthy();
    expect(
      buttonGroupElement.classList.contains('ds_button-group--inline'),
    ).toBeTruthy();
  });

  it('should project content correctly', () => {
    const testContent = '<button>Test Button</button>';
    fixture.nativeElement.innerHTML = testContent;
    fixture.detectChanges();

    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.textContent).toBe('Test Button');
  });
});
