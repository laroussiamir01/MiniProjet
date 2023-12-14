import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotdePasseComponent } from './motde-passe.component';

describe('MotdePasseComponent', () => {
  let component: MotdePasseComponent;
  let fixture: ComponentFixture<MotdePasseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotdePasseComponent]
    });
    fixture = TestBed.createComponent(MotdePasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
