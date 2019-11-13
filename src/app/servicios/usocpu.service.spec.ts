import { TestBed } from '@angular/core/testing';

import { UsocpuService } from './usocpu.service';

describe('UsocpuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsocpuService = TestBed.get(UsocpuService);
    expect(service).toBeTruthy();
  });
});
