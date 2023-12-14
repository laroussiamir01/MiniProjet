import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFoyerEtudintComponent } from './liste-foyer-etudint.component';

describe('ListeFoyerEtudintComponent', () => {
  let component: ListeFoyerEtudintComponent;
  let fixture: ComponentFixture<ListeFoyerEtudintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeFoyerEtudintComponent]
    });
    fixture = TestBed.createComponent(ListeFoyerEtudintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
