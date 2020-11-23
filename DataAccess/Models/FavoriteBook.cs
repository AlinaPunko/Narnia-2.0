namespace DataAccess.Models
{
    public class FavoriteBook
    {
        public int BookId { get; set; }
        public string UserId { get; set; }

        public virtual Book Book { get; set; }
        public virtual User User { get; set; }
    }
}
