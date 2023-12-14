import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBlocComponent } from './home-bloc.component';

describe('HomeBlocComponent', () => {
  let component: HomeBlocComponent;
  let fixture: ComponentFixture<HomeBlocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeBlocComponent]
    });
    fixture = TestBed.createComponent(HomeBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
