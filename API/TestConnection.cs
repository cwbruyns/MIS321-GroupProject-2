using Microsoft.EntityFrameworkCore;
using API.Data;

namespace API
{
    public class TestConnection
    {
        public static async Task TestDatabaseConnection()
        {
            try
            {
                var options = new DbContextOptionsBuilder<RecipeDbContext>()
                    .UseMySql("Server=tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;Port=3306;Database=lf23m6rmkyg4x63j;Uid=aj1w3ofki23qheqx;Pwd=t8t4wjn119jnbkfz;", 
                        new MySqlServerVersion(new Version(8, 0, 0)))
                    .Options;

                using var context = new RecipeDbContext(options);
                
                // Test basic connection
                var canConnect = await context.Database.CanConnectAsync();
                Console.WriteLine($"Can connect to database: {canConnect}");
                
                if (canConnect)
                {
                    // Test if tables exist
                    var recipeCount = await context.Recipes.CountAsync();
                    Console.WriteLine($"Number of recipes in database: {recipeCount}");
                    
                    var ingredientCount = await context.Ingredients.CountAsync();
                    Console.WriteLine($"Number of ingredients in database: {ingredientCount}");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Database connection error: {ex.Message}");
                Console.WriteLine($"Full error: {ex}");
            }
        }
    }
}
