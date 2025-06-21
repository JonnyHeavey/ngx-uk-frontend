import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovScotTableComponent } from './table.component';

describe('GovScotTableComponent', () => {
  let component: GovScotTableComponent;
  let fixture: ComponentFixture<GovScotTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
