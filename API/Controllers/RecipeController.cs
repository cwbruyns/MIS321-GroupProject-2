using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Models;
using API.Data;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecipeController : ControllerBase
    {
        private readonly ILogger<RecipeController> _logger;
        private readonly RecipeDbContext _context;

        public RecipeController(ILogger<RecipeController> logger, RecipeDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet("test")]
        public IActionResult Test()
        {
            return Ok(new { message = "API is working!", timestamp = DateTime.Now });
        }

        [HttpGet("test-db")]
        public async Task<IActionResult> TestDatabase()
        {
            try
            {
                // Test database connection
                var canConnect = await _context.Database.CanConnectAsync();
                
                if (!canConnect)
                {
                    return StatusCode(500, new { 
                        error = "Cannot connect to database",
                        timestamp = DateTime.Now 
                    });
                }

                // Test if tables exist and have data
                var recipeCount = await _context.Recipes.CountAsync();
                var ingredientCount = await _context.Ingredients.CountAsync();
                
                return Ok(new {
                    message = "Database connection successful!",
                    canConnect = canConnect,
                    recipeCount = recipeCount,
                    ingredientCount = ingredientCount,
                    timestamp = DateTime.Now
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Database connection test failed");
                return StatusCode(500, new { 
                    error = ex.Message,
                    timestamp = DateTime.Now 
                });
            }
        }

        [HttpGet("init-db")]
        public async Task<IActionResult> InitializeDatabase()
        {
            try
            {
                // Ensure database is created
                await _context.Database.EnsureCreatedAsync();
                
                // Check if we have data
                var recipeCount = await _context.Recipes.CountAsync();
                
                if (recipeCount == 0)
                {
                    await SeedDatabaseAsync();
                    recipeCount = await _context.Recipes.CountAsync();
                }
                
                return Ok(new { 
                    message = "Database initialized successfully!", 
                    recipeCount = recipeCount,
                    timestamp = DateTime.Now 
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error initializing database");
                return StatusCode(500, new { error = ex.Message });
            }
        }

        [HttpGet("reset-db")]
        public async Task<IActionResult> ResetDatabase()
        {
            try
            {
                // Clear existing data and reseed with new recipes
                await SeedDatabaseAsync();
                
                var recipeCount = await _context.Recipes.CountAsync();
                
                return Ok(new { 
                    message = "Database reset successfully with new recipes!", 
                    recipeCount = recipeCount,
                    timestamp = DateTime.Now 
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error resetting database");
                return StatusCode(500, new { error = ex.Message });
            }
        }

        [HttpGet]
        public async Task<IEnumerable<Recipe>> GetRecipes()
        {
            try
            {
                // Check if database has data, if not seed it
                if (!_context.Recipes.Any())
                {
                    await SeedDatabaseAsync();
                }
                
                return await _context.Recipes
                    .Include(r => r.Ingredients)
                    .ToListAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error fetching recipes from database");
                // Return empty list instead of fallback to ensure database is used
                return new List<Recipe>();
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Recipe>> GetRecipe(int id)
        {
            try
            {
                var recipe = await _context.Recipes
                    .Include(r => r.Ingredients)
                    .FirstOrDefaultAsync(r => r.Id == id);
                
            if (recipe == null)
            {
                return NotFound();
            }
            return recipe;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error fetching recipe {Id}", id);
                return StatusCode(500, new { error = "Database error occurred" });
            }
        }

        [HttpGet("category/{category}")]
        public async Task<IEnumerable<Recipe>> GetRecipesByCategory(string category)
        {
            try
            {
                return await _context.Recipes
                    .Include(r => r.Ingredients)
                    .Where(r => r.Category.ToLower() == category.ToLower())
                    .ToListAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error fetching recipes by category {Category}", category);
                return new List<Recipe>();
            }
        }

        [HttpGet("search")]
        public async Task<IEnumerable<Recipe>> SearchRecipes([FromQuery] string query)
        {
            try
        {
            if (string.IsNullOrEmpty(query))
                    return await _context.Recipes
                        .Include(r => r.Ingredients)
                        .ToListAsync();

            var lowerQuery = query.ToLower();
                return await _context.Recipes
                    .Include(r => r.Ingredients)
                    .Where(r => 
                r.Title.ToLower().Contains(lowerQuery) ||
                r.Description.ToLower().Contains(lowerQuery) ||
                r.Tags.Any(t => t.ToLower().Contains(lowerQuery)) ||
                r.Ingredients.Any(i => i.Name.ToLower().Contains(lowerQuery))
                    )
                    .ToListAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error searching recipes with query {Query}", query);
                return new List<Recipe>();
            }
        }

        private List<Recipe> GetSampleRecipes()
        {
            return new List<Recipe>
            {
                new Recipe
                {
                    Id = 1,
                    Title = "Avocado Toast Bowl",
                    Description = "A nutritious and delicious breakfast bowl featuring creamy avocado, perfectly cooked eggs, and fresh tomatoes.",
                    Category = "breakfast",
                    PrepTimeMinutes = 5,
                    CookTimeMinutes = 5,
                    Servings = 1,
                    Calories = 320,
                    Image = "🥑",
                    Tags = new List<string> { "vegetarian", "quick", "healthy" },
                    Difficulty = "Easy",
                    Ingredients = new List<Ingredient>
                    {
                        new Ingredient { Id = 1, Name = "Avocado", Amount = "1", Unit = "medium", Notes = "ripe", RecipeId = 1 },
                        new Ingredient { Id = 2, Name = "Eggs", Amount = "2", Unit = "large", Notes = "free-range", RecipeId = 1 },
                        new Ingredient { Id = 3, Name = "Cherry tomatoes", Amount = "1/2", Unit = "cup", Notes = "halved", RecipeId = 1 },
                        new Ingredient { Id = 4, Name = "Whole grain bread", Amount = "2", Unit = "slices", Notes = "toasted", RecipeId = 1 },
                        new Ingredient { Id = 5, Name = "Olive oil", Amount = "1", Unit = "tbsp", Notes = "extra virgin", RecipeId = 1 },
                        new Ingredient { Id = 6, Name = "Salt", Amount = "1/4", Unit = "tsp", Notes = "to taste", RecipeId = 1 },
                        new Ingredient { Id = 7, Name = "Black pepper", Amount = "1/4", Unit = "tsp", Notes = "freshly ground", RecipeId = 1 }
                    },
                    Instructions = new List<string>
                    {
                        "Heat olive oil in a non-stick pan over medium heat.",
                        "Crack eggs into the pan and cook for 3-4 minutes until whites are set but yolks are still runny.",
                        "While eggs cook, toast the bread slices until golden brown.",
                        "Cut the avocado in half, remove the pit, and slice thinly.",
                        "Arrange avocado slices on the toasted bread.",
                        "Top with cherry tomatoes and cooked eggs.",
                        "Season with salt and pepper to taste.",
                        "Serve immediately while warm."
                    }
                },
                new Recipe
                {
                    Id = 2,
                    Title = "Quinoa Power Salad",
                    Description = "A protein-packed salad with quinoa, fresh vegetables, and a tangy dressing that's perfect for lunch or dinner.",
                    Category = "lunch",
                    PrepTimeMinutes = 10,
                    CookTimeMinutes = 15,
                    Servings = 2,
                    Calories = 280,
                    Image = "🥗",
                    Tags = new List<string> { "vegan", "gluten-free", "high-protein" },
                    Difficulty = "Easy",
                    Ingredients = new List<Ingredient>
                    {
                        new Ingredient { Id = 8, Name = "Quinoa", Amount = "1", Unit = "cup", Notes = "uncooked", RecipeId = 2 },
                        new Ingredient { Id = 9, Name = "Baby spinach", Amount = "2", Unit = "cups", Notes = "fresh", RecipeId = 2 },
                        new Ingredient { Id = 10, Name = "Cherry tomatoes", Amount = "1", Unit = "cup", Notes = "halved", RecipeId = 2 },
                        new Ingredient { Id = 11, Name = "Cucumber", Amount = "1", Unit = "medium", Notes = "diced", RecipeId = 2 },
                        new Ingredient { Id = 12, Name = "Red bell pepper", Amount = "1", Unit = "medium", Notes = "diced", RecipeId = 2 },
                        new Ingredient { Id = 13, Name = "Red onion", Amount = "1/4", Unit = "cup", Notes = "thinly sliced", RecipeId = 2 },
                        new Ingredient { Id = 14, Name = "Lemon juice", Amount = "2", Unit = "tbsp", Notes = "fresh", RecipeId = 2 },
                        new Ingredient { Id = 15, Name = "Olive oil", Amount = "3", Unit = "tbsp", Notes = "extra virgin", RecipeId = 2 },
                        new Ingredient { Id = 16, Name = "Salt", Amount = "1/2", Unit = "tsp", Notes = "to taste", RecipeId = 2 },
                        new Ingredient { Id = 17, Name = "Black pepper", Amount = "1/4", Unit = "tsp", Notes = "freshly ground", RecipeId = 2 }
                    },
                    Instructions = new List<string>
                    {
                        "Rinse quinoa thoroughly under cold water until water runs clear.",
                        "Cook quinoa according to package instructions (usually 1:2 ratio with water).",
                        "Let quinoa cool completely before assembling salad.",
                        "In a large bowl, combine cooled quinoa with baby spinach.",
                        "Add cherry tomatoes, cucumber, red bell pepper, and red onion.",
                        "In a small bowl, whisk together lemon juice, olive oil, salt, and pepper.",
                        "Pour dressing over salad and toss gently to combine.",
                        "Let salad sit for 10 minutes before serving to allow flavors to meld."
                    }
                },
                new Recipe
                {
                    Id = 3,
                    Title = "Grilled Salmon & Veggies",
                    Description = "Perfectly grilled salmon fillets served with roasted seasonal vegetables for a healthy and satisfying dinner.",
                    Category = "dinner",
                    PrepTimeMinutes = 10,
                    CookTimeMinutes = 20,
                    Servings = 2,
                    Calories = 420,
                    Image = "🐟",
                    Tags = new List<string> { "low-carb", "high-protein", "omega-3" },
                    Difficulty = "Medium",
                    Ingredients = new List<Ingredient>
                    {
                        new Ingredient { Id = 18, Name = "Salmon fillets", Amount = "2", Unit = "6-oz", Notes = "skin-on", RecipeId = 3 },
                        new Ingredient { Id = 19, Name = "Broccoli", Amount = "1", Unit = "head", Notes = "cut into florets", RecipeId = 3 },
                        new Ingredient { Id = 20, Name = "Carrots", Amount = "2", Unit = "medium", Notes = "cut into sticks", RecipeId = 3 },
                        new Ingredient { Id = 21, Name = "Zucchini", Amount = "1", Unit = "medium", Notes = "sliced", RecipeId = 3 },
                        new Ingredient { Id = 22, Name = "Olive oil", Amount = "3", Unit = "tbsp", Notes = "divided", RecipeId = 3 },
                        new Ingredient { Id = 23, Name = "Garlic", Amount = "2", Unit = "cloves", Notes = "minced", RecipeId = 3 },
                        new Ingredient { Id = 24, Name = "Lemon", Amount = "1", Unit = "medium", Notes = "juiced", RecipeId = 3 },
                        new Ingredient { Id = 25, Name = "Dill", Amount = "2", Unit = "tbsp", Notes = "fresh, chopped", RecipeId = 3 },
                        new Ingredient { Id = 26, Name = "Salt", Amount = "1", Unit = "tsp", Notes = "divided", RecipeId = 3 },
                        new Ingredient { Id = 27, Name = "Black pepper", Amount = "1/2", Unit = "tsp", Notes = "freshly ground", RecipeId = 3 }
                    },
                    Instructions = new List<string>
                    {
                        "Preheat grill to medium-high heat (400°F).",
                        "Pat salmon fillets dry and season with salt and pepper.",
                        "Toss vegetables with 2 tbsp olive oil, garlic, salt, and pepper.",
                        "Place vegetables in a grill basket or on aluminum foil.",
                        "Grill salmon skin-side down for 6-8 minutes.",
                        "Flip salmon and grill for another 4-6 minutes until cooked through.",
                        "Grill vegetables for 10-12 minutes, turning occasionally.",
                        "Remove from grill and drizzle salmon with lemon juice and dill.",
                        "Serve immediately with grilled vegetables."
                    }
                },
                new Recipe
                {
                    Id = 4,
                    Title = "Berry Protein Smoothie",
                    Description = "A refreshing and nutritious smoothie packed with antioxidants, protein, and natural sweetness.",
                    Category = "breakfast",
                    PrepTimeMinutes = 5,
                    CookTimeMinutes = 0,
                    Servings = 1,
                    Calories = 250,
                    Image = "🫐",
                    Tags = new List<string> { "vegetarian", "quick", "antioxidants" },
                    Difficulty = "Easy",
                    Ingredients = new List<Ingredient>
                    {
                        new Ingredient { Id = 28, Name = "Mixed berries", Amount = "1", Unit = "cup", Notes = "frozen", RecipeId = 4 },
                        new Ingredient { Id = 29, Name = "Greek yogurt", Amount = "1/2", Unit = "cup", Notes = "plain, non-fat", RecipeId = 4 },
                        new Ingredient { Id = 30, Name = "Banana", Amount = "1/2", Unit = "medium", Notes = "frozen", RecipeId = 4 },
                        new Ingredient { Id = 31, Name = "Almond milk", Amount = "1/2", Unit = "cup", Notes = "unsweetened", RecipeId = 4 },
                        new Ingredient { Id = 32, Name = "Protein powder", Amount = "1", Unit = "scoop", Notes = "vanilla", RecipeId = 4 },
                        new Ingredient { Id = 33, Name = "Honey", Amount = "1", Unit = "tbsp", Notes = "optional", RecipeId = 4 },
                        new Ingredient { Id = 34, Name = "Chia seeds", Amount = "1", Unit = "tsp", Notes = "optional", RecipeId = 4 }
                    },
                    Instructions = new List<string>
                    {
                        "Add all ingredients to a high-powered blender.",
                        "Blend on high speed for 60-90 seconds until smooth and creamy.",
                        "If smoothie is too thick, add more almond milk 1 tbsp at a time.",
                        "If smoothie is too thin, add more frozen fruit or ice.",
                        "Taste and adjust sweetness with honey if needed.",
                        "Pour into a glass and serve immediately.",
                        "Garnish with fresh berries or chia seeds if desired."
                    }
                },
                new Recipe
                {
                    Id = 5,
                    Title = "Chickpea Buddha Bowl",
                    Description = "A nourishing bowl filled with roasted chickpeas, quinoa, and fresh vegetables topped with a creamy tahini dressing.",
                    Category = "lunch",
                    PrepTimeMinutes = 15,
                    CookTimeMinutes = 25,
                    Servings = 2,
                    Calories = 380,
                    Image = "🥙",
                    Tags = new List<string> { "vegan", "high-fiber", "plant-based" },
                    Difficulty = "Medium",
                    Ingredients = new List<Ingredient>
                    {
                        new Ingredient { Id = 35, Name = "Chickpeas", Amount = "1", Unit = "can", Notes = "15 oz, drained and rinsed", RecipeId = 5 },
                        new Ingredient { Id = 36, Name = "Quinoa", Amount = "1", Unit = "cup", Notes = "uncooked", RecipeId = 5 },
                        new Ingredient { Id = 37, Name = "Sweet potato", Amount = "1", Unit = "large", Notes = "cubed", RecipeId = 5 },
                        new Ingredient { Id = 38, Name = "Kale", Amount = "2", Unit = "cups", Notes = "chopped", RecipeId = 5 },
                        new Ingredient { Id = 39, Name = "Red cabbage", Amount = "1", Unit = "cup", Notes = "shredded", RecipeId = 5 },
                        new Ingredient { Id = 40, Name = "Tahini", Amount = "2", Unit = "tbsp", Notes = "raw", RecipeId = 5 },
                        new Ingredient { Id = 41, Name = "Lemon juice", Amount = "2", Unit = "tbsp", Notes = "fresh", RecipeId = 5 },
                        new Ingredient { Id = 42, Name = "Olive oil", Amount = "3", Unit = "tbsp", Notes = "divided", RecipeId = 5 },
                        new Ingredient { Id = 43, Name = "Cumin", Amount = "1", Unit = "tsp", Notes = "ground", RecipeId = 5 },
                        new Ingredient { Id = 44, Name = "Salt", Amount = "1", Unit = "tsp", Notes = "divided", RecipeId = 5 },
                        new Ingredient { Id = 45, Name = "Black pepper", Amount = "1/2", Unit = "tsp", Notes = "freshly ground", RecipeId = 5 }
                    },
                    Instructions = new List<string>
                    {
                        "Preheat oven to 425°F (220°C).",
                        "Toss chickpeas with 1 tbsp olive oil, cumin, and 1/2 tsp salt.",
                        "Toss sweet potato cubes with 1 tbsp olive oil and 1/2 tsp salt.",
                        "Roast chickpeas and sweet potatoes for 20-25 minutes until golden.",
                        "Cook quinoa according to package instructions.",
                        "Massage kale with remaining olive oil and lemon juice.",
                        "Make tahini dressing by whisking tahini with lemon juice and water.",
                        "Assemble bowls with quinoa, roasted vegetables, kale, and cabbage.",
                        "Drizzle with tahini dressing and serve immediately."
                    }
                },
                new Recipe
                {
                    Id = 6,
                    Title = "Lemon Herb Chicken Breast",
                    Description = "Tender, juicy chicken breast marinated in fresh herbs and lemon, perfect for a healthy protein-packed dinner.",
                    Category = "dinner",
                    PrepTimeMinutes = 15,
                    CookTimeMinutes = 20,
                    Servings = 2,
                    Calories = 280,
                    Image = "🍗",
                    Tags = new List<string> { "high-protein", "low-carb", "gluten-free" },
                    Difficulty = "Easy",
                    Ingredients = new List<Ingredient>
                    {
                        new Ingredient { Id = 46, Name = "Chicken Breast", Amount = "2", Unit = "6-oz", Notes = "boneless, skinless", RecipeId = 6 },
                        new Ingredient { Id = 47, Name = "Lemon", Amount = "1", Unit = "medium", Notes = "juiced and zested", RecipeId = 6 },
                        new Ingredient { Id = 48, Name = "Garlic", Amount = "3", Unit = "cloves", Notes = "minced", RecipeId = 6 },
                        new Ingredient { Id = 49, Name = "Olive oil", Amount = "2", Unit = "tbsp", Notes = "extra virgin", RecipeId = 6 },
                        new Ingredient { Id = 50, Name = "Thyme", Amount = "1", Unit = "tbsp", Notes = "fresh, chopped", RecipeId = 6 },
                        new Ingredient { Id = 51, Name = "Rosemary", Amount = "1", Unit = "tsp", Notes = "fresh, chopped", RecipeId = 6 },
                        new Ingredient { Id = 52, Name = "Salt", Amount = "1/2", Unit = "tsp", Notes = "to taste", RecipeId = 6 },
                        new Ingredient { Id = 53, Name = "Black pepper", Amount = "1/4", Unit = "tsp", Notes = "freshly ground", RecipeId = 6 }
                    },
                    Instructions = new List<string>
                    {
                        "Preheat oven to 400°F (200°C).",
                        "In a bowl, whisk together lemon juice, lemon zest, garlic, olive oil, thyme, rosemary, salt, and pepper.",
                        "Place chicken breasts in a shallow dish and pour marinade over them.",
                        "Let marinate for at least 15 minutes, turning once.",
                        "Heat an oven-safe skillet over medium-high heat.",
                        "Sear chicken breasts for 3-4 minutes per side until golden brown.",
                        "Transfer skillet to oven and bake for 12-15 minutes until internal temperature reaches 165°F.",
                        "Let rest for 5 minutes before slicing and serving."
                    }
                },
                new Recipe
                {
                    Id = 7,
                    Title = "Turkey & Brown Rice Bowl",
                    Description = "A hearty and nutritious bowl featuring lean ground turkey, brown rice, and fresh vegetables for a complete meal.",
                    Category = "lunch",
                    PrepTimeMinutes = 10,
                    CookTimeMinutes = 25,
                    Servings = 2,
                    Calories = 420,
                    Image = "🍚",
                    Tags = new List<string> { "high-protein", "whole-grain", "balanced" },
                    Difficulty = "Easy",
                    Ingredients = new List<Ingredient>
                    {
                        new Ingredient { Id = 54, Name = "Ground Turkey", Amount = "1", Unit = "lb", Notes = "lean, 93% lean", RecipeId = 7 },
                        new Ingredient { Id = 55, Name = "Brown Rice", Amount = "1", Unit = "cup", Notes = "uncooked", RecipeId = 7 },
                        new Ingredient { Id = 56, Name = "Bell Pepper", Amount = "1", Unit = "medium", Notes = "diced", RecipeId = 7 },
                        new Ingredient { Id = 57, Name = "Onion", Amount = "1/2", Unit = "medium", Notes = "diced", RecipeId = 7 },
                        new Ingredient { Id = 58, Name = "Garlic", Amount = "2", Unit = "cloves", Notes = "minced", RecipeId = 7 },
                        new Ingredient { Id = 59, Name = "Olive oil", Amount = "1", Unit = "tbsp", Notes = "extra virgin", RecipeId = 7 },
                        new Ingredient { Id = 60, Name = "Cumin", Amount = "1", Unit = "tsp", Notes = "ground", RecipeId = 7 },
                        new Ingredient { Id = 61, Name = "Paprika", Amount = "1/2", Unit = "tsp", Notes = "smoked", RecipeId = 7 },
                        new Ingredient { Id = 62, Name = "Salt", Amount = "1/2", Unit = "tsp", Notes = "to taste", RecipeId = 7 },
                        new Ingredient { Id = 63, Name = "Black pepper", Amount = "1/4", Unit = "tsp", Notes = "freshly ground", RecipeId = 7 }
                    },
                    Instructions = new List<string>
                    {
                        "Cook brown rice according to package instructions.",
                        "Heat olive oil in a large skillet over medium heat.",
                        "Add diced onion and cook for 3-4 minutes until softened.",
                        "Add garlic and cook for 1 minute until fragrant.",
                        "Add ground turkey and cook, breaking it up with a spoon, until browned.",
                        "Add bell pepper and cook for 3-4 minutes until tender.",
                        "Season with cumin, paprika, salt, and pepper.",
                        "Serve turkey mixture over brown rice.",
                        "Garnish with fresh herbs if desired."
                    }
                },
                new Recipe
                {
                    Id = 8,
                    Title = "Creamy Mushroom Pasta",
                    Description = "A rich and satisfying pasta dish featuring earthy mushrooms in a creamy sauce, perfect for a comforting dinner.",
                    Category = "dinner",
                    PrepTimeMinutes = 10,
                    CookTimeMinutes = 20,
                    Servings = 2,
                    Calories = 450,
                    Image = "🍝",
                    Tags = new List<string> { "vegetarian", "comfort-food", "creamy" },
                    Difficulty = "Medium",
                    Ingredients = new List<Ingredient>
                    {
                        new Ingredient { Id = 64, Name = "Pasta", Amount = "8", Unit = "oz", Notes = "whole wheat", RecipeId = 8 },
                        new Ingredient { Id = 65, Name = "Mushrooms", Amount = "8", Unit = "oz", Notes = "mixed varieties, sliced", RecipeId = 8 },
                        new Ingredient { Id = 66, Name = "Garlic", Amount = "3", Unit = "cloves", Notes = "minced", RecipeId = 8 },
                        new Ingredient { Id = 67, Name = "Onion", Amount = "1/2", Unit = "medium", Notes = "diced", RecipeId = 8 },
                        new Ingredient { Id = 68, Name = "Cream", Amount = "1/2", Unit = "cup", Notes = "heavy cream", RecipeId = 8 },
                        new Ingredient { Id = 69, Name = "Cheese", Amount = "1/2", Unit = "cup", Notes = "Parmesan, grated", RecipeId = 8 },
                        new Ingredient { Id = 70, Name = "Olive oil", Amount = "2", Unit = "tbsp", Notes = "extra virgin", RecipeId = 8 },
                        new Ingredient { Id = 71, Name = "Butter", Amount = "1", Unit = "tbsp", Notes = "unsalted", RecipeId = 8 },
                        new Ingredient { Id = 72, Name = "Salt", Amount = "1/2", Unit = "tsp", Notes = "to taste", RecipeId = 8 },
                        new Ingredient { Id = 73, Name = "Black pepper", Amount = "1/4", Unit = "tsp", Notes = "freshly ground", RecipeId = 8 }
                    },
                    Instructions = new List<string>
                    {
                        "Cook pasta according to package instructions until al dente.",
                        "Reserve 1/2 cup pasta water before draining.",
                        "Heat olive oil and butter in a large skillet over medium heat.",
                        "Add mushrooms and cook for 5-6 minutes until golden brown.",
                        "Add onion and cook for 3-4 minutes until softened.",
                        "Add garlic and cook for 1 minute until fragrant.",
                        "Pour in cream and bring to a gentle simmer.",
                        "Add cooked pasta and toss to combine.",
                        "Add Parmesan cheese and toss until melted.",
                        "Add reserved pasta water if needed for desired consistency.",
                        "Season with salt and pepper to taste.",
                        "Serve immediately with extra Parmesan on top."
                    }
                },
                new Recipe
                {
                    Id = 9,
                    Title = "Overnight Oats Power Bowl",
                    Description = "A nutritious and energizing breakfast bowl with overnight oats, fresh fruits, and protein-packed toppings.",
                    Category = "breakfast",
                    PrepTimeMinutes = 10,
                    CookTimeMinutes = 0,
                    Servings = 1,
                    Calories = 320,
                    Image = "🥣",
                    Tags = new List<string> { "vegetarian", "make-ahead", "high-fiber" },
                    Difficulty = "Easy",
                    Ingredients = new List<Ingredient>
                    {
                        new Ingredient { Id = 74, Name = "Oats", Amount = "1/2", Unit = "cup", Notes = "old-fashioned", RecipeId = 9 },
                        new Ingredient { Id = 75, Name = "Milk", Amount = "1/2", Unit = "cup", Notes = "almond or dairy", RecipeId = 9 },
                        new Ingredient { Id = 76, Name = "Greek Yogurt", Amount = "1/4", Unit = "cup", Notes = "plain", RecipeId = 9 },
                        new Ingredient { Id = 77, Name = "Honey", Amount = "1", Unit = "tbsp", Notes = "raw", RecipeId = 9 },
                        new Ingredient { Id = 78, Name = "Nuts", Amount = "2", Unit = "tbsp", Notes = "almonds, chopped", RecipeId = 9 },
                        new Ingredient { Id = 79, Name = "Banana", Amount = "1/2", Unit = "medium", Notes = "sliced", RecipeId = 9 },
                        new Ingredient { Id = 80, Name = "Lime", Amount = "1/2", Unit = "medium", Notes = "juiced", RecipeId = 9 }
                    },
                    Instructions = new List<string>
                    {
                        "In a mason jar or bowl, combine oats, milk, and Greek yogurt.",
                        "Add honey and lime juice, then stir well to combine.",
                        "Cover and refrigerate overnight (at least 4 hours).",
                        "In the morning, give the oats a good stir.",
                        "Top with chopped nuts and sliced banana.",
                        "Add a drizzle of honey if desired.",
                        "Enjoy cold or at room temperature."
                    }
                }
            };
        }

        private async Task SeedDatabaseAsync()
        {
            try
            {
                // Clear existing data
                _context.Recipes.RemoveRange(_context.Recipes);
                _context.Ingredients.RemoveRange(_context.Ingredients);
                await _context.SaveChangesAsync();

                // Add sample recipes
                var recipes = GetSampleRecipes();
                _context.Recipes.AddRange(recipes);
                await _context.SaveChangesAsync();

                _logger.LogInformation("Database seeded successfully with {Count} recipes", recipes.Count);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error seeding database");
                throw;
            }
        }

    }
}

