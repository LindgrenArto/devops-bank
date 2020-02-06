using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DevopsBankApi.Models;
using DevopsBankApi.Services;

namespace DevopsBankApi.Controllers
{
    [Route("api/invoice")]
    [ApiController]
    public class InvoiceController : Controller
    {
        private readonly IInvoiceService _invoiceService;

        public InvoiceController(IInvoiceService invoiceService)
        {
            _invoiceService = invoiceService;
        }

        [HttpGet]
        public ActionResult<List<Invoice>> Get()
        {
            return new JsonResult(_invoiceService.Read());
        }

        [HttpGet("{id}")]
        public ActionResult<Invoice> Get(long id)
        {
            return new JsonResult(_invoiceService.Read(id));
        }

        [HttpPost]
        public ActionResult<Invoice> Create(Invoice invoice)
        {
            return _invoiceService.CreateInvoice(invoice);
        }

        [HttpPost]
        public ActionResult Post([FromBody] Invoice invoice)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var item = _invoiceService.CreateInvoice(invoice);
            return CreatedAtAction("Get", new { id = item.Id }, item);
        }

        [HttpPut("{id}")]
        public ActionResult<Invoice> Update(long id, Invoice invoice)
        {
            return _invoiceService.Update(id, invoice);
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(long id)
        {
           var existing = _invoiceService.Read(id);
            if(existing == null)
            {
                return NotFound();
            }
            else
            {
                _invoiceService.Delete(id);
                return new NoContentResult();
            }
            
        }
    }
}