using Microsoft.EntityFrameworkCore.Migrations;

namespace Dolasci.Migrations
{
    public partial class asdf : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "brojTelefona",
                table: "radnici",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "brojTelefona",
                table: "radnici");
        }
    }
}
