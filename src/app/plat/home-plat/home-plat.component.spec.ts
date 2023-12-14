import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlatComponent } from './home-plat.component';

describe('HomePlatComponent', () => {
  let component: HomePlatComponent;
  let fixture: ComponentFixture<HomePlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePlatComponent]
    });
    fixture = TestBed.createComponent(HomePlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
