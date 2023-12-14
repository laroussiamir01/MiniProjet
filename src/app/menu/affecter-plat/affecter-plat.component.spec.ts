import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterPlatComponent } from './affecter-plat.component';

describe('AffecterPlatComponent', () => {
  let component: AffecterPlatComponent;
  let fixture: ComponentFixture<AffecterPlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffecterPlatComponent]
    });
    fixture = TestBed.createComponent(AffecterPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
