import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetsCreateComponent } from './BudgetsCreateComponent';


describe('BudgetsCreateComponent', () => {
  let component: BudgetsCreateComponent;
  let fixture: ComponentFixture<BudgetsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetsCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
