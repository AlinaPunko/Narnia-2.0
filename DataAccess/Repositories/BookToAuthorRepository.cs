using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class BookToAuthorRepository : GenericRepository<BookToAuthor>
    {
        public BookToAuthorRepository(ApplicationContext context) : base(context) { }
    }
}
