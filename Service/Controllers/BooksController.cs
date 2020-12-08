using System;
using System.Collections.Generic;
using System.Linq;
using DataAccess.Models;
using DataAccess.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Service.ViewModels;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {

        private readonly BookRepository bookRepository;
        private readonly CommentRepository commentRepository;
        private readonly RateRepository rateRepository;
        private readonly AuthorRepository authorRepository;
        private readonly BookToAuthorRepository bookToAuthorRepository;
        private readonly BookToGenreRepository bookToGenreRepository;

        public BooksController(BookRepository bookRepository,
            RateRepository rateRepository,
            CommentRepository commentRepository,
            BookToGenreRepository bookToGenreRepository, 
            BookToAuthorRepository bookToAuthorRepository, 
            AuthorRepository authorRepository )
        {
            this.bookRepository = bookRepository;
            this.rateRepository = rateRepository;
            this.commentRepository = commentRepository;
            this.bookToGenreRepository = bookToGenreRepository;
            this.bookToAuthorRepository = bookToAuthorRepository;
            this.authorRepository = authorRepository;
        }

        [HttpGet]
        public IEnumerable<BookViewModel> Get()
        {
            return bookRepository.GetAll()
                .Select(b =>
                    new BookViewModel
                    {
                        Id = b.Id,
                        Title = b.Title,
                        PagesCount = b.PagesCount,
                        Price = b.Price,
                        Rating = b.Rating,
                        Description = b.Description,
                        Image = b.EncodedPhoto,
                        PublishingYear = b.PublishingYear,
                        Authors = b.BookToAuthors.Select(a => a.Author.Name).ToList(),
                        Genres = b.BookToGenres.Select(g => g.Genre.ToString()).ToList(),
                        Count = b.Count
                    }
                )
                .Reverse()
                .ToList();
        }

        [HttpGet("GetById")]
        public BookViewModel GetById(int id)
        {
            Book book = bookRepository.GetById(id);

            return new BookViewModel
            {
                Id = book.Id,
                Title = book.Title,
                PagesCount = book.PagesCount,
                Price = book.Price,
                Rating = book.Rating,
                Description = book.Description,
                Image = book.EncodedPhoto,
                PublishingYear = book.PublishingYear,
                Authors = book.BookToAuthors.Select(a => a.Author.Name).ToList(),
                Genres = book.BookToGenres.Select(g => g.Genre.ToString()).ToList(),
                Comments = commentRepository.GetByBookId(book.Id)
                    .Select(c => new CommentViewModel {
                        Id = c.Id,
                        Text = c.Text,
                        BookId = c.BookId,
                        UserId = c.UserId,
                        UserName = c.User.Name,
                        UserPhoto = c.User.Photo
                    })
                    .ToList(),

                Count = book.Count
            };
        }

        [Authorize(Roles = UserRoles.Admin)]
        [HttpPost("Add")]
        public void Add([FromBody] BookViewModel viewModel)
        {
            Book book = new Book()
            {
                Title = viewModel.Title,
                PagesCount = viewModel.PagesCount,
                Price = viewModel.Price,
                PublishingYear = viewModel.PublishingYear,
                EncodedPhoto = viewModel.Image,
                Count = viewModel.Count,
                Description = viewModel.Description,
                Rating = 0
            };

            bookRepository.Add(book);

            foreach (string name in viewModel.Authors)
            {
                BookToAuthor bookToAuthor = new BookToAuthor { BookId = book.Id, AuthorId = authorRepository.GetByName(name).Id };
                bookToAuthorRepository.Add(bookToAuthor);
            }

            foreach (string genre in viewModel.Genres)
            {
                BookToGenre bookToGenre = new BookToGenre { BookId = book.Id, Genre = (Genre)Enum.Parse(typeof(Genre), genre) };
                bookToGenreRepository.Add(bookToGenre);
            };
        }

        [Authorize(Roles = UserRoles.Admin)]
        [HttpPut("Update")]
        public void Update([FromBody] BookViewModel viewModel)
        {
            Book book = bookRepository.GetById(viewModel.Id);

            if ( book !=  null )
            {
                book.Id = viewModel.Id;
                book.Title = viewModel.Title;
                book.PagesCount = viewModel.PagesCount;
                book.Price = viewModel.Price;
                book.PublishingYear = viewModel.PublishingYear;
                book.EncodedPhoto = viewModel.Image;
                book.Count = viewModel.Count;
                book.Description = viewModel.Description;

                book.BookToGenres.Clear();
                book.BookToAuthors.Clear();
                foreach (var genre in viewModel.Genres)
                {
                    BookToGenre bookToGenre = new BookToGenre { BookId = book.Id, Genre = (Genre)Enum.Parse(typeof(Genre), genre) };
                    book.BookToGenres.Add(bookToGenre);
                }


                foreach (var author in viewModel.Authors)
                {
                    BookToAuthor bookToAuthor = new BookToAuthor { BookId = book.Id, AuthorId = authorRepository.GetByName(author).Id };
                    book.BookToAuthors.Add(bookToAuthor);
                }

                bookRepository.Update(book);
            };
        }

        [Authorize]
        [HttpPost("Rate")]
        public void Rate([FromBody] Rate model)
        {
            rateRepository.Add(model);
            var book = bookRepository.GetById(model.BookId);
            book.Rating += model.Value;
            bookRepository.Update(book);
        }

        [Authorize]
        [HttpPost("AddComment")]
        public IReadOnlyList<CommentViewModel> AddAndGetComments([FromBody] Comment comment)
        {
            commentRepository.Add(comment);

            var c = commentRepository.GetByBookId(comment.BookId)
                    .Select(c => new CommentViewModel
                    {
                        Id = c.Id,
                        Text = c.Text,
                        BookId = c.BookId,
                        UserId = c.UserId,
                        UserName = c.User.Name,
                        UserPhoto = c.User.Photo
                    })
                    .ToList();

            return c;
        }

        [Authorize]
        [HttpGet("GetUserRates")]
        public int GetUserRates(int bookId, string userId)
        {
            return rateRepository.GetSumUserBookRates(userId, bookId);
        }
    }
}
