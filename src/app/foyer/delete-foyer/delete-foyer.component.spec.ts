import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFoyerComponent } from './delete-foyer.component';

describe('DeleteFoyerComponent', () => {
  let component: DeleteFoyerComponent;
  let fixture: ComponentFixture<DeleteFoyerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteFoyerComponent]
    });
    fixture = TestBed.createComponent(DeleteFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
