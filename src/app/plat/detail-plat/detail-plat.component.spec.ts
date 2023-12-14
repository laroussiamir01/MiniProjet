import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPlatComponent } from './detail-plat.component';

describe('DetailPlatComponent', () => {
  let component: DetailPlatComponent;
  let fixture: ComponentFixture<DetailPlatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailPlatComponent]
    });
    fixture = TestBed.createComponent(DetailPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
