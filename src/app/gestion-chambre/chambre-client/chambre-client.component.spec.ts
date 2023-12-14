import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreClientComponent } from './chambre-client.component';

describe('ChambreClientComponent', () => {
  let component: ChambreClientComponent;
  let fixture: ComponentFixture<ChambreClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChambreClientComponent]
    });
    fixture = TestBed.createComponent(ChambreClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
