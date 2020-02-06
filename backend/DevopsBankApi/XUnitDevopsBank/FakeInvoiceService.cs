using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DevopsBankApi.Models;
using DevopsBankApi.Services;

namespace XUnitDevopsBank
{
    class FakeInvoiceService : IInvoiceService
    {
        private readonly List<Invoice> _invoices;

        public FakeInvoiceService()
        {
           
            _invoices = new List<Invoice>()
            {
            new Invoice() {Id = 1, InvoiceSender = "Teppo", RecipientName = "Lasse", RecipientIban = "FI1212341234423453", Reference = "12345672", InvoiceNumber = "1234567890", Bic ="NDEAFIHH", Total = 20.00M, DueDay = new DateTime(2020,02,02),
            Date = DateTime.Today},
            new Invoice() {Id = 2, InvoiceSender = "Heikki", RecipientName = "Joona", RecipientIban = "FI1212341234123456", Reference = "12345672", InvoiceNumber = "1234567890", Bic ="NDEAFIHH", Total = 20.00M, DueDay = new DateTime(2020, 02, 02),
            Date = DateTime.Today},
            new Invoice() {Id = 3, InvoiceSender = "Seppo", RecipientName = "Juho", RecipientIban = "FI1212343234623455", Reference = "12345672", InvoiceNumber = "1234567890", Bic ="NDEAFIHH", Total = 20.00M, DueDay = new DateTime(2020, 02, 02),
            Date = DateTime.Today},
            };


        }

        public Invoice CreateInvoice(Invoice invoice)
        {
            _invoices.Add(invoice);
            return invoice;
        }

        public void Delete(long id)
        {
            var invoice = _invoices.First(i => i.Id == id);
            _invoices.Remove(invoice);
        }

        public List<Invoice> Read()
        {
            return _invoices;
        }

        public Invoice Read(long id)
        {
            return _invoices.Where(a => a.Id == id).FirstOrDefault();
        }

        public Invoice Update(long id, Invoice invoice)
        {
            throw new NotImplementedException();
        }
    }
}
