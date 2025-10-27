using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class User
    {
        public int Id { get; set; }
        
        [Required]
        [EmailAddress]
        [MaxLength(255)]
        public string Email { get; set; } = string.Empty;
        
        [Required]
        [MaxLength(50)]
        public string Username { get; set; } = string.Empty;
        
        [Required]
        public string PasswordHash { get; set; } = string.Empty;
        
        [MaxLength(100)]
        public string? FirstName { get; set; }
        
        [MaxLength(100)]
        public string? LastName { get; set; }
        
        [MaxLength(500)]
        public string? Bio { get; set; }
        
        [MaxLength(255)]
        public string? AvatarUrl { get; set; }
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        
        public DateTime? LastLoginAt { get; set; }
        
        // Navigation properties
        public ICollection<Recipe> Recipes { get; set; } = new List<Recipe>();
        public ICollection<UserFavorite> Favorites { get; set; } = new List<UserFavorite>();
        public WellnessProfile? WellnessProfile { get; set; }
    }
}
