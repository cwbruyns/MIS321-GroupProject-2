namespace API.Models.DTOs
{
    public class WellnessProfileDTO
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        
        public bool IsVegetarian { get; set; }
        public bool IsVegan { get; set; }
        public bool IsGlutenFree { get; set; }
        public bool IsDairyFree { get; set; }
        public bool IsNutFree { get; set; }
        public bool IsKeto { get; set; }
        public bool IsPaleo { get; set; }
        public bool IsLowCarb { get; set; }
        public bool IsLowFat { get; set; }
        public bool IsLowSodium { get; set; }
        
        public bool HasPeanuts { get; set; }
        public bool HasTreeNuts { get; set; }
        public bool HasShellfish { get; set; }
        public bool HasEggs { get; set; }
        public bool HasFish { get; set; }
        public bool HasSoy { get; set; }
        
        public string? Goals { get; set; }
        public string? ActivityLevel { get; set; }
        public int? TargetCaloriesPerDay { get; set; }
        
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
    
    public class CreateWellnessProfileRequest
    {
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
        
        public bool HasPeanuts { get; set; } = false;
        public bool HasTreeNuts { get; set; } = false;
        public bool HasShellfish { get; set; } = false;
        public bool HasEggs { get; set; } = false;
        public bool HasFish { get; set; } = false;
        public bool HasSoy { get; set; } = false;
        
        public string? Goals { get; set; }
        public string? ActivityLevel { get; set; }
        public int? TargetCaloriesPerDay { get; set; }
    }
    
    public class UpdateWellnessProfileRequest
    {
        public bool? IsVegetarian { get; set; }
        public bool? IsVegan { get; set; }
        public bool? IsGlutenFree { get; set; }
        public bool? IsDairyFree { get; set; }
        public bool? IsNutFree { get; set; }
        public bool? IsKeto { get; set; }
        public bool? IsPaleo { get; set; }
        public bool? IsLowCarb { get; set; }
        public bool? IsLowFat { get; set; }
        public bool? IsLowSodium { get; set; }
        
        public bool? HasPeanuts { get; set; }
        public bool? HasTreeNuts { get; set; }
        public bool? HasShellfish { get; set; }
        public bool? HasEggs { get; set; }
        public bool? HasFish { get; set; }
        public bool? HasSoy { get; set; }
        
        public string? Goals { get; set; }
        public string? ActivityLevel { get; set; }
        public int? TargetCaloriesPerDay { get; set; }
    }
}

