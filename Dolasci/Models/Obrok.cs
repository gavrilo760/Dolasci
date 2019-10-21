using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dolasci.Models
{
    public class Obrok
    {
        public int? id { get; set; }
        public string naziv { get; set; }
        public virtual List<Dolazak> dolasci { get; set; }
    }
}
