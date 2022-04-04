import { TestBed } from '@angular/core/testing';

import { FdtListService } from './fdt-list.service';

describe('FdtListService', () => {
  let service: FdtListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FdtListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
