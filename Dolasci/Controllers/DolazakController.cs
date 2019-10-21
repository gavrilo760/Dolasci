using System;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Dolasci.Services;
using Dolasci.Models;
using Dolasci.DTO;


namespace Dolasci.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DolazakController : ControllerBase
    {
        public readonly DolazakService servis;
        public readonly Context context;

        public DolazakController(DolazakService service)
        {
            this.servis = service;
        }

        [HttpGet]
        public ActionResult<List<DolazakDTO>> get()
        {
            return Ok(servis.get());
        }

        [HttpGet]
        [Route("[action]")]
        public ActionResult<List<Dolazak>> getPretraga(int? godina, int? mesec, int? dan, int? radnikId)
        {

            List<DolazakDTO> dto = this.servis.getPretraga(godina, mesec, radnikId, dan);
            return Ok(dto);

            
        }

        [HttpGet]
        [Route("[action]")]
        public ActionResult<List<DolazakDTO>> getByRadnikId(int id)
        {
            List<DolazakDTO> dto = servis.getByRadnikId(id);
            if (dto == null)
            {
                return NotFound();
            }

            return Ok(dto);
        }

        [HttpGet]
        [Route("[action]")]
        public ActionResult <DolazakDTO> getById(int id)
        {
            DolazakDTO dto = servis.getById(id);
            if (dto == null)
            {
                return NotFound();
            }

            return Ok(dto);
        }

        [HttpPost]
        public ActionResult<DolazakDTO> post(DolazakDTO dto)
        {
            return Ok(servis.post(dto));
        }

        [HttpPut]
        public ActionResult<DolazakDTO> put(int id, [FromBody] DolazakDTO dto)
        {
            
            var o = servis.update(id, dto);
            if (o != null)
                return Ok(o);

            else
            {
                return BadRequest();
            }
        }

        [HttpDelete]
        public ActionResult<DolazakDTO> delete(int id)
        {
            return Ok(servis.delete(id));
        }
    }
}