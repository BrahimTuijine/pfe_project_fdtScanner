import { TestBed } from '@angular/core/testing';

import { FixTimeFormService } from './fix-time-form.service';

describe('FixTimeFormService', () => {
  let service: FixTimeFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FixTimeFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
