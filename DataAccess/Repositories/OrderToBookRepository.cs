using DataAccess.Core;
using DataAccess.Models;

namespace DataAccess.Repositories
{
    public class OrderToBookRepository : GenericRepository<OrderToBook>
    {
        public OrderToBookRepository(ApplicationContext context) : base(context) { }
    }
}
