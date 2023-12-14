import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEvenementComponent } from './update-evenement.component';

describe('UpdateEvenementComponent', () => {
  let component: UpdateEvenementComponent;
  let fixture: ComponentFixture<UpdateEvenementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEvenementComponent]
    });
    fixture = TestBed.createComponent(UpdateEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
