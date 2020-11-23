using DataAccess.Core;
using DataAccess.Models;
using System.Linq;

namespace DataAccess.Repositories
{
    public class RateRepository : GenericRepository<Rate>
    {
        public RateRepository(ApplicationContext context) : base(context) { }

        public int GetSumUserBookRates(string userId, int bookId)
        {
            return Get(r => r.UserId == userId && r.BookId == bookId)
                .ToList()
                .Sum(r => r.Value);
        }
    }
}
