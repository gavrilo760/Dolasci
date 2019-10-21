using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Dolasci.Models;
using Dolasci.DTO;
using AutoMapper;

namespace Dolasci.Services
{
    public class RadnikService
    {
        public Context context;
        public IMapper mapper;

        public RadnikService(Context contexti, IMapper mapper)
        {
            this.context = contexti;
            this.mapper = mapper;
        }

        public List<RadnikDTO> get()
        {
            return mapper.Map<List<Radnik>, List<RadnikDTO>>(context.radnici.ToList());
        }

        public RadnikDTO getById(int id)
        {
            Radnik entity = context.radnici.Find(id);

            if(entity == null)
            {
                return null;
            }

            

            RadnikDTO dto = mapper.Map<Radnik, RadnikDTO>(entity);
            return dto;
        }

        public RadnikDTO delete(int id)
        {
            Radnik entity = context.radnici.Find(id);
            context.radnici.Remove(entity);
            context.SaveChanges();
            return mapper.Map<Radnik, RadnikDTO>(entity);
        }

        public RadnikDTO update(int id, RadnikDTO dto)
        {
            Radnik entity = context.radnici.FirstOrDefault(e => e.id == id);

            if(!string.IsNullOrEmpty(dto.ime) && dto.ime != null)
                entity.ime = dto.ime;
            if (!string.IsNullOrEmpty(dto.prezime) && dto.prezime != null)
                entity.prezime = dto.prezime;
            if (dto.datumRodjenja != null)
                entity.datumRodjenja = dto.datumRodjenja;
            if (dto.datumZaposlenja != null)
                entity.datumZaposlenja = dto.datumZaposlenja;
            if (!string.IsNullOrEmpty(dto.adresa) && dto.adresa != null)
                entity.adresa = dto.adresa;
            if (!string.IsNullOrEmpty(dto.brojTelefona) && dto.brojTelefona != null)
                entity.brojTelefona = dto.brojTelefona;
            if (dto.aktivan == true)
                entity.aktivan = dto.aktivan;

            try
            {
                context.radnici.Update(entity);
                context.SaveChanges();
                return mapper.Map<Radnik, RadnikDTO>(entity);
            }

            catch(Exception e)
            {
                return null;
            }
        }

        public RadnikDTO post(RadnikDTO dto)
        {
            Radnik entity = mapper.Map<RadnikDTO, Radnik>(dto);
            context.radnici.Add(entity);
            context.SaveChanges();
            return dto;
        }
    }
}
