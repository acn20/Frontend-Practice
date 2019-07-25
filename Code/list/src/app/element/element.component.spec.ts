import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementComponent } from './element.component';

describe('ElementComponent', () => {
  let component: ElementComponent;
  let fixture: ComponentFixture<ElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when message has value', () => {
    beforeAll(() => {
      component.element = 'Hello'; // this updates the class property, but does not update the HTML
      // of the component. we need to tell the component that it needs to update the HTML
      // and we do so below
      fixture.detectChanges(); // forces a change detection and updates the component's html
    });

    it('displays a <p> with the message in it', () => {
      const componentHtml: HTMLElement = fixture.nativeElement; // <app-message-container></app-message-container>
      const span = componentHtml.querySelector('span');
      expect(span.textContent).toBe('Hello');
    });
  });

});
