import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBlocComponent } from './liste-bloc.component';

describe('ListeBlocComponent', () => {
  let component: ListeBlocComponent;
  let fixture: ComponentFixture<ListeBlocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeBlocComponent]
    });
    fixture = TestBed.createComponent(ListeBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
