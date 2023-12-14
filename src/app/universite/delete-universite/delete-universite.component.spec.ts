import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUniversiteComponent } from './delete-universite.component';

describe('DeleteUniversiteComponent', () => {
  let component: DeleteUniversiteComponent;
  let fixture: ComponentFixture<DeleteUniversiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteUniversiteComponent]
    });
    fixture = TestBed.createComponent(DeleteUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
