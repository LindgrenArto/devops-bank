using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DevopsBankApi.Models
{
    [Table("Invoice")]
    public partial class Invoice
    {
        [Column("id")]
        public long Id { get; set; }
        [Required]
        [StringLength(50)]
        public string InvoiceSender { get; set; }
        [Required]
        [StringLength(50)]
        public string RecipientName { get; set; }
        [Required]
        [Column("RecipientIBAN")]
        [StringLength(18)]
        public string RecipientIban { get; set; }
        [Required]
        [StringLength(20)]
        public string Reference { get; set; }
        [Required]
        [StringLength(10)]
        public string InvoiceNumber { get; set; }
        [Required]
        [Column("BIC")]
        [StringLength(8)]
        public string Bic { get; set; }
        [Column(TypeName = "decimal(18, 2)")]
        public decimal Total { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime DueDay { get; set; }
        [Column(TypeName = "datetime")]
        public DateTime Date { get; set; }
    }
}