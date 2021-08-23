import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesDashbordComponent } from './expenses-dashbord.component';

describe('ExpensesDashbordComponent', () => {
  let component: ExpensesDashbordComponent;
  let fixture: ComponentFixture<ExpensesDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesDashbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
