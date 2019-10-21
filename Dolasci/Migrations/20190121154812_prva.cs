using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Dolasci.Migrations
{
    public partial class prva : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "radnici",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ime = table.Column<string>(nullable: false),
                    prezime = table.Column<string>(nullable: false),
                    adresa = table.Column<string>(nullable: false),
                    datumRodjenja = table.Column<DateTime>(nullable: false),
                    datumZaposlenja = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_radnici", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "dolasci",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    radnikID = table.Column<int>(nullable: false),
                    dosaoU = table.Column<DateTime>(nullable: false),
                    otisaoU = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_dolasci", x => x.id);
                    table.ForeignKey(
                        name: "FK_dolasci_radnici_radnikID",
                        column: x => x.radnikID,
                        principalTable: "radnici",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_dolasci_radnikID",
                table: "dolasci",
                column: "radnikID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "dolasci");

            migrationBuilder.DropTable(
                name: "radnici");
        }
    }
}
