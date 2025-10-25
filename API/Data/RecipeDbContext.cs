using Microsoft.EntityFrameworkCore;
using API.Models;

namespace API.Data
{
    public class RecipeDbContext : DbContext
    {
        public RecipeDbContext(DbContextOptions<RecipeDbContext> options) : base(options)
        {
        }

        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserFavorite> UserFavorites { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configure Recipe entity
            modelBuilder.Entity<Recipe>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Title).IsRequired().HasMaxLength(200);
                entity.Property(e => e.Description).HasMaxLength(1000);
                entity.Property(e => e.Category).HasMaxLength(50);
                entity.Property(e => e.Difficulty).HasMaxLength(20);
                entity.Property(e => e.Image).HasMaxLength(500);
                
                // Configure Tags as JSON
                entity.Property(e => e.Tags)
                    .HasConversion(
                        v => string.Join(',', v),
                        v => v.Split(',', StringSplitOptions.RemoveEmptyEntries).ToList()
                    );
                
                // Configure Instructions as JSON
                entity.Property(e => e.Instructions)
                    .HasConversion(
                        v => string.Join("|||", v),
                        v => v.Split("|||", StringSplitOptions.RemoveEmptyEntries).ToList()
                    );
            });

            // Configure Ingredient entity
            modelBuilder.Entity<Ingredient>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired().HasMaxLength(100);
                entity.Property(e => e.Amount).HasMaxLength(50);
                entity.Property(e => e.Unit).HasMaxLength(20);
                entity.Property(e => e.Notes).HasMaxLength(200);
            });

            // Configure relationship between Recipe and Ingredients
            modelBuilder.Entity<Recipe>()
                .HasMany(r => r.Ingredients)
                .WithOne()
                .HasForeignKey(i => i.RecipeId)
                .OnDelete(DeleteBehavior.Cascade);

            // Configure User entity
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.HasIndex(e => e.Email).IsUnique();
                entity.HasIndex(e => e.Username).IsUnique();
                entity.Property(e => e.Email).IsRequired().HasMaxLength(255);
                entity.Property(e => e.Username).IsRequired().HasMaxLength(50);
                entity.Property(e => e.PasswordHash).IsRequired();
                entity.Property(e => e.FirstName).HasMaxLength(100);
                entity.Property(e => e.LastName).HasMaxLength(100);
                entity.Property(e => e.Bio).HasMaxLength(500);
                entity.Property(e => e.AvatarUrl).HasMaxLength(255);
            });

            // Configure relationship between User and Recipes
            modelBuilder.Entity<User>()
                .HasMany(u => u.Recipes)
                .WithOne(r => r.User)
                .HasForeignKey(r => r.UserId)
                .OnDelete(DeleteBehavior.SetNull);

            // Configure UserFavorite entity
            modelBuilder.Entity<UserFavorite>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.HasIndex(e => new { e.UserId, e.RecipeId }).IsUnique();
            });

            // Configure relationship between User and UserFavorites
            modelBuilder.Entity<UserFavorite>()
                .HasOne(uf => uf.User)
                .WithMany(u => u.Favorites)
                .HasForeignKey(uf => uf.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            // Configure relationship between Recipe and UserFavorites
            modelBuilder.Entity<UserFavorite>()
                .HasOne(uf => uf.Recipe)
                .WithMany()
                .HasForeignKey(uf => uf.RecipeId)
                .OnDelete(DeleteBehavior.Cascade);

            // Data seeding is handled by DataSeeder service
        }

    }
}
