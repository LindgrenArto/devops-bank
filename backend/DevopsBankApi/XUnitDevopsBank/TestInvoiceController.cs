using System.Collections.Generic;
using DevopsBankApi.Controllers;
using DevopsBankApi.Models;
using DevopsBankApi.Services;
using Microsoft.AspNetCore.Mvc;
using System.Linq; 
using Xunit;
using System.Web.Http.Results;
using System.Web.Mvc;
using System;
using NotFoundResult = Microsoft.AspNetCore.Mvc.NotFoundResult;
using OkResult = System.Web.Http.Results.OkResult;
using JsonResult = Microsoft.AspNetCore.Mvc.JsonResult;

namespace XUnitDevopsBank
{
    public class InvoiceControllerTest
    {
        private InvoiceController _controller;
       private IInvoiceService _service;

        public InvoiceControllerTest()
        {
            _service = new FakeInvoiceService();
            _controller = new InvoiceController(_service);
           
        }


        [Fact]
        public void Get_WhenCalled_ReturnsInvoice()
        {
            //Act 
            var okResult = _controller.Get();
            
            //Assert
            Assert.IsType<JsonResult>(okResult.Result);
        }

        [Fact]
        public void Get_WhenCalled_ReturnsAllItems()
        {
            //Act
            var okResult = _controller.Get().Result as JsonResult;

            //Assert 
            var items = Assert.IsType<List<Invoice>>(okResult.Value);
            Assert.Equal(3, items.Count);
        }

        [Fact]
        public void GetById_UnknownIdPassed_ReturnsNotFoundResult()
        {
            // Act
            var notFoundResult = _controller.Get(4);


            // Assert
            Assert.IsType<JsonResult>(notFoundResult.Result);
        }

        [Fact]
        public void GetById_ExistingGuidPassed_ReturnsOkResult()
        {
            // Arrange
            var testId = 2;

            // Act
            var okResult = _controller.Get(testId);

            // Assert
            Assert.IsType<JsonResult>(okResult.Result);
        }

        [Fact]
        public void GetById_ExistingIdPassed_ReturnsRightItem()
        {
            // Arrange
            var testId = 1;

            // Act
            var okResult = _controller.Get(testId).Result as JsonResult;

            // Assert
            Assert.IsType<JsonResult>(okResult);
            Assert.Equal(testId, (okResult.Value as Invoice).Id);
        }

        [Fact]
        public void Add_InvalidObjectPassed_ReturnsBadRequest()
        {
            // Arrange
            var senderMissingItem = new Invoice()
            {
                Id = 1,
                RecipientName = "Lasse",
                RecipientIban = "FI1212341234423453",
                Reference = "12345672",
                InvoiceNumber = "1234567890",
                Bic = "NDEAFIHH",
                Total = 20.00M,
                DueDay = new DateTime(2020, 02, 02),
                Date = DateTime.Today
            };
           

            // Act
            var badResponse = _controller.Post(senderMissingItem);

            // Assert
            Assert.IsType<CreatedAtActionResult>(badResponse);
        }


        [Fact]
        public void Add_ValidObjectPassed_ReturnsCreatedResponse()
        {
            // Arrange
            Invoice testItem = new Invoice()
            {
                Id = 1,
                InvoiceSender = "Teppo",
                RecipientName = "Lasse",
                RecipientIban = "FI1212341234423453",
                Reference = "12345672",
                InvoiceNumber = "1234567890",
                Bic = "NDEAFIHH",
                Total = 20.00M,
                DueDay = new DateTime(2020, 02, 02),
                Date = DateTime.Today
            };

            // Act
            var createdResponse = _controller.Post(testItem);

            // Assert
            Assert.IsType<CreatedAtActionResult>(createdResponse);
        }

        [Fact]
        public void Add_ValidObjectPassed_ReturnedResponseHasCreatedItem()
        {
            // Arrange
            var testItem = new Invoice()
            {
                Id = 1,
                InvoiceSender = "Teppo",
                RecipientName = "Lasse",
                RecipientIban = "FI1212341234423453",
                Reference = "12345672",
                InvoiceNumber = "1234567890",
                Bic = "NDEAFIHH",
                Total = 20.00M,
                DueDay = new DateTime(2020, 02, 02),
                Date = DateTime.Today
            };

            // Act
            var createdResponse = _controller.Create(testItem);
            var item = createdResponse.Value as Invoice;

            // Assert
            Assert.IsType<Invoice>(item);
            Assert.Equal("Teppo", item.InvoiceSender);
        }

        [Fact]
        public void Remove_NotExistingIdPassed_ReturnsNotFoundResponse()
        {
            // Arrange
            var notExistingId = 666;

            // Act
            var badResponse = _controller.Delete(notExistingId);

            // Assert
            Assert.IsType<NotFoundResult>(badResponse);
        }

        [Fact]
        public void Remove_ExistingIdPassed_ReturnsOkResult()
        {
            // Arrange
            var existingId = 1;

            // Act
            var okResponse = _controller.Delete(existingId);

            // Assert
            Assert.IsType<NoContentResult>(okResponse);
        }
        [Fact]
        public void Remove_ExistingIdPassed_RemovesOneItem()
        {
            // Arrange
            var existingId = 1;

            // Act
            var okResponse = _controller.Delete(existingId);

            // Assert
            Assert.Equal(2, _service.Read().Count());
        }
    }
}


