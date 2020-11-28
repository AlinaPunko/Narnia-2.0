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
    public class AuthorsController : ControllerBase
    {
        private readonly AuthorRepository authorRepository;

        public AuthorsController(AuthorRepository authorRepository)
        {
            this.authorRepository = authorRepository;
        }

        // GET: api/<AuthorsController>
        [HttpGet]
        public IEnumerable<AuthorViewModel> Get()
        {
            var authors = authorRepository.GetAll();

            return authors.Select(a =>
                    new AuthorViewModel
                    {
                        Id = a.Id,
                        Name = a.Name,
                        Birthdate = a.Birthdate,
                        Country = a.Country
                    }
                )
                .ToList();
        }

        [HttpGet("GetById")]
        public AuthorViewModel GetById(int id)
        {
            var author = authorRepository.GetById(id);

            return new AuthorViewModel
            {
                Id = author.Id,
                Name = author.Name,
                Birthdate = author.Birthdate,
                Country = author.Country
            };
        }

        [HttpPost("Add")]
        [Authorize(Roles = UserRoles.Admin)]
        public void Add([FromBody] Author author)
        {
            authorRepository.Add(author);
        }

        [Authorize(Roles = UserRoles.Admin)]
        [HttpPut("Update")]
        public void Update([FromBody] Author author)
        {
            authorRepository.Update(author);
        }
    }
}
