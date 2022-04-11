import { TestBed } from '@angular/core/testing';

import { GetNotificationListService } from './get-notification-list.service';

describe('GetNotificationListService', () => {
  let service: GetNotificationListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetNotificationListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
