using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Dolasci.Models;
using Dolasci.DTO;

namespace Dolasci
{
    public class Mapiranje:Profile
    {
        public Mapiranje()
        {
            CreateMap<Radnik, RadnikDTO>();
            CreateMap<RadnikDTO, Radnik>();

            CreateMap<Dolazak, DolazakDTO>();
            CreateMap<DolazakDTO, Dolazak>();

            CreateMap<Obrok, ObrokDTO>();
            CreateMap<ObrokDTO, Obrok>();

            CreateMap<PodrazumevaniDolazak, PodrazumevaniDolazakDTO>();
            CreateMap<PodrazumevaniDolazakDTO, PodrazumevaniDolazak>();
            
        }
    }
}
