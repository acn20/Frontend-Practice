import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionIndexComponent } from './question-index.component';

describe('QuestionIndexComponent', () => {
  let component: QuestionIndexComponent;
  let fixture: ComponentFixture<QuestionIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
