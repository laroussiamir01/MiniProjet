import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBlocEtudiantComponent } from './liste-bloc-etudiant.component';

describe('ListeBlocEtudiantComponent', () => {
  let component: ListeBlocEtudiantComponent;
  let fixture: ComponentFixture<ListeBlocEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeBlocEtudiantComponent]
    });
    fixture = TestBed.createComponent(ListeBlocEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
