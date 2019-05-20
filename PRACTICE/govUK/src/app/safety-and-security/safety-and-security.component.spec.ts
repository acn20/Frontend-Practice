import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyAndSecurityComponent } from './safety-and-security.component';

describe('SafetyAndSecurityComponent', () => {
  let component: SafetyAndSecurityComponent;
  let fixture: ComponentFixture<SafetyAndSecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafetyAndSecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyAndSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
