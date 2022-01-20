import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceDashboardComponent } from './e-commerce-dashboard.component';

describe('ECommerceDashboardComponent', () => {
  let component: ECommerceDashboardComponent;
  let fixture: ComponentFixture<ECommerceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECommerceDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECommerceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
