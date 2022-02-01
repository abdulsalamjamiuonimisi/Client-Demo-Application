import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponSummaryComponent } from './coupon-summary.component';

describe('CouponSummaryComponent', () => {
  let component: CouponSummaryComponent;
  let fixture: ComponentFixture<CouponSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
