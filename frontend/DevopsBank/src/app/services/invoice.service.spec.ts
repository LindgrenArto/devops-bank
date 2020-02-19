import {getTestBed, inject, TestBed} from '@angular/core/testing';

import {InvoiceService} from './invoice.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpEvent, HttpEventType} from '@angular/common/http';
import {InvoiceHttpService} from './invoice-http.service';
import {url} from 'inspector';

describe('InvoiceService', () => {
  let httpTestingController: HttpTestingController;
  let service: InvoiceService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [InvoiceService]
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(InvoiceService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    TestBed.get(InvoiceService);
    expect(service).toBeTruthy();
  });

  it('getInvoices() should GET invoices', () => {

    const invoices = [];

    service.getInvoices().subscribe((res) => {
      expect(res).toEqual(invoices);
    });

    const req = httpTestingController.expectOne('https://devopsbank.azurewebsites.net/api/invoice');
    expect(req.request.method).toEqual('GET');
    req.flush(invoices);

    httpTestingController.verify();
  });

  it('getById() should get invoice by id', () => {
    service.getById(1).subscribe((data) => {
      expect(data.invoiceSender).toBe('Terävä Teuvo');
    });

    const req = httpTestingController.expectOne('https://devopsbank.azurewebsites.net/api/invoice/1');
    expect(req.request.method).toBe('GET');

    req.flush({
      invoiceSender: 'Terävä Teuvo'
    });

    httpTestingController.verify();
  });

  it('createInvoices() should post the correct data', () => {
    const mockDate: Date = new Date();
    const mockInvoice = {
      id: 1,
      invoiceSender: 'Terävä Teuvo',
      recipientName: 'Terävä Teppo',
      recipientIban: 'FI21 1234 5600 0007 85',
      reference: '12345672',
      invoiceNumber: '20200216-001',
      bic: 'SBANFIHH',
      total: 300,
      dueDay: mockDate,
      date: mockDate
    };

    service.createInvoices(mockInvoice)
      .subscribe(result => {
        expect(result.id).toEqual(1);
      });

    const req = httpTestingController.expectOne('https://devopsbank.azurewebsites.net/api/invoice');
    expect(req.request.method).toBe('POST');

    req.flush(mockInvoice);

    httpTestingController.verify();
  });

  it('editInvoices() should put the correct data', () => {
    const mockDate: Date = new Date();
    const mockInvoice = {
      id: 1,
      invoiceSender: 'John Doe',
      recipientName: 'Terävä Teppo',
      recipientIban: 'FI21 1234 5600 0007 85',
      reference: '12345672',
      invoiceNumber: '20200216-001',
      bic: 'SBANFIHH',
      total: 300,
      dueDay: mockDate,
      date: mockDate
    };

    service.editInvoices(mockInvoice).subscribe((result) => {
      expect(result.id).toEqual(1);
    });

    const req = httpTestingController.expectOne(`https://devopsbank.azurewebsites.net/api/invoice/1`);
    expect(req.request.method).toBe('PUT');

    req.flush(mockInvoice);

    httpTestingController.verify();
  });

  it('deleteInvoices() should delete the correct data', () => {
    const mockDate: Date = new Date();
    const mockInvoice = {
      id: 1,
      invoiceSender: 'Terävä Teuvo',
      recipientName: 'Terävä Teppo',
      recipientIban: 'FI21 1234 5600 0007 85',
      reference: '12345672',
      invoiceNumber: '20200216-001',
      bic: 'SBANFIHH',
      total: 300,
      dueDay: mockDate,
      date: mockDate
    };

    service.deleteInvoices(mockInvoice).subscribe((data: any) => {
      expect(data).toBe(1);
    });

    const req = httpTestingController.expectOne(`https://devopsbank.azurewebsites.net/api/invoice/1`);
    expect(req.request.method).toBe('DELETE');

    req.flush(1);

    httpTestingController.verify();
  });
});
