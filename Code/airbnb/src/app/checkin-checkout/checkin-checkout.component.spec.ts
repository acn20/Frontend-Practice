import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinCheckoutComponent } from './checkin-checkout.component';

describe('CheckinCheckoutComponent', () => {
  let component: CheckinCheckoutComponent;
  let fixture: ComponentFixture<CheckinCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
