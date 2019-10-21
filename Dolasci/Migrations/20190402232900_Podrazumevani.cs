using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Dolasci.Migrations
{
    public partial class Podrazumevani : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "podrazumevaniDolasci",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    radnikId = table.Column<int>(nullable: false),
                    dosaoU = table.Column<DateTime>(nullable: false),
                    otisaoU = table.Column<DateTime>(nullable: false),
                    obrokId = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_podrazumevaniDolasci", x => x.id);
                    table.ForeignKey(
                        name: "FK_podrazumevaniDolasci_obroci_obrokId",
                        column: x => x.obrokId,
                        principalTable: "obroci",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_podrazumevaniDolasci_radnici_radnikId",
                        column: x => x.radnikId,
                        principalTable: "radnici",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_podrazumevaniDolasci_obrokId",
                table: "podrazumevaniDolasci",
                column: "obrokId");

            migrationBuilder.CreateIndex(
                name: "IX_podrazumevaniDolasci_radnikId",
                table: "podrazumevaniDolasci",
                column: "radnikId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "podrazumevaniDolasci");
        }
    }
}
