using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Dolasci.Services;
using Dolasci.DTO;
using Dolasci.Models;

namespace Dolasci.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PodrazumevaniDolazakController : ControllerBase
    {
        public readonly PodrazumevaniDolazakService servis;
        public readonly Context context;

        public PodrazumevaniDolazakController(PodrazumevaniDolazakService service)
        {
            this.servis = service;
        }

        [HttpGet]
        public ActionResult<List<PodrazumevaniDolazakDTO>> get()
        {
            return Ok(servis.get());
        }

        [HttpGet]
        [Route("[action]")]
        public ActionResult<List<PodrazumevaniDolazakDTO>> getByRadnikId(int id)
        {
            List<PodrazumevaniDolazakDTO> dto = servis.getByRadnikId(id);
            if (dto == null)
            {
                return NotFound();
            }

            return Ok(dto);
        }

        [HttpGet]
        [Route("[action]")]
        public ActionResult<PodrazumevaniDolazakDTO> getById(int id)
        {
            PodrazumevaniDolazakDTO dto = servis.getById(id);
            if (dto == null)
            {
                return NotFound();
            }

            return Ok(dto);
        }

        [HttpPost]
        public ActionResult<PodrazumevaniDolazakDTO> post(PodrazumevaniDolazakDTO dto)
        {
            return Ok(servis.post(dto));
        }

        [HttpPut]
        public ActionResult<PodrazumevaniDolazakDTO> put(int id, [FromBody] PodrazumevaniDolazakDTO dto)
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
        public ActionResult<PodrazumevaniDolazakDTO> delete(int id)
        {
            return Ok(servis.delete(id));
        }
    }
}