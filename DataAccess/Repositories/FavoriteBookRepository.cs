using DataAccess.Core;
using DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DataAccess.Repositories
{
    public class FavoriteBookRepository : GenericRepository<FavoriteBook>
    {
        public FavoriteBookRepository(ApplicationContext context) : base(context) { }

        public IEnumerable<FavoriteBook> GetByUserId(string userId)
        {
            return Get(b => b.UserId == userId).ToList();
        }
    }
}
