﻿// <auto-generated />
using System;
using Dolasci.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Dolasci.Migrations
{
    [DbContext(typeof(Context))]
    [Migration("20190129103815_mi")]
    partial class mi
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.1-servicing-10028")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Dolasci.Models.Dolazak", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("dosaoU");

                    b.Property<int>("obrokId");

                    b.Property<DateTime>("otisaoU");

                    b.Property<int>("radnikID");

                    b.HasKey("id");

                    b.HasIndex("obrokId");

                    b.HasIndex("radnikID");

                    b.ToTable("dolasci");
                });

            modelBuilder.Entity("Dolasci.Models.Obrok", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("naziv");

                    b.HasKey("id");

                    b.ToTable("Obrok");
                });

            modelBuilder.Entity("Dolasci.Models.Radnik", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("adresa")
                        .IsRequired();

                    b.Property<DateTime>("datumRodjenja");

                    b.Property<DateTime>("datumZaposlenja");

                    b.Property<string>("ime")
                        .IsRequired();

                    b.Property<string>("prezime")
                        .IsRequired();

                    b.HasKey("id");

                    b.ToTable("radnici");
                });

            modelBuilder.Entity("Dolasci.Models.Dolazak", b =>
                {
                    b.HasOne("Dolasci.Models.Obrok", "obrok")
                        .WithMany("dolasci")
                        .HasForeignKey("obrokId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Dolasci.Models.Radnik", "radnik")
                        .WithMany("dolasci")
                        .HasForeignKey("radnikID")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
