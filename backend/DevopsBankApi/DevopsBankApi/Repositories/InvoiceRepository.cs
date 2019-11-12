using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevopsBankApi.Models;
using Microsoft.EntityFrameworkCore;

namespace DevopsBankApi.Repositories
{
    public class InvoiceRepository : IInvoiceRepository
    {
        private readonly DtbankdbContext _context;

        public InvoiceRepository(DtbankdbContext context)
        {
            _context = context;
        }

        public Invoice CreateInvoice(Invoice invoice)
        {
            _context.Add(invoice);
            _context.SaveChanges();
            return invoice;
        }

        public void Delete(long id)
        {
            var invoice = Read(id);
            _context.Remove(invoice);
            _context.SaveChanges();
        }

        public List<Invoice> Read()
        {
            return _context.Invoices.AsNoTracking().ToList();
        }

        public Invoice Read(long id)
        {
            return _context.Invoices.AsNoTracking().FirstOrDefault(i => i.Id == id);
        }

        public Invoice Update(long id, Invoice invoice)
        {
            _context.Update(invoice);
            _context.SaveChanges();
            return invoice;
        }
    }
}
