import { TestBed } from '@angular/core/testing';

import { InvoiceHttpService } from './invoice-http.service';

describe('InvoiceHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoiceHttpService = TestBed.get(InvoiceHttpService);
    expect(service).toBeTruthy();
  });
});
