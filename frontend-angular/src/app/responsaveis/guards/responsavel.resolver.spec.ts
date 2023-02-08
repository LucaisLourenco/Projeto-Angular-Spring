import { TestBed } from '@angular/core/testing';

import { ResponsavelResolver } from './responsavel.resolver';

describe('ResponsavelResolver', () => {
  let resolver: ResponsavelResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ResponsavelResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
