import { TestBed } from '@angular/core/testing';

import { SelleService } from './selle.service';

describe('SelleService', () => {
  let service: SelleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
