using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Dolasci.Migrations
{
    public partial class mi : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "obrokId",
                table: "dolasci",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Obrok",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    naziv = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Obrok", x => x.id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_dolasci_obrokId",
                table: "dolasci",
                column: "obrokId");

            migrationBuilder.AddForeignKey(
                name: "FK_dolasci_Obrok_obrokId",
                table: "dolasci",
                column: "obrokId",
                principalTable: "Obrok",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_dolasci_Obrok_obrokId",
                table: "dolasci");

            migrationBuilder.DropTable(
                name: "Obrok");

            migrationBuilder.DropIndex(
                name: "IX_dolasci_obrokId",
                table: "dolasci");

            migrationBuilder.DropColumn(
                name: "obrokId",
                table: "dolasci");
        }
    }
}
