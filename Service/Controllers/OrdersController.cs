using System;
using System.Collections.Generic;
using System.Linq;
using DataAccess.Models;
using DataAccess.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Service.ViewModels;

namespace Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly OrderRepository orderRepository;
        private readonly OrderToBookRepository orderToBookRepository;
        private readonly BookRepository bookRepository;

        public OrdersController(OrderRepository orderRepository, OrderToBookRepository orderToBookRepository, BookRepository bookRepository)
        {
            this.orderRepository = orderRepository;
            this.orderToBookRepository = orderToBookRepository;
            this.bookRepository = bookRepository;
        }

        [HttpGet]
        [Authorize(Roles = UserRoles.Admin)]
        public IEnumerable<OrderViewModel> Get()
        {
            List<Order> orders = orderRepository.Get()
                .OrderBy(o => o.Date)
                .ToList();

            return orders.Select(order =>
            {
                return new OrderViewModel
                {
                    Id = order.Id,
                    Date = order.Date,
                    Sum = order.Sum,
                    UserId = order.UserId,
                    Status = order.Status.ToString(),
                    Books = order.OrderToBooks.Select(o => new { o.Book, o.Amount }).Select(b => new BookViewModel
                    {
                        Id = b.Book.Id,
                        Title = b.Book.Title,
                        Price = b.Book.Price,
                        Authors = b.Book.BookToAuthors.Select(a => a.Author.Name).ToList(),
                        Amount = b.Amount
                    })
                        .ToList(),
                    User = order.User
                };
            }).ToList();
        }

        [HttpGet("GetByUserId")]
        [Authorize(Roles = UserRoles.User)]
        public IEnumerable<OrderViewModel> GetByUserId(string id)
        {
            List<Order> orders = orderRepository.GetByUserId(id).ToList();

            return orders.Select(order =>
            {
                return new OrderViewModel
                {
                    Id = order.Id,
                    Date = order.Date,
                    Sum = order.Sum,
                    UserId = order.UserId,
                    Status = order.Status.ToString(),
                    Books = order.OrderToBooks.Select(o => new { o.Book, o.Amount }).Select(b => new BookViewModel
                    {
                        Id = b.Book.Id,
                        Title = b.Book.Title,
                        Price = b.Book.Price,
                        Authors = b.Book.BookToAuthors.Select(a => a.Author.Name).ToList(),
                        Amount = b.Amount
                    })
                    .ToList(),
                    User = order.User
                };
            }).ToList();
        }

        [HttpGet("Pending")]
        [Authorize(Roles = UserRoles.Admin)]
        public IEnumerable<OrderViewModel> GetPending()
        {
            List<Order> orders = orderRepository.GetPending().ToList();

            return orders.Select(order =>
            {
            return new OrderViewModel
            {
                Id = order.Id,
                Date = order.Date,
                Sum = order.Sum,
                UserId = order.UserId,
                Status = order.Status.ToString(),
                Books = order.OrderToBooks.Select(o => new { o.Book, o.Amount}).Select(b => new BookViewModel
                    {
                        Id = b.Book.Id,
                        Title = b.Book.Title,
                        Price = b.Book.Price,
                        Authors = b.Book.BookToAuthors.Select(a => a.Author.Name).ToList(),
                        Amount = b.Amount
                    })
                    .ToList(),
                    User = order.User
                };
            }).ToList();
        }

        [HttpPost("Add")]
        [Authorize(Roles = UserRoles.User)]
        public void Add([FromBody] OrderViewModel viewModel) {
            Order order = new Order { 
                Date = DateTime.Now, 
                Status = OrderStatus.Pending, 
                Sum = viewModel.Sum, 
                UserId = viewModel.UserId
            };

            orderRepository.Add(order);

            foreach(BookViewModel book in viewModel.Books)
            {
                OrderToBook orderToBook = new OrderToBook
                {
                    BookId = book.Id,
                    OrderId = order.Id,
                    Book = bookRepository.GetById(book.Id),
                    Amount = book.Amount
                };
                orderToBook.Book.Count -= book.Amount;
                orderToBookRepository.Add(orderToBook);
            }
        }

        [HttpPut("UpdateStatus")]
        [Authorize(Roles = UserRoles.Admin)]
        public void UpdateStatus([FromBody] StatusViewModel viewModel)
        {
            Order order = orderRepository.GetById(viewModel.OrderId);
            if(order != null)
            {
                order.Status = viewModel.Status;
                orderRepository.Update(order);
            }
        }
    }
}
