using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dolasci.Models;
using Dolasci.DTO;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace Dolasci.Services
{
    public class PodrazumevaniDolazakService
    {
        public Context context;
        public IMapper mapper;

        public PodrazumevaniDolazakService(Context contexti, IMapper mapper)
        {
            this.context = contexti;
            this.mapper = mapper;
        }

        public List<PodrazumevaniDolazakDTO> get()
        {
            
            return mapper.Map<List<PodrazumevaniDolazak>, List<PodrazumevaniDolazakDTO>>(context.podrazumevaniDolasci.Include(pd => pd.radnik).ToList());
        }

        public List<PodrazumevaniDolazakDTO> getByRadnikId(int id)
        {
            List<PodrazumevaniDolazak> entity = context.podrazumevaniDolasci.Where(d => d.radnikId == id).ToList();

            if (entity == null)
            {
                return null;
            }



            List<PodrazumevaniDolazakDTO> dto = mapper.Map<List<PodrazumevaniDolazak>, List<PodrazumevaniDolazakDTO>>(entity);
            return dto;
        }

        public PodrazumevaniDolazakDTO getById(int id)
        {
            PodrazumevaniDolazak entity = context.podrazumevaniDolasci.FirstOrDefault(d => d.id == id);

            if (entity == null)
            {
                return null;
            }



            PodrazumevaniDolazakDTO dto = mapper.Map<PodrazumevaniDolazak, PodrazumevaniDolazakDTO>(entity);
            return dto;
        }

        public PodrazumevaniDolazakDTO delete(int id)
        {
            PodrazumevaniDolazak entity = context.podrazumevaniDolasci.Find(id);
            context.podrazumevaniDolasci.Remove(entity);
            context.SaveChanges();
            return mapper.Map<PodrazumevaniDolazak, PodrazumevaniDolazakDTO>(entity);
        }

        public PodrazumevaniDolazakDTO update(int id, PodrazumevaniDolazakDTO dto)
        {
            PodrazumevaniDolazak entity = context.podrazumevaniDolasci.FirstOrDefault(e => e.id == id);

            entity.radnikId = dto.radnikId;
            entity.otisaoU = dto.otisaoU;
            entity.dosaoU = dto.dosaoU;
            entity.obrokId = dto.obrokId;

            try
            {
                context.podrazumevaniDolasci.Update(entity);
                context.SaveChanges();
                return mapper.Map<PodrazumevaniDolazak, PodrazumevaniDolazakDTO>(entity);
            }

            catch (Exception e)
            {
                return null;
            }
        }

        public PodrazumevaniDolazakDTO post(PodrazumevaniDolazakDTO dto)
        {
            PodrazumevaniDolazak entity = mapper.Map<PodrazumevaniDolazakDTO, PodrazumevaniDolazak>(dto);
            entity.id = null;
            try
            {
                context.podrazumevaniDolasci.Add(entity);
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
