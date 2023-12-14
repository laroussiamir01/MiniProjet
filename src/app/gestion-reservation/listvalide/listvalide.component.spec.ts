import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvalideComponent } from './listvalide.component';

describe('ListvalideComponent', () => {
  let component: ListvalideComponent;
  let fixture: ComponentFixture<ListvalideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListvalideComponent]
    });
    fixture = TestBed.createComponent(ListvalideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
