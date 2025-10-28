using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class AddWellnessProfile : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "WellnessProfiles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    IsVegetarian = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    IsVegan = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    IsGlutenFree = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    IsDairyFree = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    IsNutFree = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    IsKeto = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    IsPaleo = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    IsLowCarb = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    IsLowFat = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    IsLowSodium = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    HasPeanuts = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    HasTreeNuts = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    HasShellfish = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    HasEggs = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    HasFish = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    HasSoy = table.Column<bool>(type: "tinyint(1)", nullable: false),
                    Goals = table.Column<string>(type: "varchar(500)", maxLength: 500, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    ActivityLevel = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    TargetCaloriesPerDay = table.Column<int>(type: "int", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WellnessProfiles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_WellnessProfiles_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_WellnessProfiles_UserId",
                table: "WellnessProfiles",
                column: "UserId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WellnessProfiles");
        }
    }
}



