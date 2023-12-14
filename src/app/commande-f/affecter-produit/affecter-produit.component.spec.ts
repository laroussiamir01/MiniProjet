import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterProduitComponent } from './affecter-produit.component';

describe('AffecterProduitComponent', () => {
  let component: AffecterProduitComponent;
  let fixture: ComponentFixture<AffecterProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffecterProduitComponent]
    });
    fixture = TestBed.createComponent(AffecterProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
