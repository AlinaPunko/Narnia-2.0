using System;
using System.ComponentModel.DataAnnotations;

namespace Service.ViewModels
{
    public class RegisterViewModel
    {

        [EmailAddress]
        [Required(ErrorMessage = "Email is required")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
        public string Name { get; set; }
        public DateTime? Birthdate { get; set; }
        public string Photo { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
    }
}
