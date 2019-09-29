import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  describe('biggest', () => {
    it('given null array it returns null', () => {
      const list = null;
      const result = component.biggest(list);

      expect(result).toBeNull();
    });
    
    it('given empty array it returns null', () => {
      const list = [];
      const result = component.biggest(list);

      expect(result).toBeNull();
    });

    it('given an array with one element it returns the element', () => {
      const list = [3];
      const result = component.biggest(list);

      expect(result).toBe(3);
    });

    it('given an array with multiple same element it returns the element', () => {
      const list = [3, 5, 5];
      const result = component.biggest(list);

      expect(result).toBe(5);
    });

    it('given an array which contains negative elements it returns the biggest element', () => {
      const list = [8, -4, 0];
      const result = component.biggest(list);

      expect(result).toBe(8);
    });
  });

  describe('reverse', () => {
    it('given null array it returns null', () => {
      const list = null;
      const result = component.reverse(list);

      expect(result).toBeNull();
    });
    
    it('given empty array it returns null', () => {
      const list = [];
      const result = component.reverse(list);

      expect(result).toBeNull();
    });

    it('given an array with one element it returns the element', () => {
      const list = [10];
      const result = component.reverse(list);

      expect(result).toBe([10]);
    });
  });

  describe('secondDegreeEq', () => {

    it('given a negative it throws error', () => {
      const a = 0;
      const b = 1;
      const c = 3;
      const result = component.solveSecondDegreeEquation(a, b, c);

      expect(result).toThrow();

    });

    it('when delta is positive it returns the solutions', () => {
      const a = 1;
      const b = 5;
      const c = 4;
      const result = component.solveSecondDegreeEquation(a, b, c);

      expect(result).toBe([-1, -4]);

    });

    it('when delta is zero it returns only one solution', () => {
      const a = 1;
      const b = 2;
      const c = 1;
      const result = component.solveSecondDegreeEquation(a, b, c);

      expect(result).toBe([-1]);
      
    });

    it('when delta is negative it throw error', () => {
      const a = 1;
      const b = 2;
      const c = 5;
      const result = component.solveSecondDegreeEquation(a, b, c);

      expect(result).toThrow("The solutions are not real");
      
    });
  });
});
