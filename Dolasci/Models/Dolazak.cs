using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Dolasci.Models
{
    public class Dolazak
    {
        
        public int? id { get; set; }
        [Required]
        public int radnikId { get; set; }
        [Required]
        public DateTime dosaoU { get; set; }
        
        public DateTime otisaoU { get; set; }
        
        public int? obrokId { get; set; }

        public virtual Radnik radnik {get; set;}
        public virtual Obrok obrok { get; set; }
    }
}
