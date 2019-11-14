import { TestBed } from '@angular/core/testing';

import { RedondeoService } from './redondeo.service';

describe('RedondeoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RedondeoService = TestBed.get(RedondeoService);
    expect(service).toBeTruthy();
  });
});
