using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dolasci.DTO
{
    public class DolazakDTO
    {
        public int id { get; set; }
        
        public int radnikId { get; set; }
        
        public DateTime dosaoU { get; set; }
        
        public DateTime otisaoU { get; set; }

        public int? obrokId { get; set; }

        public RadnikDTO radnik { get; set; }
    }
}
