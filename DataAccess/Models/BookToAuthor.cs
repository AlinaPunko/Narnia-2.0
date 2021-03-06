﻿namespace DataAccess.Models
{
    public class BookToAuthor
    {
        public int BookId { get; set; }
        public int AuthorId { get; set; }

        public virtual Book Book { get; set; }
        public virtual Author Author { get; set; }
    }
}
