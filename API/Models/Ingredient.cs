namespace API.Models
{
    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Amount { get; set; } = string.Empty;
        public string Unit { get; set; } = string.Empty;
        public string Notes { get; set; } = string.Empty;
        public int RecipeId { get; set; }
    }
}

