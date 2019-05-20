import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryRequirementsComponent } from './entry-requirements.component';

describe('EntryRequirementsComponent', () => {
  let component: EntryRequirementsComponent;
  let fixture: ComponentFixture<EntryRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryRequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
