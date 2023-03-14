import { TestBed } from '@angular/core/testing';

import { ApiequiposService } from './apiequipos.service';

describe('ApiequiposService', () => {
  let service: ApiequiposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiequiposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
