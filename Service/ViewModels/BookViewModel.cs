using DataAccess.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Service.ViewModels
{
    public class BookViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public int PagesCount { get; set; }
        public int PublishingYear { get; set; }
        public float Price { get; set; }
        public int Rating { get; set; }
        public int Count { get; set; }
        public int Amount { get; set; }

        public IReadOnlyList<string> Authors { get; set; }
        public IReadOnlyList<string> Genres { get; set; }
        public IReadOnlyList<Comment> Comments { get; set; }
    }
}
