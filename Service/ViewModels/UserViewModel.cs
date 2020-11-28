using System;

namespace Service.ViewModels
{
    public class UserViewModel
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Photo { get; set; }
        public string Address { get; set; }
        public DateTime? Birthdate { get; set; }
        public string Phone { get; set; }
    }
}
