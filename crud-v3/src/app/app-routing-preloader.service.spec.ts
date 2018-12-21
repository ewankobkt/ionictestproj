import { TestBed } from '@angular/core/testing';

import { AppRoutingPreloaderService } from './app-routing-preloader.service';

describe('AppRoutingPreloaderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppRoutingPreloaderService = TestBed.get(AppRoutingPreloaderService);
    expect(service).toBeTruthy();
  });
});
