import { TestBed } from '@angular/core/testing';

import { CreditApprovalsService } from './credit-approvals.service';

describe('CreditApprovalsService', () => {
  let service: CreditApprovalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditApprovalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
