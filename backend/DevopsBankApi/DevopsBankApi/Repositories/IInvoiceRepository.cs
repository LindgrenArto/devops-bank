using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DevopsBankApi.Models;

namespace DevopsBankApi.Repositories
{
    public interface IInvoiceRepository
    {
        Invoice CreateInvoice(Invoice invoice);
        List<Invoice> Read();
        Invoice Read(long id);
        Invoice Update(long id, Invoice invoice);
        void Delete(long id);
    }
}
