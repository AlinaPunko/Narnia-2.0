using DataAccess.Core;
using DataAccess.Models;
using System.Collections.Generic;
using System.Linq;

namespace DataAccess.Repositories
{
    public class AuthorRepository : GenericRepository<Author>
    {
        public AuthorRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<Author> GetAll()
        {
            return Get()
                .ToList();
        }

        public Author GetByName(string name)
        {
            return Get(a => a.Name == name)
                .FirstOrDefault();
        }
    }
}
