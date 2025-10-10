using Microsoft.AspNetCore.Mvc;
using API.Models;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecipeController : ControllerBase
    {
        private readonly ILogger<RecipeController> _logger;

        public RecipeController(ILogger<RecipeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Recipe> GetRecipes()
        {
            return GetSampleRecipes();
        }

        [HttpGet("{id}")]
        public ActionResult<Recipe> GetRecipe(int id)
        {
            var recipe = GetSampleRecipes().FirstOrDefault(r => r.Id == id);
            if (recipe == null)
            {
                return NotFound();
            }
            return recipe;
        }

        [HttpGet("category/{category}")]
        public IEnumerable<Recipe> GetRecipesByCategory(string category)
        {
            return GetSampleRecipes().Where(r => r.Category.ToLower() == category.ToLower());
        }

        [HttpGet("search")]
        public IEnumerable<Recipe> SearchRecipes([FromQuery] string query)
        {
            if (string.IsNullOrEmpty(query))
                return GetSampleRecipes();

            var lowerQuery = query.ToLower();
            return GetSampleRecipes().Where(r => 
                r.Title.ToLower().Contains(lowerQuery) ||
                r.Description.ToLower().Contains(lowerQuery) ||
                r.Tags.Any(t => t.ToLower().Contains(lowerQuery)) ||
                r.Ingredients.Any(i => i.Name.ToLower().Contains(lowerQuery))
            );
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
                        new Ingredient { Id = 1, Name = "Avocado", Amount = "1", Unit = "medium", Notes = "ripe" },
                        new Ingredient { Id = 2, Name = "Eggs", Amount = "2", Unit = "large", Notes = "free-range" },
                        new Ingredient { Id = 3, Name = "Cherry tomatoes", Amount = "1/2", Unit = "cup", Notes = "halved" },
                        new Ingredient { Id = 4, Name = "Whole grain bread", Amount = "2", Unit = "slices", Notes = "toasted" },
                        new Ingredient { Id = 5, Name = "Olive oil", Amount = "1", Unit = "tbsp", Notes = "extra virgin" },
                        new Ingredient { Id = 6, Name = "Salt", Amount = "1/4", Unit = "tsp", Notes = "to taste" },
                        new Ingredient { Id = 7, Name = "Black pepper", Amount = "1/4", Unit = "tsp", Notes = "freshly ground" }
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
                        new Ingredient { Id = 8, Name = "Quinoa", Amount = "1", Unit = "cup", Notes = "uncooked" },
                        new Ingredient { Id = 9, Name = "Baby spinach", Amount = "2", Unit = "cups", Notes = "fresh" },
                        new Ingredient { Id = 10, Name = "Cherry tomatoes", Amount = "1", Unit = "cup", Notes = "halved" },
                        new Ingredient { Id = 11, Name = "Cucumber", Amount = "1", Unit = "medium", Notes = "diced" },
                        new Ingredient { Id = 12, Name = "Red bell pepper", Amount = "1", Unit = "medium", Notes = "diced" },
                        new Ingredient { Id = 13, Name = "Red onion", Amount = "1/4", Unit = "cup", Notes = "thinly sliced" },
                        new Ingredient { Id = 14, Name = "Lemon juice", Amount = "2", Unit = "tbsp", Notes = "fresh" },
                        new Ingredient { Id = 15, Name = "Olive oil", Amount = "3", Unit = "tbsp", Notes = "extra virgin" },
                        new Ingredient { Id = 16, Name = "Salt", Amount = "1/2", Unit = "tsp", Notes = "to taste" },
                        new Ingredient { Id = 17, Name = "Black pepper", Amount = "1/4", Unit = "tsp", Notes = "freshly ground" }
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
                        new Ingredient { Id = 18, Name = "Salmon fillets", Amount = "2", Unit = "6-oz", Notes = "skin-on" },
                        new Ingredient { Id = 19, Name = "Broccoli", Amount = "1", Unit = "head", Notes = "cut into florets" },
                        new Ingredient { Id = 20, Name = "Carrots", Amount = "2", Unit = "medium", Notes = "cut into sticks" },
                        new Ingredient { Id = 21, Name = "Zucchini", Amount = "1", Unit = "medium", Notes = "sliced" },
                        new Ingredient { Id = 22, Name = "Olive oil", Amount = "3", Unit = "tbsp", Notes = "divided" },
                        new Ingredient { Id = 23, Name = "Garlic", Amount = "2", Unit = "cloves", Notes = "minced" },
                        new Ingredient { Id = 24, Name = "Lemon", Amount = "1", Unit = "medium", Notes = "juiced" },
                        new Ingredient { Id = 25, Name = "Dill", Amount = "2", Unit = "tbsp", Notes = "fresh, chopped" },
                        new Ingredient { Id = 26, Name = "Salt", Amount = "1", Unit = "tsp", Notes = "divided" },
                        new Ingredient { Id = 27, Name = "Black pepper", Amount = "1/2", Unit = "tsp", Notes = "freshly ground" }
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
                        new Ingredient { Id = 28, Name = "Mixed berries", Amount = "1", Unit = "cup", Notes = "frozen" },
                        new Ingredient { Id = 29, Name = "Greek yogurt", Amount = "1/2", Unit = "cup", Notes = "plain, non-fat" },
                        new Ingredient { Id = 30, Name = "Banana", Amount = "1/2", Unit = "medium", Notes = "frozen" },
                        new Ingredient { Id = 31, Name = "Almond milk", Amount = "1/2", Unit = "cup", Notes = "unsweetened" },
                        new Ingredient { Id = 32, Name = "Protein powder", Amount = "1", Unit = "scoop", Notes = "vanilla" },
                        new Ingredient { Id = 33, Name = "Honey", Amount = "1", Unit = "tbsp", Notes = "optional" },
                        new Ingredient { Id = 34, Name = "Chia seeds", Amount = "1", Unit = "tsp", Notes = "optional" }
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
                        new Ingredient { Id = 35, Name = "Chickpeas", Amount = "1", Unit = "can", Notes = "15 oz, drained and rinsed" },
                        new Ingredient { Id = 36, Name = "Quinoa", Amount = "1", Unit = "cup", Notes = "uncooked" },
                        new Ingredient { Id = 37, Name = "Sweet potato", Amount = "1", Unit = "large", Notes = "cubed" },
                        new Ingredient { Id = 38, Name = "Kale", Amount = "2", Unit = "cups", Notes = "chopped" },
                        new Ingredient { Id = 39, Name = "Red cabbage", Amount = "1", Unit = "cup", Notes = "shredded" },
                        new Ingredient { Id = 40, Name = "Tahini", Amount = "2", Unit = "tbsp", Notes = "raw" },
                        new Ingredient { Id = 41, Name = "Lemon juice", Amount = "2", Unit = "tbsp", Notes = "fresh" },
                        new Ingredient { Id = 42, Name = "Olive oil", Amount = "3", Unit = "tbsp", Notes = "divided" },
                        new Ingredient { Id = 43, Name = "Cumin", Amount = "1", Unit = "tsp", Notes = "ground" },
                        new Ingredient { Id = 44, Name = "Salt", Amount = "1", Unit = "tsp", Notes = "divided" },
                        new Ingredient { Id = 45, Name = "Black pepper", Amount = "1/2", Unit = "tsp", Notes = "freshly ground" }
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
                }
            };
        }
    }
}

