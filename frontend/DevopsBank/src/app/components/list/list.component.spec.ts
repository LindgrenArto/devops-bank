import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListComponent} from './list.component';
import {InvoiceService} from '../../services/invoice.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {MatExpansionModule} from '@angular/material';

describe('ListComponent', () => {
  let httpTestingController: HttpTestingController;
  let service: InvoiceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        MatExpansionModule],
      declarations: [ListComponent],
      providers: [InvoiceService]
    }).compileComponents();
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(InvoiceService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should get invoice list from the service', () => {
    const invoices = [];

    service.getInvoices().subscribe((res) => {
      expect(res).toEqual(invoices);
    });

    const req = httpTestingController.expectOne('https://devopsbank.azurewebsites.net/api/invoice');
    expect(req.request.method).toEqual('GET');
    req.flush(invoices);

    httpTestingController.verify();
  });
});

