import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeSuppliersComponent } from './trade-suppliers.component';

describe('TradeSuppliersComponent', () => {
  let component: TradeSuppliersComponent;
  let fixture: ComponentFixture<TradeSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeSuppliersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
