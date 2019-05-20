import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesNotificationComponent } from './cookies-notification.component';

describe('CookiesNotificationComponent', () => {
  let component: CookiesNotificationComponent;
  let fixture: ComponentFixture<CookiesNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookiesNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookiesNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
