import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageContainerComponent } from './message-container.component';

describe('MessageContainerComponent', () => {
  let component: MessageContainerComponent;
  // fixture is a useful class that represents a component and its html
  // typically you use it to access the html content of the component
  let fixture: ComponentFixture<MessageContainerComponent>; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shows an empty <p> by default', () => {
    const componentHtml: HTMLElement = fixture.nativeElement; // <app-message-container></app-message-container>
    const p = componentHtml.querySelector('p');
    expect(p.textContent).toBe('');
  });

  describe('when message has value', () => {
    beforeAll(() => {
      component.message = 'Hello, world!'; // this updates the class property, but does not update the HTML
      // of the component. we need to tell the component that it needs to update the HTML
      // and we do so below
      fixture.detectChanges(); // forces a change detection and updates the component's html
    });

    it('displays a <p> with the message in it', () => {
      const componentHtml: HTMLElement = fixture.nativeElement; // <app-message-container></app-message-container>
      const p = componentHtml.querySelector('p');
      expect(p.textContent).toBe('Hello, world!');
    });
  });

  describe('when message is empty', () => {
    beforeAll(() => {
      component.message = '';
      fixture.detectChanges();
    });

    it('displays an empty <p>', () => {
      const componentHtml: HTMLElement = fixture.nativeElement;
      const p = componentHtml.querySelector('p');
      expect(p.textContent).toBe('');
    });

  });

});
