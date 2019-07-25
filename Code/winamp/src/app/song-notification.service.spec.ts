import { TestBed } from '@angular/core/testing';

import { SongNotificationService } from './song-notification.service';

describe('SongNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SongNotificationService = TestBed.get(SongNotificationService);
    expect(service).toBeTruthy();
  });
});
