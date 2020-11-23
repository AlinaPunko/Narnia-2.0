﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataAccess.Models
{
    public class Author
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public DateTime Birthdate { get; set; }

        public virtual ICollection<BookToAuthor> BookToAuthors { get; set; }
    }
}
