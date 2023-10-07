import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { athGuard } from './ath.guard';

describe('athGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => athGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
