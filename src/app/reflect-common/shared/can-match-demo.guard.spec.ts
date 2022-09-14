import { TestBed } from '@angular/core/testing';

import { CanMatchDemoGuard } from './can-match-demo.guard';

describe('CanMatchDemoGuard', () => {
  let guard: CanMatchDemoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanMatchDemoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
