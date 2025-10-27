using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Models;
using API.Models.DTOs;
using API.Services;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WellnessProfileController : ControllerBase
    {
        private readonly RecipeDbContext _context;
        private readonly JwtService _jwtService;
        private readonly ILogger<WellnessProfileController> _logger;

        public WellnessProfileController(RecipeDbContext context, JwtService jwtService, ILogger<WellnessProfileController> logger)
        {
            _context = context;
            _jwtService = jwtService;
            _logger = logger;
        }

        [HttpGet("me")]
        public async Task<ActionResult<WellnessProfileDTO>> GetMyWellnessProfile()
        {
            try
            {
                var userId = _jwtService.GetUserIdFromToken(User);
                if (userId == null)
                {
                    return Unauthorized(new { error = "Invalid token" });
                }

                var profile = await _context.WellnessProfiles
                    .FirstOrDefaultAsync(p => p.UserId == userId);

                if (profile == null)
                {
                    return NotFound(new { error = "Wellness profile not found" });
                }

                return Ok(MapToDTO(profile));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting wellness profile");
                return StatusCode(500, new { error = "Failed to get wellness profile" });
            }
        }

        [HttpPost]
        public async Task<ActionResult<WellnessProfileDTO>> CreateWellnessProfile(CreateWellnessProfileRequest request)
        {
            try
            {
                var userId = _jwtService.GetUserIdFromToken(User);
                if (userId == null)
                {
                    return Unauthorized(new { error = "Invalid token" });
                }

                var existingProfile = await _context.WellnessProfiles
                    .FirstOrDefaultAsync(p => p.UserId == userId);

                if (existingProfile != null)
                {
                    return BadRequest(new { error = "Wellness profile already exists. Use PUT to update." });
                }

                var profile = new WellnessProfile
                {
                    UserId = userId.Value,
                    IsVegetarian = request.IsVegetarian,
                    IsVegan = request.IsVegan,
                    IsGlutenFree = request.IsGlutenFree,
                    IsDairyFree = request.IsDairyFree,
                    IsNutFree = request.IsNutFree,
                    IsKeto = request.IsKeto,
                    IsPaleo = request.IsPaleo,
                    IsLowCarb = request.IsLowCarb,
                    IsLowFat = request.IsLowFat,
                    IsLowSodium = request.IsLowSodium,
                    HasPeanuts = request.HasPeanuts,
                    HasTreeNuts = request.HasTreeNuts,
                    HasShellfish = request.HasShellfish,
                    HasEggs = request.HasEggs,
                    HasFish = request.HasFish,
                    HasSoy = request.HasSoy,
                    Goals = request.Goals,
                    ActivityLevel = request.ActivityLevel,
                    TargetCaloriesPerDay = request.TargetCaloriesPerDay,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                };

                _context.WellnessProfiles.Add(profile);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetMyWellnessProfile), MapToDTO(profile));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error creating wellness profile");
                return StatusCode(500, new { error = "Failed to create wellness profile" });
            }
        }

        [HttpPut]
        public async Task<ActionResult<WellnessProfileDTO>> UpdateWellnessProfile(UpdateWellnessProfileRequest request)
        {
            try
            {
                var userId = _jwtService.GetUserIdFromToken(User);
                if (userId == null)
                {
                    return Unauthorized(new { error = "Invalid token" });
                }

                var profile = await _context.WellnessProfiles
                    .FirstOrDefaultAsync(p => p.UserId == userId);

                if (profile == null)
                {
                    return NotFound(new { error = "Wellness profile not found" });
                }

                if (request.IsVegetarian.HasValue) profile.IsVegetarian = request.IsVegetarian.Value;
                if (request.IsVegan.HasValue) profile.IsVegan = request.IsVegan.Value;
                if (request.IsGlutenFree.HasValue) profile.IsGlutenFree = request.IsGlutenFree.Value;
                if (request.IsDairyFree.HasValue) profile.IsDairyFree = request.IsDairyFree.Value;
                if (request.IsNutFree.HasValue) profile.IsNutFree = request.IsNutFree.Value;
                if (request.IsKeto.HasValue) profile.IsKeto = request.IsKeto.Value;
                if (request.IsPaleo.HasValue) profile.IsPaleo = request.IsPaleo.Value;
                if (request.IsLowCarb.HasValue) profile.IsLowCarb = request.IsLowCarb.Value;
                if (request.IsLowFat.HasValue) profile.IsLowFat = request.IsLowFat.Value;
                if (request.IsLowSodium.HasValue) profile.IsLowSodium = request.IsLowSodium.Value;
                if (request.HasPeanuts.HasValue) profile.HasPeanuts = request.HasPeanuts.Value;
                if (request.HasTreeNuts.HasValue) profile.HasTreeNuts = request.HasTreeNuts.Value;
                if (request.HasShellfish.HasValue) profile.HasShellfish = request.HasShellfish.Value;
                if (request.HasEggs.HasValue) profile.HasEggs = request.HasEggs.Value;
                if (request.HasFish.HasValue) profile.HasFish = request.HasFish.Value;
                if (request.HasSoy.HasValue) profile.HasSoy = request.HasSoy.Value;

                if (request.Goals != null) profile.Goals = request.Goals;
                if (request.ActivityLevel != null) profile.ActivityLevel = request.ActivityLevel;
                if (request.TargetCaloriesPerDay.HasValue) profile.TargetCaloriesPerDay = request.TargetCaloriesPerDay;

                profile.UpdatedAt = DateTime.UtcNow;

                await _context.SaveChangesAsync();

                return Ok(MapToDTO(profile));
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating wellness profile");
                return StatusCode(500, new { error = "Failed to update wellness profile" });
            }
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteWellnessProfile()
        {
            try
            {
                var userId = _jwtService.GetUserIdFromToken(User);
                if (userId == null)
                {
                    return Unauthorized(new { error = "Invalid token" });
                }

                var profile = await _context.WellnessProfiles
                    .FirstOrDefaultAsync(p => p.UserId == userId);

                if (profile == null)
                {
                    return NotFound(new { error = "Wellness profile not found" });
                }

                _context.WellnessProfiles.Remove(profile);
                await _context.SaveChangesAsync();

                return Ok(new { message = "Wellness profile deleted successfully" });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting wellness profile");
                return StatusCode(500, new { error = "Failed to delete wellness profile" });
            }
        }

        private WellnessProfileDTO MapToDTO(WellnessProfile profile)
        {
            return new WellnessProfileDTO
            {
                Id = profile.Id,
                UserId = profile.UserId,
                IsVegetarian = profile.IsVegetarian,
                IsVegan = profile.IsVegan,
                IsGlutenFree = profile.IsGlutenFree,
                IsDairyFree = profile.IsDairyFree,
                IsNutFree = profile.IsNutFree,
                IsKeto = profile.IsKeto,
                IsPaleo = profile.IsPaleo,
                IsLowCarb = profile.IsLowCarb,
                IsLowFat = profile.IsLowFat,
                IsLowSodium = profile.IsLowSodium,
                HasPeanuts = profile.HasPeanuts,
                HasTreeNuts = profile.HasTreeNuts,
                HasShellfish = profile.HasShellfish,
                HasEggs = profile.HasEggs,
                HasFish = profile.HasFish,
                HasSoy = profile.HasSoy,
                Goals = profile.Goals,
                ActivityLevel = profile.ActivityLevel,
                TargetCaloriesPerDay = profile.TargetCaloriesPerDay,
                CreatedAt = profile.CreatedAt,
                UpdatedAt = profile.UpdatedAt
            };
        }
    }
}

