import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListnonvalideComponent } from './listnonvalide.component';

describe('ListnonvalideComponent', () => {
  let component: ListnonvalideComponent;
  let fixture: ComponentFixture<ListnonvalideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListnonvalideComponent]
    });
    fixture = TestBed.createComponent(ListnonvalideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
