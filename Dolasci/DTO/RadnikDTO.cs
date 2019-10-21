using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Dolasci.DTO
{
    public class RadnikDTO
    {
        public int? id { get; set; }
        public string ime { get; set; }
        public string prezime { get; set; }
        public string adresa { get; set; }
        public DateTime datumRodjenja { get; set; }
        public DateTime datumZaposlenja { get; set; }
        public string brojTelefona { get; set; }
        public bool aktivan { get; set; }
    }
}
