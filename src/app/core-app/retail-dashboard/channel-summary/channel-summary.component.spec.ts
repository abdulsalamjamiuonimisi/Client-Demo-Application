import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelSummaryComponent } from './channel-summary.component';

describe('ChannelSummaryComponent', () => {
  let component: ChannelSummaryComponent;
  let fixture: ComponentFixture<ChannelSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
