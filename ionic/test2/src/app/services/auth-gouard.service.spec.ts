import { TestBed } from '@angular/core/testing';

import { AuthGouardService } from './auth-gouard.service';

describe('AuthGouardService', () => {
  let service: AuthGouardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGouardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
