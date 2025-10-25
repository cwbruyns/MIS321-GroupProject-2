using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class AddUserAuthentication : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 30);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 31);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 32);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 33);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 34);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 35);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 36);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 37);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 38);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 39);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 40);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 41);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 42);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 43);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 44);

            migrationBuilder.DeleteData(
                table: "Ingredients",
                keyColumn: "Id",
                keyValue: 45);

            migrationBuilder.DeleteData(
                table: "Recipes",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Recipes",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Recipes",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Recipes",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Recipes",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "Recipes",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsPublic",
                table: "Recipes",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedAt",
                table: "Recipes",
                type: "datetime(6)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Recipes",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Email = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Username = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    PasswordHash = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    FirstName = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    LastName = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Bio = table.Column<string>(type: "varchar(500)", maxLength: 500, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    AvatarUrl = table.Column<string>(type: "varchar(255)", maxLength: 255, nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    LastLoginAt = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "UserFavorites",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    RecipeId = table.Column<int>(type: "int", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserFavorites", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserFavorites_Recipes_RecipeId",
                        column: x => x.RecipeId,
                        principalTable: "Recipes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserFavorites_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Recipes_UserId",
                table: "Recipes",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_UserFavorites_RecipeId",
                table: "UserFavorites",
                column: "RecipeId");

            migrationBuilder.CreateIndex(
                name: "IX_UserFavorites_UserId_RecipeId",
                table: "UserFavorites",
                columns: new[] { "UserId", "RecipeId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_Email",
                table: "Users",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_Username",
                table: "Users",
                column: "Username",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Recipes_Users_UserId",
                table: "Recipes",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Recipes_Users_UserId",
                table: "Recipes");

            migrationBuilder.DropTable(
                name: "UserFavorites");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Recipes_UserId",
                table: "Recipes");

            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "Recipes");

            migrationBuilder.DropColumn(
                name: "IsPublic",
                table: "Recipes");

            migrationBuilder.DropColumn(
                name: "UpdatedAt",
                table: "Recipes");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Recipes");

            migrationBuilder.InsertData(
                table: "Recipes",
                columns: new[] { "Id", "Calories", "Category", "CookTimeMinutes", "Description", "Difficulty", "Image", "Instructions", "PrepTimeMinutes", "Servings", "Tags", "Title" },
                values: new object[,]
                {
                    { 1, 320, "breakfast", 5, "A nutritious and delicious breakfast bowl featuring creamy avocado, perfectly cooked eggs, and fresh tomatoes.", "Easy", "🥑", "", 5, 1, "vegetarian,quick,healthy", "Avocado Toast Bowl" },
                    { 2, 280, "lunch", 15, "A protein-packed salad with quinoa, fresh vegetables, and a tangy dressing that's perfect for lunch or dinner.", "Easy", "🥗", "", 10, 2, "vegan,gluten-free,high-protein", "Quinoa Power Salad" },
                    { 3, 420, "dinner", 20, "Perfectly grilled salmon fillets served with roasted seasonal vegetables for a healthy and satisfying dinner.", "Medium", "🐟", "", 10, 2, "low-carb,high-protein,omega-3", "Grilled Salmon & Veggies" },
                    { 4, 250, "breakfast", 0, "A refreshing and nutritious smoothie packed with antioxidants, protein, and natural sweetness.", "Easy", "🫐", "", 5, 1, "vegetarian,quick,antioxidants", "Berry Protein Smoothie" },
                    { 5, 380, "lunch", 25, "A nourishing bowl filled with roasted chickpeas, quinoa, and fresh vegetables topped with a creamy tahini dressing.", "Medium", "🥙", "", 15, 2, "vegan,high-fiber,plant-based", "Chickpea Buddha Bowl" }
                });

            migrationBuilder.InsertData(
                table: "Ingredients",
                columns: new[] { "Id", "Amount", "Name", "Notes", "RecipeId", "Unit" },
                values: new object[,]
                {
                    { 1, "1", "Avocado", "ripe", 1, "medium" },
                    { 2, "2", "Eggs", "free-range", 1, "large" },
                    { 3, "1/2", "Cherry tomatoes", "halved", 1, "cup" },
                    { 4, "2", "Whole grain bread", "toasted", 1, "slices" },
                    { 5, "1", "Olive oil", "extra virgin", 1, "tbsp" },
                    { 6, "1/4", "Salt", "to taste", 1, "tsp" },
                    { 7, "1/4", "Black pepper", "freshly ground", 1, "tsp" },
                    { 8, "1", "Quinoa", "uncooked", 2, "cup" },
                    { 9, "2", "Baby spinach", "fresh", 2, "cups" },
                    { 10, "1", "Cherry tomatoes", "halved", 2, "cup" },
                    { 11, "1", "Cucumber", "diced", 2, "medium" },
                    { 12, "1", "Red bell pepper", "diced", 2, "medium" },
                    { 13, "1/4", "Red onion", "thinly sliced", 2, "cup" },
                    { 14, "2", "Lemon juice", "fresh", 2, "tbsp" },
                    { 15, "3", "Olive oil", "extra virgin", 2, "tbsp" },
                    { 16, "1/2", "Salt", "to taste", 2, "tsp" },
                    { 17, "1/4", "Black pepper", "freshly ground", 2, "tsp" },
                    { 18, "2", "Salmon fillets", "skin-on", 3, "6-oz" },
                    { 19, "1", "Broccoli", "cut into florets", 3, "head" },
                    { 20, "2", "Carrots", "cut into sticks", 3, "medium" },
                    { 21, "1", "Zucchini", "sliced", 3, "medium" },
                    { 22, "3", "Olive oil", "divided", 3, "tbsp" },
                    { 23, "2", "Garlic", "minced", 3, "cloves" },
                    { 24, "1", "Lemon", "juiced", 3, "medium" },
                    { 25, "2", "Dill", "fresh, chopped", 3, "tbsp" },
                    { 26, "1", "Salt", "divided", 3, "tsp" },
                    { 27, "1/2", "Black pepper", "freshly ground", 3, "tsp" },
                    { 28, "1", "Mixed berries", "frozen", 4, "cup" },
                    { 29, "1/2", "Greek yogurt", "plain, non-fat", 4, "cup" },
                    { 30, "1/2", "Banana", "frozen", 4, "medium" },
                    { 31, "1/2", "Almond milk", "unsweetened", 4, "cup" },
                    { 32, "1", "Protein powder", "vanilla", 4, "scoop" },
                    { 33, "1", "Honey", "optional", 4, "tbsp" },
                    { 34, "1", "Chia seeds", "optional", 4, "tsp" },
                    { 35, "1", "Chickpeas", "15 oz, drained and rinsed", 5, "can" },
                    { 36, "1", "Quinoa", "uncooked", 5, "cup" },
                    { 37, "1", "Sweet potato", "cubed", 5, "large" },
                    { 38, "2", "Kale", "chopped", 5, "cups" },
                    { 39, "1", "Red cabbage", "shredded", 5, "cup" },
                    { 40, "2", "Tahini", "raw", 5, "tbsp" },
                    { 41, "2", "Lemon juice", "fresh", 5, "tbsp" },
                    { 42, "3", "Olive oil", "divided", 5, "tbsp" },
                    { 43, "1", "Cumin", "ground", 5, "tsp" },
                    { 44, "1", "Salt", "divided", 5, "tsp" },
                    { 45, "1/2", "Black pepper", "freshly ground", 5, "tsp" }
                });
        }
    }
}
