import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeReponseComponent } from './home-reponse.component';

describe('HomeReponseComponent', () => {
  let component: HomeReponseComponent;
  let fixture: ComponentFixture<HomeReponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeReponseComponent]
    });
    fixture = TestBed.createComponent(HomeReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
