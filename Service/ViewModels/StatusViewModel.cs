using DataAccess.Models;

namespace Service.ViewModels
{
    public class StatusViewModel
    {
        public int OrderId { get; set; }
        public OrderStatus Status { get; set; } 
    }
}
