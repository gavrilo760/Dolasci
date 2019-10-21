using Microsoft.EntityFrameworkCore.Migrations;

namespace Dolasci.Migrations
{
    public partial class initi : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_dolasci_radnici_radnikID",
                table: "dolasci");

            migrationBuilder.RenameColumn(
                name: "radnikID",
                table: "dolasci",
                newName: "radnikId");

            migrationBuilder.RenameIndex(
                name: "IX_dolasci_radnikID",
                table: "dolasci",
                newName: "IX_dolasci_radnikId");

            migrationBuilder.AddForeignKey(
                name: "FK_dolasci_radnici_radnikId",
                table: "dolasci",
                column: "radnikId",
                principalTable: "radnici",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_dolasci_radnici_radnikId",
                table: "dolasci");

            migrationBuilder.RenameColumn(
                name: "radnikId",
                table: "dolasci",
                newName: "radnikID");

            migrationBuilder.RenameIndex(
                name: "IX_dolasci_radnikId",
                table: "dolasci",
                newName: "IX_dolasci_radnikID");

            migrationBuilder.AddForeignKey(
                name: "FK_dolasci_radnici_radnikID",
                table: "dolasci",
                column: "radnikID",
                principalTable: "radnici",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
