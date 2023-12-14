import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashreservationComponent } from './dashreservation.component';

describe('DashreservationComponent', () => {
  let component: DashreservationComponent;
  let fixture: ComponentFixture<DashreservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashreservationComponent]
    });
    fixture = TestBed.createComponent(DashreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
