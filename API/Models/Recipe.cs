namespace API.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public int PrepTimeMinutes { get; set; }
        public int CookTimeMinutes { get; set; }
        public int Servings { get; set; }
        public int Calories { get; set; }
        public string Image { get; set; } = string.Empty;
        public List<string> Tags { get; set; } = new List<string>();
        public List<Ingredient> Ingredients { get; set; } = new List<Ingredient>();
        public List<string> Instructions { get; set; } = new List<string>();
        public string Difficulty { get; set; } = string.Empty;
        
        // User ownership
        public int? UserId { get; set; } // Nullable for system recipes
        public User? User { get; set; } // Navigation property
        
        // Recipe metadata
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? UpdatedAt { get; set; }
        public bool IsPublic { get; set; } = true; // All recipes are public by default
    }
}

