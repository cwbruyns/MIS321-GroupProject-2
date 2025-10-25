using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Models;
using API.Models.DTOs;
using API.Services;
using System.Security.Claims;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly RecipeDbContext _context;
        private readonly JwtService _jwtService;
        private readonly ILogger<AuthController> _logger;

        public AuthController(RecipeDbContext context, JwtService jwtService, ILogger<AuthController> logger)
        {
            _context = context;
            _jwtService = jwtService;
            _logger = logger;
        }

        [HttpPost("register")]
        public async Task<ActionResult<AuthResponse>> Register(RegisterRequest request)
        {
            try
            {
                // Check if email already exists
                if (await _context.Users.AnyAsync(u => u.Email == request.Email))
                {
                    return BadRequest(new { error = "Email already exists" });
                }

                // Check if username already exists
                if (await _context.Users.AnyAsync(u => u.Username == request.Username))
                {
                    return BadRequest(new { error = "Username already exists" });
                }

                // Hash password
                var passwordHash = BCrypt.Net.BCrypt.HashPassword(request.Password);

                // Create user
                var user = new User
                {
                    Email = request.Email,
                    Username = request.Username,
                    PasswordHash = passwordHash,
                    FirstName = request.FirstName,
                    LastName = request.LastName,
                    CreatedAt = DateTime.UtcNow
                };

                _context.Users.Add(user);
                await _context.SaveChangesAsync();

                // Generate token
                var token = _jwtService.GenerateToken(user);

                return Ok(new AuthResponse
                {
                    Token = token,
                    User = new UserProfile
                    {
                        Id = user.Id,
                        Email = user.Email,
                        Username = user.Username,
                        FirstName = user.FirstName,
                        LastName = user.LastName,
                        Bio = user.Bio,
                        AvatarUrl = user.AvatarUrl,
                        CreatedAt = user.CreatedAt,
                        LastLoginAt = user.LastLoginAt
                    }
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error during user registration");
                return StatusCode(500, new { error = "Registration failed" });
            }
        }

        [HttpPost("login")]
        public async Task<ActionResult<AuthResponse>> Login(LoginRequest request)
        {
            try
            {
                // Find user by email
                var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
                if (user == null)
                {
                    return Unauthorized(new { error = "Invalid email or password" });
                }

                // Verify password
                if (!BCrypt.Net.BCrypt.Verify(request.Password, user.PasswordHash))
                {
                    return Unauthorized(new { error = "Invalid email or password" });
                }

                // Update last login
                user.LastLoginAt = DateTime.UtcNow;
                await _context.SaveChangesAsync();

                // Generate token
                var token = _jwtService.GenerateToken(user);

                return Ok(new AuthResponse
                {
                    Token = token,
                    User = new UserProfile
                    {
                        Id = user.Id,
                        Email = user.Email,
                        Username = user.Username,
                        FirstName = user.FirstName,
                        LastName = user.LastName,
                        Bio = user.Bio,
                        AvatarUrl = user.AvatarUrl,
                        CreatedAt = user.CreatedAt,
                        LastLoginAt = user.LastLoginAt
                    }
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error during user login");
                return StatusCode(500, new { error = "Login failed" });
            }
        }

        [HttpGet("me")]
        public async Task<ActionResult<UserProfile>> GetCurrentUser()
        {
            try
            {
                var userId = _jwtService.GetUserIdFromToken(User);
                if (userId == null)
                {
                    return Unauthorized(new { error = "Invalid token" });
                }

                var user = await _context.Users.FindAsync(userId);
                if (user == null)
                {
                    return NotFound(new { error = "User not found" });
                }

                return Ok(new UserProfile
                {
                    Id = user.Id,
                    Email = user.Email,
                    Username = user.Username,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Bio = user.Bio,
                    AvatarUrl = user.AvatarUrl,
                    CreatedAt = user.CreatedAt,
                    LastLoginAt = user.LastLoginAt
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting current user");
                return StatusCode(500, new { error = "Failed to get user information" });
            }
        }

        [HttpPut("profile")]
        public async Task<ActionResult<UserProfile>> UpdateProfile([FromBody] UpdateProfileRequest request)
        {
            try
            {
                var userId = _jwtService.GetUserIdFromToken(User);
                if (userId == null)
                {
                    return Unauthorized(new { error = "Invalid token" });
                }

                var user = await _context.Users.FindAsync(userId);
                if (user == null)
                {
                    return NotFound(new { error = "User not found" });
                }

                // Update fields
                if (!string.IsNullOrEmpty(request.FirstName))
                    user.FirstName = request.FirstName;
                if (!string.IsNullOrEmpty(request.LastName))
                    user.LastName = request.LastName;
                if (request.Bio != null)
                    user.Bio = request.Bio;
                if (request.AvatarUrl != null)
                    user.AvatarUrl = request.AvatarUrl;

                await _context.SaveChangesAsync();

                return Ok(new UserProfile
                {
                    Id = user.Id,
                    Email = user.Email,
                    Username = user.Username,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Bio = user.Bio,
                    AvatarUrl = user.AvatarUrl,
                    CreatedAt = user.CreatedAt,
                    LastLoginAt = user.LastLoginAt
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating user profile");
                return StatusCode(500, new { error = "Failed to update profile" });
            }
        }
    }

    public class UpdateProfileRequest
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Bio { get; set; }
        public string? AvatarUrl { get; set; }
    }
}
