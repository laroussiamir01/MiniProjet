import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningMatUiComponent } from './planning-mat-ui.component';

describe('PlanningMatUiComponent', () => {
  let component: PlanningMatUiComponent;
  let fixture: ComponentFixture<PlanningMatUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanningMatUiComponent]
    });
    fixture = TestBed.createComponent(PlanningMatUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
