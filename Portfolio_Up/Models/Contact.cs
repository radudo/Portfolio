using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Portfolio_Up.Models
{
    public class Contact
    {
        [Required(ErrorMessage = "Enter your name")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Enter your email address")]
        [Display(Name = "Email")]
        [RegularExpression("^[a-z0-9_\\+-]+(\\.[a-z0-9_\\+-]+)*@[a-z0-9-]+(\\.[a-z0-9]+)*\\.([a-z]{2,4})$",
            ErrorMessage = "Enter a valid email address")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Enter a subject")]
        public string Subject { get; set; }
        [Required(ErrorMessage = "Enter a message")]
        public string Message { get; set; }
    }
}