import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SassDashboardComponent } from './sass-dashboard.component';

describe('SassDashboardComponent', () => {
  let component: SassDashboardComponent;
  let fixture: ComponentFixture<SassDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SassDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SassDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
