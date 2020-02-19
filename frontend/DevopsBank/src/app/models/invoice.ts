export class Invoice {
  id: number;
  invoiceSender: string;
  recipientName: string;
  recipientIban: string;
  reference: string;
  invoiceNumber: string;
  bic: string;
  total: number;
  dueDay: Date;
  date: Date;

  constructor(id?: number, invoiceSender?: string, recipientName?: string, recipientIban?: string, reference?: string,
              invoiceNumber?: string, bic?: string, total?: number, dueDay?: Date, date?: Date) {
    this.id = id;
    this.invoiceSender = invoiceSender;
    this.recipientName = recipientName;
    this.recipientIban = recipientIban;
    this.reference = reference;
    this.invoiceNumber = invoiceNumber;
    this.bic = bic;
    this.total = total;
    this.dueDay = dueDay;
    this.date = date;
  }
}
