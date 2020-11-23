using DataAccess.Core;
using DataAccess.Models;
using System.Collections.Generic;
using System.Linq;

namespace DataAccess.Repositories
{
    public class BookRepository : GenericRepository<Book>
    {
        public BookRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<Book> GetAll()
        {
            return Get()
                .ToList();
        }
    }
}
