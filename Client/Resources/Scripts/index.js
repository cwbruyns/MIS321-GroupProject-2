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
    renderMakeRecipePage();
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
      const filter = e.target.dataset.filter;
      filterRecipes(filter);
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
}

// Filter recipes based on selected category
function filterRecipes(filter) {
  const recipesGrid = document.getElementById('recipesGrid');
  const searchInput = document.getElementById('searchInput');
  searchInput.value = ''; // Clear search when filtering
  recipesGrid.innerHTML = generateRecipeCards(filter);
}

// Search recipes based on query
function searchRecipes(query) {
  const recipesGrid = document.getElementById('recipesGrid');
  recipesGrid.innerHTML = generateRecipeCards('all', query);
  
  // Reset active filter to "All"
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
}

// Generate recipe cards
function generateRecipeCards(filter = 'all', searchQuery = '') {
  const recipes = [
    { title: 'Avocado Toast Bowl', category: 'breakfast', time: '10 min', calories: '320', image: '🥑', tags: ['vegetarian', 'quick'], displayTags: ['Vegetarian', 'Quick'] },
    { title: 'Quinoa Power Salad', category: 'lunch', time: '15 min', calories: '280', image: '🥗', tags: ['vegan', 'gluten-free'], displayTags: ['Vegan', 'Gluten-Free'] },
    { title: 'Grilled Salmon & Veggies', category: 'dinner', time: '25 min', calories: '420', image: '🐟', tags: ['low-carb', 'high-protein'], displayTags: ['Low-Carb', 'High-Protein'] },
    { title: 'Berry Protein Smoothie', category: 'breakfast', time: '5 min', calories: '250', image: '🫐', tags: ['vegetarian', 'quick'], displayTags: ['Vegetarian', 'Quick'] },
    { title: 'Chickpea Buddha Bowl', category: 'lunch', time: '20 min', calories: '380', image: '🥙', tags: ['vegan', 'high-fiber'], displayTags: ['Vegan', 'High-Fiber'] },
    { title: 'Zucchini Noodle Pasta', category: 'dinner', time: '18 min', calories: '290', image: '🍝', tags: ['low-carb', 'vegetarian'], displayTags: ['Low-Carb', 'Vegetarian'] },
    { title: 'Greek Yogurt Parfait', category: 'breakfast', time: '5 min', calories: '220', image: '🥛', tags: ['vegetarian', 'high-protein'], displayTags: ['Vegetarian', 'High-Protein'] },
    { title: 'Asian Chicken Lettuce Wraps', category: 'lunch', time: '20 min', calories: '310', image: '🥬', tags: ['low-carb', 'gluten-free'], displayTags: ['Low-Carb', 'Gluten-Free'] },
    { title: 'Veggie Stir-Fry', category: 'dinner', time: '15 min', calories: '260', image: '🥦', tags: ['vegan', 'quick'], displayTags: ['Vegan', 'Quick'] },
  ];

  let filteredRecipes = recipes;

  // Apply search query if provided
  if (searchQuery) {
    filteredRecipes = recipes.filter(recipe => 
      recipe.title.toLowerCase().includes(searchQuery) ||
      recipe.category.toLowerCase().includes(searchQuery) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(searchQuery))
    );
  } else {
    // Apply category/tag filter if no search query
    filteredRecipes = filter === 'all' 
      ? recipes 
      : recipes.filter(recipe => recipe.category === filter || recipe.tags.includes(filter));
  }

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
          <button class="btn btn-success w-100">View Recipe</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Render the Make a Recipe page
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
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h1 class="display-4 fw-bold text-success mb-3">Make a Recipe</h1>
          <p class="lead text-secondary">Select ingredients you have and we'll suggest recipes</p>
        </div>
      </div>

      <!-- Ingredient Selection -->
      <div class="row mb-4">
        <div class="col-lg-10 mx-auto">
          <div class="card shadow-sm">
            <div class="card-body p-4">
              <h4 class="text-success mb-4">Select Your Ingredients</h4>
              
              <!-- Meat Category -->
              <div class="ingredient-category mb-4">
                <h5 class="text-secondary mb-3">🥩 Meat & Protein</h5>
                <div class="row">
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="chicken" id="chicken">
                      <label class="form-check-label" for="chicken">Chicken</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="salmon" id="salmon">
                      <label class="form-check-label" for="salmon">Salmon</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="beef" id="beef">
                      <label class="form-check-label" for="beef">Beef</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="tofu" id="tofu">
                      <label class="form-check-label" for="tofu">Tofu</label>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Vegetables Category -->
              <div class="ingredient-category mb-4">
                <h5 class="text-secondary mb-3">🥬 Vegetables</h5>
                <div class="row">
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="lettuce" id="lettuce">
                      <label class="form-check-label" for="lettuce">Lettuce</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="tomato" id="tomato">
                      <label class="form-check-label" for="tomato">Tomato</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="zucchini" id="zucchini">
                      <label class="form-check-label" for="zucchini">Zucchini</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="broccoli" id="broccoli">
                      <label class="form-check-label" for="broccoli">Broccoli</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="spinach" id="spinach">
                      <label class="form-check-label" for="spinach">Spinach</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="carrot" id="carrot">
                      <label class="form-check-label" for="carrot">Carrot</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="bell-pepper" id="bell-pepper">
                      <label class="form-check-label" for="bell-pepper">Bell Pepper</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="onion" id="onion">
                      <label class="form-check-label" for="onion">Onion</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="mushroom" id="mushroom">
                      <label class="form-check-label" for="mushroom">Mushroom</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="cucumber" id="cucumber">
                      <label class="form-check-label" for="cucumber">Cucumber</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="cauliflower" id="cauliflower">
                      <label class="form-check-label" for="cauliflower">Cauliflower</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="kale" id="kale">
                      <label class="form-check-label" for="kale">Kale</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="green-beans" id="green-beans">
                      <label class="form-check-label" for="green-beans">Green Beans</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="asparagus" id="asparagus">
                      <label class="form-check-label" for="asparagus">Asparagus</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="eggplant" id="eggplant">
                      <label class="form-check-label" for="eggplant">Eggplant</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="sweet-potato" id="sweet-potato">
                      <label class="form-check-label" for="sweet-potato">Sweet Potato</label>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Grains & Legumes Category -->
              <div class="ingredient-category mb-4">
                <h5 class="text-secondary mb-3">🌾 Grains & Legumes</h5>
                <div class="row">
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="quinoa" id="quinoa">
                      <label class="form-check-label" for="quinoa">Quinoa</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="chickpeas" id="chickpeas">
                      <label class="form-check-label" for="chickpeas">Chickpeas</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="rice" id="rice">
                      <label class="form-check-label" for="rice">Rice</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="pasta" id="pasta">
                      <label class="form-check-label" for="pasta">Pasta</label>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Dairy & Other Category -->
              <div class="ingredient-category mb-4">
                <h5 class="text-secondary mb-3">🥛 Dairy & Other</h5>
                <div class="row">
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="yogurt" id="yogurt">
                      <label class="form-check-label" for="yogurt">Yogurt</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="avocado" id="avocado">
                      <label class="form-check-label" for="avocado">Avocado</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="berries" id="berries">
                      <label class="form-check-label" for="berries">Berries</label>
                    </div>
                  </div>
                  <div class="col-md-3 col-6 mb-2">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="eggs" id="eggs">
                      <label class="form-check-label" for="eggs">Eggs</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="text-center mt-4">
                <button class="btn btn-success btn-lg px-5 py-3" id="generateRecipesBtn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" class="me-2">
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"/>
                  </svg>
                  Generate Recipes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recipe Results -->
      <div class="row" id="recipeResults"></div>
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

  document.getElementById('generateRecipesBtn').addEventListener('click', () => {
    generateRecipesFromIngredients();
  });
}

// Generate recipes based on selected ingredients
function generateRecipesFromIngredients() {
  const selectedIngredients = [];
  const checkboxes = document.querySelectorAll('.form-check-input:checked');
  
  checkboxes.forEach(checkbox => {
    selectedIngredients.push(checkbox.value);
  });

  if (selectedIngredients.length === 0) {
    document.getElementById('recipeResults').innerHTML = `
      <div class="col-12 text-center py-5">
        <h4 class="text-muted">Please select at least one ingredient</h4>
      </div>
    `;
    return;
  }

  // Recipe database with required ingredients
  const recipes = [
    { 
      title: 'Avocado Toast Bowl', 
      ingredients: ['avocado', 'eggs', 'tomato'], 
      time: '10 min', 
      calories: '320', 
      image: '🥑',
      tags: ['Vegetarian', 'Quick']
    },
    { 
      title: 'Quinoa Power Salad', 
      ingredients: ['quinoa', 'spinach', 'tomato', 'avocado'], 
      time: '15 min', 
      calories: '280', 
      image: '🥗',
      tags: ['Vegan', 'Gluten-Free']
    },
    { 
      title: 'Grilled Salmon & Veggies', 
      ingredients: ['salmon', 'broccoli', 'carrot'], 
      time: '25 min', 
      calories: '420', 
      image: '🐟',
      tags: ['Low-Carb', 'High-Protein']
    },
    { 
      title: 'Berry Protein Smoothie', 
      ingredients: ['berries', 'yogurt'], 
      time: '5 min', 
      calories: '250', 
      image: '🫐',
      tags: ['Vegetarian', 'Quick']
    },
    { 
      title: 'Chickpea Buddha Bowl', 
      ingredients: ['chickpeas', 'quinoa', 'spinach', 'carrot'], 
      time: '20 min', 
      calories: '380', 
      image: '🥙',
      tags: ['Vegan', 'High-Fiber']
    },
    { 
      title: 'Zucchini Noodle Pasta', 
      ingredients: ['zucchini', 'tomato'], 
      time: '18 min', 
      calories: '290', 
      image: '🍝',
      tags: ['Low-Carb', 'Vegetarian']
    },
    { 
      title: 'Greek Yogurt Parfait', 
      ingredients: ['yogurt', 'berries'], 
      time: '5 min', 
      calories: '220', 
      image: '🥛',
      tags: ['Vegetarian', 'High-Protein']
    },
    { 
      title: 'Asian Chicken Lettuce Wraps', 
      ingredients: ['chicken', 'lettuce', 'carrot'], 
      time: '20 min', 
      calories: '310', 
      image: '🥬',
      tags: ['Low-Carb', 'Gluten-Free']
    },
    { 
      title: 'Veggie Stir-Fry', 
      ingredients: ['broccoli', 'carrot', 'tofu', 'rice'], 
      time: '15 min', 
      calories: '260', 
      image: '🥦',
      tags: ['Vegan', 'Quick']
    },
  ];

  // Find matching recipes
  const matchingRecipes = recipes.filter(recipe => {
    // Check if user has at least 50% of the ingredients
    const matchCount = recipe.ingredients.filter(ing => selectedIngredients.includes(ing)).length;
    return matchCount >= Math.ceil(recipe.ingredients.length * 0.5);
  });

  // Sort by match percentage
  matchingRecipes.sort((a, b) => {
    const matchA = a.ingredients.filter(ing => selectedIngredients.includes(ing)).length / a.ingredients.length;
    const matchB = b.ingredients.filter(ing => selectedIngredients.includes(ing)).length / b.ingredients.length;
    return matchB - matchA;
  });

  displayGeneratedRecipes(matchingRecipes);
}

// Display generated recipes
function displayGeneratedRecipes(recipes) {
  const resultsDiv = document.getElementById('recipeResults');
  
  if (recipes.length === 0) {
    resultsDiv.innerHTML = `
      <div class="col-12 text-center py-5">
        <h4 class="text-muted">No matching recipes found</h4>
        <p class="text-secondary">Try selecting different ingredients</p>
      </div>
    `;
    return;
  }

  resultsDiv.innerHTML = `
    <div class="col-12 mb-4">
      <h3 class="text-success text-center">Suggested Recipes (${recipes.length})</h3>
    </div>
    ${recipes.map(recipe => `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card recipe-card h-100 shadow-sm">
          <div class="card-body">
            <div class="recipe-icon text-center mb-3">${recipe.image}</div>
            <h5 class="card-title text-success fw-bold">${recipe.title}</h5>
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
    `).join('')}
  `;
}

