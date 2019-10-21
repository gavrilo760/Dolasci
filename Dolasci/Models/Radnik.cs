using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Dolasci.Models
{
    public class Radnik
    {
        
        public int? id { get; set; }
        [Required]
        public string ime { get; set; }
        [Required]
        public string prezime { get; set; }
        [Required]
        public string adresa { get; set; }
        [Required]
        public DateTime datumRodjenja { get; set; }
        [Required]
        public DateTime datumZaposlenja { get; set; }
        public string brojTelefona { get; set; }

        public bool aktivan { get; set; }
        

        public virtual List<Dolazak> dolasci { get; set; }
    }
}
