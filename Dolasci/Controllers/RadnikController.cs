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
    public class RadnikController : ControllerBase
    {
        public readonly RadnikService servis;
        public readonly Context context;

        public RadnikController(RadnikService service)
        {
            this.servis = service;
        }

        [HttpGet]
        public ActionResult<List<RadnikDTO>> get()
        {
            return Ok(servis.get());
        }


        [HttpGet]
        [Route("[action]")]
        public ActionResult<RadnikDTO> getById(int id)
        {
            RadnikDTO dto = servis.getById(id);
            if(dto == null)
            {
                return NotFound();
            }

            return Ok(dto);
        }

        [HttpPost]
        public ActionResult<RadnikDTO> post(RadnikDTO dto)
        {
            return Ok(servis.post(dto));
        }

        [HttpPut]
        public ActionResult<RadnikDTO> put(int id, [FromBody] RadnikDTO dto)
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
        public ActionResult<RadnikDTO> delete(int id)
        {
            return Ok(servis.delete(id));
        }

    }
}