import {Component, OnInit} from '@angular/core';
import {Invoice} from '../../models/invoice';
import {InvoiceService} from '../../services/invoice.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListComponent implements OnInit {
  invoice: Invoice[];

  constructor(private invoiceService: InvoiceService) {
  }

  ngOnInit() {
    this.invoiceService.getInvoices().subscribe(response => {
      this.invoice = response;
      console.log(response);
    });
  }

}
