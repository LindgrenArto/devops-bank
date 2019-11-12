using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevopsBankApi.Models;
using DevopsBankApi.Repositories;

namespace DevopsBankApi.Services
{
    public class InvoiceService : IInvoiceService
    {
        private readonly IInvoiceRepository _invoiceRepository;

        public InvoiceService(IInvoiceRepository invoiceRepository)
        {
            _invoiceRepository = invoiceRepository;
        }

        public Invoice CreateInvoice(Invoice invoice)
        {
            throw new NotImplementedException();
        }

        public void Delete(long id)
        {
            throw new NotImplementedException();
        }

        public List<Invoice> Read()
        {
            throw new NotImplementedException();
        }

        public Invoice Read(long id)
        {
            throw new NotImplementedException();
        }

        public Invoice Update(long id, Invoice invoice)
        {
            throw new NotImplementedException();
        }
    }
}
