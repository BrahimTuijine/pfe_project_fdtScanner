import { TestBed } from '@angular/core/testing';

import { GetrequestService } from './getrequest.service';

describe('GetrequestService', () => {
  let service: GetrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
