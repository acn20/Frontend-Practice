import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultMarkerComponent } from './result-marker.component';

describe('ResultMarkerComponent', () => {
  let component: ResultMarkerComponent;
  let fixture: ComponentFixture<ResultMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
