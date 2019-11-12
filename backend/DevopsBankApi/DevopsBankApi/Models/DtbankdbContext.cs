using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DevopsBankApi.Models
{
    public partial class DtbankdbContext : DbContext
    {
        public DtbankdbContext()
        {
        }

        public DtbankdbContext(DbContextOptions<DtbankdbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Invoice> Invoices { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.0-rtm-35687");

            modelBuilder.Entity<Invoice>(entity =>
            {
                entity.Property(e => e.Bic).IsUnicode(false);

                entity.Property(e => e.Date).HasDefaultValueSql("(getdate())");

                entity.Property(e => e.InvoiceNumber).IsUnicode(false);

                entity.Property(e => e.InvoiceSender).IsUnicode(false);

                entity.Property(e => e.RecipientIban).IsUnicode(false);

                entity.Property(e => e.RecipientName).IsUnicode(false);

                entity.Property(e => e.Reference).IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}