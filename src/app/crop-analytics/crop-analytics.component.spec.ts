import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropAnalyticsComponent } from './crop-analytics.component';

describe('CropAnalyticsComponent', () => {
  let component: CropAnalyticsComponent;
  let fixture: ComponentFixture<CropAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CropAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
