using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class BookToGenreRepository : GenericRepository<BookToGenre>
    {
        public BookToGenreRepository(ApplicationContext context) : base(context) { }
    }
}
