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
    public class ObrokController : ControllerBase
    {
        public readonly ObrokService servis;
        public readonly Context context;

        public ObrokController(ObrokService service)
        {
            this.servis = service;
        }

        [HttpGet]
        public ActionResult<List<ObrokDTO>> get()
        {
            return Ok(servis.get());
        }

        [HttpGet("{id}")]
        public ActionResult<ObrokDTO> getById(int id)
        {
            ObrokDTO dto = servis.getById(id);
            if (dto == null)
            {
                return NotFound();
            }

            return Ok(dto);
        }

        [HttpPost]
        public ActionResult<ObrokDTO> post(ObrokDTO dto)
        {
            return Ok(servis.post(dto));
        }

        [HttpPut]
        public ActionResult<ObrokDTO> put(int id, [FromBody] ObrokDTO dto)
        {
            
            var o = servis.update(id, dto);
            
                return Ok(o);


            
        }

        [HttpDelete]
        public ActionResult<ObrokDTO> delete(int id)
        {
            return Ok(servis.delete(id));
        }
    }
}