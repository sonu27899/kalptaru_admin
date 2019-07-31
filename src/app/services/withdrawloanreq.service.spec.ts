import { TestBed } from '@angular/core/testing';

import { WithdrawloanreqService } from './withdrawloanreq.service';

describe('WithdrawloanreqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WithdrawloanreqService = TestBed.get(WithdrawloanreqService);
    expect(service).toBeTruthy();
  });
});
