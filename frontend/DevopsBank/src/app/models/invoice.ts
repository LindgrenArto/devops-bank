export class Invoice {
  id: bigint;
  InvoiceSender: string;
  RecipientName: string;
  RecipientIBAN: string;
  Reference: string;
  InvoiceNumber: string;
  BIC: string;
  Total: number;
  DueDay: number;
  Date: number;

  constructor(id?: bigint, invoiceSender?: string, recipientName?: string, recipientIBAN?: string, reference?: string,
              invoiceNumber?: string, bic?: string, total?: number, dueDay?: number, date?: number) {
    this.id = id;
    this.InvoiceSender = invoiceSender;
    this.RecipientName = recipientName;
    this.RecipientIBAN = recipientIBAN;
    this.Reference = reference;
    this.InvoiceNumber = invoiceNumber;
    this.BIC = bic;
    this.Total = total;
    this.DueDay = dueDay;
    this.Date = date;
  }
}
