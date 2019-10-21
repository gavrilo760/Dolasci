using Microsoft.EntityFrameworkCore.Migrations;

namespace Dolasci.Migrations
{
    public partial class mm : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_dolasci_Obrok_obrokId",
                table: "dolasci");

            migrationBuilder.AlterColumn<int>(
                name: "obrokId",
                table: "dolasci",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_dolasci_Obrok_obrokId",
                table: "dolasci",
                column: "obrokId",
                principalTable: "Obrok",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_dolasci_Obrok_obrokId",
                table: "dolasci");

            migrationBuilder.AlterColumn<int>(
                name: "obrokId",
                table: "dolasci",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_dolasci_Obrok_obrokId",
                table: "dolasci",
                column: "obrokId",
                principalTable: "Obrok",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
