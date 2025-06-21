import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovScotQuestionComponent } from './question.component';

describe('GovScotQuestionComponent', () => {
  let component: GovScotQuestionComponent;
  let fixture: ComponentFixture<GovScotQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotQuestionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
