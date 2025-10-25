using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Recipes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Title = table.Column<string>(type: "varchar(200)", maxLength: 200, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Description = table.Column<string>(type: "varchar(1000)", maxLength: 1000, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Category = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    PrepTimeMinutes = table.Column<int>(type: "int", nullable: false),
                    CookTimeMinutes = table.Column<int>(type: "int", nullable: false),
                    Servings = table.Column<int>(type: "int", nullable: false),
                    Calories = table.Column<int>(type: "int", nullable: false),
                    Image = table.Column<string>(type: "varchar(500)", maxLength: 500, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Tags = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Instructions = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Difficulty = table.Column<string>(type: "varchar(20)", maxLength: 20, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Recipes", x => x.Id);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Ingredients",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Amount = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Unit = table.Column<string>(type: "varchar(20)", maxLength: 20, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Notes = table.Column<string>(type: "varchar(200)", maxLength: 200, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    RecipeId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ingredients", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Ingredients_Recipes_RecipeId",
                        column: x => x.RecipeId,
                        principalTable: "Recipes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

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

            migrationBuilder.CreateIndex(
                name: "IX_Ingredients_RecipeId",
                table: "Ingredients",
                column: "RecipeId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Ingredients");

            migrationBuilder.DropTable(
                name: "Recipes");
        }
    }
}
