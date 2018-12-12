import { TestBed } from '@angular/core/testing';

import { DatanameService } from './dataname.service';

describe('DatanameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatanameService = TestBed.get(DatanameService);
    expect(service).toBeTruthy();
  });
});
