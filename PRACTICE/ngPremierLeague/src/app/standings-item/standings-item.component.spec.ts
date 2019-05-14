import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsItemComponent } from './standings-item.component';
import { ResultMarkerComponent } from '../result-marker/result-marker.component';

describe('StandingsItemComponent', () => {
  let component: StandingsItemComponent;
  let fixture: ComponentFixture<StandingsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandingsItemComponent, ResultMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
