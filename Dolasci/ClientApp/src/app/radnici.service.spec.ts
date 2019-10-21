import { TestBed } from '@angular/core/testing';

import { RadniciService } from './radnici.service';

describe('RadniciService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RadniciService = TestBed.get(RadniciService);
    expect(service).toBeTruthy();
  });
});
