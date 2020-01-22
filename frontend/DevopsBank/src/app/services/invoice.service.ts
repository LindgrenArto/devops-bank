import { Injectable } from '@angular/core';
import {InvoiceHttpService} from './invoice-http.service';
import {Observable} from 'rxjs';
import {Invoice} from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private invoiceHttpService: InvoiceHttpService) { }

  getInvoices(): Observable<Invoice[]> {
    return this.invoiceHttpService.get();
  }

  getById(id): Observable<Invoice> {
    return this.invoiceHttpService.getById(id);
  }

  createInvoices(invoice: Invoice): Observable<Invoice> {
    return this.invoiceHttpService.create(invoice);
  }

  editInvoices(invoice: Invoice): Observable<Invoice> {
    return this.invoiceHttpService.edit(invoice);
  }

  deleteInvoices(invoice: Invoice): Observable<any> {
    return this.invoiceHttpService.delete(invoice);
  }
}
