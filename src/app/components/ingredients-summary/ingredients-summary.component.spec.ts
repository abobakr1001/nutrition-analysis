import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsSummaryComponent } from './ingredients-summary.component';

describe('IngredientsSummaryComponent', () => {
  let component: IngredientsSummaryComponent;
  let fixture: ComponentFixture<IngredientsSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientsSummaryComponent]
    });
    fixture = TestBed.createComponent(IngredientsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
