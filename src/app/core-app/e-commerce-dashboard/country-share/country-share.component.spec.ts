import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryShareComponent } from './country-share.component';

describe('CountryShareComponent', () => {
  let component: CountryShareComponent;
  let fixture: ComponentFixture<CountryShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
