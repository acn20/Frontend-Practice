import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalLawsAndCustomsComponent } from './local-laws-and-customs.component';

describe('LocalLawsAndCustomsComponent', () => {
  let component: LocalLawsAndCustomsComponent;
  let fixture: ComponentFixture<LocalLawsAndCustomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalLawsAndCustomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalLawsAndCustomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
