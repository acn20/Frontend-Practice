import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackNotificationComponent } from './feedback-notification.component';

describe('FeedbackNotificationComponent', () => {
  let component: FeedbackNotificationComponent;
  let fixture: ComponentFixture<FeedbackNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
