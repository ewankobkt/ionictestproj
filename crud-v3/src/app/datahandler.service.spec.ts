import { TestBed } from '@angular/core/testing';

import { DatahandlerService } from './datahandler.service';

describe('DatahandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatahandlerService = TestBed.get(DatahandlerService);
    expect(service).toBeTruthy();
  });
});
