import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBlocEtudiantComponent } from './detail-bloc-etudiant.component';

describe('DetailBlocEtudiantComponent', () => {
  let component: DetailBlocEtudiantComponent;
  let fixture: ComponentFixture<DetailBlocEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailBlocEtudiantComponent]
    });
    fixture = TestBed.createComponent(DetailBlocEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
