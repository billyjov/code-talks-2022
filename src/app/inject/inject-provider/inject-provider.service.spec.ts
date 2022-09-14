import { TestBed } from '@angular/core/testing';

import { InjectProviderService } from './inject-provider.service';

describe('InjectProviderService', () => {
  let service: InjectProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjectProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
