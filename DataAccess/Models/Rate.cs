using System.ComponentModel.DataAnnotations.Schema;

namespace DataAccess.Models
{
    public class Rate
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int BookId { get; set; }
        public string UserId { get; set; }
        public int Value { get; set; }

        public virtual User User { get; set; }
        public virtual Book Book { get; set; }
    }
}
