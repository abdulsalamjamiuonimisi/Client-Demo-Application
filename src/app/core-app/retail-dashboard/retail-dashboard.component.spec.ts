import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailDashboardComponent } from './retail-dashboard.component';

describe('RetailDashboardComponent', () => {
  let component: RetailDashboardComponent;
  let fixture: ComponentFixture<RetailDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
