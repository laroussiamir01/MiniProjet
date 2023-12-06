import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePlatComponent } from './liste-plat.component';

describe('ListePlatComponent', () => {
  let component: ListePlatComponent;
  let fixture: ComponentFixture<ListePlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePlatComponent]
    });
    fixture = TestBed.createComponent(ListePlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
