using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Dolasci.Migrations
{
    public partial class addmigrationasf : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_dolasci_Obrok_obrokId",
                table: "dolasci");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Obrok",
                table: "Obrok");

            migrationBuilder.RenameTable(
                name: "Obrok",
                newName: "obroci");

            migrationBuilder.AlterColumn<DateTime>(
                name: "otisaoU",
                table: "dolasci",
                nullable: true,
                oldClrType: typeof(DateTime));

            migrationBuilder.AddPrimaryKey(
                name: "PK_obroci",
                table: "obroci",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_dolasci_obroci_obrokId",
                table: "dolasci",
                column: "obrokId",
                principalTable: "obroci",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_dolasci_obroci_obrokId",
                table: "dolasci");

            migrationBuilder.DropPrimaryKey(
                name: "PK_obroci",
                table: "obroci");

            migrationBuilder.RenameTable(
                name: "obroci",
                newName: "Obrok");

            migrationBuilder.AlterColumn<DateTime>(
                name: "otisaoU",
                table: "dolasci",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Obrok",
                table: "Obrok",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_dolasci_Obrok_obrokId",
                table: "dolasci",
                column: "obrokId",
                principalTable: "Obrok",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
