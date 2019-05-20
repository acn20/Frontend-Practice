import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackPromptComponent } from './feedback-prompt.component';

describe('FeedbackPromptComponent', () => {
  let component: FeedbackPromptComponent;
  let fixture: ComponentFixture<FeedbackPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
