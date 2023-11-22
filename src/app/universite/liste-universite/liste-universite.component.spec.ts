import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeUniversiteComponent } from './liste-universite.component';

describe('ListeUniversiteComponent', () => {
  let component: ListeUniversiteComponent;
  let fixture: ComponentFixture<ListeUniversiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeUniversiteComponent]
    });
    fixture = TestBed.createComponent(ListeUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
