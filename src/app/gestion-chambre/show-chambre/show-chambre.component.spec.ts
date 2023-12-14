import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowChambreComponent } from './show-chambre.component';

describe('ShowChambreComponent', () => {
  let component: ShowChambreComponent;
  let fixture: ComponentFixture<ShowChambreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowChambreComponent]
    });
    fixture = TestBed.createComponent(ShowChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
