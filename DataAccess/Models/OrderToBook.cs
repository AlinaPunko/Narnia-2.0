namespace DataAccess.Models
{
    public class OrderToBook
    {
        public int BookId { get; set; }
        public int OrderId { get; set; }
        public int Amount { get; set; }

        public virtual Order Order { get; set; }
        public virtual Book Book { get; set; }
    }
}
