using DataAccess.Models;
using System;
using System.Collections.Generic;

namespace Service.ViewModels
{
    public class OrderViewModel
    {
        public int? Id { get; set; }
        public DateTime? Date { get; set; }
        public string? UserId { get; set; }
        public float Sum { get; set; }
        public List<BookViewModel> Books { get; set; }
        public User? User { get; set; }
        public string? Status { get; set; }
    }
}
