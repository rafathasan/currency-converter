import { TestBed } from '@angular/core/testing';

import { ExchangesRatesService } from './exchanges-rates.service';

describe('ExchangesRatesService', () => {
  let service: ExchangesRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangesRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
