import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultMarkerComponent } from './result-marker.component';

describe('ResultMarkerComponent', () => {
  let component: ResultMarkerComponent; //reprezinta doar partea de typescript, component e un obiect
  let fixture: ComponentFixture<ResultMarkerComponent>; // represents the component along with its HTML. used to access the HTML of the component
 
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

  describe('when result is -1', () => {
    beforeAll(() => {
      component.result = -1;
      // this is executed ONCE, before the tests in this describe.
      // beforeEach on the other hand is executed before EVERY SINGLE TEST. for example 
      // if you have 3 tests, it is executed 3 times
      fixture.detectChanges();
    });

    it('shows loss span', () => {
      // fixture.nativeElement is an object represents the HTML of the component
      let componentHtml: HTMLElement = fixture.nativeElement;
      let span = componentHtml.querySelector('span.loss');
      expect(span).toBeTruthy(); // expect this variable to exist / be not null
      expect(span.textContent).toBe('O');
    });

    it('does not show draw span', () => {
      // fixture.nativeElement is an object represents the HTML of the component
      let componentHtml: HTMLElement = fixture.nativeElement;
      let span = componentHtml.querySelector('span.draw');
      expect(span).toBeFalsy(); // expect this variable to not exist / be null
      expect(span.textContent).toBe('O');
    });

    it('does not show win span', () => {

    });
  });

  describe('when result is 0', () => {

  });

  describe('when result is 1', () => {

  });
});
