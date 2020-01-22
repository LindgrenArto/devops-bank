import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Invoice} from '../models/invoice';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvoiceHttpService {
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiEndPointUrl + '/api/invoice';
  }

  get(): Observable<Invoice[]> {
    return this.httpClient.get(this.url).pipe(map(response => {
      return response as Invoice[];
    }));
  }

  getById(id): Observable<Invoice> {
    return this.httpClient.get(this.url + '/' + id).pipe(map(response => {
      return response as Invoice;
    }));
  }

  edit(invoice: Invoice): Observable<Invoice> {
    return this.httpClient.put(this.url + '/' + invoice.id, invoice).pipe(map(response => {
      return response as Invoice;
    }));
  }

  create(invoice: Invoice): Observable<Invoice> {
    return this.httpClient.post(this.url, invoice).pipe(map(response => {
      return response as Invoice;
    }));
  }

  delete(invoice: Invoice): Observable<any> {
    return this.httpClient.delete(this.url + '/' + invoice.id);
  }
}
