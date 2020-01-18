import { TestBed } from '@angular/core/testing';

import { NotificationsClientService } from './notifications-client.service';

describe('NotificationsClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationsClientService = TestBed.get(NotificationsClientService);
    expect(service).toBeTruthy();
  });
});
