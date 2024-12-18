import { TestBed } from '@angular/core/testing';

import { ChamoService } from './chamo.service';

describe('ChamoService', () => {
  let service: ChamoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChamoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
