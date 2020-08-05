import { TestBed } from '@angular/core/testing';

import { WaterbillService } from './waterbill.service';

describe('WaterbillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaterbillService = TestBed.get(WaterbillService);
    expect(service).toBeTruthy();
  });
});
