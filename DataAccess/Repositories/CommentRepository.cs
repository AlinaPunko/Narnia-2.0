using DataAccess.Core;
using DataAccess.Models;
using System.Collections.Generic;
using System.Linq;

namespace DataAccess.Repositories
{
    public class CommentRepository : GenericRepository<Comment>
    {
        public CommentRepository(ApplicationContext context) : base(context) { }

        public IReadOnlyList<Comment> GetByBookId(int bookId)
        {
            return Get(c => c.BookId == bookId)
                .ToList();
        }
    }
}
