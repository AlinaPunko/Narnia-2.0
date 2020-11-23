using System.Collections.Generic;
using DataAccess.Models;
using DataAccess.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

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
        public IEnumerable<Author> Get()
        {
            return authorRepository.GetAll();
        }

        [HttpGet("GetById")]
        public Author GetById(int id)
        {
            return authorRepository.GetById(id);
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
