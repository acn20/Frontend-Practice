import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrorismComponent } from './terrorism.component';

describe('TerrorismComponent', () => {
  let component: TerrorismComponent;
  let fixture: ComponentFixture<TerrorismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrorismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrorismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
