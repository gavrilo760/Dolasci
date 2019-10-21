using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dolasci.Models;
using Dolasci.DTO;
using Dolasci;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace Dolasci.Services
{
    public class DolazakService
    {
        public Context context;
        public IMapper mapper;

        public DolazakService(Context contexti, IMapper mapper)
        {
            this.context = contexti;
            this.mapper = mapper;
        }

        public List<DolazakDTO> get()
        {
            return mapper.Map<List<Dolazak>, List<DolazakDTO>>(context.dolasci.Include(d => d.radnik).ToList());
        }

        public List<DolazakDTO> getByRadnikId(int id)
        {
            List<Dolazak> entity = context.dolasci.Where(d => d.radnikId == id).ToList();

            if (entity == null)
            {
                return null;
            }



            List<DolazakDTO> dto = mapper.Map<List<Dolazak>, List<DolazakDTO>>(entity);
            return dto;
        }

        public List<DolazakDTO> getPretraga(int? godina,int? mesec, int? radnikId, int? dan)
        {

            List<Dolazak> dolasci = this.context.dolasci.Include(d => d.radnik).ToList();
            List<Dolazak> dolasciPretraga = new List<Dolazak>();


            if (dan != 0 && dan != null)
            {
                dolasci = dolasci.Where(d => d.dosaoU.Day == dan).ToList();
            }

            if (mesec != 0 && mesec != null)
            {
                dolasci = dolasci.Where(d => d.dosaoU.Month == mesec).ToList();
            }

            if (radnikId != 0 && radnikId != null)
            {
                dolasci = dolasci.Where(d => d.radnikId == radnikId).ToList();
            }


            if (godina != 0 && godina != null)
            {
                dolasci = dolasci.Where(d => d.dosaoU.Year == godina).ToList();
            }

            
            

         

            List<DolazakDTO> dto = mapper.Map<List<Dolazak>, List<DolazakDTO>>(dolasci);
            return dto;
        }

        public DolazakDTO getById(int id)
        {
            Dolazak entity = context.dolasci.FirstOrDefault(d => d.id == id);

            if (entity == null)
            {
                return null;
            }



            DolazakDTO dto = mapper.Map<Dolazak, DolazakDTO>(entity);
            return dto;
        }

        public DolazakDTO delete(int id)
        {
            Dolazak entity = context.dolasci.Find(id);
            context.dolasci.Remove(entity);
            context.SaveChanges();
            return mapper.Map<Dolazak, DolazakDTO>(entity);
        }

        public DolazakDTO update(int id, DolazakDTO dto)
        {
            Dolazak entity = context.dolasci.FirstOrDefault(e => e.id == id);

            entity.radnikId = dto.radnikId;
            entity.otisaoU = dto.otisaoU;
            entity.dosaoU = dto.dosaoU;
            entity.obrokId = dto.obrokId;

            try
            {
                context.dolasci.Update(entity);
                context.SaveChanges();
                return mapper.Map<Dolazak, DolazakDTO>(entity);
            }

            catch (Exception e)
            {
                return null;
            }
        }

        public DolazakDTO post(DolazakDTO dto)
        {
            Dolazak entity = mapper.Map<DolazakDTO, Dolazak>(dto);
            entity.id = null;
            try
            {
                context.dolasci.Add(entity);
                context.SaveChanges();
            }

            catch(Exception e)
            {
                return null;
            }
            return dto;
        }
    }
}
