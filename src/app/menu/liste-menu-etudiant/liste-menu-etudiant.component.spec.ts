import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMenuEtudiantComponent } from './liste-menu-etudiant.component';

describe('ListeMenuEtudiantComponent', () => {
  let component: ListeMenuEtudiantComponent;
  let fixture: ComponentFixture<ListeMenuEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeMenuEtudiantComponent]
    });
    fixture = TestBed.createComponent(ListeMenuEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
