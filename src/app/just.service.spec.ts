import { TestBed } from '@angular/core/testing';

import { JustService } from './just.service';

describe('JustService', () => {
  let service: JustService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JustService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
