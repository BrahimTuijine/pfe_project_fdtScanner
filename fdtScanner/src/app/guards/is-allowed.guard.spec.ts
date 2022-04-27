import { TestBed } from '@angular/core/testing';

import { IsAllowedGuard } from './is-allowed.guard';

describe('IsAllowedGuard', () => {
  let guard: IsAllowedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAllowedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
