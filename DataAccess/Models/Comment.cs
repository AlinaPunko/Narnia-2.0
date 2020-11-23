using System.ComponentModel.DataAnnotations.Schema;

namespace DataAccess.Models
{
    public class Comment
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string UserId { get; set; }
        public string Text { get; set; }
        public int BookId { get; set;}

        public virtual Book Book { get; set; }
        public virtual User User { get; set; }
    }
}
