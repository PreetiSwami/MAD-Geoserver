import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropStatisticsComponent } from './crop-statistics.component';

describe('CropStatisticsComponent', () => {
  let component: CropStatisticsComponent;
  let fixture: ComponentFixture<CropStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CropStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
