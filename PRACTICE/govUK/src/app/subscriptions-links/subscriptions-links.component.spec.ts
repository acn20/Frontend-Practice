import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsLinksComponent } from './subscriptions-links.component';

describe('SubscriptionsLinksComponent', () => {
  let component: SubscriptionsLinksComponent;
  let fixture: ComponentFixture<SubscriptionsLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionsLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionsLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
