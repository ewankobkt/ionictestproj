import { TestBed } from '@angular/core/testing';

import { EventSubscribeService } from './event-subscribe.service';

describe('EventSubscribeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventSubscribeService = TestBed.get(EventSubscribeService);
    expect(service).toBeTruthy();
  });
});
