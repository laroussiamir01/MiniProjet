import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foyer3dComponent } from './foyer3d.component';

describe('Foyer3dComponent', () => {
  let component: Foyer3dComponent;
  let fixture: ComponentFixture<Foyer3dComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Foyer3dComponent]
    });
    fixture = TestBed.createComponent(Foyer3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
