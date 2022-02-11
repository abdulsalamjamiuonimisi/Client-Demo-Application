import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubKpiTestComponent } from './sub-kpi-test.component';

describe('SubKpiTestComponent', () => {
  let component: SubKpiTestComponent;
  let fixture: ComponentFixture<SubKpiTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubKpiTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubKpiTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
