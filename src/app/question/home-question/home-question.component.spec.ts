import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQuestionComponent } from './home-question.component';

describe('HomeQuestionComponent', () => {
  let component: HomeQuestionComponent;
  let fixture: ComponentFixture<HomeQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeQuestionComponent]
    });
    fixture = TestBed.createComponent(HomeQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
