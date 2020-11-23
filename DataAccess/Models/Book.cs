using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataAccess.Models
{
    public class Book
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string EncodedPhoto { get; set; }
        public int PagesCount { get; set; }
        public int PublishingYear { get; set; }
        public float Price { get; set; }
        public int Rating { get; set; }
        public int Count { get; set; }

        public virtual ICollection<FavoriteBook> FavoriteBooks { get; set; }
        public virtual ICollection<OrderToBook> OrderToBooks { get; set; }
        public virtual ICollection<BookToAuthor> BookToAuthors { get; set; }
        public virtual ICollection<BookToGenre> BookToGenres { get; set; }

        public virtual ICollection<Rate> Rates { get; set; }
    }
}
