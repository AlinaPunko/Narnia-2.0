using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace DataAccess.Models
{
    public class User : IdentityUser
    {
        public string Name { get; set; }
        public DateTime? Birthdate { get; set; }
        public string Photo { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }

        public virtual ICollection<FavoriteBook> FavoriteBooks { get; set; }

        public virtual ICollection<Rate> Rates { get; set; }

        public User() { }
    }
}
