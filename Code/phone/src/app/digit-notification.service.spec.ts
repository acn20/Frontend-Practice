import { TestBed } from '@angular/core/testing';

import { DigitNotificationService } from './digit-notification.service';

describe('DigitNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DigitNotificationService = TestBed.get(DigitNotificationService);
    expect(service).toBeTruthy();
  });
});
