import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubKpiTest2Component } from './sub-kpi-test2.component';

describe('SubKpiTest2Component', () => {
  let component: SubKpiTest2Component;
  let fixture: ComponentFixture<SubKpiTest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubKpiTest2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubKpiTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
