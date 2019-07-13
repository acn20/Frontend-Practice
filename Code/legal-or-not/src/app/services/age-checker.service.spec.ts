import { TestBed } from '@angular/core/testing';

import { AgeCheckerService } from './age-checker.service';

describe('AgeCheckerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgeCheckerService = TestBed.get(AgeCheckerService);
    expect(service).toBeTruthy();
  });
});
