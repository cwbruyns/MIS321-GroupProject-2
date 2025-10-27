using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class WellnessProfile
    {
        public int Id { get; set; }
        
        // Foreign key to User
        public int UserId { get; set; }
        public User User { get; set; } = null!;
        
        // Dietary Preferences
        public bool IsVegetarian { get; set; } = false;
        public bool IsVegan { get; set; } = false;
        public bool IsGlutenFree { get; set; } = false;
        public bool IsDairyFree { get; set; } = false;
        public bool IsNutFree { get; set; } = false;
        public bool IsKeto { get; set; } = false;
        public bool IsPaleo { get; set; } = false;
        public bool IsLowCarb { get; set; } = false;
        public bool IsLowFat { get; set; } = false;
        public bool IsLowSodium { get; set; } = false;
        
        // Allergens
        public bool HasPeanuts { get; set; } = false;
        public bool HasTreeNuts { get; set; } = false;
        public bool HasShellfish { get; set; } = false;
        public bool HasEggs { get; set; } = false;
        public bool HasFish { get; set; } = false;
        public bool HasSoy { get; set; } = false;
        
        // Health Goals (stored as JSON string)
        [MaxLength(500)]
        public string? Goals { get; set; }
        
        // Activity Level
        [MaxLength(50)]
        public string? ActivityLevel { get; set; }
        
        // Target calories per day
        public int? TargetCaloriesPerDay { get; set; }
        
        // Timestamps
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
    }
}

