import { TestBed } from '@angular/core/testing';

import { DolasciService } from './dolasci.service';

describe('DolasciService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DolasciService = TestBed.get(DolasciService);
    expect(service).toBeTruthy();
  });
});
