namespace DataAccess.Models
{
    public class BookToGenre
    {
        public int BookId { get; set; }
        public Genre Genre { get; set; }

        public virtual Book Book { get; set; }
    }
}
