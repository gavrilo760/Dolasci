using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dolasci.DTO;
using Dolasci.Models;
using AutoMapper;

namespace Dolasci.Services
{
    public class ObrokService
    {
        public Context context;
        public IMapper mapper;

        public ObrokService(Context contexti, IMapper mapper)
        {
            this.context = contexti;
            this.mapper = mapper;
        }

        public List<ObrokDTO> get()
        {
            return mapper.Map<List<Obrok>, List<ObrokDTO>>(context.obroci.ToList());
        }

        public ObrokDTO getById(int id)
        {
            var entity = context.obroci.Find(id);

            if (entity == null)
            {
                return null;
            }



            var dto = mapper.Map<Obrok, ObrokDTO>(entity);
            return dto;
        }

        public ObrokDTO delete(int id)
        {
            var entity = context.obroci.Find(id);
            context.obroci.Remove(entity);
            context.SaveChanges();
            return mapper.Map<Obrok, ObrokDTO>(entity);
        }

        public ObrokDTO deleteP(int id)
        {
            var entity = context.obroci.Find(id);
            context.obroci.Remove(entity);
            context.SaveChanges();
            return mapper.Map<Obrok, ObrokDTO>(entity);
        }

        public ObrokDTO update(int id, ObrokDTO dto)
        {
            var entity = context.obroci.FirstOrDefault(e=> e.id == id);

            entity.naziv = dto.naziv;

            
                context.obroci.Update(entity);
                context.SaveChanges();
                
                var r = mapper.Map<Obrok, ObrokDTO>(entity);
            return r;
        }

        public ObrokDTO post(ObrokDTO dto)
        {
            var entity = mapper.Map<ObrokDTO, Obrok>(dto);
            try
            {
                context.obroci.Add(entity);
                context.SaveChanges();
            }

            catch (Exception e)
            {
                return null;
            }
            return dto;
        }
    
}
}
