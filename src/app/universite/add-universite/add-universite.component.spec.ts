import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUniversiteComponent } from './add-universite.component';

describe('AddUniversiteComponent', () => {
  let component: AddUniversiteComponent;
  let fixture: ComponentFixture<AddUniversiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUniversiteComponent]
    });
    fixture = TestBed.createComponent(AddUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
