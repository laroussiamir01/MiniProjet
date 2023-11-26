import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUniversiteComponent } from './detail-universite.component';

describe('DetailUniversiteComponent', () => {
  let component: DetailUniversiteComponent;
  let fixture: ComponentFixture<DetailUniversiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailUniversiteComponent]
    });
    fixture = TestBed.createComponent(DetailUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
