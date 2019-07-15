import { TestBed } from '@angular/core/testing';

import { AgeCheckerService } from './age-checker.service';

describe('AgeCheckerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [AgeCheckerService]
  }));

  it('should be created', () => {
    const service: AgeCheckerService = TestBed.get(AgeCheckerService);
    expect(service).toBeTruthy();
  });

  describe('canVote tests', () => {
    let service: AgeCheckerService;
    beforeAll(() => {
      service = TestBed.get(AgeCheckerService);
    });

    describe('when age is under 16', () => {
      it('should be illegal to vote', () => {
        const age = 15;
        const result = service.canVote(age);
        expect(result).toBe(false);
      });
    });

    describe('when age is 16', () => {
      it('should be legal to vote', () => {
        const age = 16;
        const result = service.canVote(age);
        expect(result).toBe(true);
      });
    });

    describe('when age is over 16', () => {
      it('should be legal to vote', () => {
        const age = 22;
        const result = service.canVote(age);
        expect(result).toBe(true);
      });
    });
  });
});
