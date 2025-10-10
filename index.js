// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  renderHomePage();
});

// Render the homepage
function renderHomePage() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <button class="btn btn-outline-success px-4" id="homeBtn">Home</button>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container">
      <div class="row min-vh-100 align-items-center justify-content-center">
        <div class="col-md-8 col-lg-6 text-center">
          <!-- Logo -->
          <div class="logo-container mb-5">
            <div class="logo-circle mx-auto">
              <span class="logo-icon">🍽️</span>
            </div>
            <h1 class="display-3 fw-bold text-success mt-4 mb-2">BetterBites</h1>
            <p class="lead text-secondary mb-3">Your personal recipe companion</p>
            <p class="text-muted px-md-5">
              Discover recipes tailored to your specific dietary needs and preferences. 
              We help you find healthier alternatives and provide nutritious options 
              to support your wellness journey—making it easier than ever to reach your health goals.
            </p>
          </div>
          
          <!-- Buttons -->
          <div class="d-grid gap-3 d-md-flex justify-content-md-center">
            <button class="btn btn-success btn-lg px-5 py-3 shadow" id="findRecipesBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search me-2" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
              Find Recipes
            </button>
            <button class="btn btn-outline-success btn-lg px-5 py-3 shadow-sm" id="makeRecipeBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle me-2" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
              Make a Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Add event listeners
  document.getElementById('homeBtn').addEventListener('click', () => {
    console.log('Home clicked');
    renderHomePage();
  });
  
  document.getElementById('findRecipesBtn').addEventListener('click', () => {
    renderFindRecipesPage();
  });
  
  document.getElementById('makeRecipeBtn').addEventListener('click', () => {
    console.log('Make a Recipe clicked');
    // Add navigation logic here
  });
}

// Render the Find Recipes page
function renderFindRecipesPage() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="navHomeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <button class="btn btn-outline-success px-4" id="homeBtn">Home</button>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h1 class="display-4 fw-bold text-success mb-3">Find Your Perfect Recipe</h1>
          <p class="lead text-secondary">Browse our curated collection of healthy, delicious recipes</p>
        </div>
      </div>

      <!-- Search and Filter Bar -->
      <div class="row mb-4">
        <div class="col-lg-8 mx-auto">
          <div class="input-group input-group-lg shadow-sm">
            <input type="text" class="form-control" placeholder="Search recipes..." id="searchInput">
            <button class="btn btn-success" type="button" id="searchBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Filter Categories -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="d-flex flex-wrap gap-2 justify-content-center">
            <button class="btn btn-outline-success filter-btn active" data-filter="all">All</button>
            <button class="btn btn-outline-success filter-btn" data-filter="breakfast">Breakfast</button>
            <button class="btn btn-outline-success filter-btn" data-filter="lunch">Lunch</button>
            <button class="btn btn-outline-success filter-btn" data-filter="dinner">Dinner</button>
            <button class="btn btn-outline-success filter-btn" data-filter="vegetarian">Vegetarian</button>
            <button class="btn btn-outline-success filter-btn" data-filter="vegan">Vegan</button>
            <button class="btn btn-outline-success filter-btn" data-filter="gluten-free">Gluten-Free</button>
            <button class="btn btn-outline-success filter-btn" data-filter="low-carb">Low-Carb</button>
          </div>
        </div>
      </div>

      <!-- Recipe Cards Grid -->
      <div class="row g-4" id="recipesGrid">
        ${generateRecipeCards()}
      </div>
    </div>
  `;
  
  // Add event listeners
  document.getElementById('homeBtn').addEventListener('click', () => {
    renderHomePage();
  });
  
  document.getElementById('navHomeBtn').addEventListener('click', (e) => {
    e.preventDefault();
    renderHomePage();
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      // Filter logic would go here
      console.log('Filter:', e.target.dataset.filter);
    });
  });
}

// Generate recipe cards
function generateRecipeCards() {
  const recipes = [
    { title: 'Avocado Toast Bowl', category: 'Breakfast', time: '10 min', calories: '320', image: '🥑', tags: ['Vegetarian', 'Quick'] },
    { title: 'Quinoa Power Salad', category: 'Lunch', time: '15 min', calories: '280', image: '🥗', tags: ['Vegan', 'Gluten-Free'] },
    { title: 'Grilled Salmon & Veggies', category: 'Dinner', time: '25 min', calories: '420', image: '🐟', tags: ['Low-Carb', 'High-Protein'] },
    { title: 'Berry Protein Smoothie', category: 'Breakfast', time: '5 min', calories: '250', image: '🫐', tags: ['Vegetarian', 'Quick'] },
    { title: 'Chickpea Buddha Bowl', category: 'Lunch', time: '20 min', calories: '380', image: '🥙', tags: ['Vegan', 'High-Fiber'] },
    { title: 'Zucchini Noodle Pasta', category: 'Dinner', time: '18 min', calories: '290', image: '🍝', tags: ['Low-Carb', 'Vegetarian'] },
    { title: 'Greek Yogurt Parfait', category: 'Breakfast', time: '5 min', calories: '220', image: '🥛', tags: ['Vegetarian', 'High-Protein'] },
    { title: 'Asian Chicken Lettuce Wraps', category: 'Lunch', time: '20 min', calories: '310', image: '🥬', tags: ['Low-Carb', 'Gluten-Free'] },
    { title: 'Veggie Stir-Fry', category: 'Dinner', time: '15 min', calories: '260', image: '🥦', tags: ['Vegan', 'Quick'] },
  ];

  return recipes.map(recipe => `
    <div class="col-md-6 col-lg-4">
      <div class="card recipe-card h-100 shadow-sm">
        <div class="card-body">
          <div class="recipe-icon text-center mb-3">${recipe.image}</div>
          <h5 class="card-title text-success fw-bold">${recipe.title}</h5>
          <p class="card-text text-muted mb-3">${recipe.category}</p>
          <div class="d-flex justify-content-between mb-3">
            <small class="text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
              </svg>
              ${recipe.time}
            </small>
            <small class="text-muted">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"/>
              </svg>
              ${recipe.calories} cal
            </small>
          </div>
          <div class="mb-3">
            ${recipe.tags.map(tag => `<span class="badge bg-success-subtle text-success me-1">${tag}</span>`).join('')}
          </div>
          <button class="btn btn-success w-100">View Recipe</button>
        </div>
      </div>
    </div>
  `).join('');
}

