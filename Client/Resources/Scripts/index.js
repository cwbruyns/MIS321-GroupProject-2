// BetterBites - Health-First Recipe Application
// Main JavaScript file for the BetterBites application

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
            <p class="lead text-secondary mb-3">Your Health-First Recipe Companion</p>
            <p class="text-muted px-md-5">
              Discover <strong>nutritionally-scored recipes</strong> tailored to your wellness goals. 
              Every recipe is evaluated for health benefits, helping you make informed choices 
              that support your journey to better nutrition and overall well-being.
            </p>
            
            <!-- Health Benefits -->
            <div class="row mt-4 mb-4">
              <div class="col-md-4 mb-3">
                <div class="text-center">
                  <div class="fs-1 mb-2">🥇</div>
                  <h6 class="text-success fw-bold">Health-Scored</h6>
                  <small class="text-muted">Every recipe rated for nutritional value</small>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="text-center">
                  <div class="fs-1 mb-2">🌱</div>
                  <h6 class="text-success fw-bold">Nutrient-Rich</h6>
                  <small class="text-muted">Focus on whole foods and balanced nutrition</small>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="text-center">
                  <div class="fs-1 mb-2">💪</div>
                  <h6 class="text-success fw-bold">Wellness-Focused</h6>
                  <small class="text-muted">Support your health and fitness goals</small>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Buttons -->
          <div class="d-grid gap-3 d-md-flex justify-content-md-center">
            <button class="btn btn-success btn-lg px-5 py-3 shadow-sm" id="findRecipesBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search me-2" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
              Find Healthy Recipes
            </button>
            <button class="btn btn-outline-success btn-lg px-5 py-3 shadow-sm" id="makeRecipeBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle me-2" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
              Make a Recipe
            </button>
            <button class="btn btn-outline-primary btn-lg px-5 py-3 shadow-sm" id="shoppingListBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-check me-2" viewBox="0 0 16 16">
                <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.354 6.646a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
              Shopping List
            </button>
            <button class="btn btn-outline-warning btn-lg px-5 py-3 shadow-sm" id="healthGoalsBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="me-2" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
              Health Goals
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Add event listeners
  document.getElementById('findRecipesBtn').addEventListener('click', () => {
    renderFindRecipesPage();
  });
  
  document.getElementById('makeRecipeBtn').addEventListener('click', () => {
    renderMakeRecipePage();
  });
  
  document.getElementById('shoppingListBtn').addEventListener('click', () => {
    renderShoppingListPage();
  });
  
  document.getElementById('healthGoalsBtn').addEventListener('click', () => {
    renderHealthGoalsPage();
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

      <!-- Health Focus Banner -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="alert alert-success border-0 shadow-sm">
            <div class="d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="me-3" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
              <div>
                <h5 class="mb-1">🥇 Health-First Recipe Collection</h5>
                <p class="mb-0">Every recipe is carefully evaluated for nutritional value, with health scores to help you make informed choices for your wellness journey.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Filter Categories -->
      <div class="row mb-4">
        <div class="col-12">
          <h5 class="text-center mb-3 text-success">Filter by Category</h5>
          <div class="d-flex flex-wrap gap-2 justify-content-center mb-3">
            <button class="btn btn-outline-success filter-btn active" data-filter="all">All</button>
            <button class="btn btn-outline-success filter-btn" data-filter="breakfast">Breakfast</button>
            <button class="btn btn-outline-success filter-btn" data-filter="lunch">Lunch</button>
            <button class="btn btn-outline-success filter-btn" data-filter="dinner">Dinner</button>
            <button class="btn btn-outline-success filter-btn" data-filter="vegetarian">Vegetarian</button>
            <button class="btn btn-outline-success filter-btn" data-filter="vegan">Vegan</button>
            <button class="btn btn-outline-success filter-btn" data-filter="gluten-free">Gluten-Free</button>
            <button class="btn btn-outline-success filter-btn" data-filter="low-carb">Low-Carb</button>
          </div>
          
          <h5 class="text-center mb-3 text-success">Filter by Health Score</h5>
          <div class="d-flex flex-wrap gap-2 justify-content-center">
            <button class="btn btn-outline-success health-filter-btn active" data-health-filter="all">All Health Levels</button>
            <button class="btn btn-outline-success health-filter-btn" data-health-filter="excellent">
              🥇 Excellent (80+)
            </button>
            <button class="btn btn-outline-success health-filter-btn" data-health-filter="good">
              🥈 Good (60-79)
            </button>
            <button class="btn btn-outline-success health-filter-btn" data-health-filter="fair">
              🥉 Fair (40-59)
            </button>
          </div>
        </div>
      </div>

      <!-- Recipe Cards Grid -->
      <div class="row g-4" id="recipesGrid">
        <div class="col-12 text-center py-5">
          <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
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
      const filter = e.target.dataset.filter;
      filterRecipes(filter);
    });
  });

  // Health filter buttons
  document.querySelectorAll('.health-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.health-filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const healthFilter = e.target.dataset.healthFilter;
      filterByHealthScore(healthFilter);
    });
  });

  // Search functionality
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');

  searchBtn.addEventListener('click', () => {
    performSearch();
  });

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });

  function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    searchRecipes(query);
  }
  
  // Load initial recipes
  loadInitialRecipes();
}

// Load initial recipes for the find recipes page
async function loadInitialRecipes() {
  const recipesGrid = document.getElementById('recipesGrid');
  if (recipesGrid) {
    const cards = await generateRecipeCards();
    recipesGrid.innerHTML = cards;
  }
}

// Filter recipes by health score
async function filterByHealthScore(healthFilter) {
  const recipesGrid = document.getElementById('recipesGrid');
  if (!recipesGrid) return;
  
  try {
    const recipes = await fetchRecipes();
    let filteredRecipes = recipes;
    
    if (healthFilter !== 'all') {
      filteredRecipes = recipes.filter(recipe => {
        const healthScore = calculateHealthScore(recipe);
        
        switch (healthFilter) {
          case 'excellent':
            return healthScore >= 80;
          case 'good':
            return healthScore >= 60 && healthScore < 80;
          case 'fair':
            return healthScore >= 40 && healthScore < 60;
          default:
            return true;
        }
      });
    }
    
    // Convert to card format with health scores
    const cardRecipes = filteredRecipes.map(recipe => {
      const healthScore = calculateHealthScore(recipe);
      const healthLevel = getHealthLevel(healthScore);
      return {
        id: recipe.id,
        title: recipe.title,
        category: recipe.category,
        time: `${recipe.prepTimeMinutes + recipe.cookTimeMinutes} min`,
        calories: recipe.calories.toString(),
        image: recipe.image,
        tags: recipe.tags,
        displayTags: recipe.tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1).replace('-', ' ')),
        healthScore: healthScore,
        healthLevel: healthLevel
      };
    });
    
    if (cardRecipes.length === 0) {
      recipesGrid.innerHTML = `
        <div class="col-12 text-center py-5">
          <h3 class="text-muted">No recipes found</h3>
          <p class="text-secondary">Try a different health filter</p>
        </div>
      `;
    } else {
      recipesGrid.innerHTML = cardRecipes.map(recipe => `
        <div class="col-md-6 col-lg-4">
          <div class="card recipe-card h-100 shadow-sm">
            <div class="card-body">
              <div class="recipe-icon text-center mb-3">${recipe.image}</div>
              <h5 class="card-title text-success fw-bold">${recipe.title}</h5>
              <p class="card-text text-muted mb-3 text-capitalize">${recipe.category}</p>
              
              <!-- Health Score Badge -->
              <div class="mb-3 text-center">
                <span class="badge bg-${recipe.healthLevel.color} fs-6 px-3 py-2">
                  ${recipe.healthLevel.icon} ${recipe.healthLevel.level} Health
                </span>
                <div class="small text-muted mt-1">Score: ${recipe.healthScore}/100</div>
              </div>
              
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
                ${recipe.displayTags.map(tag => `<span class="badge bg-success-subtle text-success me-1">${tag}</span>`).join('')}
              </div>
              <div class="d-grid gap-2">
                <button class="btn btn-success" onclick="viewRecipe(${recipe.id})">View Recipe</button>
                <button class="btn btn-outline-primary btn-sm" onclick="addToShoppingList(${recipe.id})">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="me-1" viewBox="0 0 16 16">
                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.354 6.646a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4z"/>
                  </svg>
                  Add to List
                </button>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }
  } catch (error) {
    console.error('Error filtering recipes by health score:', error);
    recipesGrid.innerHTML = `
      <div class="col-12 text-center py-5">
        <h3 class="text-danger">Error loading recipes</h3>
        <p class="text-secondary">Please try again later</p>
      </div>
    `;
  }
}

// Filter recipes based on selected category
async function filterRecipes(filter) {
  const recipesGrid = document.getElementById('recipesGrid');
  const searchInput = document.getElementById('searchInput');
  searchInput.value = ''; // Clear search when filtering
  
  // Show loading state
  recipesGrid.innerHTML = '<div class="col-12 text-center py-5"><div class="spinner-border text-success" role="status"><span class="visually-hidden">Loading...</span></div></div>';
  
  const cards = await generateRecipeCards(filter);
  recipesGrid.innerHTML = cards;
}

// Search recipes based on query
async function searchRecipes(query) {
  const recipesGrid = document.getElementById('recipesGrid');
  
  const cards = await generateRecipeCards('all', query);
  recipesGrid.innerHTML = cards;
  
  // Reset active filter to "All"
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
}

// Generate recipe cards
async function generateRecipeCards(filter = 'all', searchQuery = '') {
  let recipes;
  
  try {
  if (searchQuery) {
      recipes = await searchRecipes(searchQuery);
    } else if (filter !== 'all') {
      recipes = await fetchRecipesByCategory(filter);
  } else {
      recipes = await fetchRecipes();
    }
  } catch (error) {
    console.error('Error fetching recipes:', error);
    // Fallback to hardcoded recipes
    recipes = getHardcodedRecipes();
  }
  
  // Convert API recipes to card format if needed
  const cardRecipes = recipes.map(recipe => {
    const healthScore = calculateHealthScore(recipe);
    const healthLevel = getHealthLevel(healthScore);
    return {
      id: recipe.id,
      title: recipe.title,
      category: recipe.category,
      time: `${recipe.prepTimeMinutes + recipe.cookTimeMinutes} min`,
      calories: recipe.calories.toString(),
      image: recipe.image,
      tags: recipe.tags,
      displayTags: recipe.tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1).replace('-', ' ')),
      healthScore: healthScore,
      healthLevel: healthLevel
    };
  });

  let filteredRecipes = cardRecipes;

  if (filteredRecipes.length === 0) {
    return `
      <div class="col-12 text-center py-5">
        <h3 class="text-muted">No recipes found</h3>
        <p class="text-secondary">Try a different search term or category</p>
      </div>
    `;
  }

  return filteredRecipes.map(recipe => `
    <div class="col-md-6 col-lg-4">
      <div class="card recipe-card h-100 shadow-sm">
        <div class="card-body">
          <div class="recipe-icon text-center mb-3">${recipe.image}</div>
          <h5 class="card-title text-success fw-bold">${recipe.title}</h5>
          <p class="card-text text-muted mb-3 text-capitalize">${recipe.category}</p>
          
          <!-- Health Score Badge -->
          <div class="mb-3 text-center">
            <span class="badge bg-${recipe.healthLevel.color} fs-6 px-3 py-2">
              ${recipe.healthLevel.icon} ${recipe.healthLevel.level} Health
            </span>
            <div class="small text-muted mt-1">Score: ${recipe.healthScore}/100</div>
          </div>
          
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
            ${recipe.displayTags.map(tag => `<span class="badge bg-success-subtle text-success me-1">${tag}</span>`).join('')}
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-success" onclick="viewRecipe(${recipe.id})">View Recipe</button>
            <button class="btn btn-outline-primary btn-sm" onclick="addToShoppingList(${recipe.id})">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="me-1" viewBox="0 0 16 16">
                <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.354 6.646a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4z"/>
              </svg>
              Add to List
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// API Configuration
const API_BASE_URL = 'https://localhost:7000/api'; // Update this to match your API URL

// API Functions
async function fetchRecipes() {
  try {
    const response = await fetch(`${API_BASE_URL}/recipe`);
    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching recipes:', error);
    // Fallback to hardcoded recipes
    return getHardcodedRecipes();
  }
}

async function fetchRecipeById(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/recipe/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch recipe');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching recipe:', error);
    // Fallback to hardcoded recipes
    const recipes = getHardcodedRecipes();
    return recipes.find(r => r.id === id);
  }
}

async function searchRecipes(query) {
  try {
    const response = await fetch(`${API_BASE_URL}/recipe/search?query=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error('Failed to search recipes');
    }
    return await response.json();
  } catch (error) {
    console.error('Error searching recipes:', error);
    // Fallback to local search
    const recipes = getHardcodedRecipes();
    const lowerQuery = query.toLowerCase();
    return recipes.filter(r => 
      r.title.toLowerCase().includes(lowerQuery) ||
      r.description.toLowerCase().includes(lowerQuery) ||
      r.tags.some(t => t.toLowerCase().includes(lowerQuery)) ||
      r.ingredients.some(i => i.name.toLowerCase().includes(lowerQuery))
    );
  }
}

async function fetchRecipesByCategory(category) {
  try {
    const response = await fetch(`${API_BASE_URL}/recipe/category/${encodeURIComponent(category)}`);
    if (!response.ok) {
      throw new Error('Failed to fetch recipes by category');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching recipes by category:', error);
    // Fallback to hardcoded recipes
    const recipes = getHardcodedRecipes();
    return recipes.filter(r => r.category.toLowerCase() === category.toLowerCase());
  }
}

// Health scoring system
function calculateHealthScore(recipe) {
  let score = 0;
  let maxScore = 100;
  
  // Base nutrition scoring (40 points max)
  const caloriesPerServing = recipe.calories / recipe.servings;
  if (caloriesPerServing <= 300) score += 20;
  else if (caloriesPerServing <= 400) score += 15;
  else if (caloriesPerServing <= 500) score += 10;
  else if (caloriesPerServing <= 600) score += 5;
  
  // Protein content (20 points max)
  const proteinIngredients = recipe.ingredients.filter(ing => 
    ['chicken', 'salmon', 'beef', 'turkey', 'eggs', 'quinoa', 'lentils', 'chickpeas', 'tofu', 'nuts', 'cheese', 'yogurt'].some(protein => 
      ing.name.toLowerCase().includes(protein)
    )
  );
  if (proteinIngredients.length >= 2) score += 20;
  else if (proteinIngredients.length >= 1) score += 10;
  
  // Vegetable content (20 points max)
  const vegetableIngredients = recipe.ingredients.filter(ing => 
    ['tomato', 'lettuce', 'spinach', 'broccoli', 'carrot', 'bell-pepper', 'onion', 'garlic', 'cucumber', 'zucchini', 'mushroom', 'cauliflower', 'kale', 'avocado'].some(veg => 
      ing.name.toLowerCase().includes(veg)
    )
  );
  if (vegetableIngredients.length >= 3) score += 20;
  else if (vegetableIngredients.length >= 2) score += 15;
  else if (vegetableIngredients.length >= 1) score += 10;
  
  // Whole grains (10 points max)
  const wholeGrainIngredients = recipe.ingredients.filter(ing => 
    ['quinoa', 'brown rice', 'oats', 'whole wheat', 'barley'].some(grain => 
      ing.name.toLowerCase().includes(grain)
    )
  );
  if (wholeGrainIngredients.length >= 1) score += 10;
  
  // Healthy fats (10 points max)
  const healthyFatIngredients = recipe.ingredients.filter(ing => 
    ['olive oil', 'avocado', 'nuts', 'salmon'].some(fat => 
      ing.name.toLowerCase().includes(fat)
    )
  );
  if (healthyFatIngredients.length >= 1) score += 10;
  
  // Penalty for processed/unhealthy ingredients
  const unhealthyIngredients = recipe.ingredients.filter(ing => 
    ['sugar', 'butter', 'cream', 'mayonnaise', 'bacon', 'processed'].some(unhealthy => 
      ing.name.toLowerCase().includes(unhealthy)
    )
  );
  score -= unhealthyIngredients.length * 5;
  
  // Ensure score is between 0 and 100
  return Math.max(0, Math.min(100, score));
}

// Get health level based on score
function getHealthLevel(score) {
  if (score >= 80) return { level: 'Excellent', color: 'success', icon: '🥇' };
  if (score >= 60) return { level: 'Good', color: 'primary', icon: '🥈' };
  if (score >= 40) return { level: 'Fair', color: 'warning', icon: '🥉' };
  return { level: 'Needs Improvement', color: 'danger', icon: '⚠️' };
}

// View recipe details
async function viewRecipe(recipeId) {
  try {
    const recipe = await fetchRecipeById(recipeId);
    if (recipe) {
      renderRecipeDetailPage(recipe);
    }
  } catch (error) {
    console.error('Error loading recipe:', error);
    alert('Error loading recipe. Please try again.');
  }
}

// Get healthier ingredient substitutions
function getIngredientSubstitutions(ingredientName) {
  const substitutions = {
    // Dairy substitutions
    'butter': [
      { name: 'Avocado', healthRating: 'Excellent', reason: 'Rich in healthy monounsaturated fats and fiber', notes: 'Use 1/2 the amount' },
      { name: 'Coconut Oil', healthRating: 'Good', reason: 'Contains medium-chain triglycerides for energy', notes: 'Use 3/4 the amount' },
      { name: 'Olive Oil', healthRating: 'Excellent', reason: 'Heart-healthy monounsaturated fats and antioxidants', notes: 'Use 3/4 the amount' },
      { name: 'Greek Yogurt', healthRating: 'Good', reason: 'High protein, probiotics, and lower fat content', notes: 'Use equal amount' }
    ],
    'cream': [
      { name: 'Coconut Milk', healthRating: 'Good', reason: 'Plant-based, contains healthy fats and no cholesterol', notes: 'Use light version for fewer calories' },
      { name: 'Cashew Cream', healthRating: 'Excellent', reason: 'Plant-based, rich in healthy fats and minerals', notes: 'Blend soaked cashews with water' },
      { name: 'Greek Yogurt', healthRating: 'Good', reason: 'High protein, probiotics, and lower fat', notes: 'Use 2/3 the amount' },
      { name: 'Almond Milk', healthRating: 'Good', reason: 'Low calorie, fortified with vitamins', notes: 'Use unsweetened version' }
    ],
    'cheese': [
      { name: 'Nutritional Yeast', healthRating: 'Excellent', reason: 'B-vitamins, protein, and cheesy flavor without dairy', notes: 'Great for vegan recipes' },
      { name: 'Avocado', healthRating: 'Excellent', reason: 'Healthy fats, fiber, and creamy texture', notes: 'Perfect for spreads and dips' },
      { name: 'Hummus', healthRating: 'Good', reason: 'Plant protein, fiber, and healthy fats', notes: 'Great for sandwiches and wraps' },
      { name: 'Cottage Cheese', healthRating: 'Good', reason: 'High protein, lower fat than regular cheese', notes: 'Use low-fat version' }
    ],
    'milk': [
      { name: 'Almond Milk', healthRating: 'Good', reason: 'Low calorie, fortified with vitamins D and E', notes: 'Use unsweetened for cooking' },
      { name: 'Oat Milk', healthRating: 'Good', reason: 'Creamy texture, fiber, and beta-glucans', notes: 'Great for baking' },
      { name: 'Coconut Milk', healthRating: 'Good', reason: 'Medium-chain triglycerides for energy', notes: 'Use light version for fewer calories' },
      { name: 'Soy Milk', healthRating: 'Good', reason: 'Complete protein and isoflavones', notes: 'Choose unsweetened' }
    ],
    
    // Meat substitutions
    'ground beef': [
      { name: 'Ground Turkey', healthRating: 'Good', reason: 'Lower saturated fat, high protein', notes: 'Use 93% lean' },
      { name: 'Lentils', healthRating: 'Excellent', reason: 'Plant protein, fiber, iron, and folate', notes: 'Cook until tender' },
      { name: 'Mushrooms', healthRating: 'Excellent', reason: 'Umami flavor, fiber, and antioxidants', notes: 'Chop finely and sauté' },
      { name: 'Quinoa', healthRating: 'Excellent', reason: 'Complete protein, fiber, and minerals', notes: 'Cook and season well' }
    ],
    'chicken': [
      { name: 'Tofu', healthRating: 'Good', reason: 'Plant protein, isoflavones, and calcium', notes: 'Press and marinate for flavor' },
      { name: 'Tempeh', healthRating: 'Excellent', reason: 'Fermented soy with probiotics and complete protein', notes: 'Steam before cooking' },
      { name: 'Chickpeas', healthRating: 'Excellent', reason: 'Plant protein, fiber, and folate', notes: 'Great in curries and salads' },
      { name: 'Seitan', healthRating: 'Good', reason: 'High protein, low fat, meat-like texture', notes: 'Made from wheat gluten' }
    ],
    'bacon': [
      { name: 'Turkey Bacon', healthRating: 'Good', reason: 'Lower fat and sodium than pork bacon', notes: 'Still processed, use sparingly' },
      { name: 'Mushrooms', healthRating: 'Excellent', reason: 'Umami flavor, fiber, and antioxidants', notes: 'Sauté until crispy' },
      { name: 'Coconut Bacon', healthRating: 'Good', reason: 'Plant-based, healthy fats, and smoky flavor', notes: 'Make from coconut flakes' },
      { name: 'Tempeh Bacon', healthRating: 'Excellent', reason: 'Fermented soy with probiotics and protein', notes: 'Marinate and bake' }
    ],
    
    // Grain substitutions
    'white rice': [
      { name: 'Brown Rice', healthRating: 'Excellent', reason: 'Whole grain, fiber, and B-vitamins', notes: 'Cook 45-50 minutes' },
      { name: 'Quinoa', healthRating: 'Excellent', reason: 'Complete protein, fiber, and minerals', notes: 'Cook 15-20 minutes' },
      { name: 'Cauliflower Rice', healthRating: 'Excellent', reason: 'Low carb, high fiber, and vitamins', notes: 'Pulse in food processor' },
      { name: 'Wild Rice', healthRating: 'Good', reason: 'Higher protein and antioxidants than white rice', notes: 'Cook 45-60 minutes' }
    ],
    'pasta': [
      { name: 'Zucchini Noodles', healthRating: 'Excellent', reason: 'Low carb, high fiber, and vitamins', notes: 'Use spiralizer or julienne' },
      { name: 'Spaghetti Squash', healthRating: 'Excellent', reason: 'Low calorie, fiber, and beta-carotene', notes: 'Bake and scrape with fork' },
      { name: 'Whole Wheat Pasta', healthRating: 'Good', reason: 'Whole grain, fiber, and B-vitamins', notes: 'Cook according to package' },
      { name: 'Lentil Pasta', healthRating: 'Excellent', reason: 'High protein, fiber, and iron', notes: 'Cook 8-10 minutes' }
    ],
    'bread': [
      { name: 'Whole Grain Bread', healthRating: 'Good', reason: 'Whole grains, fiber, and B-vitamins', notes: 'Look for 100% whole grain' },
      { name: 'Lettuce Wraps', healthRating: 'Excellent', reason: 'Low calorie, high water content, and vitamins', notes: 'Use large, sturdy leaves' },
      { name: 'Collard Green Wraps', healthRating: 'Excellent', reason: 'High fiber, vitamins K and C', notes: 'Blanch leaves to soften' },
      { name: 'Sweet Potato Slices', healthRating: 'Good', reason: 'Beta-carotene, fiber, and natural sweetness', notes: 'Slice and toast' }
    ],
    
    // Sugar substitutions
    'sugar': [
      { name: 'Honey', healthRating: 'Good', reason: 'Natural antioxidants and antimicrobial properties', notes: 'Use 3/4 the amount' },
      { name: 'Maple Syrup', healthRating: 'Good', reason: 'Natural minerals and antioxidants', notes: 'Use 3/4 the amount' },
      { name: 'Stevia', healthRating: 'Good', reason: 'Zero calories, natural sweetener', notes: 'Use very small amounts' },
      { name: 'Dates', healthRating: 'Excellent', reason: 'Fiber, potassium, and natural sweetness', notes: 'Blend into paste' }
    ],
    'brown sugar': [
      { name: 'Coconut Sugar', healthRating: 'Good', reason: 'Lower glycemic index and minerals', notes: 'Use equal amount' },
      { name: 'Date Sugar', healthRating: 'Excellent', reason: 'Fiber, potassium, and natural sweetness', notes: 'Use equal amount' },
      { name: 'Monk Fruit', healthRating: 'Good', reason: 'Zero calories, natural sweetener', notes: 'Use 1/4 the amount' }
    ],
    
    // Oil substitutions
    'vegetable oil': [
      { name: 'Olive Oil', healthRating: 'Excellent', reason: 'Heart-healthy monounsaturated fats and antioxidants', notes: 'Use extra virgin' },
      { name: 'Coconut Oil', healthRating: 'Good', reason: 'Medium-chain triglycerides for energy', notes: 'Solid at room temperature' },
      { name: 'Avocado Oil', healthRating: 'Excellent', reason: 'High smoke point, monounsaturated fats', notes: 'Great for high-heat cooking' }
    ],
    
    // Snack substitutions
    'chips': [
      { name: 'Kale Chips', healthRating: 'Excellent', reason: 'Vitamins K and C, fiber, and antioxidants', notes: 'Bake with olive oil and salt' },
      { name: 'Apple Slices', healthRating: 'Excellent', reason: 'Fiber, vitamin C, and natural sweetness', notes: 'Pair with nut butter' },
      { name: 'Nuts', healthRating: 'Good', reason: 'Healthy fats, protein, and minerals', notes: 'Portion control - small handful' },
      { name: 'Roasted Chickpeas', healthRating: 'Excellent', reason: 'Plant protein, fiber, and iron', notes: 'Season and roast until crispy' }
    ],
    
    // Condiment substitutions
    'mayonnaise': [
      { name: 'Avocado', healthRating: 'Excellent', reason: 'Healthy fats, fiber, and vitamins', notes: 'Mash and season with lemon' },
      { name: 'Hummus', healthRating: 'Good', reason: 'Plant protein, fiber, and healthy fats', notes: 'Great for sandwiches' },
      { name: 'Greek Yogurt', healthRating: 'Good', reason: 'High protein, probiotics, and lower fat', notes: 'Mix with herbs and spices' },
      { name: 'Tahini', healthRating: 'Good', reason: 'Sesame seeds provide healthy fats and minerals', notes: 'Thin with lemon juice' }
    ],
    'ketchup': [
      { name: 'Tomato Paste', healthRating: 'Good', reason: 'Concentrated tomato nutrients without added sugar', notes: 'Mix with herbs and vinegar' },
      { name: 'Salsa', healthRating: 'Excellent', reason: 'Fresh vegetables, fiber, and vitamins', notes: 'Choose low-sodium versions' },
      { name: 'BBQ Sauce (Homemade)', healthRating: 'Good', reason: 'Control sugar and sodium content', notes: 'Use tomato paste, vinegar, and spices' }
    ]
  };
  
  const lowerName = ingredientName.toLowerCase();
  for (const [key, subs] of Object.entries(substitutions)) {
    if (lowerName.includes(key)) {
      return subs;
    }
  }
  
  return [];
}

// Get health improvement tips for a recipe
function getHealthImprovementTips(recipe) {
  const tips = [];
  
  // Check for high-calorie ingredients
  const highCalorieIngredients = recipe.ingredients.filter(ing => 
    ['butter', 'cream', 'cheese', 'oil', 'nuts', 'avocado'].some(highCal => 
      ing.name.toLowerCase().includes(highCal)
    )
  );
  
  if (highCalorieIngredients.length > 0) {
    tips.push('Reduce portion sizes of high-calorie ingredients like cheese and oils');
  }
  
  // Check for processed ingredients
  const processedIngredients = recipe.ingredients.filter(ing => 
    ['canned', 'processed', 'packaged', 'frozen'].some(processed => 
      ing.name.toLowerCase().includes(processed)
    )
  );
  
  if (processedIngredients.length > 0) {
    tips.push('Choose fresh, whole ingredients over processed alternatives');
  }
  
  // Check for sodium content
  const saltyIngredients = recipe.ingredients.filter(ing => 
    ['salt', 'soy sauce', 'broth', 'canned'].some(salty => 
      ing.name.toLowerCase().includes(salty)
    )
  );
  
  if (saltyIngredients.length > 0) {
    tips.push('Reduce sodium by using herbs and spices instead of salt');
  }
  
  // Check for vegetable content
  const vegetableCount = recipe.ingredients.filter(ing => 
    ['tomato', 'lettuce', 'spinach', 'broccoli', 'carrot', 'bell-pepper', 'onion', 'garlic', 'cucumber', 'zucchini', 'mushroom', 'cauliflower', 'kale', 'avocado'].some(veg => 
      ing.name.toLowerCase().includes(veg)
    )
  ).length;
  
  if (vegetableCount < 3) {
    tips.push('Add more colorful vegetables to increase fiber and nutrient content');
  }
  
  // Check for protein sources
  const proteinCount = recipe.ingredients.filter(ing => 
    ['chicken', 'salmon', 'beef', 'turkey', 'eggs', 'quinoa', 'lentils', 'chickpeas', 'tofu', 'nuts', 'cheese', 'yogurt'].some(protein => 
      ing.name.toLowerCase().includes(protein)
    )
  ).length;
  
  if (proteinCount < 2) {
    tips.push('Include lean protein sources to support muscle health and satiety');
  }
  
  // Check for whole grains
  const hasWholeGrains = recipe.ingredients.some(ing => 
    ['quinoa', 'brown rice', 'oats', 'whole wheat', 'barley'].some(grain => 
      ing.name.toLowerCase().includes(grain)
    )
  );
  
  if (!hasWholeGrains) {
    tips.push('Replace refined grains with whole grains for better nutrition');
  }
  
  // Check for healthy fats
  const hasHealthyFats = recipe.ingredients.some(ing => 
    ['olive oil', 'avocado', 'nuts', 'salmon'].some(fat => 
      ing.name.toLowerCase().includes(fat)
    )
  );
  
  if (!hasHealthyFats) {
    tips.push('Include healthy fats like olive oil, nuts, or avocado for heart health');
  }
  
  return tips;
}

// Get nutritional benefits of a recipe
function getNutritionalBenefits(recipe) {
  const benefits = [];
  
  // Check for protein sources
  const proteinIngredients = recipe.ingredients.filter(ing => 
    ['chicken', 'salmon', 'beef', 'turkey', 'eggs', 'quinoa', 'lentils', 'chickpeas', 'tofu', 'nuts', 'cheese', 'yogurt'].some(protein => 
      ing.name.toLowerCase().includes(protein)
    )
  );
  
  if (proteinIngredients.length > 0) {
    benefits.push('High in protein for muscle building and repair');
  }
  
  // Check for vegetables
  const vegetableIngredients = recipe.ingredients.filter(ing => 
    ['tomato', 'lettuce', 'spinach', 'broccoli', 'carrot', 'bell-pepper', 'onion', 'garlic', 'cucumber', 'zucchini', 'mushroom', 'cauliflower', 'kale', 'avocado'].some(veg => 
      ing.name.toLowerCase().includes(veg)
    )
  );
  
  if (vegetableIngredients.length > 0) {
    benefits.push('Rich in vitamins, minerals, and antioxidants from vegetables');
  }
  
  // Check for fiber sources
  const fiberIngredients = recipe.ingredients.filter(ing => 
    ['quinoa', 'brown rice', 'oats', 'whole wheat', 'barley', 'lentils', 'chickpeas', 'black beans', 'vegetables', 'fruits'].some(fiber => 
      ing.name.toLowerCase().includes(fiber)
    )
  );
  
  if (fiberIngredients.length > 0) {
    benefits.push('Good source of fiber for digestive health and satiety');
  }
  
  // Check for omega-3 sources
  const omega3Ingredients = recipe.ingredients.filter(ing => 
    ['salmon', 'walnuts', 'chia seeds', 'flax seeds', 'avocado'].some(omega3 => 
      ing.name.toLowerCase().includes(omega3)
    )
  );
  
  if (omega3Ingredients.length > 0) {
    benefits.push('Contains omega-3 fatty acids for heart and brain health');
  }
  
  // Check for probiotics
  const probioticIngredients = recipe.ingredients.filter(ing => 
    ['yogurt', 'kefir', 'sauerkraut', 'kimchi', 'tempeh'].some(probiotic => 
      ing.name.toLowerCase().includes(probiotic)
    )
  );
  
  if (probioticIngredients.length > 0) {
    benefits.push('Includes probiotics for gut health and immune support');
  }
  
  // Check for iron sources
  const ironIngredients = recipe.ingredients.filter(ing => 
    ['spinach', 'lentils', 'chickpeas', 'quinoa', 'tofu', 'pumpkin seeds'].some(iron => 
      ing.name.toLowerCase().includes(iron)
    )
  );
  
  if (ironIngredients.length > 0) {
    benefits.push('Good source of iron for oxygen transport and energy');
  }
  
  // Check for calcium sources
  const calciumIngredients = recipe.ingredients.filter(ing => 
    ['yogurt', 'cheese', 'milk', 'tofu', 'almonds', 'kale', 'broccoli'].some(calcium => 
      ing.name.toLowerCase().includes(calcium)
    )
  );
  
  if (calciumIngredients.length > 0) {
    benefits.push('Contains calcium for bone health and muscle function');
  }
  
  return benefits;
}

// Hardcoded recipes for fallback
function getHardcodedRecipes() {
  return [
    {
      id: 1,
      title: "Mediterranean Quinoa Bowl",
      description: "A nutritious and colorful bowl packed with protein, vegetables, and healthy fats",
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      servings: 2,
      calories: 450,
      image: "🥗",
      category: "lunch",
      tags: ["vegetarian", "high-protein", "mediterranean"],
      difficulty: "Easy",
      ingredients: [
        { name: "quinoa", amount: "1", unit: "cup", notes: "cooked" },
        { name: "cherry tomatoes", amount: "1", unit: "cup", notes: "halved" },
        { name: "cucumber", amount: "1", unit: "medium", notes: "diced" },
        { name: "red onion", amount: "0.25", unit: "cup", notes: "thinly sliced" },
        { name: "kalamata olives", amount: "0.25", unit: "cup", notes: "pitted" },
        { name: "feta cheese", amount: "0.25", unit: "cup", notes: "crumbled" },
        { name: "olive oil", amount: "2", unit: "tbsp", notes: "extra virgin" },
        { name: "lemon juice", amount: "1", unit: "tbsp", notes: "fresh" },
        { name: "fresh herbs", amount: "2", unit: "tbsp", notes: "basil and oregano" }
      ],
      instructions: [
        "Cook quinoa according to package instructions and let cool",
        "In a large bowl, combine cooked quinoa with tomatoes, cucumber, and red onion",
        "Add olives and feta cheese",
        "Whisk together olive oil and lemon juice for the dressing",
        "Pour dressing over the salad and toss gently",
        "Garnish with fresh herbs and serve"
      ]
    },
    {
      id: 2,
      title: "Grilled Salmon with Roasted Vegetables",
      description: "A heart-healthy meal rich in omega-3 fatty acids and antioxidants",
      prepTimeMinutes: 20,
      cookTimeMinutes: 25,
      servings: 4,
      calories: 380,
      image: "🐟",
      category: "dinner",
      tags: ["high-protein", "omega-3", "low-carb"],
      difficulty: "Medium",
      ingredients: [
        { name: "salmon fillets", amount: "4", unit: "pieces", notes: "6 oz each" },
        { name: "broccoli", amount: "2", unit: "cups", notes: "florets" },
        { name: "carrots", amount: "2", unit: "medium", notes: "sliced" },
        { name: "bell peppers", amount: "2", unit: "medium", notes: "mixed colors" },
        { name: "olive oil", amount: "3", unit: "tbsp", notes: "divided" },
        { name: "garlic", amount: "3", unit: "cloves", notes: "minced" },
        { name: "lemon", amount: "1", unit: "medium", notes: "juiced" },
        { name: "fresh dill", amount: "2", unit: "tbsp", notes: "chopped" },
        { name: "salt and pepper", amount: "to taste", unit: "", notes: "" }
      ],
      instructions: [
        "Preheat oven to 425°F (220°C)",
        "Toss vegetables with 2 tbsp olive oil, garlic, salt, and pepper",
        "Roast vegetables for 20-25 minutes until tender",
        "Season salmon with salt, pepper, and lemon juice",
        "Heat remaining oil in a grill pan over medium-high heat",
        "Grill salmon for 4-5 minutes per side until cooked through",
        "Serve salmon over roasted vegetables and garnish with dill"
      ]
    },
    {
      id: 3,
      title: "Avocado Toast with Poached Egg",
      description: "A protein-rich breakfast that's both satisfying and nutritious",
      prepTimeMinutes: 10,
      cookTimeMinutes: 5,
      servings: 2,
      calories: 320,
      image: "🥑",
      category: "breakfast",
      tags: ["high-protein", "healthy-fats", "quick"],
      difficulty: "Easy",
      ingredients: [
        { name: "whole grain bread", amount: "4", unit: "slices", notes: "toasted" },
        { name: "avocado", amount: "2", unit: "medium", notes: "ripe" },
        { name: "eggs", amount: "4", unit: "large", notes: "poached" },
        { name: "lemon juice", amount: "1", unit: "tbsp", notes: "fresh" },
        { name: "red pepper flakes", amount: "0.5", unit: "tsp", notes: "" },
        { name: "salt and pepper", amount: "to taste", unit: "", notes: "" },
        { name: "microgreens", amount: "0.5", unit: "cup", notes: "for garnish" }
      ],
      instructions: [
        "Toast the bread slices until golden brown",
        "Mash avocado with lemon juice, salt, and pepper",
        "Spread mashed avocado evenly on toast",
        "Poach eggs in simmering water for 3-4 minutes",
        "Place poached egg on each toast",
        "Garnish with red pepper flakes and microgreens",
        "Serve immediately"
      ]
    },
    {
      id: 4,
      title: "Thai Coconut Curry Soup",
      description: "A warming, aromatic soup packed with vegetables and plant-based protein",
      prepTimeMinutes: 15,
      cookTimeMinutes: 25,
      servings: 4,
      calories: 280,
      image: "🍲",
      category: "dinner",
      tags: ["vegan", "anti-inflammatory", "comfort-food"],
      difficulty: "Medium",
      ingredients: [
        { name: "coconut milk", amount: "1", unit: "can", notes: "full-fat" },
        { name: "vegetable broth", amount: "3", unit: "cups", notes: "low-sodium" },
        { name: "red curry paste", amount: "2", unit: "tbsp", notes: "" },
        { name: "tofu", amount: "14", unit: "oz", notes: "firm, cubed" },
        { name: "mushrooms", amount: "8", unit: "oz", notes: "shiitake, sliced" },
        { name: "bell peppers", amount: "2", unit: "medium", notes: "sliced" },
        { name: "bok choy", amount: "4", unit: "cups", notes: "chopped" },
        { name: "lime juice", amount: "2", unit: "tbsp", notes: "fresh" },
        { name: "fresh basil", amount: "0.25", unit: "cup", notes: "chopped" },
        { name: "brown rice", amount: "2", unit: "cups", notes: "cooked" }
      ],
      instructions: [
        "Heat coconut milk in a large pot over medium heat",
        "Add curry paste and stir until fragrant, about 2 minutes",
        "Add vegetable broth and bring to a simmer",
        "Add tofu and mushrooms, simmer for 10 minutes",
        "Add bell peppers and bok choy, cook for 5 minutes",
        "Stir in lime juice and fresh basil",
        "Serve over brown rice"
      ]
    },
    {
      id: 5,
      title: "Greek Yogurt Parfait",
      description: "A protein-packed breakfast or snack with layers of goodness",
      prepTimeMinutes: 10,
      cookTimeMinutes: 0,
      servings: 2,
      calories: 250,
      image: "🥣",
      category: "breakfast",
      tags: ["high-protein", "probiotics", "antioxidants"],
      difficulty: "Easy",
      ingredients: [
        { name: "Greek yogurt", amount: "1", unit: "cup", notes: "plain, non-fat" },
        { name: "mixed berries", amount: "1", unit: "cup", notes: "fresh or frozen" },
        { name: "granola", amount: "0.5", unit: "cup", notes: "low-sugar" },
        { name: "honey", amount: "2", unit: "tbsp", notes: "raw" },
        { name: "chia seeds", amount: "2", unit: "tbsp", notes: "" },
        { name: "almonds", amount: "2", unit: "tbsp", notes: "chopped" },
        { name: "vanilla extract", amount: "0.5", unit: "tsp", notes: "" }
      ],
      instructions: [
        "Mix Greek yogurt with vanilla extract",
        "Layer half the yogurt in serving glasses",
        "Add half the berries on top",
        "Sprinkle with half the granola and chia seeds",
        "Repeat layers with remaining ingredients",
        "Drizzle with honey and top with almonds",
        "Serve immediately or refrigerate for up to 2 hours"
      ]
    },
    {
      id: 6,
      title: "Lentil and Spinach Curry",
      description: "A hearty, plant-based curry rich in iron and protein",
      prepTimeMinutes: 15,
      cookTimeMinutes: 30,
      servings: 4,
      calories: 320,
      image: "🌶️",
      category: "dinner",
      tags: ["vegan", "high-fiber", "iron-rich"],
      difficulty: "Easy",
      ingredients: [
        { name: "red lentils", amount: "1", unit: "cup", notes: "rinsed" },
        { name: "coconut oil", amount: "2", unit: "tbsp", notes: "" },
        { name: "onion", amount: "1", unit: "medium", notes: "diced" },
        { name: "garlic", amount: "4", unit: "cloves", notes: "minced" },
        { name: "ginger", amount: "1", unit: "tbsp", notes: "grated" },
        { name: "curry powder", amount: "2", unit: "tbsp", notes: "" },
        { name: "coconut milk", amount: "1", unit: "can", notes: "light" },
        { name: "diced tomatoes", amount: "14", unit: "oz", notes: "canned" },
        { name: "spinach", amount: "4", unit: "cups", notes: "fresh" },
        { name: "brown rice", amount: "2", unit: "cups", notes: "cooked" }
      ],
      instructions: [
        "Heat coconut oil in a large pot over medium heat",
        "Add onion and cook until softened, about 5 minutes",
        "Add garlic, ginger, and curry powder, cook for 1 minute",
        "Add lentils, coconut milk, and tomatoes",
        "Bring to a boil, then reduce heat and simmer for 20 minutes",
        "Stir in spinach and cook until wilted",
        "Serve over brown rice"
      ]
    },
    {
      id: 7,
      title: "Baked Sweet Potato with Black Beans",
      description: "A satisfying, fiber-rich meal that's both sweet and savory",
      prepTimeMinutes: 10,
      cookTimeMinutes: 45,
      servings: 4,
      calories: 290,
      image: "🍠",
      category: "lunch",
      tags: ["vegetarian", "high-fiber", "antioxidants"],
      difficulty: "Easy",
      ingredients: [
        { name: "sweet potatoes", amount: "4", unit: "large", notes: "" },
        { name: "black beans", amount: "2", unit: "cups", notes: "cooked" },
        { name: "avocado", amount: "2", unit: "medium", notes: "diced" },
        { name: "red onion", amount: "0.5", unit: "cup", notes: "diced" },
        { name: "lime juice", amount: "2", unit: "tbsp", notes: "fresh" },
        { name: "cilantro", amount: "0.25", unit: "cup", notes: "chopped" },
        { name: "cumin", amount: "1", unit: "tsp", notes: "ground" },
        { name: "chili powder", amount: "0.5", unit: "tsp", notes: "" },
        { name: "olive oil", amount: "2", unit: "tbsp", notes: "" }
      ],
      instructions: [
        "Preheat oven to 400°F (200°C)",
        "Pierce sweet potatoes and bake for 45 minutes until tender",
        "Mix black beans with cumin, chili powder, and olive oil",
        "Combine avocado, red onion, lime juice, and cilantro",
        "Split baked sweet potatoes lengthwise",
        "Top with seasoned black beans and avocado mixture",
        "Serve warm"
      ]
    },
    {
      id: 8,
      title: "Chicken and Vegetable Stir-Fry",
      description: "A quick, colorful stir-fry packed with lean protein and vegetables",
      prepTimeMinutes: 15,
      cookTimeMinutes: 10,
      servings: 4,
      calories: 280,
      image: "🥢",
      category: "dinner",
      tags: ["high-protein", "low-carb", "quick"],
      difficulty: "Easy",
      ingredients: [
        { name: "chicken breast", amount: "1", unit: "lb", notes: "cut into strips" },
        { name: "broccoli", amount: "2", unit: "cups", notes: "florets" },
        { name: "bell peppers", amount: "2", unit: "medium", notes: "sliced" },
        { name: "snap peas", amount: "1", unit: "cup", notes: "" },
        { name: "garlic", amount: "3", unit: "cloves", notes: "minced" },
        { name: "ginger", amount: "1", unit: "tbsp", notes: "grated" },
        { name: "soy sauce", amount: "3", unit: "tbsp", notes: "low-sodium" },
        { name: "sesame oil", amount: "1", unit: "tbsp", notes: "" },
        { name: "red pepper flakes", amount: "0.5", unit: "tsp", notes: "" },
        { name: "brown rice", amount: "2", unit: "cups", notes: "cooked" }
      ],
      instructions: [
        "Heat sesame oil in a large wok or skillet over high heat",
        "Add chicken and cook until golden, about 4-5 minutes",
        "Add garlic and ginger, cook for 1 minute",
        "Add vegetables and stir-fry for 3-4 minutes",
        "Add soy sauce and red pepper flakes",
        "Cook for 1 more minute until vegetables are crisp-tender",
        "Serve over brown rice"
      ]
    },
    {
      id: 9,
      title: "Overnight Oats with Berries",
      description: "A make-ahead breakfast that's rich in fiber and antioxidants",
      prepTimeMinutes: 10,
      cookTimeMinutes: 0,
      servings: 2,
      calories: 320,
      image: "🥣",
      category: "breakfast",
      tags: ["high-fiber", "antioxidants", "make-ahead"],
      difficulty: "Easy",
      ingredients: [
        { name: "rolled oats", amount: "1", unit: "cup", notes: "old-fashioned" },
        { name: "almond milk", amount: "1", unit: "cup", notes: "unsweetened" },
        { name: "Greek yogurt", amount: "0.5", unit: "cup", notes: "plain" },
        { name: "mixed berries", amount: "1", unit: "cup", notes: "fresh or frozen" },
        { name: "chia seeds", amount: "2", unit: "tbsp", notes: "" },
        { name: "honey", amount: "2", unit: "tbsp", notes: "raw" },
        { name: "vanilla extract", amount: "1", unit: "tsp", notes: "" },
        { name: "walnuts", amount: "2", unit: "tbsp", notes: "chopped" }
      ],
      instructions: [
        "Mix oats, almond milk, yogurt, and chia seeds in a bowl",
        "Add honey and vanilla extract, stir well",
        "Divide mixture between two jars or bowls",
        "Top with mixed berries and walnuts",
        "Cover and refrigerate overnight",
        "Stir before serving and enjoy cold"
      ]
    },
    {
      id: 10,
      title: "Zucchini Noodles with Pesto",
      description: "A light, refreshing alternative to pasta with fresh basil pesto",
      prepTimeMinutes: 15,
      cookTimeMinutes: 5,
      servings: 2,
      calories: 180,
      image: "🍝",
      category: "lunch",
      tags: ["low-carb", "vegetarian", "fresh"],
      difficulty: "Easy",
      ingredients: [
        { name: "zucchini", amount: "4", unit: "medium", notes: "spiralized" },
        { name: "fresh basil", amount: "2", unit: "cups", notes: "packed" },
        { name: "pine nuts", amount: "0.25", unit: "cup", notes: "" },
        { name: "garlic", amount: "2", unit: "cloves", notes: "" },
        { name: "olive oil", amount: "0.25", unit: "cup", notes: "extra virgin" },
        { name: "nutritional yeast", amount: "2", unit: "tbsp", notes: "" },
        { name: "lemon juice", amount: "1", unit: "tbsp", notes: "fresh" },
        { name: "cherry tomatoes", amount: "1", unit: "cup", notes: "halved" },
        { name: "salt and pepper", amount: "to taste", unit: "", notes: "" }
      ],
      instructions: [
        "Make pesto by blending basil, pine nuts, garlic, olive oil, nutritional yeast, and lemon juice",
        "Season with salt and pepper",
        "Heat a large skillet over medium heat",
        "Add zucchini noodles and cook for 2-3 minutes until just tender",
        "Remove from heat and toss with pesto",
        "Top with cherry tomatoes and serve immediately"
      ]
    },
    {
      id: 11,
      title: "Turkey and Quinoa Stuffed Peppers",
      description: "A protein-packed meal with lean turkey and nutritious quinoa",
      prepTimeMinutes: 20,
      cookTimeMinutes: 35,
      servings: 4,
      calories: 350,
      image: "🫑",
      category: "dinner",
      tags: ["high-protein", "gluten-free", "balanced"],
      difficulty: "Medium",
      ingredients: [
        { name: "bell peppers", amount: "4", unit: "large", notes: "any color" },
        { name: "ground turkey", amount: "1", unit: "lb", notes: "lean" },
        { name: "quinoa", amount: "1", unit: "cup", notes: "cooked" },
        { name: "onion", amount: "1", unit: "medium", notes: "diced" },
        { name: "garlic", amount: "3", unit: "cloves", notes: "minced" },
        { name: "diced tomatoes", amount: "14", unit: "oz", notes: "canned" },
        { name: "mozzarella cheese", amount: "0.5", unit: "cup", notes: "shredded" },
        { name: "italian seasoning", amount: "1", unit: "tbsp", notes: "" },
        { name: "olive oil", amount: "2", unit: "tbsp", notes: "" }
      ],
      instructions: [
        "Preheat oven to 375°F (190°C)",
        "Cut tops off peppers and remove seeds",
        "Heat olive oil in a skillet over medium heat",
        "Cook turkey, onion, and garlic until turkey is browned",
        "Add tomatoes, quinoa, and Italian seasoning",
        "Stuff peppers with turkey mixture",
        "Top with mozzarella cheese",
        "Bake for 30-35 minutes until peppers are tender"
      ]
    },
    {
      id: 12,
      title: "Green Smoothie Bowl",
      description: "A nutrient-dense breakfast bowl packed with vitamins and minerals",
      prepTimeMinutes: 10,
      cookTimeMinutes: 0,
      servings: 1,
      calories: 280,
      image: "🥤",
      category: "breakfast",
      tags: ["antioxidants", "vitamins", "refreshing"],
      difficulty: "Easy",
      ingredients: [
        { name: "frozen banana", amount: "1", unit: "medium", notes: "sliced" },
        { name: "frozen mango", amount: "0.5", unit: "cup", notes: "" },
        { name: "spinach", amount: "2", unit: "cups", notes: "fresh" },
        { name: "almond milk", amount: "0.5", unit: "cup", notes: "unsweetened" },
        { name: "protein powder", amount: "1", unit: "scoop", notes: "vanilla" },
        { name: "chia seeds", amount: "1", unit: "tbsp", notes: "" },
        { name: "granola", amount: "0.25", unit: "cup", notes: "" },
        { name: "coconut flakes", amount: "1", unit: "tbsp", notes: "unsweetened" },
        { name: "berries", amount: "0.25", unit: "cup", notes: "fresh" }
      ],
      instructions: [
        "Blend frozen banana, mango, spinach, almond milk, and protein powder until smooth",
        "Add chia seeds and blend briefly",
        "Pour into a bowl",
        "Top with granola, coconut flakes, and fresh berries",
        "Serve immediately"
      ]
    }
  ];
}

// Render recipe detail page
function renderRecipeDetailPage(recipe) {
  const app = document.getElementById('app');
  const healthScore = calculateHealthScore(recipe);
  const healthLevel = getHealthLevel(healthScore);
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="navHomeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <button class="btn btn-outline-success px-4" id="homeBtn">Home</button>
        <button class="btn btn-outline-secondary px-4 ms-2" id="backBtn">Back to Recipes</button>
        <div class="d-flex gap-2">
          <button class="btn btn-outline-primary px-4" id="addToShoppingBtn">Add to Shopping List</button>
        </div>
      </div>
    </nav>

    <!-- Recipe Detail Content -->
    <div class="container py-5">
      <div class="row">
        <!-- Recipe Header -->
        <div class="col-12 mb-5">
          <div class="card shadow-sm border-0">
            <div class="card-body p-5">
              <div class="row align-items-center">
                <div class="col-md-3 text-center">
                  <div class="recipe-detail-icon mb-3">${recipe.image}</div>
                </div>
                <div class="col-md-9">
                  <h1 class="display-4 fw-bold text-success mb-3">${recipe.title}</h1>
                  <p class="lead text-secondary mb-4">${recipe.description}</p>
                  
                  <!-- Health Score Display -->
                  <div class="mb-4">
                    <div class="d-flex align-items-center mb-2">
                      <span class="badge bg-${healthLevel.color} fs-5 px-3 py-2 me-3">
                        ${healthLevel.icon} ${healthLevel.level} Health
                      </span>
                      <span class="text-muted">Score: ${healthScore}/100</span>
                    </div>
                    <div class="progress" style="height: 8px;">
                      <div class="progress-bar bg-${healthLevel.color}" role="progressbar" style="width: ${healthScore}%"></div>
        </div>
      </div>

                  <!-- Recipe Meta Info -->
                  <div class="row g-3 mb-4">
                    <div class="col-sm-6 col-md-3">
                      <div class="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="text-success me-2" viewBox="0 0 16 16">
                          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                        </svg>
                        <div>
                          <small class="text-muted d-block">Prep Time</small>
                          <strong>${recipe.prepTimeMinutes} min</strong>
                    </div>
                  </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                      <div class="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="text-success me-2" viewBox="0 0 16 16">
                          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                        </svg>
                        <div>
                          <small class="text-muted d-block">Cook Time</small>
                          <strong>${recipe.cookTimeMinutes} min</strong>
                  </div>
                    </div>
                  </div>
                    <div class="col-sm-6 col-md-3">
                      <div class="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="text-success me-2" viewBox="0 0 16 16">
                          <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                          <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"/>
                        </svg>
                        <div>
                          <small class="text-muted d-block">Calories</small>
                          <strong>${recipe.calories} cal</strong>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                      <div class="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="text-success me-2" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                        <div>
                          <small class="text-muted d-block">Servings</small>
                          <strong>${recipe.servings}</strong>
                    </div>
                  </div>
                </div>
              </div>

                  <!-- Tags -->
                  <div class="mb-3">
                    ${recipe.tags.map(tag => `<span class="badge bg-success-subtle text-success me-2 mb-2">${tag}</span>`).join('')}
                    <span class="badge bg-secondary-subtle text-secondary">${recipe.difficulty}</span>
                    </div>
                  </div>
                    </div>
                  </div>
                    </div>
                  </div>
                    </div>

      <div class="row">
        <!-- Ingredients with Healthier Alternatives -->
        <div class="col-lg-4 mb-4">
          <div class="card shadow-sm h-100">
            <div class="card-header bg-success text-white">
              <h4 class="mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="me-2" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg>
                Ingredients & Healthier Alternatives
              </h4>
                  </div>
            <div class="card-body">
              <ul class="list-unstyled mb-0">
                ${recipe.ingredients.map(ingredient => {
                  const substitutions = getIngredientSubstitutions(ingredient.name);
                  const storeInfo = getStoreLocation(ingredient.name);
                  return `
                  <li class="mb-4 pb-3 border-bottom">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                      <div class="flex-grow-1">
                        <strong class="text-success">${ingredient.name}</strong>
                        ${ingredient.notes ? `<br><small class="text-muted">${ingredient.notes}</small>` : ''}
                        <div class="mt-1">
                          <small class="text-info">
                            <strong>Available at:</strong> ${storeInfo.stores.join(', ')}
                          </small>
                        </div>
                    </div>
                      <div class="text-end">
                        <span class="fw-bold">${ingredient.amount}</span>
                        <small class="text-muted">${ingredient.unit}</small>
                  </div>
                    </div>
                    
                    ${substitutions.length > 0 ? `
                      <div class="mt-3">
                        <button class="btn btn-outline-success btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#substitutions-${ingredient.name.toLowerCase().replace(/\s+/g, '-')}" aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="me-1" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                          </svg>
                          Healthier Alternatives
                        </button>
                        <div class="collapse mt-2" id="substitutions-${ingredient.name.toLowerCase().replace(/\s+/g, '-')}">
                          <div class="card card-body bg-light">
                            ${substitutions.map(sub => `
                              <div class="mb-2">
                                <div class="d-flex align-items-center mb-1">
                                  <span class="badge bg-${sub.healthRating === 'Excellent' ? 'success' : sub.healthRating === 'Good' ? 'primary' : 'warning'} me-2">${sub.healthRating}</span>
                                  <strong class="text-success">${sub.name}</strong>
                  </div>
                                <small class="text-muted">${sub.reason}</small>
                                ${sub.notes ? `<br><small class="text-info">💡 ${sub.notes}</small>` : ''}
                    </div>
                            `).join('')}
                  </div>
                    </div>
                  </div>
                    ` : ''}
                  </li>
                `;
                }).join('')}
              </ul>
                    </div>
                  </div>
                    </div>

        <!-- Instructions -->
        <div class="col-lg-8 mb-4">
          <div class="card shadow-sm h-100">
            <div class="card-header bg-success text-white">
              <h4 class="mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="me-2" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg>
                Instructions
              </h4>
                  </div>
            <div class="card-body">
              <ol class="mb-0">
                ${recipe.instructions.map(instruction => `
                  <li class="mb-3">${instruction}</li>
                `).join('')}
              </ol>
                    </div>
                  </div>
                    </div>
                  </div>

      <!-- Health Improvement Tips -->
      <div class="row mt-4">
        <div class="col-12">
          <div class="card border-warning">
            <div class="card-header bg-warning text-dark">
              <h4 class="mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="me-2" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg>
                Health Improvement Tips
              </h4>
                    </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <h6 class="text-success mb-3">💡 Make This Recipe Healthier:</h6>
                  <ul class="list-unstyled">
                    ${getHealthImprovementTips(recipe).map(tip => `
                      <li class="mb-2">
                        <span class="text-success me-2">•</span>
                        ${tip}
                      </li>
                    `).join('')}
                  </ul>
                  </div>
                <div class="col-md-6">
                  <h6 class="text-primary mb-3">🌱 Nutritional Benefits:</h6>
                  <ul class="list-unstyled">
                    ${getNutritionalBenefits(recipe).map(benefit => `
                      <li class="mb-2">
                        <span class="text-primary me-2">•</span>
                        ${benefit}
                      </li>
                    `).join('')}
                  </ul>
                    </div>
                  </div>
                    </div>
                  </div>
                    </div>
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
  
  document.getElementById('backBtn').addEventListener('click', () => {
    renderFindRecipesPage();
  });
  
  document.getElementById('addToShoppingBtn').addEventListener('click', () => {
    addToShoppingList(recipe.id);
  });
}

// Shopping List Management
let selectedRecipes = [];
let shoppingList = [];

// Add recipe to shopping list
function addToShoppingList(recipeId) {
  const recipes = getHardcodedRecipes();
  const recipe = recipes.find(r => r.id === recipeId);
  
  if (!recipe) {
    console.error('Recipe not found:', recipeId);
    return;
  }
  
  // Check if recipe is already in the list
  if (selectedRecipes.find(r => r.id === recipeId)) {
    showNotification('Recipe already added to shopping list!', 'warning');
    return;
  }
  
  selectedRecipes.push(recipe);
  updateShoppingList();
  showNotification(`${recipe.title} added to shopping list!`, 'success');
}

// Remove recipe from shopping list
function removeFromShoppingList(recipeId) {
  selectedRecipes = selectedRecipes.filter(r => r.id !== recipeId);
  updateShoppingList();
  showNotification('Recipe removed from shopping list', 'info');
}

// Update shopping list data
function updateShoppingList() {
  shoppingList = generateShoppingList(selectedRecipes);
  localStorage.setItem('selectedRecipes', JSON.stringify(selectedRecipes));
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

// Generate shopping list from selected recipes
function generateShoppingList(recipes) {
  const ingredientMap = new Map();
  
  recipes.forEach(recipe => {
    recipe.ingredients.forEach(ingredient => {
      const key = ingredient.name.toLowerCase();
      if (ingredientMap.has(key)) {
        const existing = ingredientMap.get(key);
        existing.recipes.push(recipe.title);
        // Simple quantity aggregation (could be enhanced with proper unit conversion)
        existing.totalAmount = (parseFloat(existing.amount) + parseFloat(ingredient.amount)).toString();
      } else {
        const storeInfo = getStoreLocation(ingredient.name);
        ingredientMap.set(key, {
          name: ingredient.name,
          amount: ingredient.amount,
          unit: ingredient.unit,
          notes: ingredient.notes,
          recipes: [recipe.title],
          totalAmount: ingredient.amount,
          storeLocation: storeInfo.section,
          stores: storeInfo.stores
        });
      }
    });
  });
  
  return Array.from(ingredientMap.values()).sort((a, b) => a.storeLocation.localeCompare(b.storeLocation));
}

// Get store location for ingredient
function getStoreLocation(ingredientName) {
  const storeMappings = {
    // Produce Section
    'avocado': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'tomato': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'cherry tomatoes': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'lettuce': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'spinach': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'broccoli': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'carrot': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'carrots': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'bell pepper': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'red bell pepper': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'onion': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'red onion': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'garlic': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'ginger': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'cucumber': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'zucchini': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'mushroom': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'cauliflower': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'kale': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'green-beans': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'asparagus': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'eggplant': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'sweet potato': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'sweet-potato': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'potato': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'berries': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'mixed berries': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'banana': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'lemon': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'basil': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'oregano': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'thyme': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'rosemary': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'cilantro': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'parsley': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'dill': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'cabbage': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'red cabbage': { section: 'Produce', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    
    // Meat & Seafood
    'chicken': { section: 'Meat & Seafood', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'salmon': { section: 'Meat & Seafood', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'salmon fillets': { section: 'Meat & Seafood', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'beef': { section: 'Meat & Seafood', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'turkey': { section: 'Meat & Seafood', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'pork': { section: 'Meat & Seafood', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'shrimp': { section: 'Meat & Seafood', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    
    // Dairy
    'eggs': { section: 'Dairy', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'yogurt': { section: 'Dairy', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'greek yogurt': { section: 'Dairy', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'cheese': { section: 'Dairy', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'milk': { section: 'Dairy', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'almond milk': { section: 'Dairy', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'butter': { section: 'Dairy', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    
    // Pantry/Dry Goods
    'quinoa': { section: 'Pantry', stores: ['Whole Foods', 'Kroger', 'Walmart', 'Safeway'] },
    'rice': { section: 'Pantry', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'pasta': { section: 'Pantry', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'oats': { section: 'Pantry', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'chickpeas': { section: 'Pantry', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'lentils': { section: 'Pantry', stores: ['Whole Foods', 'Kroger', 'Walmart', 'Safeway'] },
    'black-beans': { section: 'Pantry', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'tofu': { section: 'Pantry', stores: ['Whole Foods', 'Kroger', 'Walmart', 'Safeway'] },
    'nuts': { section: 'Pantry', stores: ['Whole Foods', 'Kroger', 'Walmart', 'Safeway'] },
    'olive oil': { section: 'Pantry', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'salt': { section: 'Pantry', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'pepper': { section: 'Pantry', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'black pepper': { section: 'Pantry', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'cumin': { section: 'Pantry', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'paprika': { section: 'Pantry', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'bread': { section: 'Pantry', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'whole grain bread': { section: 'Pantry', stores: ['Whole Foods', 'Kroger', 'Walmart', 'Safeway'] },
    'tahini': { section: 'Pantry', stores: ['Whole Foods', 'Kroger', 'Walmart', 'Safeway'] },
    'honey': { section: 'Pantry', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] },
    'chia seeds': { section: 'Pantry', stores: ['Whole Foods', 'Kroger', 'Walmart', 'Safeway'] },
    'protein powder': { section: 'Pantry', stores: ['Whole Foods', 'Kroger', 'Walmart', 'Safeway'] }
  };
  
  const lowerName = ingredientName.toLowerCase();
  for (const [key, storeInfo] of Object.entries(storeMappings)) {
    if (lowerName.includes(key)) {
      return storeInfo;
    }
  }
  
  return { section: 'General', stores: ['Walmart', 'Kroger', 'Whole Foods', 'Safeway'] }; // Default location
}

// Show notification
function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
  notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
  notification.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
  
  document.body.appendChild(notification);
  
  // Auto-remove after 3 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 3000);
}

// Load saved shopping list from localStorage
function loadShoppingList() {
  const savedRecipes = localStorage.getItem('selectedRecipes');
  const savedList = localStorage.getItem('shoppingList');
  
  if (savedRecipes) {
    selectedRecipes = JSON.parse(savedRecipes);
  }
  if (savedList) {
    shoppingList = JSON.parse(savedList);
  }
}

// Render shopping list page
function renderShoppingListPage() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="navHomeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <button class="btn btn-outline-success px-4" id="homeBtn">Home</button>
        <div class="d-flex gap-2">
          <button class="btn btn-outline-primary px-4" id="printListBtn">Print List</button>
          <button class="btn btn-outline-secondary px-4" id="clearListBtn">Clear All</button>
              </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h1 class="display-4 fw-bold text-primary mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="me-3" viewBox="0 0 16 16">
              <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.354 6.646a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4z"/>
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
            Shopping List
          </h1>
          <p class="lead text-secondary">Your organized grocery list with store locations</p>
        </div>
      </div>

      ${selectedRecipes.length > 0 ? `
        <!-- Selected Recipes Summary -->
        <div class="row mb-4">
          <div class="col-12">
            <div class="card border-primary">
              <div class="card-header bg-primary text-white">
                <h4 class="mb-0">Selected Recipes (${selectedRecipes.length})</h4>
              </div>
              <div class="card-body">
                <div class="row">
                  ${selectedRecipes.map(recipe => `
                    <div class="col-md-6 col-lg-4 mb-2">
                      <div class="d-flex align-items-center p-2 border rounded bg-light">
                        <div class="fs-4 me-2">${recipe.image}</div>
                        <div class="flex-grow-1">
                          <h6 class="mb-0">${recipe.title}</h6>
                          <small class="text-muted">${recipe.ingredients.length} ingredients</small>
                    </div>
                        <button class="btn btn-outline-danger btn-sm" onclick="removeFromShoppingList(${recipe.id})">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                          </svg>
                        </button>
                  </div>
                    </div>
                  `).join('')}
                  </div>
                    </div>
                  </div>
                    </div>
                  </div>

        <!-- Shopping List by Store Section -->
        <div class="row" id="shoppingListContent">
          ${generateShoppingListByStore()}
                </div>
      ` : `
        <!-- Empty State -->
        <div class="row">
          <div class="col-12 text-center py-5">
            <div class="fs-1 mb-3">🛒</div>
            <h3 class="text-muted mb-3">Your shopping list is empty</h3>
            <p class="text-secondary mb-4">Add recipes to your shopping list to see ingredients organized by store section</p>
            <button class="btn btn-success btn-lg" onclick="renderFindRecipesPage()">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="me-2" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
              Browse Recipes
            </button>
              </div>
        </div>
      `}
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
  
  document.getElementById('printListBtn').addEventListener('click', () => {
    printShoppingList();
  });
  
  document.getElementById('clearListBtn').addEventListener('click', () => {
    if (confirm('Are you sure you want to clear your entire shopping list?')) {
      selectedRecipes = [];
      shoppingList = [];
      localStorage.removeItem('selectedRecipes');
      localStorage.removeItem('shoppingList');
      renderShoppingListPage();
      showNotification('Shopping list cleared', 'info');
    }
  });
}

// Generate shopping list organized by store sections
function generateShoppingListByStore() {
  const storeSections = {};
  
  shoppingList.forEach(ingredient => {
    const section = ingredient.storeLocation;
    if (!storeSections[section]) {
      storeSections[section] = [];
    }
    storeSections[section].push(ingredient);
  });
  
  return Object.keys(storeSections).map(section => `
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="card shadow-sm h-100">
        <div class="card-header bg-primary text-white">
          <h5 class="mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="me-2" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
            </svg>
            ${section}
          </h5>
        </div>
        <div class="card-body">
                <div class="row">
            ${storeSections[section].map(ingredient => `
              <div class="col-md-6 col-lg-4 mb-3">
                <div class="d-flex align-items-center p-3 border rounded">
                  <div class="form-check me-3">
                    <input class="form-check-input" type="checkbox" id="ingredient-${ingredient.name.toLowerCase().replace(/\s+/g, '-')}">
                    </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1">${ingredient.name}</h6>
                    <small class="text-muted">
                      ${ingredient.totalAmount} ${ingredient.unit}
                      ${ingredient.notes ? ` • ${ingredient.notes}` : ''}
                    </small>
                    <div class="mt-1">
                      <small class="text-info">
                        <strong>For:</strong> ${ingredient.recipes.join(', ')}
                      </small>
                    </div>
                    <div class="mt-2">
                      <small class="text-success">
                        <strong>Available at:</strong> ${ingredient.stores ? ingredient.stores.join(', ') : 'Various stores'}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
                  </div>
                    </div>
                  </div>
                </div>
  `).join('');
}

// Print shopping list
function printShoppingList() {
  const printContent = `
    <html>
      <head>
        <title>Shopping List - BetterBites</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .header { text-align: center; margin-bottom: 30px; }
          .section { margin-bottom: 25px; }
          .section-title { font-size: 18px; font-weight: bold; margin-bottom: 10px; border-bottom: 2px solid #333; padding-bottom: 5px; }
          .ingredient { margin: 5px 0; }
          .recipes { font-size: 12px; color: #666; margin-top: 2px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🛒 BetterBites Shopping List</h1>
          <p>Generated on ${new Date().toLocaleDateString()}</p>
              </div>

        <div class="section">
          <div class="section-title">Selected Recipes</div>
          ${selectedRecipes.map(recipe => `<div>• ${recipe.title}</div>`).join('')}
        </div>
        
        ${Object.keys(storeSections).map(section => `
          <div class="section">
            <div class="section-title">${section}</div>
            ${storeSections[section].map(ingredient => `
              <div class="ingredient">
                ☐ ${ingredient.name} - ${ingredient.totalAmount} ${ingredient.unit}
                <div class="recipes">For: ${ingredient.recipes.join(', ')}</div>
              </div>
            `).join('')}
          </div>
        `).join('')}
      </body>
    </html>
  `;
  
  const printWindow = window.open('', '_blank');
  printWindow.document.write(printContent);
  printWindow.document.close();
  printWindow.print();
}

// Health Goals Management
let userHealthGoals = [];
let goalBasedRecipes = [];

// Health goals configuration
const healthGoalsConfig = {
  'weight-loss': {
    name: 'Weight Loss',
    icon: '⚖️',
    description: 'Reduce calorie intake while maintaining nutrition',
    criteria: {
      maxCaloriesPerServing: 350,
      preferredIngredients: ['vegetables', 'lean-protein', 'whole-grains'],
      avoidIngredients: ['high-fat', 'processed', 'sugar'],
      minHealthScore: 60
    },
    tips: [
      'Focus on high-volume, low-calorie foods',
      'Include lean proteins to maintain muscle mass',
      'Choose whole grains for sustained energy',
      'Limit processed foods and added sugars'
    ]
  },
  'muscle-gain': {
    name: 'Muscle Building',
    icon: '💪',
    description: 'High protein recipes to support muscle growth',
    criteria: {
      minProteinPerServing: 20,
      preferredIngredients: ['lean-protein', 'eggs', 'quinoa', 'nuts'],
      avoidIngredients: ['processed'],
      minHealthScore: 50
    },
    tips: [
      'Prioritize lean protein sources',
      'Include complete proteins like quinoa and eggs',
      'Add healthy fats from nuts and seeds',
      'Ensure adequate calories for growth'
    ]
  },
  'heart-health': {
    name: 'Heart Health',
    icon: '❤️',
    description: 'Recipes supporting cardiovascular wellness',
    criteria: {
      maxSaturatedFat: 5,
      preferredIngredients: ['omega-3', 'fiber', 'antioxidants', 'vegetables'],
      avoidIngredients: ['high-sodium', 'trans-fat'],
      minHealthScore: 70
    },
    tips: [
      'Focus on omega-3 rich foods like salmon',
      'Include plenty of fiber from vegetables',
      'Choose heart-healthy fats like olive oil',
      'Limit sodium and processed foods'
    ]
  },
  'diabetes-management': {
    name: 'Blood Sugar Control',
    icon: '🩸',
    description: 'Low glycemic index recipes for stable blood sugar',
    criteria: {
      maxGlycemicIndex: 55,
      preferredIngredients: ['fiber', 'protein', 'complex-carbs'],
      avoidIngredients: ['simple-sugars', 'refined-carbs'],
      minHealthScore: 65
    },
    tips: [
      'Choose complex carbohydrates over simple sugars',
      'Pair carbs with protein and fiber',
      'Focus on low glycemic index foods',
      'Include healthy fats to slow absorption'
    ]
  },
  'energy-boost': {
    name: 'Sustained Energy',
    icon: '⚡',
    description: 'Nutrient-dense recipes for lasting energy',
    criteria: {
      preferredIngredients: ['complex-carbs', 'iron', 'b-vitamins', 'protein'],
      avoidIngredients: ['simple-sugars'],
      minHealthScore: 60
    },
    tips: [
      'Include iron-rich foods for oxygen transport',
      'Choose complex carbohydrates for sustained energy',
      'Add B-vitamin rich foods',
      'Balance macronutrients for steady fuel'
    ]
  },
  'immune-support': {
    name: 'Immune Support',
    icon: '🛡️',
    description: 'Antioxidant-rich recipes to boost immunity',
    criteria: {
      preferredIngredients: ['vitamin-c', 'antioxidants', 'zinc', 'vegetables'],
      avoidIngredients: ['processed'],
      minHealthScore: 70
    },
    tips: [
      'Include vitamin C rich foods',
      'Add colorful vegetables for antioxidants',
      'Include zinc-rich foods',
      'Focus on whole, unprocessed foods'
    ]
  },
  'digestive-health': {
    name: 'Digestive Wellness',
    icon: '🌿',
    description: 'Fiber-rich recipes for gut health',
    criteria: {
      minFiberPerServing: 8,
      preferredIngredients: ['fiber', 'probiotics', 'vegetables'],
      avoidIngredients: ['processed', 'artificial'],
      minHealthScore: 65
    },
    tips: [
      'Include plenty of fiber-rich foods',
      'Add probiotic foods when possible',
      'Choose whole, unprocessed ingredients',
      'Stay hydrated with fiber intake'
    ]
  }
};

// Render health goals page
function renderHealthGoalsPage() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="navHomeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <button class="btn btn-outline-success px-4" id="homeBtn">Home</button>
        <div class="d-flex gap-2">
          <button class="btn btn-outline-primary px-4" id="viewGoalRecipesBtn">View Goal Recipes</button>
          <button class="btn btn-outline-secondary px-4" id="clearGoalsBtn">Clear Goals</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h1 class="display-4 fw-bold text-warning mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="me-3" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                  </svg>
            Health Goals
          </h1>
          <p class="lead text-secondary">Select your health and fitness goals to get personalized recipe recommendations</p>
        </div>
      </div>

      <!-- Current Goals -->
      ${userHealthGoals.length > 0 ? `
        <div class="row mb-4">
          <div class="col-12">
            <div class="card border-warning">
              <div class="card-header bg-warning text-dark">
                <h4 class="mb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="me-2" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                  </svg>
                  Your Selected Goals (${userHealthGoals.length})
                </h4>
              </div>
              <div class="card-body">
                <div class="row">
                  ${userHealthGoals.map(goalId => {
                    const goal = healthGoalsConfig[goalId];
                    return `
                      <div class="col-md-6 col-lg-4 mb-3">
                        <div class="d-flex align-items-center p-3 border rounded bg-light">
                          <div class="fs-2 me-3">${goal.icon}</div>
                          <div class="flex-grow-1">
                            <h6 class="mb-1">${goal.name}</h6>
                            <small class="text-muted">${goal.description}</small>
                          </div>
                          <button class="btn btn-outline-danger btn-sm" onclick="removeHealthGoal('${goalId}')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                </button>
              </div>
            </div>
                    `;
                  }).join('')}
          </div>
        </div>
      </div>
          </div>
        </div>
      ` : ''}

      <!-- Health Goals Selection -->
      <div class="row">
        <div class="col-12">
          <h3 class="text-warning mb-4">Choose Your Health Goals</h3>
          <div class="row g-4">
            ${Object.entries(healthGoalsConfig).map(([goalId, goal]) => `
              <div class="col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm goal-card ${userHealthGoals.includes(goalId) ? 'border-warning bg-warning-subtle' : ''}" 
                     onclick="toggleHealthGoal('${goalId}')" style="cursor: pointer;">
                  <div class="card-body text-center p-4">
                    <div class="fs-1 mb-3">${goal.icon}</div>
                    <h5 class="card-title text-warning fw-bold">${goal.name}</h5>
                    <p class="card-text text-muted mb-3">${goal.description}</p>
                    
                    <!-- Goal Tips -->
                    <div class="mt-3">
                      <h6 class="text-success mb-2">Key Focus Areas:</h6>
                      <ul class="list-unstyled small text-start">
                        ${goal.tips.slice(0, 2).map(tip => `<li class="mb-1">• ${tip}</li>`).join('')}
                      </ul>
                    </div>
                    
                    ${userHealthGoals.includes(goalId) ? `
                      <div class="mt-3">
                        <span class="badge bg-warning text-dark">Selected</span>
                      </div>
                    ` : `
                      <div class="mt-3">
                        <span class="badge bg-outline-warning">Click to Select</span>
                      </div>
                    `}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
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

  document.getElementById('viewGoalRecipesBtn').addEventListener('click', () => {
    if (userHealthGoals.length > 0) {
      generateGoalBasedRecipes();
    } else {
      showNotification('Please select at least one health goal first', 'warning');
    }
  });
  
  document.getElementById('clearGoalsBtn').addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all your health goals?')) {
      userHealthGoals = [];
      goalBasedRecipes = [];
      localStorage.removeItem('userHealthGoals');
      renderHealthGoalsPage();
      showNotification('Health goals cleared', 'info');
    }
  });
}

// Toggle health goal selection
function toggleHealthGoal(goalId) {
  if (userHealthGoals.includes(goalId)) {
    userHealthGoals = userHealthGoals.filter(id => id !== goalId);
  } else {
    userHealthGoals.push(goalId);
  }
  
  // Save to localStorage
  localStorage.setItem('userHealthGoals', JSON.stringify(userHealthGoals));
  
  // Re-render the page
  renderHealthGoalsPage();
  
  showNotification(
    userHealthGoals.includes(goalId) ? 
    `${healthGoalsConfig[goalId].name} goal added` : 
    `${healthGoalsConfig[goalId].name} goal removed`, 
    'info'
  );
}

// Remove specific health goal
function removeHealthGoal(goalId) {
  userHealthGoals = userHealthGoals.filter(id => id !== goalId);
  localStorage.setItem('userHealthGoals', JSON.stringify(userHealthGoals));
  renderHealthGoalsPage();
  showNotification(`${healthGoalsConfig[goalId].name} goal removed`, 'info');
}

// Generate recipes based on selected health goals
async function generateGoalBasedRecipes() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="navHomeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <button class="btn btn-outline-success px-4" id="homeBtn">Home</button>
        <button class="btn btn-outline-warning px-4 ms-2" id="backToGoalsBtn">Back to Goals</button>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h1 class="display-4 fw-bold text-warning mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="me-3" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
            </svg>
            Personalized Recipe Recommendations
          </h1>
          <p class="lead text-secondary">Recipes tailored to your health goals</p>
        </div>
      </div>

      <!-- Goals Summary -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="card border-warning">
            <div class="card-header bg-warning text-dark">
              <h4 class="mb-0">Your Health Goals</h4>
            </div>
            <div class="card-body">
              <div class="row">
                ${userHealthGoals.map(goalId => {
                  const goal = healthGoalsConfig[goalId];
                  return `
                    <div class="col-md-6 col-lg-4 mb-2">
                      <div class="d-flex align-items-center">
                        <span class="fs-4 me-2">${goal.icon}</span>
                        <span class="fw-bold">${goal.name}</span>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recipe Cards -->
      <div class="row g-4" id="goalRecipesGrid">
      <div class="col-12 text-center py-5">
          <div class="spinner-border text-warning" role="status">
            <span class="visually-hidden">Loading personalized recipes...</span>
          </div>
          <p class="mt-3 text-muted">Finding recipes that match your health goals...</p>
        </div>
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
  
  document.getElementById('backToGoalsBtn').addEventListener('click', () => {
    renderHealthGoalsPage();
  });
  
  // Load goal-based recipes
  await loadGoalBasedRecipes();
}

// Load recipes based on health goals
async function loadGoalBasedRecipes() {
  try {
    const recipes = await fetchRecipes();
    const filteredRecipes = filterRecipesByHealthGoals(recipes);
    
    const recipesGrid = document.getElementById('goalRecipesGrid');
    if (!recipesGrid) return;
    
    if (filteredRecipes.length === 0) {
      recipesGrid.innerHTML = `
      <div class="col-12 text-center py-5">
          <h3 class="text-muted">No recipes found</h3>
          <p class="text-secondary">Try adjusting your health goals or browse all recipes</p>
          <button class="btn btn-warning" onclick="renderHealthGoalsPage()">Adjust Goals</button>
      </div>
    `;
    return;
  }

    // Convert to card format with health scores and goal matching
    const cardRecipes = filteredRecipes.map(recipe => {
      const healthScore = calculateHealthScore(recipe);
      const healthLevel = getHealthLevel(healthScore);
      const goalMatches = getGoalMatches(recipe);
      
      return {
        id: recipe.id,
        title: recipe.title,
        category: recipe.category,
        time: `${recipe.prepTimeMinutes + recipe.cookTimeMinutes} min`,
        calories: recipe.calories.toString(),
        image: recipe.image,
        tags: recipe.tags,
        displayTags: recipe.tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1).replace('-', ' ')),
        healthScore: healthScore,
        healthLevel: healthLevel,
        goalMatches: goalMatches
      };
    });
    
    recipesGrid.innerHTML = cardRecipes.map(recipe => `
      <div class="col-md-6 col-lg-4">
        <div class="card recipe-card h-100 shadow-sm">
          <div class="card-body">
            <div class="recipe-icon text-center mb-3">${recipe.image}</div>
            <h5 class="card-title text-success fw-bold">${recipe.title}</h5>
            <p class="card-text text-muted mb-3 text-capitalize">${recipe.category}</p>
            
            <!-- Health Score Badge -->
            <div class="mb-3 text-center">
              <span class="badge bg-${recipe.healthLevel.color} fs-6 px-3 py-2">
                ${recipe.healthLevel.icon} ${recipe.healthLevel.level} Health
              </span>
              <div class="small text-muted mt-1">Score: ${recipe.healthScore}/100</div>
            </div>
            
            <!-- Goal Matches -->
            <div class="mb-3">
              <h6 class="text-warning mb-2">Matches Your Goals:</h6>
              ${recipe.goalMatches.map(goalId => {
                const goal = healthGoalsConfig[goalId];
                return `<span class="badge bg-warning-subtle text-warning me-1 mb-1">${goal.icon} ${goal.name}</span>`;
              }).join('')}
            </div>
            
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
              ${recipe.displayTags.map(tag => `<span class="badge bg-success-subtle text-success me-1">${tag}</span>`).join('')}
            </div>
            <div class="d-grid gap-2">
              <button class="btn btn-success" onclick="viewRecipe(${recipe.id})">View Recipe</button>
              <button class="btn btn-outline-primary btn-sm" onclick="addToShoppingList(${recipe.id})">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="me-1" viewBox="0 0 16 16">
                  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.354 6.646a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4z"/>
                </svg>
                Add to List
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
    
  } catch (error) {
    console.error('Error loading goal-based recipes:', error);
    const recipesGrid = document.getElementById('goalRecipesGrid');
    if (recipesGrid) {
      recipesGrid.innerHTML = `
        <div class="col-12 text-center py-5">
          <h3 class="text-danger">Error loading recipes</h3>
          <p class="text-secondary">Please try again later</p>
        </div>
      `;
    }
  }
}

// Filter recipes based on health goals
function filterRecipesByHealthGoals(recipes) {
  return recipes.filter(recipe => {
    const healthScore = calculateHealthScore(recipe);
    
    // Check if recipe meets criteria for any selected goal
    return userHealthGoals.some(goalId => {
      const goal = healthGoalsConfig[goalId];
      const criteria = goal.criteria;
      
      // Check health score requirement
      if (criteria.minHealthScore && healthScore < criteria.minHealthScore) {
        return false;
      }
      
      // Check calorie requirements
      const caloriesPerServing = recipe.calories / recipe.servings;
      if (criteria.maxCaloriesPerServing && caloriesPerServing > criteria.maxCaloriesPerServing) {
        return false;
      }
      
      // Check ingredient preferences
      if (criteria.preferredIngredients) {
        const hasPreferredIngredients = criteria.preferredIngredients.some(preferred => {
          return recipe.ingredients.some(ingredient => 
            ingredient.name.toLowerCase().includes(preferred.replace('-', ' '))
          );
        });
        if (!hasPreferredIngredients) return false;
      }
      
      // Check ingredients to avoid
      if (criteria.avoidIngredients) {
        const hasAvoidedIngredients = criteria.avoidIngredients.some(avoided => {
          return recipe.ingredients.some(ingredient => 
            ingredient.name.toLowerCase().includes(avoided.replace('-', ' '))
          );
        });
        if (hasAvoidedIngredients) return false;
      }
      
      return true;
    });
  });
}

// Get which goals a recipe matches
function getGoalMatches(recipe) {
  const healthScore = calculateHealthScore(recipe);
  const caloriesPerServing = recipe.calories / recipe.servings;
  
  return userHealthGoals.filter(goalId => {
    const goal = healthGoalsConfig[goalId];
    const criteria = goal.criteria;
    
    // Check health score requirement
    if (criteria.minHealthScore && healthScore < criteria.minHealthScore) {
      return false;
    }
    
    // Check calorie requirements
    if (criteria.maxCaloriesPerServing && caloriesPerServing > criteria.maxCaloriesPerServing) {
      return false;
    }
    
    // Check ingredient preferences
    if (criteria.preferredIngredients) {
      const hasPreferredIngredients = criteria.preferredIngredients.some(preferred => {
        return recipe.ingredients.some(ingredient => 
          ingredient.name.toLowerCase().includes(preferred.replace('-', ' '))
        );
      });
      if (!hasPreferredIngredients) return false;
    }
    
    // Check ingredients to avoid
    if (criteria.avoidIngredients) {
      const hasAvoidedIngredients = criteria.avoidIngredients.some(avoided => {
        return recipe.ingredients.some(ingredient => 
          ingredient.name.toLowerCase().includes(avoided.replace('-', ' '))
        );
      });
      if (hasAvoidedIngredients) return false;
    }
    
    return true;
  });
}

// Load saved health goals from localStorage
function loadHealthGoals() {
  const savedGoals = localStorage.getItem('userHealthGoals');
  if (savedGoals) {
    userHealthGoals = JSON.parse(savedGoals);
  }
}

// Ingredient-based Recipe Matching System
let selectedIngredients = [];
let ingredientQuantities = {};

// Available ingredients for selection
const availableIngredients = [
  // Proteins
  { name: 'Chicken Breast', category: 'Protein', unit: 'lbs' },
  { name: 'Salmon', category: 'Protein', unit: 'lbs' },
  { name: 'Ground Turkey', category: 'Protein', unit: 'lbs' },
  { name: 'Eggs', category: 'Protein', unit: 'pieces' },
  { name: 'Greek Yogurt', category: 'Protein', unit: 'cups' },
  { name: 'Tofu', category: 'Protein', unit: 'oz' },
  { name: 'Chickpeas', category: 'Protein', unit: 'cups' },
  { name: 'Lentils', category: 'Protein', unit: 'cups' },
  { name: 'Black Beans', category: 'Protein', unit: 'cups' },
  { name: 'Quinoa', category: 'Protein', unit: 'cups' },
  
  // Vegetables
  { name: 'Avocado', category: 'Vegetables', unit: 'pieces' },
  { name: 'Tomato', category: 'Vegetables', unit: 'pieces' },
  { name: 'Spinach', category: 'Vegetables', unit: 'cups' },
  { name: 'Broccoli', category: 'Vegetables', unit: 'cups' },
  { name: 'Bell Pepper', category: 'Vegetables', unit: 'pieces' },
  { name: 'Onion', category: 'Vegetables', unit: 'pieces' },
  { name: 'Garlic', category: 'Vegetables', unit: 'cloves' },
  { name: 'Mushrooms', category: 'Vegetables', unit: 'cups' },
  { name: 'Zucchini', category: 'Vegetables', unit: 'pieces' },
  { name: 'Sweet Potato', category: 'Vegetables', unit: 'pieces' },
  { name: 'Carrots', category: 'Vegetables', unit: 'pieces' },
  { name: 'Kale', category: 'Vegetables', unit: 'cups' },
  { name: 'Cucumber', category: 'Vegetables', unit: 'pieces' },
  { name: 'Cauliflower', category: 'Vegetables', unit: 'cups' },
  
  // Grains & Carbs
  { name: 'Brown Rice', category: 'Grains', unit: 'cups' },
  { name: 'White Rice', category: 'Grains', unit: 'cups' },
  { name: 'Pasta', category: 'Grains', unit: 'cups' },
  { name: 'Oats', category: 'Grains', unit: 'cups' },
  { name: 'Whole Wheat Bread', category: 'Grains', unit: 'slices' },
  
  // Dairy
  { name: 'Milk', category: 'Dairy', unit: 'cups' },
  { name: 'Cheese', category: 'Dairy', unit: 'cups' },
  { name: 'Butter', category: 'Dairy', unit: 'tbsp' },
  { name: 'Cream', category: 'Dairy', unit: 'cups' },
  
  // Pantry Items
  { name: 'Olive Oil', category: 'Pantry', unit: 'tbsp' },
  { name: 'Salt', category: 'Pantry', unit: 'tsp' },
  { name: 'Black Pepper', category: 'Pantry', unit: 'tsp' },
  { name: 'Cumin', category: 'Pantry', unit: 'tsp' },
  { name: 'Paprika', category: 'Pantry', unit: 'tsp' },
  { name: 'Garlic Powder', category: 'Pantry', unit: 'tsp' },
  { name: 'Nuts', category: 'Pantry', unit: 'cups' },
  { name: 'Honey', category: 'Pantry', unit: 'tbsp' },
  { name: 'Lemon', category: 'Pantry', unit: 'pieces' },
  { name: 'Lime', category: 'Pantry', unit: 'pieces' }
];

// Render Make a Recipe page
function renderMakeRecipePage() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="navHomeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <button class="btn btn-outline-success px-4" id="homeBtn">Home</button>
        <button class="btn btn-outline-secondary px-4 ms-2" id="backBtn">Back to Recipes</button>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h1 class="display-4 fw-bold text-success mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="me-3" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            </svg>
            Make a Recipe
          </h1>
          <p class="lead text-secondary">Select ingredients you have or plan to buy, and we'll find matching recipes</p>
        </div>
      </div>

      <div class="row">
        <!-- Ingredient Selection -->
        <div class="col-lg-4 mb-4">
          <div class="card shadow-sm h-100">
            <div class="card-header bg-success text-white">
              <h4 class="mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="me-2" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg>
                Select Your Ingredients
              </h4>
            </div>
            <div class="card-body">
              <!-- Search Bar -->
              <div class="mb-3">
                <input type="text" class="form-control" id="ingredientSearch" placeholder="Search ingredients...">
              </div>
              
              <!-- Quick Actions -->
              <div class="mb-3">
                <button class="btn btn-outline-success btn-sm me-2" id="selectAllBtn">Select All</button>
                <button class="btn btn-outline-secondary btn-sm" id="clearAllBtn">Clear All</button>
              </div>
              
              <!-- Ingredient Categories -->
              <div id="ingredientCategories">
                ${Object.entries(groupIngredientsByCategory()).map(([category, ingredients]) => `
                  <div class="mb-4">
                    <h6 class="text-success mb-2">${category}</h6>
                    <div class="ingredient-list">
                      ${ingredients.map(ingredient => `
                        <div class="form-check mb-2">
                          <input class="form-check-input ingredient-checkbox" type="checkbox" 
                                 id="ingredient-${ingredient.name.toLowerCase().replace(/\s+/g, '-')}" 
                                 value="${ingredient.name}"
                                 onchange="toggleIngredient('${ingredient.name}')">
                          <label class="form-check-label" for="ingredient-${ingredient.name.toLowerCase().replace(/\s+/g, '-')}">
                            ${ingredient.name}
                          </label>
                          <div class="quantity-input mt-1" id="quantity-${ingredient.name.toLowerCase().replace(/\s+/g, '-')}" style="display: none;">
                            <div class="input-group input-group-sm">
                              <input type="number" class="form-control" placeholder="Amount" min="0" step="0.1" 
                                     onchange="updateIngredientQuantity('${ingredient.name}', this.value)">
                              <select class="form-select" onchange="updateIngredientUnit('${ingredient.name}', this.value)">
                                <option value="${ingredient.unit}">${ingredient.unit}</option>
                                <option value="cups">cups</option>
                                <option value="tbsp">tbsp</option>
                                <option value="tsp">tsp</option>
                                <option value="pieces">pieces</option>
                                <option value="lbs">lbs</option>
                                <option value="oz">oz</option>
                                <option value="cloves">cloves</option>
                                <option value="slices">slices</option>
                              </select>
          </div>
        </div>
      </div>
    `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

        <!-- Recipe Results -->
        <div class="col-lg-8 mb-4">
          <div class="card shadow-sm h-100">
            <div class="card-header bg-primary text-white">
              <h4 class="mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="me-2" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg>
                Matching Recipes
              </h4>
            </div>
            <div class="card-body">
              <div id="recipeResults">
                <div class="text-center py-5">
                  <div class="fs-1 mb-3">🥘</div>
                  <h5 class="text-muted">Select ingredients to find matching recipes</h5>
                  <p class="text-secondary">Choose the ingredients you have or plan to buy, and we'll show you recipes that match!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  
  document.getElementById('backBtn').addEventListener('click', () => {
    renderFindRecipesPage();
  });
  
  document.getElementById('selectAllBtn').addEventListener('click', selectAllIngredients);
  document.getElementById('clearAllBtn').addEventListener('click', clearAllIngredients);
  document.getElementById('ingredientSearch').addEventListener('input', filterIngredients);
}

// Group ingredients by category
function groupIngredientsByCategory() {
  const grouped = {};
  availableIngredients.forEach(ingredient => {
    if (!grouped[ingredient.category]) {
      grouped[ingredient.category] = [];
    }
    grouped[ingredient.category].push(ingredient);
  });
  return grouped;
}

// Toggle ingredient selection
function toggleIngredient(ingredientName) {
  const checkbox = document.getElementById(`ingredient-${ingredientName.toLowerCase().replace(/\s+/g, '-')}`);
  const quantityDiv = document.getElementById(`quantity-${ingredientName.toLowerCase().replace(/\s+/g, '-')}`);
  
  if (checkbox.checked) {
    selectedIngredients.push(ingredientName);
    quantityDiv.style.display = 'block';
    // Set default quantity
    const defaultUnit = availableIngredients.find(ing => ing.name === ingredientName)?.unit || 'cups';
    ingredientQuantities[ingredientName] = { amount: 1, unit: defaultUnit };
  } else {
    selectedIngredients = selectedIngredients.filter(ing => ing !== ingredientName);
    quantityDiv.style.display = 'none';
    delete ingredientQuantities[ingredientName];
  }
  
  updateSelectedIngredientsSummary();
  findMatchingRecipes();
}

// Update ingredient quantity
function updateIngredientQuantity(ingredientName, amount) {
  if (ingredientQuantities[ingredientName]) {
    ingredientQuantities[ingredientName].amount = parseFloat(amount) || 0;
  }
  findMatchingRecipes();
}

// Update ingredient unit
function updateIngredientUnit(ingredientName, unit) {
  if (ingredientQuantities[ingredientName]) {
    ingredientQuantities[ingredientName].unit = unit;
  }
  findMatchingRecipes();
}

// Select all ingredients
function selectAllIngredients() {
  const checkboxes = document.querySelectorAll('.ingredient-checkbox');
  checkboxes.forEach(checkbox => {
    if (!checkbox.checked) {
      checkbox.checked = true;
      toggleIngredient(checkbox.value);
    }
  });
}

// Clear all ingredients
function clearAllIngredients() {
  const checkboxes = document.querySelectorAll('.ingredient-checkbox');
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      checkbox.checked = false;
      toggleIngredient(checkbox.value);
    }
  });
}

// Filter ingredients based on search
function filterIngredients() {
  const searchTerm = document.getElementById('ingredientSearch').value.toLowerCase();
  const ingredientLists = document.querySelectorAll('.ingredient-list');
  
  ingredientLists.forEach(list => {
    const items = list.querySelectorAll('.form-check');
    items.forEach(item => {
      const label = item.querySelector('label').textContent.toLowerCase();
      if (label.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

// Update selected ingredients summary
function updateSelectedIngredientsSummary() {
  // This could be enhanced to show a summary of selected ingredients
  console.log('Selected ingredients:', selectedIngredients);
  console.log('Quantities:', ingredientQuantities);
}

// Find matching recipes based on selected ingredients
async function findMatchingRecipes() {
  if (selectedIngredients.length === 0) {
    document.getElementById('recipeResults').innerHTML = `
      <div class="text-center py-5">
        <div class="fs-1 mb-3">🥘</div>
        <h5 class="text-muted">Select ingredients to find matching recipes</h5>
        <p class="text-secondary">Choose the ingredients you have or plan to buy, and we'll show you recipes that match!</p>
      </div>
    `;
    return;
  }
  
  try {
    const recipes = await fetchRecipes();
    const matchingRecipes = findMatchingRecipesWithQuantities(recipes, selectedIngredients, ingredientQuantities);
    
    if (matchingRecipes.length === 0) {
      document.getElementById('recipeResults').innerHTML = `
        <div class="text-center py-5">
          <div class="fs-1 mb-3">🔍</div>
          <h5 class="text-muted">No matching recipes found</h5>
          <p class="text-secondary">Try selecting different ingredients or check our ingredient substitution suggestions</p>
        </div>
      `;
      return;
    }
    
    // Sort by match percentage (highest first)
    matchingRecipes.sort((a, b) => b.matchPercentage - a.matchPercentage);
    
    document.getElementById('recipeResults').innerHTML = matchingRecipes.map(recipe => `
      <div class="card mb-3">
        <div class="card-body">
          <div class="row">
            <div class="col-md-3 text-center">
              <div class="recipe-icon mb-3">${recipe.image}</div>
            </div>
            <div class="col-md-9">
              <h5 class="card-title text-success">${recipe.title}</h5>
              <p class="card-text text-muted">${recipe.description}</p>
              
              <!-- Match Percentage -->
              <div class="mb-3">
                <div class="d-flex align-items-center mb-2">
                  <span class="badge bg-${recipe.matchPercentage >= 80 ? 'success' : recipe.matchPercentage >= 60 ? 'warning' : 'secondary'} fs-6 px-3 py-2 me-3">
                    ${recipe.matchPercentage}% Match
                  </span>
                  <div class="progress flex-grow-1" style="height: 8px;">
                    <div class="progress-bar bg-${recipe.matchPercentage >= 80 ? 'success' : recipe.matchPercentage >= 60 ? 'warning' : 'secondary'}" 
                         style="width: ${recipe.matchPercentage}%"></div>
                  </div>
                </div>
              </div>
              
              <!-- Matched Ingredients -->
              <div class="mb-3">
                <h6 class="text-success mb-2">✅ You Have (${recipe.matchedIngredients.length}):</h6>
                <div class="d-flex flex-wrap gap-1">
                  ${recipe.matchedIngredients.map(ing => `
                    <span class="badge bg-success-subtle text-success">${ing.name}</span>
                  `).join('')}
                </div>
              </div>
              
              <!-- Missing Ingredients -->
              ${recipe.missingIngredients.length > 0 ? `
                <div class="mb-3">
                  <h6 class="text-warning mb-2">⚠️ Missing (${recipe.missingIngredients.length}):</h6>
                  <div class="d-flex flex-wrap gap-1">
                    ${recipe.missingIngredients.map(ing => `
                      <span class="badge bg-warning-subtle text-warning">${ing.name}</span>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
              
              <!-- Recipe Info -->
              <div class="d-flex justify-content-between align-items-center mb-3">
                <small class="text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="me-1" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                  ${recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
                </small>
                <small class="text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="me-1" viewBox="0 0 16 16">
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"/>
                  </svg>
                  ${recipe.calories} cal
                </small>
                <small class="text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="me-1" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
                  ${recipe.servings} servings
                </small>
              </div>
              
              <div class="d-grid gap-2">
                <button class="btn btn-success" onclick="viewRecipe(${recipe.id})">View Recipe</button>
                <button class="btn btn-outline-primary btn-sm" onclick="addToShoppingList(${recipe.id})">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="me-1" viewBox="0 0 16 16">
                    <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.354 6.646a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4z"/>
                  </svg>
                  Add to Shopping List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join('');
    
  } catch (error) {
    console.error('Error finding matching recipes:', error);
    document.getElementById('recipeResults').innerHTML = `
      <div class="text-center py-5">
        <div class="fs-1 mb-3">❌</div>
        <h5 class="text-muted">Error loading recipes</h5>
        <p class="text-secondary">Please try again later</p>
      </div>
    `;
  }
}

// Find matching recipes with quantity analysis
function findMatchingRecipesWithQuantities(recipes, selectedIngredients, ingredientQuantities) {
  return recipes.map(recipe => {
    const analysis = analyzeIngredientQuantities(recipe, selectedIngredients, ingredientQuantities);
    return {
      ...recipe,
      matchPercentage: analysis.matchPercentage,
      matchedIngredients: analysis.matchedIngredients,
      missingIngredients: analysis.missingIngredients,
      quantityAnalysis: analysis.quantityAnalysis
    };
  }).filter(recipe => recipe.matchPercentage > 0);
}

// Analyze ingredient quantities for recipe matching
function analyzeIngredientQuantities(recipe, selectedIngredients, ingredientQuantities) {
  const matchedIngredients = [];
  const missingIngredients = [];
  const quantityAnalysis = [];
  
  recipe.ingredients.forEach(recipeIngredient => {
    const selectedIngredient = selectedIngredients.find(selected => 
      recipeIngredient.name.toLowerCase().includes(selected.toLowerCase()) ||
      selected.toLowerCase().includes(recipeIngredient.name.toLowerCase())
    );
    
    if (selectedIngredient) {
      matchedIngredients.push(recipeIngredient);
      
      // Check if user has enough quantity
      const userQuantity = ingredientQuantities[selectedIngredient];
      if (userQuantity) {
        const hasEnough = checkQuantityMatch(recipeIngredient, userQuantity);
        quantityAnalysis.push({
          ingredient: recipeIngredient.name,
          recipeAmount: recipeIngredient.amount,
          recipeUnit: recipeIngredient.unit,
          userAmount: userQuantity.amount,
          userUnit: userQuantity.unit,
          hasEnough: hasEnough,
          canScale: true
        });
      }
    } else {
      missingIngredients.push(recipeIngredient);
    }
  });
  
  const matchPercentage = Math.round((matchedIngredients.length / recipe.ingredients.length) * 100);
  
  return {
    matchPercentage,
    matchedIngredients,
    missingIngredients,
    quantityAnalysis
  };
}

// Check if user has enough quantity of an ingredient
function checkQuantityMatch(recipeIngredient, userQuantity) {
  // Simple quantity matching - could be enhanced with unit conversion
  const recipeAmount = parseFloat(recipeIngredient.amount) || 0;
  const userAmount = parseFloat(userQuantity.amount) || 0;
  
  // For now, just check if user has at least the recipe amount
  // This could be enhanced with proper unit conversion
  return userAmount >= recipeAmount;
}

// Initialize health goals on page load
document.addEventListener('DOMContentLoaded', () => {
  loadHealthGoals();
});

// Initialize shopping list on page load
document.addEventListener('DOMContentLoaded', () => {
  loadShoppingList();
});

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  renderHomePage();
});
