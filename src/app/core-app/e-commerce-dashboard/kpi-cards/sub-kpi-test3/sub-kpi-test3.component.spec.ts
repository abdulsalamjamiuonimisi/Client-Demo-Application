import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubKpiTest3Component } from './sub-kpi-test3.component';

describe('SubKpiTest3Component', () => {
  let component: SubKpiTest3Component;
  let fixture: ComponentFixture<SubKpiTest3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubKpiTest3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubKpiTest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
