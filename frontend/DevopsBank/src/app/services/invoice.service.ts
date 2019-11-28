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

  createInvoices(basicStudies: Invoice): Observable<Invoice> {
    return this.invoiceHttpService.create(basicStudies);
  }

  editInvoices(basicStudies: Invoice): Observable<Invoice> {
    return this.invoiceHttpService.edit(basicStudies);
  }

  deleteInvoices(basicStudies: Invoice): Observable<any> {
    return this.invoiceHttpService.delete(basicStudies);
  }
}
