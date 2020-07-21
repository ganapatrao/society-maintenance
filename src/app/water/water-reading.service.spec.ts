import { TestBed } from '@angular/core/testing';

import { WaterReadingService } from './water-reading.service';

describe('WaterReadingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaterReadingService = TestBed.get(WaterReadingService);
    expect(service).toBeTruthy();
  });
});
