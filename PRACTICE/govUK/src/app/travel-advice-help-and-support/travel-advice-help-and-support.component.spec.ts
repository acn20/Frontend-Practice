import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAdviceHelpAndSupportComponent } from './travel-advice-help-and-support.component';

describe('TravelAdviceHelpAndSupportComponent', () => {
  let component: TravelAdviceHelpAndSupportComponent;
  let fixture: ComponentFixture<TravelAdviceHelpAndSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelAdviceHelpAndSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelAdviceHelpAndSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
