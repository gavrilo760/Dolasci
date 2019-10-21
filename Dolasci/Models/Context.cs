using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Dolasci.Models
{
    public class Context:DbContext
    {
        public Context(DbContextOptions<Context> options): base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           
        }

        public DbSet<PodrazumevaniDolazak> podrazumevaniDolasci { get; set; }
        public DbSet<Radnik> radnici { get; set; }
        public DbSet<Dolazak> dolasci { get; set; }
        public DbSet<Obrok> obroci { get; set; }

    }
}
