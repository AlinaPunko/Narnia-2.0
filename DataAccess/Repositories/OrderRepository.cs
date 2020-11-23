using DataAccess.Core;
using DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DataAccess.Repositories
{
    public class OrderRepository : GenericRepository<Order>
    {
        public OrderRepository(ApplicationContext context) : base(context) { }

        public IEnumerable<Order> GetByUserId(string userId)
        {
            return Get(o => o.UserId == userId).ToList();
        }

        public IEnumerable<Order> GetPending()
        {
            return Get(o => o.Status == OrderStatus.Pending);
        }
    }
}
