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
    [Authorize(Roles = UserRoles.User)]
    public class FavoriteBooksController : ControllerBase
    {
        private readonly FavoriteBookRepository favoriteBookRepository;

        public FavoriteBooksController(FavoriteBookRepository favoriteBookRepository)
        {
            this.favoriteBookRepository = favoriteBookRepository;
        }

        [HttpGet("GetByUserId")]
        public IEnumerable<BookViewModel> GetByUserId(string id)
        {
            return favoriteBookRepository.GetByUserId(id)
                .ToList()
                .Select(f => f.Book)
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
                .ToList();
        }

        [HttpPost("Add")]
        public void Add([FromBody] FavoriteBook favoriteBook)
        {
            favoriteBookRepository.Add(favoriteBook);
        }

        [HttpDelete("Delete")]
        public void Delete([FromBody] FavoriteBook favoriteBook)
        {
            favoriteBookRepository.Remove(favoriteBook);
        }
    }
}
