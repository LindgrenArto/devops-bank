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
            return _invoiceRepository.CreateInvoice(invoice);
        }

        public void Delete(long id)
        {
            _invoiceRepository.Delete(id);
        }

        public List<Invoice> Read()
        {
            return _invoiceRepository.Read();
        }

        public Invoice Read(long id)
        {
            return _invoiceRepository.Read(id);
        }

        public Invoice Update(long id, Invoice invoice)
        {
            return _invoiceRepository.Update(id, invoice);
        }
    }
}
