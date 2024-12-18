import { TestBed } from '@angular/core/testing';

import { ChamoApiService } from './chamo-api.service';

describe('ChamoApiService', () => {
  let service: ChamoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChamoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
