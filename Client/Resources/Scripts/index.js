// BetterBites - Health-First Recipe Application
// Main JavaScript file for the BetterBites application

// Authentication state management
let currentUser = null;
let authToken = localStorage.getItem('authToken');

// Recipe comparison state management
let comparisonRecipes = [];

// Weekly meal planner state management
let weeklyMealPlan = {};

// Nutritional tracking state
let dailyNutrition = {};

// Pantry management state
let myPantry = [];

// Recipe collections state
let recipeCollections = [];

// Progress tracking & gamification state
let userProgress = {
  streak: 0,
  achievements: [],
  challenges: [],
  loggedRecipes: [],
  totalRecipesCooked: 0,
  totalHealthyMeals: 0,
  lastLogDate: null
};

// Smart grocery list optimization
let favoriteStores = [];
let selectedStorePreference = 'all';

// Community features state
let followingList = [];
let recipeReviews = {};
let recipeComments = {};
let recipeTips = {};

// Calendar integration state
let mealReminders = [];
let calendarEvents = [];

// Accessibility settings
let accessibilitySettings = {
  fontSize: 1,
  highContrast: false,
  reducedMotion: false,
  screenReader: true
};

// Personal nutrition report data
let nutritionReports = {
  weekly: {},
  monthly: {},
  recipeAnalysis: []
};

// Trends and patterns data
let trendsData = {
  mostCookedRecipes: {},
  favoriteIngredients: {},
  cookingTimePatterns: [],
  calorieTrends: [],
  nutrientBalance: []
};

// Meal time features data
const mealTimeRecipes = {
  breakfast: ['breakfast', 'morning', 'oatmeal', 'eggs', 'pancake', 'waffle', 'smoothie'],
  lunch: ['lunch', 'salad', 'sandwich', 'wrap', 'soup'],
  dinner: ['dinner', 'main', 'entree', 'chicken', 'beef', 'salmon'],
  snack: ['snack', 'appetizer', 'finger food', 'trail mix', 'nuts'],
  'late-night': ['quick', 'simple', 'light', 'low-calorie', 'easy'],
  festive: ['holiday', 'celebration', 'special', 'festive', 'party']
};

// Calendar integration data
const specialOccasions = [
  {
    name: 'New Year\'s Day',
    date: '2025-01-01',
    suggestions: ['Resolutions breakfast', 'Healthy start recipes'],
    color: 'success'
  },
  {
    name: 'Valentine\'s Day',
    date: '2025-02-14',
    suggestions: ['Romantic dinner recipes', 'Heart-healthy meals'],
    color: 'danger'
  },
  {
    name: 'Easter',
    date: '2025-04-20',
    suggestions: ['Spring vegetable dishes', 'Easter brunch recipes'],
    color: 'warning'
  },
  {
    name: 'Independence Day',
    date: '2025-07-04',
    suggestions: ['BBQ and grilling recipes', 'Healthy picnic options'],
    color: 'primary'
  },
  {
    name: 'Halloween',
    date: '2025-10-31',
    suggestions: ['Fun healthy snacks', 'Orange vegetable recipes'],
    color: 'warning'
  },
  {
    name: 'Thanksgiving',
    date: '2025-11-27',
    suggestions: ['Healthy turkey recipes', 'Side dish options'],
    color: 'success'
  },
  {
    name: 'Christmas',
    date: '2025-12-25',
    suggestions: ['Festive healthy meals', 'Holiday comfort foods'],
    color: 'danger'
  }
];

// Community features data
const communityChallenges = [
  {
    title: 'Weekly Veggie Challenge',
    description: 'Try 5 different vegetables this week',
    participants: 124,
    startDate: '2025-01-15',
    endDate: '2025-01-22',
    difficulty: 'Easy'
  },
  {
    title: 'Meal Prep Master',
    description: 'Prep 3 meals for the week ahead',
    participants: 89,
    startDate: '2025-01-15',
    endDate: '2025-01-22',
    difficulty: 'Medium'
  },
  {
    title: 'Healthy Breakfast Week',
    description: 'Eat a healthy breakfast every day',
    participants: 156,
    startDate: '2025-01-15',
    endDate: '2025-01-22',
    difficulty: 'Easy'
  },
  {
    title: 'Cooking Streak',
    description: 'Cook at home for 7 days straight',
    participants: 203,
    startDate: '2025-01-15',
    endDate: '2025-01-22',
    difficulty: 'Hard'
  }
];

// Nutritional Learning Hub data
const learningHubContent = {
  articles: [
    {
      title: 'Understanding Macronutrients',
      author: 'BetterBites Team',
      date: '2025-01-15',
      category: 'Nutrition Basics',
      content: 'Learn about proteins, carbohydrates, and fats and how they fuel your body.',
      readTime: '5 min read'
    },
    {
      title: 'The Benefits of Whole Foods',
      author: 'BetterBites Team',
      date: '2025-01-14',
      category: 'Healthy Eating',
      content: 'Discover why whole foods are superior to processed alternatives.',
      readTime: '7 min read'
    },
    {
      title: 'Meal Planning Made Easy',
      author: 'BetterBites Team',
      date: '2025-01-13',
      category: 'Meal Prep',
      content: 'Simple strategies for planning healthy meals throughout the week.',
      readTime: '6 min read'
    },
    {
      title: 'Reading Nutrition Labels',
      author: 'BetterBites Team',
      date: '2025-01-12',
      category: 'Nutrition Basics',
      content: 'Master the art of understanding nutrition labels and ingredient lists.',
      readTime: '4 min read'
    }
  ],
  ingredientSpotlights: [
    {
      name: 'Quinoa',
      description: 'Complete protein powerhouse',
      benefits: ['Complete protein', 'High in fiber', 'Rich in minerals', 'Gluten-free'],
      nutritionalValue: '8g protein, 5g fiber per cup'
    },
    {
      name: 'Kale',
      description: 'Superfood leafy green',
      benefits: ['Vitamin K', 'Vitamin A', 'Iron', 'Antioxidants'],
      nutritionalValue: '3g protein, 2g fiber per cup'
    },
    {
      name: 'Salmon',
      description: 'Omega-3 rich fish',
      benefits: ['Omega-3 fatty acids', 'High-quality protein', 'Vitamin D', 'B Vitamins'],
      nutritionalValue: '22g protein, 0 carbs per 3oz'
    },
    {
      name: 'Avocado',
      description: 'Healthy fat source',
      benefits: ['Monounsaturated fats', 'Fiber', 'Potassium', 'Vitamin E'],
      nutritionalValue: '3g protein, 10g fiber per avocado'
    }
  ],
  nutritionMyths: [
    {
      myth: 'Eating fat makes you fat',
      truth: 'Healthy fats are essential for your body and don\'t directly cause weight gain.',
      explanation: 'Your body needs healthy fats for brain function and nutrient absorption.'
    },
    {
      myth: 'All carbs are bad',
      truth: 'Whole grains and complex carbs provide essential energy and nutrients.',
      explanation: 'Choose whole grains over refined carbs for lasting energy.'
    },
    {
      myth: 'You need to skip meals to lose weight',
      truth: 'Regular meals and healthy snacks help maintain metabolism and prevent overeating.',
      explanation: 'Eating regularly helps control appetite and maintain energy levels.'
    },
    {
      myth: 'Fresh is always better than frozen',
      truth: 'Frozen fruits and vegetables can be as nutritious as fresh, sometimes more.',
      explanation: 'Frozen produce is often flash-frozen at peak ripeness, preserving nutrients.'
    }
  ],
  seasonalGuides: [
    {
      season: 'Winter',
      focus: 'Comfort foods & warmth',
      tips: ['Root vegetables', 'Hot soups', 'Hearty stews', 'Healthy comfort foods'],
      seasonalIngredients: ['Sweet potato', 'Brussels sprouts', 'Winter squash', 'Citrus']
    },
    {
      season: 'Spring',
      focus: 'Fresh starts & light meals',
      tips: ['Fresh greens', 'Light dishes', 'Seasonal vegetables', 'Revitalizing meals'],
      seasonalIngredients: ['Asparagus', 'Peas', 'Strawberries', 'Spring greens']
    },
    {
      season: 'Summer',
      focus: 'Hydrating & cooling foods',
      tips: ['Stay hydrated', 'Fresh salads', 'Grilled vegetables', 'Light meals'],
      seasonalIngredients: ['Tomatoes', 'Corn', 'Berries', 'Cucumbers']
    },
    {
      season: 'Fall',
      focus: 'Harvest & warm spices',
      tips: ['Warming spices', 'Squash', 'Apples', 'Nourishing meals'],
      seasonalIngredients: ['Pumpkin', 'Apples', 'Sweet potatoes', 'Cinnamon']
    }
  ]
};

// Meal prep recommendations
const mealPrepTips = {
  batchCooking: [
    'Cook large portions and divide into meal-prep containers',
    'Double or triple recipes to save cooking time',
    'Prepare base ingredients like grains and proteins in bulk',
    'Cook similar ingredients together in the oven for efficiency'
  ],
  prepAhead: [
    'Wash and chop all vegetables at the beginning of the week',
    'Marinate proteins the night before for better flavor',
    'Pre-cook grains and store in the refrigerator',
    'Prepare sauces and dressings in advance',
    'Keep cooked proteins separate from vegetables for freshness'
  ],
  storage: [
    'Store wet and dry ingredients separately to prevent sogginess',
    'Use airtight containers to keep food fresh longer',
    'Label containers with dates and contents',
    'Store cooked food in the refrigerator for up to 4-5 days',
    'Freeze meal-prep items in individual portions'
  ],
  timeSaving: [
    'Use slow cooker or instant pot for hands-off cooking',
    'Prep multiple meals with similar ingredients simultaneously',
    'Cook protein and vegetables on the same pan',
    'Use pre-cut vegetables from the grocery store',
    'Invest in good quality containers for easy organization'
  ],
  cookOnceEatMultiple: [
    'Make large batches of soups, stews, and casseroles',
    'Prepare a big batch of protein (chicken, beef) for the week',
    'Cook double portions for dinner to have lunch the next day',
    'Make breakfast items that can be frozen and reheated',
    'Prep snack containers for the entire week'
  ]
};

// API Configuration
const API_BASE_URL = 'http://localhost:5177/api';

// Authentication functions
async function login(email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      const data = await response.json();
      authToken = data.token;
      currentUser = data.user;
      localStorage.setItem('authToken', authToken);
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      return { success: true, user: currentUser };
    } else {
      const error = await response.json();
      return { success: false, error: error.error || 'Login failed' };
    }
  } catch (error) {
    return { success: false, error: 'Network error' };
  }
}

async function register(email, username, password, firstName, lastName) {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, username, password, firstName, lastName })
    });

    if (response.ok) {
      const data = await response.json();
      authToken = data.token;
      currentUser = data.user;
      localStorage.setItem('authToken', authToken);
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      return { success: true, user: currentUser };
    } else {
      const error = await response.json();
      return { success: false, error: error.error || 'Registration failed' };
    }
  } catch (error) {
    return { success: false, error: 'Network error' };
  }
}

// logout() function moved below - using the more complete version

function isLoggedIn() {
  return currentUser !== null;
}

// Get authorization headers for authenticated requests
function getAuthHeaders() {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`
  };
}

// Wellness Profile API functions
async function fetchWellnessProfile() {
  try {
    const response = await fetch(`${API_BASE_URL}/WellnessProfile/me`, {
      headers: getAuthHeaders()
    });
    
    if (response.ok) {
      return await response.json();
    } else if (response.status === 404) {
      return null; // Profile doesn't exist yet
    } else {
      throw new Error('Failed to fetch wellness profile');
    }
  } catch (error) {
    console.error('Error fetching wellness profile:', error);
    return null;
  }
}

async function saveWellnessProfile(data) {
  try {
    const existing = await fetchWellnessProfile();
    
    const response = existing 
      ? await fetch(`${API_BASE_URL}/WellnessProfile`, {
          method: 'PUT',
          headers: getAuthHeaders(),
          body: JSON.stringify(data)
        })
      : await fetch(`${API_BASE_URL}/WellnessProfile`, {
          method: 'POST',
          headers: getAuthHeaders(),
          body: JSON.stringify(data)
        });
    
    if (!response.ok) {
      throw new Error('Failed to save wellness profile');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error saving wellness profile:', error);
    throw error;
  }
}

// Initialize user state from localStorage
function initializeAuth() {
  const storedUser = localStorage.getItem('currentUser');
  if (storedUser && authToken) {
    currentUser = JSON.parse(storedUser);
  }
}

// Initialize authentication on page load
initializeAuth();

// Render the homepage
function renderHomePage() {
  const app = document.getElementById('app');
  
  // Add page transition class
  app.className = 'page-transition';
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="homeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        
        <div class="d-flex align-items-center">
          ${isLoggedIn() ? `
            <div class="dropdown me-3">
              <button class="btn btn-outline-success dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle me-1" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                ${currentUser.username}
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" id="profileBtn">My Profile</a></li>
                <li><a class="dropdown-item" href="#" id="myRecipesBtn">My Recipes</a></li>
                <li><a class="dropdown-item" href="#" id="favoritesBtn">My Favorites</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" id="mealPlannerBtn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3 me-2" viewBox="0 0 16 16">
                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                    <path d="M12.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-6 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  </svg>
                  Weekly Meal Planner
                </a></li>
                <li><a class="dropdown-item" href="#" id="nutritionalInsightsBtn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up me-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
                  </svg>
                  Nutritional Insights
                </a></li>
                <li><a class="dropdown-item" href="#" id="pantryBtn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam me-2" viewBox="0 0 16 16">
                    <path d="M8.186 1.113a.5.5 0 0 0-.372.664L7.846 3l-2.356.471a.5.5 0 0 0-.303.768L6.5 5.5l-3 3-2-.667a.5.5 0 0 0-.667.333L0 11l.853.858a.5.5 0 0 0 .707.014l4.293-4.293a.5.5 0 0 0 .707 0l4.293 4.293a.5.5 0 0 0 .706.014L16 11l-.5-2.833-3.333 1a.5.5 0 0 0-.667-.333l-3 3 .667 2a.5.5 0 0 0 .303.768l2.356.471-.764 1.22a.5.5 0 0 0 .664.372l3.012-1.574a.5.5 0 0 0 .434-.772L10 11.206l-1.19-.301a.5.5 0 0 0-.306.768l1.22.764L10 13.5l-2.5.833a.5.5 0 0 0-.707-.014L2.853 10.133a.5.5 0 0 0-.707 0L0 12.5l.5 3a.5.5 0 0 0 .833.333l3-2a.5.5 0 0 0-.707-.707L1.333 14.667l-.5 2h8z"/>
                  </svg>
                  My Pantry
                </a></li>
                <li><a class="dropdown-item" href="#" id="collectionsBtn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark me-2" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                  </svg>
                  Recipe Collections
                </a></li>
                <li><a class="dropdown-item" href="#" id="mealPrepBtn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock me-2" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                  Meal Prep Tips
                </a></li>
                <li><a class="dropdown-item" href="#" id="progressTrackingBtn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy me-2" viewBox="0 0 16 16">
                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028 1.396 3.618 3.43 4.32a2 2 0 0 1-.96 1.84c-.69.32-1.318.17-1.732-.216a.5.5 0 0 1 0-.708c.207-.207.491-.306.708-.38C1.885 6.93 1.3 5.5 1.1 3.6c-.1-.46-.19-.86-.173-1.38a2 2 0 0 0-.72-3.935c-.333 1.05-.588 2.346-.72 3.935zM15.504 1c-.007.517-.026 1.006-.056 1.469-.13 2.028-1.396 3.618-3.43 4.32a2 2 0 0 0 .96 1.84c.69.32 1.318.17 1.732-.216a.5.5 0 0 0 0-.708c-.207-.207-.491-.306-.708-.38C14.115 6.93 14.7 5.5 14.9 3.6c.1-.46.19-.86.173-1.38a2 2 0 0 1 .72-3.935c.333 1.05.588 2.346.72 3.935z"/>
                  </svg>
                  My Progress
                </a></li>
                <li><a class="dropdown-item" href="#" id="mealTimeBtn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history me-2" viewBox="0 0 16 16">
                    <path d="M8.515 1.019A7 7 0 0 0 8 1 7 7 0 0 0 7 2.019V1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1zm-2.03 1.015a.5.5 0 0 1 .515.515 7 7 0 0 1 5.97 7H12a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-1.585a7 7 0 0 1-5.97-7H3a1 1 0 0 1 0-2h1.03"/>
                    <path d="M8 3.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 .252.434l4 2a.5.5 0 0 0 .496-.868L8 9.71z"/>
                  </svg>
                  What's for Dinner?
                </a></li>
                <li><a class="dropdown-item" href="#" id="learningHubBtn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book me-2" viewBox="0 0 16 16">
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.81 8.985.936 8 1.783z"/>
                  </svg>
                  Learning Hub
                </a></li>
                <li><a class="dropdown-item" href="#" id="communityBtn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people me-2" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A7.966 7.966 0 0 1 8 15a7.966 7.966 0 0 1-5.022-1.977.141.141 0 0 0 .022.028L3 14l.004.003a2.158 2.158 0 0 0 .088.014c.184.014.384.034.595.05 1.78.192 3.863.192 5.648 0a17.896 17.896 0 0 0 1.15-.105l.004-.003.002-.002a.141.141 0 0 0 .022-.028z"/>
                    <path d="M14 0s1 0 1 1-1 4-5 4S5 3 5 4s1 1 1 1h8zm-7.978 1A7.967 7.967 0 0 1 8 2a7.967 7.967 0 0 1-6.022 1.977c-.02.023-.044.04-.06.064L1.998 4.9c0 .002-.002.003-.003.005-.006.007-.014.016-.02.027a.151.151 0 0 0 .004.01c.02.03.056.07.11.1.177.1.4.195.662.233.056.01.11.014.166.014h.002C2.717 5.575 3.087 5.51 3.372 5.375c.172-.081.321-.18.446-.3.108-.111.194-.227.263-.338l.01-.016a.276.276 0 0 0 .003-.01c.001-.002.002-.004.003-.006a.15.15 0 0 0 .03-.06 1.444 1.444 0 0 0 .117-.332c.05-.209.061-.437-.037-.598-.055-.091-.137-.178-.237-.28l-.003-.003-.003-.002a.4.4 0 0 0-.043-.048.4.4 0 0 0-.04-.05.404.404 0 0 0-.043-.052c-.013-.015-.015-.017-.018-.018l-.003-.002a.333.333 0 0 0-.015-.01c-.088-.068-.154-.16-.21-.267C3.039 4.238 3 4.1 3 4c0-.002 0-.003.001-.005a2.158 2.158 0 0 1 .112-.028c.213-.04.413-.06.595-.05 1.78-.193 3.863-.193 5.648 0a18.036 18.036 0 0 1 1.15.105c.027.005.056.008.086.011a2.158 2.158 0 0 1 .016.013z"/>
                  </svg>
                  Community
                </a></li>
                <li><a class="dropdown-item" href="#" id="calendarBtn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-check me-2" viewBox="0 0 16 16">
                    <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                  </svg>
                  Calendar Integration
                </a></li>
                <li><a class="dropdown-item" href="#" id="apiIntegrationBtn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plug me-2" viewBox="0 0 16 16">
                    <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.379 0-.74-.052-1.08-.15l-1.95 1.95C5.64 13.583 6.01 14 6.5 14c.276 0 .5-.224.5-.5v-3A3.5 3.5 0 0 1 10.5 7h3a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h3A3.5 3.5 0 0 1 7 3.5V.5A.5.5 0 0 1 7.5 0h-1.5Z"/>
                  </svg>
                  API Integrations
                </a></li>
                <li><a class="dropdown-item" href="#" id="accessibilityBtn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-universal-access me-2" viewBox="0 0 16 16">
                    <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 13.5V6.5a.5.5 0 0 1 .832-.374l.5.5a1 1 0 0 0 .665.374l.767 0L9 7.9l.723 7.795.566-.572A.5.5 0 0 1 10 15h1.5a.5.5 0 0 1 .5.5V14A.5.5 0 0 1 12 14v-.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H13v.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V16h-.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H11v.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1H7.5a.5.5 0 0 1-.5-.5v-1H5.5a.5.5 0 0 1-.5.5H4v.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V16H1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5H2v-.5a.5.5 0 0 1 .5-.5H4V13.5Z"/>
                  </svg>
                  Accessibility Settings
                </a></li>
                <li><a class="dropdown-item" href="#" id="nutritionReportBtn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-data me-2" viewBox="0 0 16 16">
                    <path d="M4 11a1 1 0 1 1 2 0v-1a1 1 0 1 1-2 0v1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"/>
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                  </svg>
                  Nutrition Report
                </a></li>
                <li><a class="dropdown-item" href="#" id="trendsBtn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up me-2" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
                  </svg>
                  Trends & Patterns
                </a></li>
                <li><a class="dropdown-item" href="#" id="compareBtn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart me-2" viewBox="0 0 16 16">
                    <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"/>
                  </svg>
                  Compare Recipes
                </a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" id="logoutBtn">Logout</a></li>
              </ul>
            </div>
            <button class="btn btn-success px-4" id="addRecipeBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle me-1" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
              Add Recipe
            </button>
          ` : `
            <button class="btn btn-outline-success me-2" id="loginBtn">Login</button>
            <button class="btn btn-success" id="registerBtn">Sign Up</button>
          `}
          <button class="btn btn-sm btn-outline-secondary ms-3" id="darkModeBtn" title="Toggle Dark Mode">🌙</button>
        </div>
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
          
          <!-- Smart Recommendations Section (for logged-in users) -->
          ${isLoggedIn() ? `
          <div id="forYouSection" class="w-100 mt-5">
            <h3 class="text-success mb-4">✨ Recipes For You</h3>
            <p class="text-muted mb-4">Personalized recommendations based on your wellness profile</p>
            <div id="recommendationsContainer" class="text-center py-4">
              <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
          ` : ''}
          
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
      
      <!-- Recipe Collections Sections -->
      <div class="container-fluid px-4 py-5">
        <!-- Featured Healthy Recipes -->
        <div class="mb-5">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="text-success fw-bold">⭐ Featured Healthy Recipes</h3>
            <button class="btn btn-outline-success btn-sm" id="viewAllFeatured">View All →</button>
          </div>
          <div id="featuredRecipesContainer" class="row g-4">
            <div class="col-12 text-center py-4">
              <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Trending Recipes -->
        <div class="mb-5">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="text-success fw-bold">📈 Trending Now</h3>
            <button class="btn btn-outline-success btn-sm" id="viewAllTrending">View All →</button>
          </div>
          <div id="trendingRecipesContainer" class="row g-4">
            <div class="col-12 text-center py-4">
              <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Seasonal Picks -->
        <div class="mb-5">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="text-success fw-bold">🍂 Seasonal Favorites</h3>
            <button class="btn btn-outline-success btn-sm" id="viewAllSeasonal">View All →</button>
          </div>
          <div id="seasonalRecipesContainer" class="row g-4">
            <div class="col-12 text-center py-4">
              <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Beginner-Friendly Section -->
        <div class="mb-5">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="text-success fw-bold">🌱 Perfect for Beginners</h3>
            <button class="btn btn-outline-success btn-sm" id="viewAllBeginner">View All →</button>
          </div>
          <div id="beginnerRecipesContainer" class="row g-4">
            <div class="col-12 text-center py-4">
              <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Add event listeners
  document.getElementById('viewAllFeatured').addEventListener('click', () => {
    renderFindRecipesPage();
  });
  document.getElementById('viewAllTrending').addEventListener('click', () => {
    renderFindRecipesPage();
  });
  document.getElementById('viewAllSeasonal').addEventListener('click', () => {
    renderFindRecipesPage();
  });
  document.getElementById('viewAllBeginner').addEventListener('click', () => {
    renderFindRecipesPage();
  });
  
  // Add event listeners
  document.getElementById('findRecipesBtn').addEventListener('click', () => {
    renderFindRecipesPage();
  });
  
  document.getElementById('makeRecipeBtn').addEventListener('click', () => {
    renderMakeRecipePage();
  });
  
  document.getElementById('shoppingListBtn').addEventListener('click', () => {
    if (isLoggedIn()) {
      renderShoppingListPage();
    } else {
      showAuthModal('shoppingList');
    }
  });
  
  document.getElementById('healthGoalsBtn').addEventListener('click', () => {
    if (isLoggedIn()) {
      renderHealthGoalsPage();
    } else {
      showAuthModal('healthGoals');
    }
  });

  // Authentication event listeners
  if (isLoggedIn()) {
    // User is logged in - add user-specific event listeners
    document.getElementById('logoutBtn').addEventListener('click', logout);
    document.getElementById('profileBtn').addEventListener('click', () => {
      renderWellnessProfile();
    });
    document.getElementById('myRecipesBtn').addEventListener('click', () => {
      // TODO: Implement my recipes page
      alert('My Recipes page coming soon!');
    });
    document.getElementById('favoritesBtn').addEventListener('click', () => {
      // TODO: Implement favorites page
      alert('Favorites page coming soon!');
    });
    document.getElementById('compareBtn').addEventListener('click', () => {
      renderRecipeComparison();
    });
    document.getElementById('addRecipeBtn').addEventListener('click', () => {
      // TODO: Implement add recipe page
      alert('Add Recipe page coming soon!');
    });
    // Add meal planner button if it exists
    const mealPlannerBtn = document.getElementById('mealPlannerBtn');
    if (mealPlannerBtn) {
      mealPlannerBtn.addEventListener('click', () => {
        renderWeeklyMealPlanner();
      });
    }
    // Add nutritional insights button if it exists
    const nutritionalInsightsBtn = document.getElementById('nutritionalInsightsBtn');
    if (nutritionalInsightsBtn) {
      nutritionalInsightsBtn.addEventListener('click', () => {
        renderNutritionalInsights();
      });
    }
    // Add pantry button if it exists
    const pantryBtn = document.getElementById('pantryBtn');
    if (pantryBtn) {
      pantryBtn.addEventListener('click', () => {
        renderPantryManagement();
      });
    }
    // Add collections button if it exists
    const collectionsBtn = document.getElementById('collectionsBtn');
    if (collectionsBtn) {
      collectionsBtn.addEventListener('click', () => {
        renderRecipeCollections();
      });
    }
    // Add meal prep button if it exists
    const mealPrepBtn = document.getElementById('mealPrepBtn');
    if (mealPrepBtn) {
      mealPrepBtn.addEventListener('click', () => {
        renderMealPrepRecommendations();
      });
    }
    // Add progress tracking button if it exists
    const progressTrackingBtn = document.getElementById('progressTrackingBtn');
    if (progressTrackingBtn) {
      progressTrackingBtn.addEventListener('click', () => {
        renderProgressTracking();
      });
    }
    // Add meal time button if it exists
    const mealTimeBtn = document.getElementById('mealTimeBtn');
    if (mealTimeBtn) {
      mealTimeBtn.addEventListener('click', () => {
        renderMealTimeFeatures();
      });
    }
    // Add learning hub button if it exists
    const learningHubBtn = document.getElementById('learningHubBtn');
    if (learningHubBtn) {
      learningHubBtn.addEventListener('click', () => {
        renderNutritionalLearningHub();
      });
    }
    // Add community button if it exists
    const communityBtn = document.getElementById('communityBtn');
    if (communityBtn) {
      communityBtn.addEventListener('click', () => {
        renderCommunityFeatures();
      });
    }
    // Add calendar button if it exists
    const calendarBtn = document.getElementById('calendarBtn');
    if (calendarBtn) {
      calendarBtn.addEventListener('click', () => {
        renderCalendarIntegration();
      });
    }
    // Add API integration button if it exists
    const apiIntegrationBtn = document.getElementById('apiIntegrationBtn');
    if (apiIntegrationBtn) {
      apiIntegrationBtn.addEventListener('click', () => {
        renderAPIIntegrationIdeas();
      });
    }
    // Add accessibility button if it exists
    const accessibilityBtn = document.getElementById('accessibilityBtn');
    if (accessibilityBtn) {
      accessibilityBtn.addEventListener('click', () => {
        renderAccessibilitySettings();
      });
    }
    // Add nutrition report button if it exists
    const nutritionReportBtn = document.getElementById('nutritionReportBtn');
    if (nutritionReportBtn) {
      nutritionReportBtn.addEventListener('click', () => {
        renderPersonalNutritionReport();
      });
    }
    // Add trends button if it exists
    const trendsBtn = document.getElementById('trendsBtn');
    if (trendsBtn) {
      trendsBtn.addEventListener('click', () => {
        renderTrendsAndPatterns();
      });
    }
  } else {
    // User is not logged in - add auth event listeners
    document.getElementById('loginBtn').addEventListener('click', renderLoginPage);
    document.getElementById('registerBtn').addEventListener('click', renderRegisterPage);
  }
  
  // Dark mode toggle
  document.getElementById('darkModeBtn').addEventListener('click', toggleDarkMode);
  
  // Load smart recommendations if logged in
  if (isLoggedIn()) {
    loadSmartRecommendations();
  }
  
  // Load all recipe collections
  loadFeaturedRecipes();
  loadTrendingRecipes();
  loadSeasonalRecipes();
  loadBeginnerRecipes();
}

// Load and display smart recommendations
async function loadSmartRecommendations() {
  const container = document.getElementById('recommendationsContainer');
  if (!container) return;
  
  try {
    const recommendations = await getSmartRecommendations();
    
    if (!recommendations || recommendations.length === 0) {
      container.innerHTML = `
        <div class="text-center py-4">
          <p class="text-muted">Set up your wellness profile to get personalized recipe recommendations!</p>
          <button class="btn btn-outline-success btn-sm mt-3" onclick="renderWellnessProfile()">
            Create Wellness Profile
          </button>
        </div>
      `;
      return;
    }
    
    // Convert to card format
    const cardRecipes = recommendations.map(recipe => {
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
    
    container.innerHTML = `
      <div class="row g-3">
        ${cardRecipes.map(recipe => `
          <div class="col-md-6 col-lg-4">
            <div class="card recipe-card h-100 shadow-sm border-success">
              <div class="card-body">
                <div class="recipe-icon text-center mb-3">${recipe.image}</div>
                <h6 class="card-title text-success fw-bold">${recipe.title}</h6>
                <p class="card-text text-muted mb-2 small text-capitalize">${recipe.category}</p>
                
                <!-- Health Score Badge -->
                <div class="mb-2 text-center">
                  <span class="badge bg-${recipe.healthLevel.color}">
                    ${recipe.healthLevel.icon} ${recipe.healthScore}/100
                  </span>
                  <span class="badge bg-success ms-1">⭐ Recommended</span>
                </div>
                
                <div class="d-flex justify-content-between mb-3 small text-muted">
                  <span>⏱️ ${recipe.time}</span>
                  <span>🔥 ${recipe.calories} cal</span>
                </div>
                
                <button class="btn btn-success btn-sm w-100" onclick="viewRecipe(${recipe.id})">
                  View Recipe
                </button>
              </div>
            </div>
          </div>
        `).join('')}
        
        <div class="col-12 text-center mt-3">
          <button class="btn btn-outline-success" onclick="renderFindRecipesPage()">
            View All Recommendations →
          </button>
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Error loading recommendations:', error);
    container.innerHTML = `
      <div class="text-center py-4">
        <p class="text-muted">Unable to load recommendations. Please try again later.</p>
      </div>
    `;
  }
}

// Load Featured Recipes
async function loadFeaturedRecipes() {
  const container = document.getElementById('featuredRecipesContainer');
  if (!container) return;
  
  try {
    const response = await fetch('/api/recipes');
    const recipes = await response.json();
    
    // Filter for high health score recipes (featured)
    const featured = recipes
      .map(recipe => ({ ...recipe, healthScore: calculateHealthScore(recipe) }))
      .filter(recipe => recipe.healthScore >= 70)
      .sort((a, b) => b.healthScore - a.healthScore)
      .slice(0, 6);
    
    if (featured.length === 0) {
      container.innerHTML = '<div class="col-12 text-center py-4"><p class="text-muted">No featured recipes available</p></div>';
      return;
    }
    
    container.innerHTML = featured.map(recipe => {
      const healthLevel = getHealthLevel(recipe.healthScore);
      const totalTime = (recipe.prepTimeMinutes || 0) + (recipe.cookTimeMinutes || 0);
      return `
        <div class="col-md-4">
          <div class="card h-100 recipe-card shadow-sm">
            <div class="card-body">
              <div class="text-center mb-3">
                <span class="display-5">${recipe.image || '🍽️'}</span>
              </div>
              <h5 class="card-title">${recipe.title}</h5>
              <p class="card-text text-muted small">${recipe.description || ''}</p>
              <div class="d-flex justify-content-between mb-2">
                <span class="badge bg-${healthLevel.color}">${healthLevel.icon} ${recipe.healthScore}/100</span>
                <small class="text-muted">⏱️ ${totalTime} min</small>
              </div>
              <button class="btn btn-success btn-sm w-100 mt-3" onclick="viewRecipe(${recipe.id})">View Recipe</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  } catch (error) {
    console.error('Error loading featured recipes:', error);
    container.innerHTML = '<div class="col-12 text-center py-4"><p class="text-muted">Unable to load featured recipes</p></div>';
  }
}

// Load Trending Recipes
async function loadTrendingRecipes() {
  const container = document.getElementById('trendingRecipesContainer');
  if (!container) return;
  
  try {
    const response = await fetch('/api/recipes');
    const recipes = await response.json();
    
    // Mix of recent and popular recipes (trending)
    const trending = recipes
      .map(recipe => ({ ...recipe, healthScore: calculateHealthScore(recipe) }))
      .sort((a, b) => {
        // Sort by health score and add some randomness for trending
        return b.healthScore - a.healthScore;
      })
      .slice(0, 6);
    
    if (trending.length === 0) {
      container.innerHTML = '<div class="col-12 text-center py-4"><p class="text-muted">No trending recipes available</p></div>';
      return;
    }
    
    container.innerHTML = trending.map(recipe => {
      const healthLevel = getHealthLevel(recipe.healthScore);
      const totalTime = (recipe.prepTimeMinutes || 0) + (recipe.cookTimeMinutes || 0);
      return `
        <div class="col-md-4">
          <div class="card h-100 recipe-card shadow-sm">
            <div class="card-body">
              <div class="text-center mb-3">
                <span class="display-5">${recipe.image || '🍽️'}</span>
              </div>
              <h5 class="card-title">${recipe.title}</h5>
              <p class="card-text text-muted small">${recipe.description || ''}</p>
              <div class="d-flex justify-content-between mb-2">
                <span class="badge bg-${healthLevel.color}">${healthLevel.icon} ${recipe.healthScore}/100</span>
                <small class="text-muted">⏱️ ${totalTime} min</small>
              </div>
              <button class="btn btn-success btn-sm w-100 mt-3" onclick="viewRecipe(${recipe.id})">View Recipe</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  } catch (error) {
    console.error('Error loading trending recipes:', error);
    container.innerHTML = '<div class="col-12 text-center py-4"><p class="text-muted">Unable to load trending recipes</p></div>';
  }
}

// Load Seasonal Recipes
async function loadSeasonalRecipes() {
  const container = document.getElementById('seasonalRecipesContainer');
  if (!container) return;
  
  try {
    const response = await fetch('/api/recipes');
    const recipes = await response.json();
    
    // Get current month for seasonal recipes
    const currentMonth = new Date().getMonth();
    let seasonalKeywords = [];
    
    // Define seasonal keywords based on month
    if (currentMonth >= 9 && currentMonth <= 11) { // Oct-Dec
      seasonalKeywords = ['winter', 'warm', 'hearty', 'comfort', 'holiday'];
    } else if (currentMonth >= 0 && currentMonth <= 2) { // Jan-Mar
      seasonalKeywords = ['hearty', 'warm', 'comfort', 'winter'];
    } else if (currentMonth >= 3 && currentMonth <= 5) { // Apr-Jun
      seasonalKeywords = ['spring', 'fresh', 'light', 'colorful'];
    } else { // Jul-Sep
      seasonalKeywords = ['summer', 'fresh', 'light', 'grill', 'refreshing'];
    }
    
    const seasonal = recipes
      .map(recipe => ({ ...recipe, healthScore: calculateHealthScore(recipe) }))
      .filter(recipe => {
        const titleDesc = `${recipe.title} ${recipe.description}`.toLowerCase();
        return seasonalKeywords.some(keyword => titleDesc.includes(keyword));
      })
      .sort((a, b) => b.healthScore - a.healthScore)
      .slice(0, 6);
    
    if (seasonal.length === 0) {
      container.innerHTML = '<div class="col-12 text-center py-4"><p class="text-muted">No seasonal recipes available</p></div>';
      return;
    }
    
    container.innerHTML = seasonal.map(recipe => {
      const healthLevel = getHealthLevel(recipe.healthScore);
      const totalTime = (recipe.prepTimeMinutes || 0) + (recipe.cookTimeMinutes || 0);
      return `
        <div class="col-md-4">
          <div class="card h-100 recipe-card shadow-sm">
            <div class="card-body">
              <div class="text-center mb-3">
                <span class="display-5">${recipe.image || '🍽️'}</span>
              </div>
              <h5 class="card-title">${recipe.title}</h5>
              <p class="card-text text-muted small">${recipe.description || ''}</p>
              <div class="d-flex justify-content-between mb-2">
                <span class="badge bg-${healthLevel.color}">${healthLevel.icon} ${recipe.healthScore}/100</span>
                <small class="text-muted">⏱️ ${totalTime} min</small>
              </div>
              <button class="btn btn-success btn-sm w-100 mt-3" onclick="viewRecipe(${recipe.id})">View Recipe</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  } catch (error) {
    console.error('Error loading seasonal recipes:', error);
    container.innerHTML = '<div class="col-12 text-center py-4"><p class="text-muted">Unable to load seasonal recipes</p></div>';
  }
}

// Load Beginner Recipes
async function loadBeginnerRecipes() {
  const container = document.getElementById('beginnerRecipesContainer');
  if (!container) return;
  
  try {
    const response = await fetch('/api/recipes');
    const recipes = await response.json();
    
    // Filter for easy, quick recipes (beginner-friendly)
    const beginner = recipes
      .map(recipe => ({ 
        ...recipe, 
        healthScore: calculateHealthScore(recipe),
        totalTime: (recipe.prepTimeMinutes || 0) + (recipe.cookTimeMinutes || 0)
      }))
      .filter(recipe => recipe.totalTime <= 30 && recipe.healthScore >= 50)
      .sort((a, b) => a.totalTime - b.totalTime)
      .slice(0, 6);
    
    if (beginner.length === 0) {
      container.innerHTML = '<div class="col-12 text-center py-4"><p class="text-muted">No beginner recipes available</p></div>';
      return;
    }
    
    container.innerHTML = beginner.map(recipe => {
      const healthLevel = getHealthLevel(recipe.healthScore);
      return `
        <div class="col-md-4">
          <div class="card h-100 recipe-card shadow-sm">
            <div class="card-body">
              <div class="text-center mb-3">
                <span class="display-5">${recipe.image || '🍽️'}</span>
              </div>
              <h5 class="card-title">${recipe.title}</h5>
              <p class="card-text text-muted small">${recipe.description || ''}</p>
              <div class="d-flex justify-content-between mb-2">
                <span class="badge bg-${healthLevel.color}">${healthLevel.icon} ${recipe.healthScore}/100</span>
                <small class="text-muted">⏱️ ${recipe.totalTime} min</small>
              </div>
              <button class="btn btn-success btn-sm w-100 mt-3" onclick="viewRecipe(${recipe.id})">View Recipe</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  } catch (error) {
    console.error('Error loading beginner recipes:', error);
    container.innerHTML = '<div class="col-12 text-center py-4"><p class="text-muted">Unable to load beginner recipes</p></div>';
  }
}

// Render the Find Recipes page
function renderFindRecipesPage() {
  const app = document.getElementById('app');
  
  // Add page transition class
  app.className = 'page-transition';
  
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
          
          <!-- Quick Meal Picker -->
          <div class="mt-4 mb-4">
            <button class="btn btn-warning btn-lg shadow-sm me-2" onclick="renderMealTimeFeatures()">
              🍽️ What's for Dinner?
            </button>
          </div>
        </div>
      </div>

      <!-- Search and Filter Bar -->
      <div class="row mb-4">
        <div class="col-lg-8 mx-auto">
          <div class="input-group input-group-lg shadow-sm">
            <input type="text" class="form-control" placeholder="Search recipes (e.g., 'high protein, low carb dinner')..." id="searchInput">
            <button class="btn btn-outline-secondary" type="button" id="voiceSearchBtn" title="Voice Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8.5 2a.5.5 0 0 0-1 0v4.5a.5.5 0 0 0 1 0V2z"/>
                <path d="M7 5a.5.5 0 0 0-.5.5v1.5a4 4 0 0 0 3 3.856.5.5 0 0 0 .5-.5V7a3.5 3.5 0 0 0-.034-5.736A.5.5 0 0 0 7 5z"/>
                <path d="M4 8a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-2A.5.5 0 0 0 5 8H4zm6 0a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-2A.5.5 0 0 0 11 8h-1z"/>
              </svg>
            </button>
            <button class="btn btn-outline-secondary" type="button" id="imageSearchBtn" title="Image Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v8.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
              </svg>
            </button>
            <button class="btn btn-success" type="button" id="searchBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </div>
          <div class="text-center mt-2">
            <small class="text-muted">
              💡 Try natural language: "high protein low carb", "quick healthy breakfast", "vegetarian meal under 400 calories"
            </small>
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

  // Voice search button
  const voiceSearchBtn = document.getElementById('voiceSearchBtn');
  if (voiceSearchBtn) {
    voiceSearchBtn.addEventListener('click', () => {
      if (isListening) {
        stopVoiceSearch();
      } else {
        startVoiceSearch();
      }
    });
  }

  // Image search button
  const imageSearchBtn = document.getElementById('imageSearchBtn');
  if (imageSearchBtn) {
    imageSearchBtn.addEventListener('click', () => {
      showImageSearchModal();
    });
  }

  function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (query) {
      searchRecipes(query);
    } else {
      loadInitialRecipes();
    }
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
                <button class="btn btn-outline-warning btn-sm" onclick="addToComparisonHandler(${recipe.id})">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="me-1" viewBox="0 0 16 16">
                    <path d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.236l-5.776 2.211a.5.5 0 0 1-.448-.894l6-3zM15.802 2.102a.5.5 0 0 1 .23.564l-3 8a.5.5 0 1 1-.933-.358l3-8a.5.5 0 0 1 .703-.206zM1 11.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"/>
                  </svg>
                  Compare
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

// Advanced Search Functions
let recognition = null;
let isListening = false;

// Initialize voice search
function initVoiceSearch() {
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const searchInput = document.getElementById('searchInput');
      if (searchInput) {
        searchInput.value = transcript;
        performAdvancedSearch(transcript);
      }
      showNotification('Voice search completed!', 'success');
    };
    
    recognition.onerror = (event) => {
      console.error('Voice recognition error:', event.error);
      showNotification('Voice search error. Please try again.', 'error');
    };
    
    recognition.onend = () => {
      isListening = false;
      updateVoiceButton();
    };
  }
}

function startVoiceSearch() {
  if (!recognition) {
    initVoiceSearch();
  }
  
  if (recognition && !isListening) {
    try {
      recognition.start();
      isListening = true;
      showNotification('Listening... Speak now', 'info');
      updateVoiceButton();
    } catch (error) {
      console.error('Error starting voice search:', error);
      showNotification('Voice search not available', 'error');
    }
  }
}

function stopVoiceSearch() {
  if (recognition && isListening) {
    recognition.stop();
    isListening = false;
    updateVoiceButton();
  }
}

function updateVoiceButton() {
  const voiceBtn = document.getElementById('voiceSearchBtn');
  if (voiceBtn) {
    if (isListening) {
      voiceBtn.classList.add('btn-danger');
      voiceBtn.classList.remove('btn-outline-secondary');
      voiceBtn.title = 'Listening... Click to stop';
    } else {
      voiceBtn.classList.add('btn-outline-secondary');
      voiceBtn.classList.remove('btn-danger');
      voiceBtn.title = 'Voice Search';
    }
  }
}

// Natural language query processing
function parseNaturalLanguageQuery(query) {
  const lowerQuery = query.toLowerCase();
  const keywords = {
    highProtein: ['high protein', 'protein-rich', 'high protein', 'protein'],
    lowCarb: ['low carb', 'low-carb', 'low carb', 'keto'],
    lowCalorie: ['low calorie', 'low cal', 'light', 'under 400 calories', 'under 500 calories'],
    quick: ['quick', 'fast', 'easy', 'quick recipe'],
    healthy: ['healthy', 'nutritious', 'healthy recipe'],
    vegetarian: ['vegetarian', 'veggie', 'vegetable'],
    vegan: ['vegan', 'plant-based'],
    glutenFree: ['gluten-free', 'gluten free', 'gluten-free'],
    breakfast: ['breakfast', 'morning', 'breakfast recipe'],
    lunch: ['lunch', 'midday', 'lunch recipe'],
    dinner: ['dinner', 'evening', 'dinner recipe']
  };
  
  const criteria = {
    calories: null,
    protein: null,
    carbs: null,
    tags: [],
    mealTime: null,
    keywords: []
  };
  
  // Extract numeric values
  const calorieMatch = lowerQuery.match(/(?:under|below|less than)\s*(\d+)\s*calories?/i);
  if (calorieMatch) {
    criteria.calories = parseInt(calorieMatch[1]);
  }
  
  // Check for keyword matches
  Object.keys(keywords).forEach(key => {
    if (keywords[key].some(kw => lowerQuery.includes(kw))) {
      if (key === 'highProtein') criteria.protein = 'high';
      if (key === 'lowCarb') criteria.carbs = 'low';
      if (key === 'lowCalorie') criteria.calories = criteria.calories || 400;
      if (key === 'quick') criteria.keywords.push('quick');
      if (key === 'vegetarian') criteria.tags.push('vegetarian');
      if (key === 'vegan') criteria.tags.push('vegan');
      if (key === 'glutenFree') criteria.tags.push('gluten-free');
      if (key === 'breakfast') criteria.mealTime = 'breakfast';
      if (key === 'lunch') criteria.mealTime = 'lunch';
      if (key === 'dinner') criteria.mealTime = 'dinner';
    }
  });
  
  return criteria;
}

// Perform advanced search with natural language
async function performAdvancedSearch(query) {
  const criteria = parseNaturalLanguageQuery(query);
  const recipes = await fetchRecipes();
  
  let filtered = recipes;
  
  // Filter by calories
  if (criteria.calories) {
    filtered = filtered.filter(r => r.calories <= criteria.calories);
  }
  
  // Filter by tags
  if (criteria.tags.length > 0) {
    filtered = filtered.filter(r => 
      criteria.tags.some(tag => r.tags.includes(tag))
    );
  }
  
  // Filter by meal time
  if (criteria.mealTime) {
    filtered = filtered.filter(r => 
      r.category.toLowerCase().includes(criteria.mealTime) ||
      r.tags.includes(criteria.mealTime)
    );
  }
  
  // Basic search on remaining
  const searchTerms = query.toLowerCase().split(' ').filter(w => w.length > 2);
  if (searchTerms.length > 0) {
    filtered = filtered.filter(r => {
      const searchText = (r.title + ' ' + r.description + ' ' + r.tags.join(' ')).toLowerCase();
      return searchTerms.some(term => searchText.includes(term));
    });
  }
  
  // Display results
  const recipesGrid = document.getElementById('recipesGrid');
  if (recipesGrid) {
    const cards = generateRecipeCardsFromList(filtered);
    recipesGrid.innerHTML = cards;
    
    if (filtered.length === 0) {
      recipesGrid.innerHTML = `
        <div class="col-12 text-center py-5">
          <h5 class="text-muted">No recipes found matching "${query}"</h5>
          <p class="text-muted">Try a different search term</p>
        </div>
      `;
    }
  }
}

// Generate recipe cards from list
async function generateRecipeCardsFromList(recipes) {
  let cards = '';
  for (const recipe of recipes) {
    const healthScore = getHealthScore(recipe);
    cards += `
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-3">
              <span class="display-6">${recipe.image}</span>
              <span class="badge bg-success">${healthScore} Health Score</span>
            </div>
            <h5 class="card-title">${recipe.title}</h5>
            <p class="card-text text-muted">${recipe.description}</p>
            <div class="d-flex justify-content-between">
              <small class="text-muted">🕐 ${recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</small>
              <small class="text-muted">🔥 ${recipe.calories} cal</small>
            </div>
            <button class="btn btn-success w-100 mt-3" onclick="viewRecipe(${recipe.id})">
              View Recipe
            </button>
          </div>
        </div>
      </div>
    `;
  }
  return cards;
}

// Search recipes based on query
async function searchRecipes(query) {
  const recipesGrid = document.getElementById('recipesGrid');
  
  // Check if it's a natural language query
  if (query.includes(',') || query.match(/(high|low|under|over|quick|healthy)/i)) {
    performAdvancedSearch(query);
  } else {
    const cards = await generateRecipeCards('all', query);
    recipesGrid.innerHTML = cards;
  }
  
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

// API Configuration (moved to top of file)

// Authentication state (duplicate - removing)
// let currentUser = null; // Already declared at top of file
// let isLoggedIn = false; // Using isLoggedIn() function instead

// User management functions
function saveUser(user) {
  localStorage.setItem('currentUser', JSON.stringify(user));
  currentUser = user;
  // isLoggedIn is a function, not a variable
}

function loadUser() {
  const storedUser = localStorage.getItem('currentUser');
  if (storedUser) {
    currentUser = JSON.parse(storedUser);
    // isLoggedIn is a function, not a variable
  }
}

function logout() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('currentUser');
  currentUser = null;
  authToken = null;
  renderHomePage();
  showNotification('Logged out successfully', 'info');
}

function getUsers() {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function registerUser(username, email, password) {
  const users = getUsers();
  
  // Check if user already exists
  if (users.find(u => u.username === username || u.email === email)) {
    return { success: false, message: 'Username or email already exists' };
  }
  
  // Create new user
  const newUser = {
    id: Date.now(),
    username,
    email,
    password, // In a real app, this would be hashed
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  saveUsers(users);
  saveUser(newUser);
  
  return { success: true, message: 'Account created successfully' };
}

function loginUser(username, password) {
  const users = getUsers();
  const user = users.find(u => (u.username === username || u.email === username) && u.password === password);
  
  if (user) {
    saveUser(user);
    return { success: true, message: 'Login successful' };
  } else {
    return { success: false, message: 'Invalid username or password' };
  }
}

// Authentication Modal functions
let currentAuthAction = null;

function showAuthModal(action) {
  currentAuthAction = action;
  
  // Create modal HTML
  const modalHTML = `
    <div class="modal fade" id="authModal" tabindex="-1" aria-labelledby="authModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header border-0 pb-0">
            <h5 class="modal-title text-center w-100" id="authModalLabel">
              <div class="logo-circle mx-auto mb-3" style="width: 60px; height: 60px;">
                <span class="logo-icon" style="font-size: 30px;">🍽️</span>
              </div>
              <span class="fw-bold text-success">Sign In Required</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body px-4 pb-4">
            <p class="text-muted text-center mb-4">
              Please sign in to access ${action === 'shoppingList' ? 'your shopping list' : 'health goals and tracking'}.
            </p>
            
            <!-- Login Form -->
            <div id="loginSection">
              <form id="modalLoginForm">
                <div class="mb-3">
                  <label for="modalLoginUsername" class="form-label">Username or Email</label>
                  <input type="text" class="form-control" id="modalLoginUsername" required>
                </div>
                
                <div class="mb-3">
                  <label for="modalLoginPassword" class="form-label">Password</label>
                  <div class="input-group">
                    <input type="password" class="form-control" id="modalLoginPassword" required>
                    <button class="btn btn-outline-secondary" type="button" id="toggleModalLoginPassword">
                      <i class="fas fa-eye" id="modalLoginPasswordIcon"></i>
                    </button>
                  </div>
                </div>
                
                <button type="submit" class="btn btn-success w-100 mb-3">Sign In</button>
              </form>
              
              <div class="text-center">
                <p class="text-muted">Don't have an account? 
                  <a href="#" id="showModalRegister" class="text-success text-decoration-none fw-semibold">Sign up</a>
                </p>
              </div>
            </div>
            
            <!-- Register Form -->
            <div id="registerSection" style="display: none;">
              <form id="modalRegisterForm">
                <div class="mb-3">
                  <label for="modalRegisterUsername" class="form-label">Username</label>
                  <input type="text" class="form-control" id="modalRegisterUsername" required>
                </div>
                
                <div class="mb-3">
                  <label for="modalRegisterEmail" class="form-label">Email</label>
                  <input type="email" class="form-control" id="modalRegisterEmail" required>
                </div>
                
                <div class="mb-3">
                  <label for="modalRegisterPassword" class="form-label">Password</label>
                  <div class="input-group">
                    <input type="password" class="form-control" id="modalRegisterPassword" required>
                    <button class="btn btn-outline-secondary" type="button" id="toggleModalRegisterPassword">
                      <i class="fas fa-eye" id="modalRegisterPasswordIcon"></i>
                    </button>
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="modalConfirmPassword" class="form-label">Confirm Password</label>
                  <div class="input-group">
                    <input type="password" class="form-control" id="modalConfirmPassword" required>
                    <button class="btn btn-outline-secondary" type="button" id="toggleModalConfirmPassword">
                      <i class="fas fa-eye" id="modalConfirmPasswordIcon"></i>
                    </button>
                  </div>
                </div>
                
                <button type="submit" class="btn btn-success w-100 mb-3">Create Account</button>
              </form>
              
              <div class="text-center">
                <p class="text-muted">Already have an account? 
                  <a href="#" id="showModalLogin" class="text-success text-decoration-none fw-semibold">Sign in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Remove existing modal if any
  const existingModal = document.getElementById('authModal');
  if (existingModal) {
    existingModal.remove();
  }
  
  // Add modal to body
  document.body.insertAdjacentHTML('beforeend', modalHTML);
  
  // Show modal
  const modal = new bootstrap.Modal(document.getElementById('authModal'));
  modal.show();
  
  // Add event listeners
  setupModalEventListeners();
}

function setupModalEventListeners() {
  // Toggle between login and register
  document.getElementById('showModalRegister').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('loginSection').style.display = 'none';
    document.getElementById('registerSection').style.display = 'block';
  });
  
  document.getElementById('showModalLogin').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('registerSection').style.display = 'none';
    document.getElementById('loginSection').style.display = 'block';
  });
  
  // Password visibility toggles
  document.getElementById('toggleModalLoginPassword').addEventListener('click', () => {
    togglePasswordVisibility('modalLoginPassword', 'modalLoginPasswordIcon');
  });
  
  document.getElementById('toggleModalRegisterPassword').addEventListener('click', () => {
    togglePasswordVisibility('modalRegisterPassword', 'modalRegisterPasswordIcon');
  });
  
  document.getElementById('toggleModalConfirmPassword').addEventListener('click', () => {
    togglePasswordVisibility('modalConfirmPassword', 'modalConfirmPasswordIcon');
  });
  
  // Form submissions
  document.getElementById('modalLoginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    handleModalLogin();
  });
  
  document.getElementById('modalRegisterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    handleModalRegister();
  });
  
  // Close modal when clicking outside
  document.getElementById('authModal').addEventListener('hidden.bs.modal', () => {
    document.getElementById('authModal').remove();
  });
}

function handleModalLogin() {
  const username = document.getElementById('modalLoginUsername').value;
  const password = document.getElementById('modalLoginPassword').value;
  
  const result = loginUser(username, password);
  
  if (result.success) {
    showNotification(result.message, 'success');
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
    modal.hide();
    // Redirect to the intended page
    if (currentAuthAction === 'shoppingList') {
      renderShoppingListPage();
    } else if (currentAuthAction === 'healthGoals') {
      renderHealthGoalsPage();
    }
  } else {
    showNotification(result.message, 'danger');
  }
}

function handleModalRegister() {
  const username = document.getElementById('modalRegisterUsername').value;
  const email = document.getElementById('modalRegisterEmail').value;
  const password = document.getElementById('modalRegisterPassword').value;
  const confirmPassword = document.getElementById('modalConfirmPassword').value;
  
  if (password !== confirmPassword) {
    showNotification('Passwords do not match', 'danger');
    return;
  }
  
  if (password.length < 6) {
    showNotification('Password must be at least 6 characters', 'danger');
    return;
  }
  
  const result = registerUser(username, email, password);
  
  if (result.success) {
    showNotification(result.message, 'success');
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
    modal.hide();
    // Redirect to the intended page
    if (currentAuthAction === 'shoppingList') {
      renderShoppingListPage();
    } else if (currentAuthAction === 'healthGoals') {
      renderHealthGoalsPage();
    }
  } else {
    showNotification(result.message, 'danger');
  }
}

function togglePasswordVisibility(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);
  
  if (input.type === 'password') {
    input.type = 'text';
    icon.className = 'fas fa-eye-slash';
  } else {
    input.type = 'password';
    icon.className = 'fas fa-eye';
  }
}


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

// Health Score Explanation Functions
function getHealthScoreBreakdown(recipe) {
  const breakdown = {
    categories: [],
    total: 0,
    maxScore: 100
  };
  
  let currentScore = 0;
  
  // 1. Calorie Analysis
  const caloriesPerServing = recipe.calories / recipe.servings;
  let calorieScore = 0;
  let calorieAnalysis = '';
  if (caloriesPerServing <= 300) {
    calorieScore = 20;
    calorieAnalysis = 'Excellent: Very low calorie content';
  } else if (caloriesPerServing <= 400) {
    calorieScore = 15;
    calorieAnalysis = 'Good: Low calorie content';
  } else if (caloriesPerServing <= 500) {
    calorieScore = 10;
    calorieAnalysis = 'Fair: Moderate calorie content';
  } else if (caloriesPerServing <= 600) {
    calorieScore = 5;
    calorieAnalysis = 'Needs improvement: Higher calorie content';
  } else {
    calorieAnalysis = 'Poor: Very high calorie content';
  }
  
  breakdown.categories.push({
    name: 'Calorie Content',
    score: calorieScore,
    maxScore: 20,
    analysis: calorieAnalysis,
    tip: caloriesPerServing > 500 ? 'Reduce portion sizes or add more vegetables to lower calories' : ''
  });
  currentScore += calorieScore;
  
  // 2. Protein Content
  const proteinIngredients = recipe.ingredients.filter(ing => 
    ['chicken', 'salmon', 'beef', 'turkey', 'eggs', 'quinoa', 'lentils', 'chickpeas', 'tofu', 'nuts', 'cheese', 'yogurt'].some(protein => 
      ing.name.toLowerCase().includes(protein)
    )
  );
  let proteinScore = 0;
  let proteinAnalysis = '';
  if (proteinIngredients.length >= 2) {
    proteinScore = 20;
    proteinAnalysis = 'Excellent: Good protein sources';
  } else if (proteinIngredients.length >= 1) {
    proteinScore = 10;
    proteinAnalysis = 'Good: Some protein sources';
  } else {
    proteinAnalysis = 'Needs improvement: Add more protein sources';
  }
  
  breakdown.categories.push({
    name: 'Protein Content',
    score: proteinScore,
    maxScore: 20,
    analysis: proteinAnalysis,
    tip: proteinIngredients.length < 2 ? 'Add lean proteins like chicken, fish, beans, or tofu' : ''
  });
  currentScore += proteinScore;
  
  // 3. Vegetable Content
  const vegetableIngredients = recipe.ingredients.filter(ing => 
    ['tomato', 'lettuce', 'spinach', 'broccoli', 'carrot', 'bell-pepper', 'onion', 'garlic', 'cucumber', 'zucchini', 'mushroom', 'cauliflower', 'kale', 'avocado'].some(veg => 
      ing.name.toLowerCase().includes(veg)
    )
  );
  let vegScore = 0;
  let vegAnalysis = '';
  if (vegetableIngredients.length >= 3) {
    vegScore = 20;
    vegAnalysis = 'Excellent: Abundant vegetables';
  } else if (vegetableIngredients.length >= 2) {
    vegScore = 15;
    vegAnalysis = 'Good: Several vegetables';
  } else if (vegetableIngredients.length >= 1) {
    vegScore = 10;
    vegAnalysis = 'Fair: Some vegetables';
  } else {
    vegAnalysis = 'Needs improvement: Add more vegetables';
  }
  
  breakdown.categories.push({
    name: 'Vegetable Content',
    score: vegScore,
    maxScore: 20,
    analysis: vegAnalysis,
    tip: vegetableIngredients.length < 3 ? 'Add more vegetables like spinach, bell peppers, or broccoli' : '',
    highlights: vegetableIngredients
  });
  currentScore += vegScore;
  
  // 4. Whole Grains
  const wholeGrainIngredients = recipe.ingredients.filter(ing => 
    ['quinoa', 'brown rice', 'oats', 'whole wheat', 'barley'].some(grain => 
      ing.name.toLowerCase().includes(grain)
    )
  );
  let grainScore = 0;
  let grainAnalysis = '';
  if (wholeGrainIngredients.length >= 1) {
    grainScore = 10;
    grainAnalysis = 'Good: Contains whole grains';
  } else {
    grainAnalysis = 'Could add whole grains for better nutrition';
  }
  
  breakdown.categories.push({
    name: 'Whole Grains',
    score: grainScore,
    maxScore: 10,
    analysis: grainAnalysis,
    tip: wholeGrainIngredients.length === 0 ? 'Use whole grain options like quinoa or brown rice' : ''
  });
  currentScore += grainScore;
  
  // 5. Processing Level (simplified)
  let processingScore = 15;
  let processingAnalysis = 'Good: Mostly fresh ingredients';
  if (recipe.ingredients.some(ing => ['canned', 'processed', 'instant'].some(word => 
    ing.name.toLowerCase().includes(word)
  ))) {
    processingScore = 5;
    processingAnalysis = 'Contains processed ingredients';
  }
  
  breakdown.categories.push({
    name: 'Processing Level',
    score: processingScore,
    maxScore: 15,
    analysis: processingAnalysis,
    tip: 'Prefer fresh, minimally processed ingredients'
  });
  currentScore += processingScore;
  
  breakdown.total = currentScore;
  
  // Add detailed nutrient analysis
  breakdown.nutrientAnalysis = getNutrientAnalysis(recipe);
  
  return breakdown;
}

function getNutrientAnalysis(recipe) {
  const analysis = {
    protein: {
      present: false,
      amount: 0,
      sources: [],
      dailyValue: '0%'
    },
    fiber: {
      present: false,
      amount: 0,
      sources: [],
      dailyValue: '0%'
    },
    vitamins: {
      present: [],
      sources: []
    },
    minerals: {
      present: [],
      sources: []
    },
    sugar: {
      warning: false,
      sources: [],
      message: ''
    },
    sodium: {
      warning: false,
      sources: [],
      message: ''
    },
    ingredientQuality: {
      score: 0,
      freshIngredients: 0,
      processedIngredients: 0,
      message: ''
    }
  };
  
  // Analyze protein
  const proteinSources = recipe.ingredients.filter(ing => 
    ['chicken', 'salmon', 'beef', 'turkey', 'eggs', 'quinoa', 'lentils', 'chickpeas', 'tofu', 'nuts', 'cheese', 'yogurt'].some(protein => 
      ing.name.toLowerCase().includes(protein)
    )
  );
  if (proteinSources.length > 0) {
    analysis.protein.present = true;
    analysis.protein.amount = proteinSources.length * 15; // Approximate
    analysis.protein.sources = proteinSources.map(ing => ing.name);
    analysis.protein.dailyValue = Math.min((proteinSources.length * 15) / 50 * 100, 100).toFixed(0) + '%';
  }
  
  // Analyze fiber
  const fiberSources = recipe.ingredients.filter(ing => 
    ['broccoli', 'spinach', 'carrot', 'cauliflower', 'quinoa', 'oats', 'lentils', 'chickpeas', 'black-beans', 'whole wheat'].some(fiber => 
      ing.name.toLowerCase().includes(fiber)
    )
  );
  if (fiberSources.length > 0) {
    analysis.fiber.present = true;
    analysis.fiber.amount = fiberSources.length * 3; // Approximate
    analysis.fiber.sources = fiberSources.map(ing => ing.name);
    analysis.fiber.dailyValue = Math.min((fiberSources.length * 3) / 25 * 100, 100).toFixed(0) + '%';
  }
  
  // Analyze vitamins and minerals
  const vitaminSources = recipe.ingredients.filter(ing => 
    ['broccoli', 'spinach', 'carrot', 'bell-pepper', 'tomato', 'citrus', 'leafy-green'].some(vitamin => 
      ing.name.toLowerCase().includes(vitamin)
    )
  );
  analysis.vitamins.sources = vitaminSources.map(ing => ing.name);
  analysis.vitamins.present = ['Vitamin C', 'Vitamin A', 'Vitamin K'];
  
  const mineralSources = recipe.ingredients.filter(ing => 
    ['spinach', 'nuts', 'seeds', 'quinoa', 'lentils'].some(mineral => 
      ing.name.toLowerCase().includes(mineral)
    )
  );
  analysis.minerals.sources = mineralSources.map(ing => ing.name);
  analysis.minerals.present = ['Iron', 'Calcium', 'Magnesium'];
  
  // Check for high sugar/sodium
  const sugaryIngredients = recipe.ingredients.filter(ing => 
    ['sugar', 'honey', 'syrup', 'sweetener'].some(sugar => 
      ing.name.toLowerCase().includes(sugar)
    )
  );
  if (sugaryIngredients.length > 0) {
    analysis.sugar.warning = sugaryIngredients.length > 2;
    analysis.sugar.sources = sugaryIngredients.map(ing => ing.name);
    analysis.sugar.message = sugaryIngredients.length > 2 ? 'High sugar content warning' : 'Moderate sugar content';
  }
  
  const saltyIngredients = recipe.ingredients.filter(ing => 
    ['salt', 'soy sauce', 'broth', 'canned'].some(salt => 
      ing.name.toLowerCase().includes(salt)
    )
  );
  if (saltyIngredients.length > 0) {
    analysis.sodium.warning = saltyIngredients.length > 1;
    analysis.sodium.sources = saltyIngredients.map(ing => ing.name);
    analysis.sodium.message = saltyIngredients.length > 1 ? 'High sodium warning' : 'Moderate sodium content';
  }
  
  // Analyze ingredient quality
  const freshIngredients = recipe.ingredients.filter(ing => 
    !['canned', 'processed', 'instant', 'packaged'].some(processed => 
      ing.name.toLowerCase().includes(processed)
    )
  );
  const processedIngredients = recipe.ingredients.filter(ing => 
    ['canned', 'processed', 'instant', 'packaged'].some(processed => 
      ing.name.toLowerCase().includes(processed)
    )
  );
  
  analysis.ingredientQuality.freshIngredients = freshIngredients.length;
  analysis.ingredientQuality.processedIngredients = processedIngredients.length;
  analysis.ingredientQuality.score = (freshIngredients.length / recipe.ingredients.length) * 100;
  
  if (processedIngredients.length === 0) {
    analysis.ingredientQuality.message = 'Excellent: All fresh ingredients';
  } else if (processedIngredients.length <= 2) {
    analysis.ingredientQuality.message = 'Good: Mostly fresh ingredients';
  } else {
    analysis.ingredientQuality.message = 'Contains processed ingredients';
  }
  
  return analysis;
}

function getHealthScoreTips(recipe, breakdown) {
  const tips = [];
  
  // Analyze score
  if (breakdown.total < 50) {
    tips.push({
      priority: 'high',
      message: 'This recipe has a low health score. Consider significant improvements.',
      suggestions: []
    });
  } else if (breakdown.total < 70) {
    tips.push({
      priority: 'medium',
      message: 'This recipe is decent but could be improved.',
      suggestions: []
    });
  } else {
    tips.push({
      priority: 'low',
      message: 'This recipe has a good health score!',
      suggestions: []
    });
  }
  
  // Collect specific improvement tips
  const improvements = [];
  breakdown.categories.forEach(category => {
    if (category.score < category.maxScore * 0.5 && category.tip) {
      improvements.push(category.tip);
    }
  });
  
  if (improvements.length > 0) {
    tips.push({
      priority: 'specific',
      message: 'Quick improvements:',
      suggestions: improvements
    });
  }
  
  // Overall tips
  tips.push({
    priority: 'general',
    message: 'General tips to boost health score:',
    suggestions: [
      'Add more vegetables (aim for 2-3 different types)',
      'Use whole grains instead of refined grains',
      'Include lean protein sources',
      'Limit added sugars and sodium',
      'Use healthy fats (olive oil, avocado)'
    ]
  });
  
  return tips;
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
  const healthBreakdown = getHealthScoreBreakdown(recipe);
  const healthTips = getHealthScoreTips(recipe, healthBreakdown);
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="navHomeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <button class="btn btn-outline-success px-4" id="homeBtn">Home</button>
        <button class="btn btn-outline-secondary px-4 ms-2" id="backBtn">Back to Recipes</button>
        <div class="d-flex gap-2 ms-auto">
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
      
      <!-- Health Score Explanation -->
      <button class="btn btn-sm btn-outline-${healthLevel.color} mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#healthExplanation" aria-expanded="false">
        📊 Understanding Health Score
      </button>

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

      <!-- Recipe Adaptation Tool -->
      <div class="row mb-4">
        <div class="col-12">
          <div class="card border-warning shadow-sm">
            <div class="card-header bg-warning text-dark">
              <h5 class="mb-0">🔧 Adapt This Recipe</h5>
            </div>
            <div class="card-body">
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label"><strong>Scale Servings</strong></label>
                  <div class="input-group">
                    <span class="input-group-text">Serves</span>
                    <input type="number" class="form-control" id="scaleServings" value="${recipe.servings}" min="1" max="20" onchange="adaptRecipeServings(${recipe.id}, this.value)">
                    <span class="input-group-text">people</span>
                  </div>
                  <small class="text-muted">Ingredients and cooking times will automatically adjust</small>
                </div>
                <div class="col-md-6">
                  <label class="form-label"><strong>Dietary Adaptations</strong></label>
                  <div class="btn-group-vertical w-100" role="group">
                    <button class="btn btn-outline-success btn-sm mb-2" onclick="adaptRecipeToDiet(${recipe.id}, 'vegan')">
                      🌱 Make Vegan
                    </button>
                    <button class="btn btn-outline-success btn-sm mb-2" onclick="adaptRecipeToDiet(${recipe.id}, 'keto')">
                      🥑 Make Keto-Friendly
                    </button>
                    <button class="btn btn-outline-success btn-sm" onclick="adaptRecipeToDiet(${recipe.id}, 'gluten-free')">
                      🌾 Make Gluten-Free
                    </button>
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
                
                <!-- Health Score Breakdown -->
                <div class="collapse" id="healthExplanation">
                  <div class="card card-body bg-light mt-3">
                    <h5 class="mb-3">📊 Health Score Breakdown</h5>
                    
                    <!-- Detailed Categories -->
                    ${healthBreakdown.categories.map(category => `
                      <div class="mb-3 pb-3 border-bottom">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                          <strong>${category.name}</strong>
                          <span class="badge bg-${category.score >= category.maxScore * 0.7 ? 'success' : category.score >= category.maxScore * 0.4 ? 'warning' : 'danger'}">
                            ${category.score}/${category.maxScore}
                          </span>
                        </div>
                        <p class="mb-2 small text-muted">${category.analysis}</p>
                        ${category.tip ? `
                          <div class="alert alert-info mb-0 py-2">
                            <small><strong>💡 Tip:</strong> ${category.tip}</small>
                          </div>
                        ` : ''}
                        ${category.highlights && category.highlights.length > 0 ? `
                          <div class="mt-2">
                            <small><strong>Highlights:</strong> ${category.highlights.map(h => h.name).join(', ')}</small>
                          </div>
                        ` : ''}
                      </div>
                    `).join('')}
                    
                    <!-- Tips Section -->
                    <div class="mt-4">
                      <h6>🎯 Tips to Improve This Recipe</h6>
                      ${healthTips.map(tipGroup => `
                        <div class="alert alert-${tipGroup.priority === 'high' ? 'danger' : tipGroup.priority === 'medium' ? 'warning' : tipGroup.priority === 'general' ? 'info' : 'secondary'} mt-2">
                          <strong>${tipGroup.message}</strong>
                          ${tipGroup.suggestions.length > 0 ? `
                            <ul class="mb-0 mt-2">
                              ${tipGroup.suggestions.map(s => `<li><small>${s}</small></li>`).join('')}
                            </ul>
                          ` : ''}
                        </div>
                      `).join('')}
                    </div>
                    
                    <!-- Nutrient Analysis -->
                    <div class="card bg-white mt-3">
                      <div class="card-body">
                        <h6 class="card-title mb-3">🥗 Nutrient Analysis</h6>
                        
                        <!-- Protein & Fiber -->
                        <div class="row mb-3">
                          <div class="col-md-6">
                            <h6>💪 Protein</h6>
                            ${healthBreakdown.nutrientAnalysis.protein.present ? `
                              <p class="small mb-1">
                                <strong>Sources:</strong> ${healthBreakdown.nutrientAnalysis.protein.sources.join(', ') || 'Protein-rich foods'}
                              </p>
                              <div class="progress mb-2">
                                <div class="progress-bar bg-success" style="width: ${healthBreakdown.nutrientAnalysis.protein.dailyValue}"></div>
                              </div>
                              <small class="text-muted">${healthBreakdown.nutrientAnalysis.protein.dailyValue} of daily value</small>
                            ` : '<p class="small text-muted">Add protein sources like chicken, fish, beans, or tofu</p>'}
                          </div>
                          <div class="col-md-6">
                            <h6>🌾 Fiber</h6>
                            ${healthBreakdown.nutrientAnalysis.fiber.present ? `
                              <p class="small mb-1">
                                <strong>Sources:</strong> ${healthBreakdown.nutrientAnalysis.fiber.sources.slice(0, 3).join(', ')}
                              </p>
                              <div class="progress mb-2">
                                <div class="progress-bar bg-success" style="width: ${healthBreakdown.nutrientAnalysis.fiber.dailyValue}"></div>
                              </div>
                              <small class="text-muted">${healthBreakdown.nutrientAnalysis.fiber.dailyValue} of daily value</small>
                            ` : '<p class="small text-muted">Add fiber sources like vegetables, whole grains, or legumes</p>'}
                          </div>
                        </div>
                        
                        <!-- Vitamins & Minerals -->
                        <div class="row mb-3">
                          <div class="col-md-6">
                            <h6>🍊 Vitamins</h6>
                            ${healthBreakdown.nutrientAnalysis.vitamins.present.length > 0 ? `
                              <p class="small mb-1">
                                <strong>Present:</strong> ${healthBreakdown.nutrientAnalysis.vitamins.present.join(', ')}
                              </p>
                              <small class="text-muted">From: ${healthBreakdown.nutrientAnalysis.vitamins.sources.slice(0, 3).join(', ')}</small>
                            ` : '<p class="small text-muted">Add fresh vegetables for vitamins</p>'}
                          </div>
                          <div class="col-md-6">
                            <h6>⚙️ Minerals</h6>
                            ${healthBreakdown.nutrientAnalysis.minerals.present.length > 0 ? `
                              <p class="small mb-1">
                                <strong>Present:</strong> ${healthBreakdown.nutrientAnalysis.minerals.present.join(', ')}
                              </p>
                              <small class="text-muted">From: ${healthBreakdown.nutrientAnalysis.minerals.sources.slice(0, 3).join(', ')}</small>
                            ` : '<p class="small text-muted">Add nuts, seeds, or leafy greens for minerals</p>'}
                          </div>
                        </div>
                        
                        <!-- Warnings -->
                        ${healthBreakdown.nutrientAnalysis.sugar.warning || healthBreakdown.nutrientAnalysis.sodium.warning ? `
                          <div class="alert alert-warning mb-2">
                            <h6>⚠️ Nutrition Warnings</h6>
                            ${healthBreakdown.nutrientAnalysis.sugar.warning ? `
                              <p class="mb-1 small"><strong>Sugar:</strong> ${healthBreakdown.nutrientAnalysis.sugar.message}</p>
                              <small class="text-muted">Sources: ${healthBreakdown.nutrientAnalysis.sugar.sources.join(', ')}</small>
                            ` : ''}
                            ${healthBreakdown.nutrientAnalysis.sodium.warning ? `
                              <p class="mb-1 small mt-2"><strong>Sodium:</strong> ${healthBreakdown.nutrientAnalysis.sodium.message}</p>
                              <small class="text-muted">Sources: ${healthBreakdown.nutrientAnalysis.sodium.sources.join(', ')}</small>
                            ` : ''}
                          </div>
                        ` : ''}
                        
                        <!-- Ingredient Quality -->
                        <div class="mt-3">
                          <h6>🌟 Ingredient Quality</h6>
                          <div class="progress mb-2" style="height: 20px;">
                            <div class="progress-bar bg-${healthBreakdown.nutrientAnalysis.ingredientQuality.score >= 80 ? 'success' : healthBreakdown.nutrientAnalysis.ingredientQuality.score >= 60 ? 'warning' : 'danger'}" 
                                 style="width: ${healthBreakdown.nutrientAnalysis.ingredientQuality.score}%"></div>
                          </div>
                          <p class="small mb-1">${healthBreakdown.nutrientAnalysis.ingredientQuality.message}</p>
                          <small class="text-muted">
                            Fresh: ${healthBreakdown.nutrientAnalysis.ingredientQuality.freshIngredients} | 
                            Processed: ${healthBreakdown.nutrientAnalysis.ingredientQuality.processedIngredients}
                          </small>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Total Score -->
                    <div class="card bg-white mt-3">
                      <div class="card-body">
                        <h6 class="card-title">Overall Health Score</h6>
                        <div class="display-6 fw-bold text-${healthLevel.color}">${healthBreakdown.total}/100</div>
                        <small class="text-muted">Based on nutritional quality, ingredient composition, and processing level</small>
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
  
  // Log recipe as consumed when viewing
  logRecipeConsumed(recipe.id, healthScore);
}

// Recipe Adaptation Functions
async function adaptRecipeServings(recipeId, newServings) {
  const recipe = await fetchRecipeById(recipeId);
  if (!recipe) return;
  
  const scaleFactor = newServings / recipe.servings;
  
  // Update the displayed servings
  document.getElementById('scaleServings').value = newServings;
  
  // Scale ingredients
  const scaledIngredients = recipe.ingredients.map(ing => ({
    ...ing,
    amount: (parseFloat(ing.amount) * scaleFactor).toFixed(2),
    scaledAmount: parseFloat(ing.amount) * scaleFactor
  }));
  
  // Update displayed ingredients
  updateAdaptedIngredients(scaledIngredients);
  
  showNotification(`Recipe scaled to ${newServings} servings!`, 'success');
}

function updateAdaptedIngredients(scaledIngredients) {
  const ingredientsList = document.getElementById('ingredientsList');
  if (!ingredientsList) return;
  
  // Update ingredient amounts in the display
  scaledIngredients.forEach((ing, index) => {
    const ingredientElement = ingredientsList.children[index];
    if (ingredientElement) {
      const amountElement = ingredientElement.querySelector('.fw-bold');
      if (amountElement) {
        amountElement.textContent = `${parseFloat(ing.amount)} ${ing.unit}`;
      }
    }
  });
}

async function adaptRecipeToDiet(recipeId, dietType) {
  const recipe = await fetchRecipeById(recipeId);
  if (!recipe) return;
  
  const substitutions = [];
  const adaptedIngredients = [];
  
  recipe.ingredients.forEach(ingredient => {
    const subs = getIngredientSubstitutions(ingredient.name);
    let adaptedIngredient = { ...ingredient };
    
    if (dietType === 'vegan') {
      // Replace dairy and meat with plant-based options
      const veganSub = subs.find(s => 
        s.name.toLowerCase().includes('almond') ||
        s.name.toLowerCase().includes('coconut') ||
        s.name.toLowerCase().includes('tofu') ||
        s.name.toLowerCase().includes('nutritional yeast')
      );
      if (veganSub) {
        adaptedIngredient = {
          ...ingredient,
          name: veganSub.name,
          notes: `Replaces ${ingredient.name} (${veganSub.reason})`
        };
        substitutions.push({
          original: ingredient.name,
          replacement: veganSub.name,
          reason: veganSub.reason
        });
      }
    } else if (dietType === 'keto') {
      // Replace high-carb ingredients
      const ketoSub = subs.find(s => 
        !s.name.toLowerCase().includes('bread') &&
        !s.name.toLowerCase().includes('rice') &&
        !s.name.toLowerCase().includes('pasta')
      );
      if (ketoSub && ingredient.name.toLowerCase().match(/(bread|rice|pasta|flour)/)) {
        adaptedIngredient = {
          ...ingredient,
          name: ketoSub.name,
          notes: `Keto-friendly alternative to ${ingredient.name}`
        };
        substitutions.push({
          original: ingredient.name,
          replacement: ketoSub.name,
          reason: 'Low-carb option'
        });
      }
    } else if (dietType === 'gluten-free') {
      // Replace wheat products
      const gfSub = subs.find(s => 
        !s.name.toLowerCase().includes('wheat') &&
        !s.name.toLowerCase().includes('flour')
      );
      if (gfSub && ingredient.name.toLowerCase().match(/(flour|bread|wheat)/)) {
        adaptedIngredient = {
          ...ingredient,
          name: gfSub.name,
          notes: `Gluten-free alternative to ${ingredient.name}`
        };
        substitutions.push({
          original: ingredient.name,
          replacement: gfSub.name,
          reason: 'Gluten-free option'
        });
      }
    }
    
    adaptedIngredients.push(adaptedIngredient);
  });
  
  // Update displayed ingredients
  const ingredientsList = document.getElementById('ingredientsList');
  if (ingredientsList) {
    ingredientsList.innerHTML = adaptedIngredients.map((ing, index) => `
      <li class="mb-4 pb-3 border-bottom">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <div class="flex-grow-1">
            <strong class="text-success">${ing.name}</strong>
            ${ing.notes ? `<br><small class="text-info"><em>${ing.notes}</em></small>` : ''}
          </div>
          <div class="text-end">
            <span class="fw-bold">${ing.amount}</span>
            <small class="text-muted">${ing.unit}</small>
          </div>
        </div>
      </li>
    `).join('');
  }
  
  if (substitutions.length > 0) {
    showNotification(`Recipe adapted to ${dietType}! ${substitutions.length} ingredient(s) substituted.`, 'success');
  } else {
    showNotification(`Recipe is already ${dietType}-friendly!`, 'info');
  }
}

// Make functions globally available
window.adaptRecipeServings = adaptRecipeServings;
window.adaptRecipeToDiet = adaptRecipeToDiet;

// Shopping List Management
let selectedRecipes = [];
let shoppingList = [];

// Add recipe to shopping list
async function addToShoppingList(recipeId) {
  try {
    // Convert to number if it's a string
    const numericId = typeof recipeId === 'string' ? parseInt(recipeId) : recipeId;
    
    // Check if already added
    if (selectedRecipes.find(r => r.id === numericId)) {
      showNotification('Recipe already added to shopping list!', 'warning');
      return;
    }
    
    // First check hardcoded recipes (faster)
    const hardcodedRecipes = getHardcodedRecipes();
    let recipe = hardcodedRecipes.find(r => r.id === numericId);
    
    // If not found in hardcoded recipes, try API
    if (!recipe) {
      recipe = await fetchRecipeById(numericId);
    }
    
    if (!recipe) {
      showNotification('Recipe not found', 'error');
      return;
    }
    
    // Validate recipe has ingredients before adding
    if (!recipe.ingredients || !Array.isArray(recipe.ingredients) || recipe.ingredients.length === 0) {
      showNotification('Recipe has no ingredients to add to shopping list', 'error');
      return;
    }
    
    // Add recipe to selected recipes
    selectedRecipes.push(recipe);
    
    // Update shopping list and save data
    updateShoppingList();
    
    // Verify the update worked
    if (shoppingList.length === 0) {
      selectedRecipes = selectedRecipes.filter(r => r.id !== numericId);
      showNotification('Failed to update shopping list', 'error');
      return;
    }
    
    showNotification(`${recipe.title} added to shopping list!`, 'success');
  } catch (error) {
    console.error('Error adding recipe to shopping list:', error);
    showNotification('Failed to add recipe to shopping list', 'error');
    
    // Remove recipe from selectedRecipes if it was added but failed
    const numericId = typeof recipeId === 'string' ? parseInt(recipeId) : recipeId;
    selectedRecipes = selectedRecipes.filter(r => r.id !== numericId);
  }
}

// Make function globally available
window.addToShoppingList = addToShoppingList;

// Test function to verify shopping list functionality
function testShoppingList() {
  console.log('Testing shopping list functionality...');
  console.log('selectedRecipes:', selectedRecipes);
  console.log('shoppingList:', shoppingList);
  console.log('getHardcodedRecipes count:', getHardcodedRecipes().length);
  console.log('showNotification function:', typeof showNotification);
  
  // Test adding a recipe
  if (getHardcodedRecipes().length > 0) {
    const testRecipe = getHardcodedRecipes()[0];
    console.log('Testing with recipe:', testRecipe.title, 'ID:', testRecipe.id);
    addToShoppingList(testRecipe.id);
  }
}

// Quick fix function to regenerate shopping list
function regenerateShoppingList() {
  console.log('Regenerating shopping list...');
  console.log('Current selectedRecipes:', selectedRecipes.length);
  
  if (selectedRecipes.length > 0) {
    updateShoppingList();
    console.log('New shoppingList:', shoppingList.length);
    
    // Re-render the page
    if (document.getElementById('clearListBtn')) {
      renderShoppingListPage();
    }
    
    showNotification('Shopping list regenerated!', 'success');
  } else {
    showNotification('No recipes selected to regenerate', 'warning');
  }
}

// Comprehensive debugging function for shopping list issues
function debugShoppingListIssue() {
  console.log('=== SHOPPING LIST DEBUG REPORT ===');
  
  // Check localStorage
  console.log('1. localStorage check:');
  console.log('  selectedRecipes:', localStorage.getItem('selectedRecipes'));
  console.log('  shoppingList:', localStorage.getItem('shoppingList'));
  
  // Check current state
  console.log('2. Current state:');
  console.log('  selectedRecipes array:', selectedRecipes);
  console.log('  shoppingList array:', shoppingList);
  console.log('  selectedRecipes.length:', selectedRecipes.length);
  console.log('  shoppingList.length:', shoppingList.length);
  
  // Check hardcoded recipes
  console.log('3. Hardcoded recipes:');
  const hardcoded = getHardcodedRecipes();
  console.log('  count:', hardcoded.length);
  console.log('  first recipe:', hardcoded[0]);
  
  // Test adding a recipe
  if (hardcoded.length > 0) {
    console.log('4. Testing addToShoppingList with first recipe:');
    const testRecipe = hardcoded[0];
    console.log('  Recipe ID:', testRecipe.id);
    console.log('  Recipe title:', testRecipe.title);
    console.log('  Recipe ingredients:', testRecipe.ingredients);
    
    // Test generateShoppingList
    const testList = generateShoppingList([testRecipe]);
    console.log('  Generated shopping list:', testList);
    console.log('  Generated list length:', testList.length);
  }
  
  // Check for corruption
  console.log('5. Corruption check:');
  checkAndFixShoppingListData();
  
  console.log('=== END DEBUG REPORT ===');
}

// Make function globally available
window.debugShoppingListIssue = debugShoppingListIssue;

// Clear all shopping list data
function clearShoppingList() {
  console.log('Clearing shopping list...');
  console.log('Before clear - selectedRecipes:', selectedRecipes.length);
  console.log('Before clear - shoppingList:', shoppingList.length);
  
  selectedRecipes = [];
  shoppingList = [];
  
  // Clear from localStorage
  localStorage.removeItem('selectedRecipes');
  localStorage.removeItem('shoppingList');
  
  console.log('After clear - selectedRecipes:', selectedRecipes.length);
  console.log('After clear - shoppingList:', shoppingList.length);
  
  showNotification('Shopping list cleared!', 'info');
  
  // Re-render the shopping list page
  if (document.getElementById('clearListBtn')) {
    renderShoppingListPage();
  }
}

// Check and fix corrupted shopping list data
function checkAndFixShoppingListData() {
  console.log('Checking for corrupted shopping list data...');
  
  try {
    const savedRecipes = localStorage.getItem('selectedRecipes');
    const savedList = localStorage.getItem('shoppingList');
    
    let needsFix = false;
    
    // Check selectedRecipes
    if (savedRecipes) {
      try {
        const parsed = JSON.parse(savedRecipes);
        if (!Array.isArray(parsed)) {
          console.warn('selectedRecipes is not an array, fixing...');
          localStorage.removeItem('selectedRecipes');
          needsFix = true;
        }
      } catch (e) {
        console.warn('selectedRecipes JSON is corrupted, fixing...');
        localStorage.removeItem('selectedRecipes');
        needsFix = true;
      }
    }
    
    // Check shoppingList
    if (savedList) {
      try {
        const parsed = JSON.parse(savedList);
        if (!Array.isArray(parsed)) {
          console.warn('shoppingList is not an array, fixing...');
          localStorage.removeItem('shoppingList');
          needsFix = true;
        }
      } catch (e) {
        console.warn('shoppingList JSON is corrupted, fixing...');
        localStorage.removeItem('shoppingList');
        needsFix = true;
      }
    }
    
    if (needsFix) {
      console.log('Fixed corrupted data, reloading...');
      loadShoppingList();
      showNotification('Fixed corrupted shopping list data', 'info');
    }
    
    return needsFix;
  } catch (error) {
    console.error('Error checking shopping list data:', error);
    return false;
  }
}

// Make function globally available
window.checkAndFixShoppingListData = checkAndFixShoppingListData;

// Remove recipe from shopping list
function removeFromShoppingList(recipeId) {
  selectedRecipes = selectedRecipes.filter(r => r.id !== recipeId);
  updateShoppingList();
  showNotification('Recipe removed from shopping list', 'info');
  
  // Re-render the shopping list page to update the UI
  if (document.getElementById('clearListBtn')) {
    renderShoppingListPage();
  }
}

// Make function globally available
window.removeFromShoppingList = removeFromShoppingList;

// Update shopping list data
function updateShoppingList() {
  console.log('updateShoppingList called with selectedRecipes:', selectedRecipes.length);
  
  try {
    shoppingList = generateShoppingList(selectedRecipes);
    console.log('Generated shoppingList:', shoppingList.length, 'ingredients');
    
    // Save data and handle any errors
    saveShoppingListData();
    
  } catch (error) {
    console.error('Error in updateShoppingList:', error);
    // Don't show notification here as it will be handled by calling function
    throw error;
  }
}

// Generate shopping list from selected recipes
function generateShoppingList(recipes) {
  console.log('generateShoppingList called with recipes:', recipes);
  const ingredientMap = new Map();
  
  if (!recipes || recipes.length === 0) {
    console.log('No recipes provided to generateShoppingList');
    return [];
  }
  
  recipes.forEach(recipe => {
    console.log('Processing recipe:', recipe.title, 'ingredients:', recipe.ingredients);
    
    // Check if recipe has ingredients array
    if (!recipe.ingredients || !Array.isArray(recipe.ingredients)) {
      console.warn('Recipe missing ingredients:', recipe.title);
      return;
    }
    
    recipe.ingredients.forEach(ingredient => {
      // Validate ingredient has required fields
      if (!ingredient || !ingredient.name) {
        console.warn('Invalid ingredient:', ingredient);
        return;
      }
      
      const key = ingredient.name.toLowerCase();
      if (ingredientMap.has(key)) {
        const existing = ingredientMap.get(key);
        existing.recipes.push(recipe.title);
        // Simple quantity aggregation (could be enhanced with proper unit conversion)
        const existingAmount = parseFloat(existing.amount) || 0;
        const newAmount = parseFloat(ingredient.amount) || 0;
        existing.totalAmount = (existingAmount + newAmount).toString();
      } else {
        const storeInfo = getStoreLocation(ingredient.name);
        ingredientMap.set(key, {
          name: ingredient.name,
          amount: ingredient.amount || '',
          unit: ingredient.unit || '',
          notes: ingredient.notes || '',
          recipes: [recipe.title],
          totalAmount: ingredient.amount || '',
          storeLocation: storeInfo.section,
          stores: storeInfo.stores
        });
      }
    });
  });
  
  const result = Array.from(ingredientMap.values()).sort((a, b) => a.storeLocation.localeCompare(b.storeLocation));
  console.log('Generated shopping list with', result.length, 'ingredients');
  return result;
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
  // Create notification element with enhanced styling
  const notification = document.createElement('div');
  const icons = {
    'success': '✓',
    'info': 'ℹ',
    'warning': '⚠',
    'danger': '✕'
  };
  
  notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
  notification.style.cssText = `
    top: 20px; 
    right: 20px; 
    z-index: 9999; 
    min-width: 300px; 
    max-width: 400px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    border: none;
    border-radius: 12px;
    animation: fadeIn 0.3s ease-out;
  `;
  
  notification.innerHTML = `
    <div class="d-flex align-items-center">
      <span style="font-size: 1.5rem; margin-right: 10px;">${icons[type] || icons['info']}</span>
      <span style="flex: 1;">${message}</span>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = 'fadeOut 0.3s ease-out';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }
  }, 5000);
}

// Smart Notification System
let smartNotificationQueue = [];
let activeNotifications = [];

// Initialize Smart Notifications
function initSmartNotifications() {
  // Load user preferences
  const settings = getNotificationSettings();
  
  // Check for scheduled notifications
  checkMealReminders();
  checkPrepTimeAlerts();
  checkWeeklyPlanningPrompts();
  
  // Set up recurring checks
  setInterval(() => {
    checkMealReminders();
    checkPrepTimeAlerts();
  }, 60000); // Check every minute
  
  // Weekly planning check (once per day)
  setInterval(() => {
    checkWeeklyPlanningPrompts();
  }, 24 * 60 * 60 * 1000); // Check once per day
  
  console.log('Smart notifications initialized');
}

// Meal Reminders
function checkMealReminders() {
  if (!isLoggedIn()) return;
  
  const now = new Date();
  const currentHour = now.getHours();
  
  // Breakfast reminder: 7-8 AM
  if (currentHour === 7) {
    const today = now.toISOString().split('T')[0];
    const mealPlan = loadWeeklyMealPlanFromStorage();
    
    if (mealPlan[today] && mealPlan[today].breakfast) {
      showSmartNotification({
        type: 'meal-reminder',
        title: '🍳 Breakfast Time!',
        message: 'Your planned breakfast is ready to prepare.',
        action: 'View Recipe',
        icon: '🍳',
        priority: 'high'
      });
    }
  }
  
  // Lunch reminder: 11:30 AM - 12:30 PM
  if (currentHour === 12) {
    const today = now.toISOString().split('T')[0];
    const mealPlan = loadWeeklyMealPlanFromStorage();
    
    if (mealPlan[today] && mealPlan[today].lunch) {
      showSmartNotification({
        type: 'meal-reminder',
        title: '🥗 Lunch Time!',
        message: 'Time to prepare your lunch.',
        action: 'View Recipe',
        icon: '🥗',
        priority: 'medium'
      });
    }
  }
  
  // Dinner reminder: 5:30 PM - 6:30 PM
  if (currentHour === 18) {
    const today = now.toISOString().split('T')[0];
    const mealPlan = loadWeeklyMealPlanFromStorage();
    
    if (mealPlan[today] && mealPlan[today].dinner) {
      showSmartNotification({
        type: 'meal-reminder',
        title: '🍽️ Dinner Time!',
        message: 'Your dinner awaits!',
        action: 'View Recipe',
        icon: '🍽️',
        priority: 'high'
      });
    }
  }
}

// Prep Time Alerts
function checkPrepTimeAlerts() {
  if (!isLoggedIn()) return;
  
  const today = new Date().toISOString().split('T')[0];
  const mealPlan = loadWeeklyMealPlanFromStorage();
  
  if (mealPlan[today]) {
    Object.keys(mealPlan[today]).forEach(async mealType => {
      const recipes = mealPlan[today][mealType];
      if (recipes && recipes.length > 0) {
        for (const recipeId of recipes) {
          const recipe = await fetchRecipeById(recipeId);
          if (recipe) {
            const prepTime = (recipe.prepTimeMinutes || 0) + (recipe.cookTimeMinutes || 0);
            
            // Alert 1 hour before meal time
            const mealTimes = { breakfast: 8, lunch: 12, dinner: 18, snack: 15 };
            const mealTime = mealTimes[mealType];
            
            if (mealTime) {
              const currentHour = new Date().getHours();
              const hoursBefore = mealTime - currentHour;
              
              if (hoursBefore === 1 && prepTime > 30) {
                showSmartNotification({
                  type: 'prep-alert',
                  title: '⏰ Prep Time Alert',
                  message: `${recipe.title} needs ${prepTime} minutes to prepare. Start now?`,
                  action: 'View Recipe',
                  icon: '⏰',
                  priority: 'high',
                  data: { recipeId }
                });
              }
            }
          }
        }
      }
    });
  }
}

// Shopping List Updates
function checkShoppingListUpdates() {
  const shoppingList = loadShoppingListFromStorage();
  
  if (shoppingList && shoppingList.length > 0) {
    // Check if items need to be added based on meal plan
    const needsUpdate = checkIfShoppingListNeedsUpdate();
    
    if (needsUpdate) {
      showSmartNotification({
        type: 'shopping-update',
        title: '🛒 Shopping List Update',
        message: 'New items added from your meal plan.',
        action: 'View List',
        icon: '🛒',
        priority: 'low'
      });
    }
  }
}

// Weekly Planning Prompts
function checkWeeklyPlanningPrompts() {
  if (!isLoggedIn()) return;
  
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = now.getHours();
  
  // Prompt on Sunday evening for next week planning
  if (dayOfWeek === 0 && hour >= 18 && hour <= 20) {
    const lastPlannedWeek = localStorage.getItem('lastPlannedWeek');
    const currentWeek = getWeekNumber(new Date());
    
    if (!lastPlannedWeek || parseInt(lastPlannedWeek) < currentWeek) {
      showSmartNotification({
        type: 'planning-prompt',
        title: '📅 Weekly Planning',
        message: 'Plan your healthy meals for this week!',
        action: 'Plan Week',
        icon: '📅',
        priority: 'medium',
        sticky: true
      });
    }
  }
}

// Achievement Celebrations
function checkAchievements() {
  if (!isLoggedIn()) return;
  
  const progress = loadProgress();
  
  // Streak achievements
  if (progress.streak > 0 && progress.streak % 7 === 0) {
    showSmartNotification({
      type: 'achievement',
      title: '🏆 Achievement Unlocked!',
      message: `You've maintained a ${progress.streak} day streak! Keep it up!`,
      action: 'View Progress',
      icon: '🎉',
      priority: 'high',
      celebratory: true
    });
  }
  
  // Recipe cooking achievements
  if (progress.totalRecipesCooked > 0 && progress.totalRecipesCooked % 10 === 0) {
    showSmartNotification({
      type: 'achievement',
      title: '⭐ Milestone Reached!',
      message: `You've cooked ${progress.totalRecipesCooked} healthy recipes!`,
      action: 'View Progress',
      icon: '🎊',
      priority: 'high',
      celebratory: true
    });
  }
}

// Smart Notification Display
function showSmartNotification(notification) {
  // Check if notification was already shown today
  const notificationId = `${notification.type}-${new Date().toISOString().split('T')[0]}`;
  const shownToday = localStorage.getItem(`notif-${notificationId}`);
  
  if (shownToday && !notification.sticky) {
    return; // Already shown today
  }
  
  // Create enhanced notification with action button
  const smartNotif = document.createElement('div');
  smartNotif.className = 'smart-notification';
  smartNotif.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    z-index: 10000;
    min-width: 350px;
    max-width: 450px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    padding: 20px;
    animation: slideInRight 0.4s ease-out;
    border-left: 4px solid ${getNotificationColor(notification.type)};
  `;
  
  const icon = notification.icon || '🔔';
  const emoji = notification.celebratory ? getCelebrationEmoji() : icon;
  
  smartNotif.innerHTML = `
    <div class="d-flex align-items-start mb-3">
      <span style="font-size: 2.5rem; margin-right: 15px;">${emoji}</span>
      <div style="flex: 1;">
        <h6 class="fw-bold mb-1" style="color: #28a745; font-size: 1.1rem;">${notification.title}</h6>
        <p class="text-muted mb-0" style="font-size: 0.95rem;">${notification.message}</p>
      </div>
      <button type="button" class="btn-close" onclick="this.closest('.smart-notification').remove()"></button>
    </div>
    ${notification.action ? `
      <button class="btn btn-success btn-sm w-100" onclick="handleNotificationAction('${notification.type}', ${JSON.stringify(notification.data || {})})">
        ${notification.action}
      </button>
    ` : ''}
  `;
  
  document.body.appendChild(smartNotif);
  
  // Mark as shown
  localStorage.setItem(`notif-${notificationId}`, 'true');
  
  // Auto-remove after timeout (unless sticky)
  if (!notification.sticky) {
    const timeout = notification.priority === 'high' ? 10000 : 7000;
    setTimeout(() => {
      smartNotif.style.animation = 'slideOutRight 0.4s ease-in';
      setTimeout(() => smartNotif.remove(), 400);
    }, timeout);
  }
}

// Handle Notification Actions
function handleNotificationAction(type, data = {}) {
  switch(type) {
    case 'meal-reminder':
    case 'prep-alert':
      if (data.recipeId) {
        viewRecipe(data.recipeId);
      } else {
        renderWeeklyMealPlanner();
      }
      break;
    case 'shopping-update':
      renderShoppingListPage();
      break;
    case 'planning-prompt':
      renderWeeklyMealPlanner();
      break;
    case 'achievement':
      renderProgressTracking();
      break;
  }
  
  // Close notification
  document.querySelectorAll('.smart-notification').forEach(notif => notif.remove());
}

// Helper Functions
function getNotificationColor(type) {
  const colors = {
    'meal-reminder': '#28a745',
    'prep-alert': '#ffc107',
    'shopping-update': '#17a2b8',
    'planning-prompt': '#6610f2',
    'achievement': '#e83e8c'
  };
  return colors[type] || '#6c757d';
}

function getCelebrationEmoji() {
  const emojis = ['🎉', '🎊', '🏆', '⭐', '🎈', '✨'];
  return emojis[Math.floor(Math.random() * emojis.length)];
}

function getNotificationSettings() {
  return JSON.parse(localStorage.getItem('notificationSettings') || '{}');
}

function loadWeeklyMealPlanFromStorage() {
  return JSON.parse(localStorage.getItem('weeklyMealPlan') || '{}');
}

function loadShoppingListFromStorage() {
  return JSON.parse(localStorage.getItem('shoppingList') || '[]');
}

function checkIfShoppingListNeedsUpdate() {
  // Logic to check if shopping list needs updates from meal plan
  return false; // Implement based on needs
}

function getWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

function loadProgress() {
  return JSON.parse(localStorage.getItem('userProgress') || '{"streak": 0, "achievements": [], "totalRecipesCooked": 0}');
}

// Make globally available
window.handleNotificationAction = handleNotificationAction;

// Initialize smart notifications on page load
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => initSmartNotifications(), 3000); // Start after 3 seconds
  });
}

// Load saved shopping list from localStorage
function loadShoppingList() {
  console.log('Loading shopping list from localStorage...');
  
  // First check for corrupted data
  checkAndFixShoppingListData();
  
  try {
    const savedRecipes = localStorage.getItem('selectedRecipes');
    const savedList = localStorage.getItem('shoppingList');
    
    console.log('Raw savedRecipes from localStorage:', savedRecipes);
    console.log('Raw savedList from localStorage:', savedList);
    
    if (savedRecipes) {
      selectedRecipes = JSON.parse(savedRecipes);
      console.log('Parsed selectedRecipes:', selectedRecipes);
    }
    if (savedList) {
      shoppingList = JSON.parse(savedList);
      console.log('Parsed shoppingList:', shoppingList);
    }
    
    const savedStores = localStorage.getItem('favoriteStores');
    if (savedStores) {
      favoriteStores = JSON.parse(savedStores);
    }
    
    const savedStorePref = localStorage.getItem('selectedStorePreference');
    if (savedStorePref) {
      selectedStorePreference = savedStorePref;
    }
    
    console.log('Final selectedRecipes count:', selectedRecipes.length);
    console.log('Final shoppingList count:', shoppingList.length);
  } catch (error) {
    console.error('Error loading shopping list:', error);
    // Reset to empty arrays if there's a corruption
    selectedRecipes = [];
    shoppingList = [];
  }
}

function saveShoppingListData() {
  console.log('Saving shopping list data...');
  console.log('selectedRecipes to save:', selectedRecipes);
  console.log('shoppingList to save:', shoppingList);
  
  try {
    // Validate data before saving
    if (!Array.isArray(selectedRecipes)) {
      throw new Error('selectedRecipes is not an array');
    }
    if (!Array.isArray(shoppingList)) {
      throw new Error('shoppingList is not an array');
    }
    
    const selectedRecipesJson = JSON.stringify(selectedRecipes);
    const shoppingListJson = JSON.stringify(shoppingList);
    
    // Check if JSON serialization worked
    if (!selectedRecipesJson || !shoppingListJson) {
      throw new Error('Failed to serialize data to JSON');
    }
    
    localStorage.setItem('selectedRecipes', selectedRecipesJson);
    localStorage.setItem('shoppingList', shoppingListJson);
    localStorage.setItem('favoriteStores', JSON.stringify(favoriteStores));
    localStorage.setItem('selectedStorePreference', selectedStorePreference);
    
    console.log('Successfully saved to localStorage');
    
    // Verify the save worked
    const savedRecipes = localStorage.getItem('selectedRecipes');
    const savedList = localStorage.getItem('shoppingList');
    
    if (!savedRecipes || !savedList) {
      throw new Error('Failed to verify saved data');
    }
    
  } catch (error) {
    console.error('Error saving shopping list data:', error);
    showNotification(`Failed to save shopping list: ${error.message}`, 'error');
    throw error; // Re-throw to allow calling function to handle
  }
}

function toggleFavoriteStore(storeName) {
  const index = favoriteStores.indexOf(storeName);
  if (index > -1) {
    favoriteStores.splice(index, 1);
  } else {
    favoriteStores.push(storeName);
  }
  saveShoppingListData();
  renderShoppingListPage();
}

function filterByStore(storeValue) {
  selectedStorePreference = storeValue;
  saveShoppingListData();
  
  // Filter shopping list based on store preference
  let filteredList = shoppingList;
  
  if (storeValue === 'favorites') {
    // Show only items available at favorite stores
    filteredList = shoppingList.filter(item => 
      item.stores && item.stores.some(store => favoriteStores.includes(store))
    );
  } else if (storeValue !== 'all') {
    // Filter by specific store
    const storeNameMap = {
      'walmart': 'Walmart',
      'kroger': 'Kroger',
      'whole-foods': 'Whole Foods',
      'safeway': 'Safeway'
    };
    const storeName = storeNameMap[storeValue];
    filteredList = shoppingList.filter(item => 
      item.stores && item.stores.includes(storeName)
    );
  }
  
  // Update display with filtered list
  updateShoppingListDisplay(filteredList);
}

function updateShoppingListDisplay(filteredList) {
  const contentDiv = document.getElementById('shoppingListContent');
  if (!contentDiv) return;
  
  const storeSections = {};
  
  filteredList.forEach(ingredient => {
    const section = ingredient.storeLocation;
    if (!storeSections[section]) {
      storeSections[section] = [];
    }
    storeSections[section].push(ingredient);
  });
  
  contentDiv.innerHTML = Object.keys(storeSections).map(section => `
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

// Make functions globally available
window.toggleFavoriteStore = toggleFavoriteStore;
window.filterByStore = filterByStore;

// Render shopping list page
function renderShoppingListPage() {
  const app = document.getElementById('app');
  
  // Load saved shopping list data
  loadShoppingList();
  
  console.log('Rendering shopping list page...');
  console.log('selectedRecipes count:', selectedRecipes.length);
  console.log('shoppingList count:', shoppingList.length);
  console.log('selectedRecipes:', selectedRecipes);
  
  // Ensure shopping list is up to date
  if (selectedRecipes.length > 0 && shoppingList.length === 0) {
    console.log('Regenerating shopping list from selected recipes...');
    updateShoppingList();
  }
  
  console.log('After update - shoppingList count:', shoppingList.length);
  
  // Add page transition class
  app.className = 'page-transition';
  
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
          <p class="lead text-secondary">Your organized grocery list with smart store section grouping</p>
        </div>
      </div>

      <!-- Store Selection & Favorites -->
      <div class="row mb-4">
        <div class="col-md-6">
          <div class="card border-info shadow-sm">
            <div class="card-header bg-info text-white">
              <h6 class="mb-0">🏪 Store Preference</h6>
            </div>
            <div class="card-body">
              <select class="form-select" id="storeSelect" onchange="filterByStore(this.value)">
                <option value="all">All Stores</option>
                <option value="walmart">Walmart</option>
                <option value="kroger">Kroger</option>
                <option value="whole-foods">Whole Foods</option>
                <option value="safeway">Safeway</option>
                <option value="favorites">Favorite Stores Only</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border-warning shadow-sm">
            <div class="card-header bg-warning text-dark">
              <h6 class="mb-0">⭐ Favorite Stores</h6>
            </div>
            <div class="card-body">
              <div class="d-flex flex-wrap gap-2 mb-2">
                ${['Walmart', 'Kroger', 'Whole Foods', 'Safeway'].map(store => `
                  <span class="badge ${favoriteStores.includes(store) ? 'bg-success' : 'bg-secondary'} cursor-pointer" 
                        onclick="toggleFavoriteStore('${store}')">
                    ${favoriteStores.includes(store) ? '⭐' : ''} ${store}
                  </span>
                `).join('')}
              </div>
              <small class="text-muted">Click store names to add/remove favorites</small>
            </div>
          </div>
        </div>
      </div>

      ${(selectedRecipes.length > 0 && shoppingList.length > 0) ? `
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
      ` : selectedRecipes.length > 0 ? `
        <!-- Error State - Recipes selected but shopping list failed to generate -->
        <div class="row">
          <div class="col-12 text-center py-5">
            <div class="fs-1 mb-3">⚠️</div>
            <h3 class="text-warning mb-3">Shopping list generation failed</h3>
            <p class="text-secondary mb-4">You have ${selectedRecipes.length} recipe(s) selected, but the shopping list couldn't be generated.</p>
            <div class="d-flex gap-2 justify-content-center">
              <button class="btn btn-warning btn-lg" onclick="renderShoppingListPage()">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="me-2" viewBox="0 0 16 16">
                  <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z"/>
                </svg>
                Retry
              </button>
              <button class="btn btn-outline-secondary btn-lg" onclick="clearShoppingList()">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="me-2" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                Clear All
              </button>
            </div>
          </div>
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

// Authentication Pages
function renderLoginPage() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="homeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-success me-2" id="registerBtn">Sign Up</button>
        </div>
      </div>
    </nav>

    <!-- Login Form -->
    <div class="container">
      <div class="row min-vh-100 align-items-center justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="card shadow-sm">
            <div class="card-body p-5">
              <div class="text-center mb-4">
                <h2 class="fw-bold text-success">Welcome Back</h2>
                <p class="text-muted">Sign in to your BetterBites account</p>
              </div>
              
              <form id="loginForm">
                <div class="mb-3">
                  <label for="loginEmail" class="form-label">Email</label>
                  <input type="email" class="form-control" id="loginEmail" required>
                </div>
                
                <div class="mb-3">
                  <label for="loginPassword" class="form-label">Password</label>
                  <input type="password" class="form-control" id="loginPassword" required>
                </div>
                
                <div class="d-grid">
                  <button type="submit" class="btn btn-success btn-lg" id="loginSubmitBtn">
                    Sign In
                  </button>
                </div>
                
                <div class="text-center mt-3">
                  <p class="text-muted">Don't have an account? 
                    <a href="#" id="switchToRegister" class="text-success text-decoration-none">Sign up here</a>
                  </p>
                </div>
              </form>
              
              <div id="loginError" class="alert alert-danger mt-3" style="display: none;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Add event listeners
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
  document.getElementById('switchToRegister').addEventListener('click', renderRegisterPage);
}

function renderRegisterPage() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="homeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-success me-2" id="loginBtn">Login</button>
        </div>
      </div>
    </nav>

    <!-- Register Form -->
    <div class="container">
      <div class="row min-vh-100 align-items-center justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="card shadow-sm">
            <div class="card-body p-5">
              <div class="text-center mb-4">
                <h2 class="fw-bold text-success">Join BetterBites</h2>
                <p class="text-muted">Create your account to start your healthy journey</p>
              </div>
              
              <form id="registerForm">
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label for="registerFirstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" id="registerFirstName">
                  </div>
                  <div class="col-md-6">
                    <label for="registerLastName" class="form-label">Last Name</label>
                    <input type="text" class="form-control" id="registerLastName">
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="registerEmail" class="form-label">Email</label>
                  <input type="email" class="form-control" id="registerEmail" required>
                </div>
                
                <div class="mb-3">
                  <label for="registerUsername" class="form-label">Username</label>
                  <input type="text" class="form-control" id="registerUsername" required>
                </div>
                
                <div class="mb-3">
                  <label for="registerPassword" class="form-label">Password</label>
                  <input type="password" class="form-control" id="registerPassword" required minlength="6">
                  <div class="form-text">Password must be at least 6 characters long.</div>
                </div>
                
                <div class="d-grid">
                  <button type="submit" class="btn btn-success btn-lg" id="registerSubmitBtn">
                    Create Account
                  </button>
                </div>
                
                <div class="text-center mt-3">
                  <p class="text-muted">Already have an account? 
                    <a href="#" id="switchToLogin" class="text-success text-decoration-none">Sign in here</a>
                  </p>
                </div>
              </form>
              
              <div id="registerError" class="alert alert-danger mt-3" style="display: none;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Add event listeners
  document.getElementById('registerForm').addEventListener('submit', handleRegister);
  document.getElementById('switchToLogin').addEventListener('click', renderLoginPage);
}

// Authentication handlers
async function handleLogin(e) {
  e.preventDefault();
  
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const errorDiv = document.getElementById('loginError');
  const submitBtn = document.getElementById('loginSubmitBtn');
  
  // Show loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Signing In...';
  
  try {
    const result = await login(email, password);
    
    if (result.success) {
      // Success - redirect to home page
      renderHomePage();
    } else {
      // Show error
      errorDiv.textContent = result.error;
      errorDiv.style.display = 'block';
    }
  } catch (error) {
    errorDiv.textContent = 'An unexpected error occurred';
    errorDiv.style.display = 'block';
  } finally {
    // Reset button state
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Sign In';
  }
}

async function handleRegister(e) {
  e.preventDefault();
  
  const email = document.getElementById('registerEmail').value;
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;
  const firstName = document.getElementById('registerFirstName').value;
  const lastName = document.getElementById('registerLastName').value;
  const errorDiv = document.getElementById('registerError');
  const submitBtn = document.getElementById('registerSubmitBtn');
  
  // Show loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Creating Account...';
  
  try {
    const result = await register(email, username, password, firstName, lastName);
    
    if (result.success) {
      // Check if user has completed onboarding
      const hasCompletedOnboarding = localStorage.getItem('onboardingCompleted');
      if (!hasCompletedOnboarding) {
        // Show onboarding for new users
        renderOnboardingWizard();
      } else {
        // Success - redirect to home page
        renderHomePage();
      }
    } else {
      // Show error
      errorDiv.textContent = result.error;
      errorDiv.style.display = 'block';
    }
  } catch (error) {
    errorDiv.textContent = 'An unexpected error occurred';
    errorDiv.style.display = 'block';
  } finally {
    // Reset button state
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Create Account';
  }
}

// Onboarding Wizard State
let onboardingStep = 0;
let onboardingData = {
  dietaryPreferences: [],
  healthGoals: [],
  cookingExperience: '',
  timeForCooking: '',
  favoriteCuisines: [],
  allergies: []
};

// Render Onboarding Wizard
function renderOnboardingWizard() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <div class="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <!-- Progress Bar -->
            <div class="mb-4">
              <div class="d-flex justify-content-between mb-2">
                <small class="text-muted">Step ${onboardingStep + 1} of 5</small>
                <small class="text-muted">${Math.round((onboardingStep + 1) / 5 * 100)}% Complete</small>
              </div>
              <div class="progress" style="height: 8px;">
                <div class="progress-bar bg-success" role="progressbar" style="width: ${((onboardingStep + 1) / 5 * 100)}%"></div>
              </div>
            </div>
            
            <!-- Onboarding Content -->
            <div class="card shadow-lg border-0" id="onboardingCard">
              <!-- Step content will be rendered here -->
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  renderOnboardingStep();
}

// Render Current Onboarding Step
function renderOnboardingStep() {
  const card = document.getElementById('onboardingCard');
  
  switch(onboardingStep) {
    case 0:
      renderWelcomeStep(card);
      break;
    case 1:
      renderDietaryPreferencesStep(card);
      break;
    case 2:
      renderHealthGoalsStep(card);
      break;
    case 3:
      renderCookingExperienceStep(card);
      break;
    case 4:
      renderWrapUpStep(card);
      break;
  }
}

// Step 0: Welcome
function renderWelcomeStep(card) {
  card.innerHTML = `
    <div class="card-body p-5 text-center">
      <div class="mb-4">
        <div class="display-1 mb-4">👋</div>
        <h1 class="display-4 fw-bold text-success mb-3">Welcome to BetterBites!</h1>
        <p class="lead text-muted">
          We're excited to help you on your journey to better nutrition and wellness.
        </p>
      </div>
      
      <div class="row g-4 mb-5 mt-5">
        <div class="col-md-4">
          <div class="text-center">
            <div class="fs-1 mb-3">🎯</div>
            <h5>Set Your Goals</h5>
            <p class="text-muted small">Tell us about your health and nutrition goals</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="text-center">
            <div class="fs-1 mb-3">🍽️</div>
            <h5>Find Recipes</h5>
            <p class="text-muted small">Discover recipes tailored to your preferences</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="text-center">
            <div class="fs-1 mb-3">📊</div>
            <h5>Track Progress</h5>
            <p class="text-muted small">Monitor your nutrition and cooking journey</p>
          </div>
        </div>
      </div>
      
      <div class="d-grid gap-2">
        <button class="btn btn-success btn-lg" onclick="nextOnboardingStep()">
          Get Started →
        </button>
        <button class="btn btn-outline-secondary btn-sm" onclick="skipOnboarding()">
          Skip for now
        </button>
      </div>
    </div>
  `;
}

// Step 1: Dietary Preferences
function renderDietaryPreferencesStep(card) {
  card.innerHTML = `
    <div class="card-body p-5">
      <div class="text-center mb-4">
        <div class="display-3 mb-3">🥗</div>
        <h2 class="fw-bold text-success mb-2">Dietary Preferences</h2>
        <p class="text-muted">Let us know about your eating preferences and restrictions</p>
      </div>
      
      <div class="row g-3 mb-4">
        <div class="col-md-6">
          <div class="form-check p-3 border rounded dietary-option" data-preference="vegetarian">
            <input class="form-check-input" type="checkbox" id="pref-vegetarian">
            <label class="form-check-label w-100" for="pref-vegetarian">
              <span class="fs-2 d-block mb-2">🥬</span>
              <strong>Vegetarian</strong>
              <p class="mb-0 small text-muted">Plant-based diet, no meat</p>
            </label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-check p-3 border rounded dietary-option" data-preference="vegan">
            <input class="form-check-input" type="checkbox" id="pref-vegan">
            <label class="form-check-label w-100" for="pref-vegan">
              <span class="fs-2 d-block mb-2">🌱</span>
              <strong>Vegan</strong>
              <p class="mb-0 small text-muted">No animal products</p>
            </label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-check p-3 border rounded dietary-option" data-preference="gluten-free">
            <input class="form-check-input" type="checkbox" id="pref-gluten-free">
            <label class="form-check-label w-100" for="pref-gluten-free">
              <span class="fs-2 d-block mb-2">🌾</span>
              <strong>Gluten-Free</strong>
              <p class="mb-0 small text-muted">No gluten products</p>
            </label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-check p-3 border rounded dietary-option" data-preference="keto">
            <input class="form-check-input" type="checkbox" id="pref-keto">
            <label class="form-check-label w-100" for="pref-keto">
              <span class="fs-2 d-block mb-2">🥑</span>
              <strong>Keto/Low-Carb</strong>
              <p class="mb-0 small text-muted">Low carbohydrate focus</p>
            </label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-check p-3 border rounded dietary-option" data-preference="low-fat">
            <input class="form-check-input" type="checkbox" id="pref-low-fat">
            <label class="form-check-label w-100" for="pref-low-fat">
              <span class="fs-2 d-block mb-2">🍗</span>
              <strong>Low-Fat</strong>
              <p class="mb-0 small text-muted">Minimal fat content</p>
            </label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-check p-3 border rounded dietary-option" data-preference="pescatarian">
            <input class="form-check-input" type="checkbox" id="pref-pescatarian">
            <label class="form-check-label w-100" for="pref-pescatarian">
              <span class="fs-2 d-block mb-2">🐟</span>
              <strong>Pescatarian</strong>
              <p class="mb-0 small text-muted">Vegetarian + fish</p>
            </label>
          </div>
        </div>
      </div>
      
      <div class="d-flex justify-content-between">
        <button class="btn btn-outline-secondary" onclick="previousOnboardingStep()">← Back</button>
        <button class="btn btn-success" onclick="saveDietaryPreferences()">Continue →</button>
      </div>
    </div>
  `;
  
  // Add click handlers for dietary options
  document.querySelectorAll('.dietary-option').forEach(option => {
    option.addEventListener('click', function() {
      const checkbox = this.querySelector('input[type="checkbox"]');
      checkbox.checked = !checkbox.checked;
      this.classList.toggle('border-success', checkbox.checked);
    });
  });
}

// Step 2: Health Goals
function renderHealthGoalsStep(card) {
  card.innerHTML = `
    <div class="card-body p-5">
      <div class="text-center mb-4">
        <div class="display-3 mb-3">🎯</div>
        <h2 class="fw-bold text-success mb-2">Health Goals</h2>
        <p class="text-muted">What are you hoping to achieve?</p>
      </div>
      
      <div class="row g-3 mb-4">
        <div class="col-md-6">
          <div class="form-check p-3 border rounded goal-option" data-goal="weight-loss">
            <input class="form-check-input" type="checkbox" id="goal-weight-loss">
            <label class="form-check-label w-100" for="goal-weight-loss">
              <span class="fs-2 d-block mb-2">⚖️</span>
              <strong>Weight Loss</strong>
              <p class="mb-0 small text-muted">Shed extra pounds healthily</p>
            </label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-check p-3 border rounded goal-option" data-goal="muscle-gain">
            <input class="form-check-input" type="checkbox" id="goal-muscle-gain">
            <label class="form-check-label w-100" for="goal-muscle-gain">
              <span class="fs-2 d-block mb-2">💪</span>
              <strong>Muscle Gain</strong>
              <p class="mb-0 small text-muted">Build strength and muscle</p>
            </label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-check p-3 border rounded goal-option" data-goal="heart-health">
            <input class="form-check-input" type="checkbox" id="goal-heart-health">
            <label class="form-check-label w-100" for="goal-heart-health">
              <span class="fs-2 d-block mb-2">❤️</span>
              <strong>Heart Health</strong>
              <p class="mb-0 small text-muted">Support cardiovascular wellness</p>
            </label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-check p-3 border rounded goal-option" data-goal="diabetes">
            <input class="form-check-input" type="checkbox" id="goal-diabetes">
            <label class="form-check-label w-100" for="goal-diabetes">
              <span class="fs-2 d-block mb-2">🩺</span>
              <strong>Diabetes Management</strong>
              <p class="mb-0 small text-muted">Blood sugar control</p>
            </label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-check p-3 border rounded goal-option" data-goal="energy">
            <input class="form-check-input" type="checkbox" id="goal-energy">
            <label class="form-check-label w-100" for="goal-energy">
              <span class="fs-2 d-block mb-2">⚡</span>
              <strong>Boost Energy</strong>
              <p class="mb-0 small text-muted">Feel more energetic</p>
            </label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-check p-3 border rounded goal-option" data-goal="general-health">
            <input class="form-check-input" type="checkbox" id="goal-general-health">
            <label class="form-check-label w-100" for="goal-general-health">
              <span class="fs-2 d-block mb-2">🌟</span>
              <strong>General Wellness</strong>
              <p class="mb-0 small text-muted">Maintain overall health</p>
            </label>
          </div>
        </div>
      </div>
      
      <div class="d-flex justify-content-between">
        <button class="btn btn-outline-secondary" onclick="previousOnboardingStep()">← Back</button>
        <button class="btn btn-success" onclick="saveHealthGoals()">Continue →</button>
      </div>
    </div>
  `;
  
  // Add click handlers for goal options
  document.querySelectorAll('.goal-option').forEach(option => {
    option.addEventListener('click', function() {
      const checkbox = this.querySelector('input[type="checkbox"]');
      checkbox.checked = !checkbox.checked;
      this.classList.toggle('border-success', checkbox.checked);
    });
  });
}

// Step 3: Cooking Experience
function renderCookingExperienceStep(card) {
  card.innerHTML = `
    <div class="card-body p-5">
      <div class="text-center mb-4">
        <div class="display-3 mb-3">👨‍🍳</div>
        <h2 class="fw-bold text-success mb-2">Tell Us About You</h2>
        <p class="text-muted">Help us personalize your experience</p>
      </div>
      
      <div class="mb-4">
        <h5 class="mb-3">What's your cooking experience level?</h5>
        <div class="row g-3">
          <div class="col-md-4">
            <div class="form-check p-3 border rounded experience-option" data-experience="beginner">
              <input class="form-check-input" type="radio" name="experience" id="exp-beginner" value="beginner">
              <label class="form-check-label w-100" for="exp-beginner">
                <span class="fs-2 d-block mb-2">🌱</span>
                <strong>Beginner</strong>
                <p class="mb-0 small text-muted">Just starting out</p>
              </label>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-check p-3 border rounded experience-option" data-experience="intermediate">
              <input class="form-check-input" type="radio" name="experience" id="exp-intermediate" value="intermediate">
              <label class="form-check-label w-100" for="exp-intermediate">
                <span class="fs-2 d-block mb-2">👨‍🍳</span>
                <strong>Intermediate</strong>
                <p class="mb-0 small text-muted">Some kitchen experience</p>
              </label>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-check p-3 border rounded experience-option" data-experience="advanced">
              <input class="form-check-input" type="radio" name="experience" id="exp-advanced" value="advanced">
              <label class="form-check-label w-100" for="exp-advanced">
                <span class="fs-2 d-block mb-2">🌟</span>
                <strong>Advanced</strong>
                <p class="mb-0 small text-muted">Kitchen master</p>
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mb-4">
        <h5 class="mb-3">How much time do you typically have for cooking?</h5>
        <div class="row g-3">
          <div class="col-md-6">
            <div class="form-check p-3 border rounded time-option" data-time="quick">
              <input class="form-check-input" type="radio" name="time" id="time-quick" value="quick">
              <label class="form-check-label w-100" for="time-quick">
                <span class="fs-3 d-block mb-2">⚡</span>
                <strong>Quick Meals</strong>
                <p class="mb-0 small text-muted">Under 30 minutes</p>
              </label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-check p-3 border rounded time-option" data-time="moderate">
              <input class="form-check-input" type="radio" name="time" id="time-moderate" value="moderate">
              <label class="form-check-label w-100" for="time-moderate">
                <span class="fs-3 d-block mb-2">⏰</span>
                <strong>Moderate</strong>
                <p class="mb-0 small text-muted">30-60 minutes</p>
              </label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-check p-3 border rounded time-option" data-time="flexible">
              <input class="form-check-input" type="radio" name="time" id="time-flexible" value="flexible">
              <label class="form-check-label w-100" for="time-flexible">
                <span class="fs-3 d-block mb-2">🕐</span>
                <strong>Flexible</strong>
                <p class="mb-0 small text-muted">1-2 hours</p>
              </label>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-check p-3 border rounded time-option" data-time="marathon">
              <input class="form-check-input" type="radio" name="time" id="time-marathon" value="marathon">
              <label class="form-check-label w-100" for="time-marathon">
                <span class="fs-3 d-block mb-2">🏆</span>
                <strong>All Day Project</strong>
                <p class="mb-0 small text-muted">2+ hours</p>
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <div class="d-flex justify-content-between">
        <button class="btn btn-outline-secondary" onclick="previousOnboardingStep()">← Back</button>
        <button class="btn btn-success" onclick="saveCookingExperience()">Continue →</button>
      </div>
    </div>
  `;
  
  // Add click handlers for radio options
  document.querySelectorAll('.experience-option, .time-option').forEach(option => {
    option.addEventListener('click', function() {
      const radio = this.querySelector('input[type="radio"]');
      radio.checked = true;
      // Update visual state
      document.querySelectorAll('.experience-option, .time-option').forEach(opt => opt.classList.remove('border-success'));
      this.classList.add('border-success');
    });
  });
}

// Step 4: Wrap Up
function renderWrapUpStep(card) {
  card.innerHTML = `
    <div class="card-body p-5 text-center">
      <div class="mb-4">
        <div class="display-1 mb-4">🎉</div>
        <h1 class="display-4 fw-bold text-success mb-3">You're All Set!</h1>
        <p class="lead text-muted">
          We've personalized BetterBites just for you. Let's start your healthy journey!
        </p>
      </div>
      
      <div class="row g-4 mb-5 mt-5">
        <div class="col-md-4">
          <div class="p-4 border rounded">
            <div class="fs-1 mb-3">📱</div>
            <h5>Explore Features</h5>
            <p class="text-muted small">Discover recipes, meal planning, and more</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-4 border rounded">
            <div class="fs-1 mb-3">💾</div>
            <h5>Save Favorites</h5>
            <p class="text-muted small">Build your personal recipe collection</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="p-4 border rounded">
            <div class="fs-1 mb-3">📊</div>
            <h5>Track Progress</h5>
            <p class="text-muted small">Monitor your health and wellness goals</p>
          </div>
        </div>
      </div>
      
      <div class="d-grid gap-2">
        <button class="btn btn-success btn-lg" onclick="completeOnboarding()">
          Start Using BetterBites →
        </button>
      </div>
    </div>
  `;
}

// Onboarding Navigation Functions
function nextOnboardingStep() {
  onboardingStep++;
  renderOnboardingStep();
}

function previousOnboardingStep() {
  if (onboardingStep > 0) {
    onboardingStep--;
    renderOnboardingStep();
  }
}

function skipOnboarding() {
  localStorage.setItem('onboardingCompleted', 'true');
  renderHomePage();
}

function saveDietaryPreferences() {
  const selected = [];
  document.querySelectorAll('.dietary-option input:checked').forEach(checkbox => {
    selected.push(checkbox.closest('.dietary-option').dataset.preference);
  });
  onboardingData.dietaryPreferences = selected;
  nextOnboardingStep();
}

function saveHealthGoals() {
  const selected = [];
  document.querySelectorAll('.goal-option input:checked').forEach(checkbox => {
    selected.push(checkbox.closest('.goal-option').dataset.goal);
  });
  onboardingData.healthGoals = selected;
  nextOnboardingStep();
}

function saveCookingExperience() {
  const experience = document.querySelector('input[name="experience"]:checked');
  const time = document.querySelector('input[name="time"]:checked');
  
  if (experience) onboardingData.cookingExperience = experience.value;
  if (time) onboardingData.timeForCooking = time.value;
  
  nextOnboardingStep();
}

async function completeOnboarding() {
  // Save onboarding data to backend
  try {
    await saveOnboardingData();
    localStorage.setItem('onboardingCompleted', 'true');
    showNotification('Welcome to BetterBites! 🎉', 'success');
    renderHomePage();
  } catch (error) {
    console.error('Error saving onboarding data:', error);
    // Still complete onboarding even if save fails
    localStorage.setItem('onboardingCompleted', 'true');
    renderHomePage();
  }
}

async function saveOnboardingData() {
  // Save onboarding preferences to backend if needed
  // This could be sent to the API or stored in localStorage
  const user = currentUser;
  if (user) {
    // Store in localStorage for now
    localStorage.setItem('userOnboardingData', JSON.stringify(onboardingData));
    
    // Could also send to API
    // await fetch('/api/users/onboarding', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${authToken}` },
    //   body: JSON.stringify(onboardingData)
    // });
  }
}

// Make onboarding functions globally available
window.nextOnboardingStep = nextOnboardingStep;
window.previousOnboardingStep = previousOnboardingStep;
window.skipOnboarding = skipOnboarding;
window.saveDietaryPreferences = saveDietaryPreferences;
window.saveHealthGoals = saveHealthGoals;
window.saveCookingExperience = saveCookingExperience;
window.completeOnboarding = completeOnboarding;

// ==========================================
// WELLNESS FEATURES
// ==========================================

// Render Wellness Profile Page
async function renderWellnessProfile() {
  const app = document.getElementById('app');
  
  // Load saved preferences from API
  let preferences = {};
  try {
    const profile = await fetchWellnessProfile();
    if (profile) {
      preferences = {
        goals: profile.goals ? JSON.parse(profile.goals) : [],
        preferences: [],
        activityLevel: profile.activityLevel,
        targetCalories: profile.targetCaloriesPerDay
      };
      
      // Map boolean fields to preference strings
      if (profile.isVegetarian) preferences.preferences.push('vegetarian');
      if (profile.isVegan) preferences.preferences.push('vegan');
      if (profile.isKeto) preferences.preferences.push('keto');
      if (profile.isPaleo) preferences.preferences.push('paleo');
      if (profile.isGlutenFree) preferences.preferences.push('gluten-free');
      if (profile.isLowCarb) preferences.preferences.push('low-carb');
      if (profile.isDairyFree) preferences.preferences.push('dairy-free');
      if (profile.isNutFree) preferences.preferences.push('nut-free');
    }
  } catch (error) {
    console.error('Error loading wellness profile:', error);
  }
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="homeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-success px-4" id="backBtn">Back</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-success mb-3">Wellness Profile</h1>
            <p class="lead text-secondary">Tell us about your dietary preferences and health goals</p>
          </div>

          <!-- Wellness Goals -->
          <div class="card shadow-sm mb-4">
            <div class="card-header bg-success text-white">
              <h5 class="mb-0">Health Goals</h5>
            </div>
            <div class="card-body">
              <div class="row g-3">
                <div class="col-md-4">
                  <div class="form-check p-3 border rounded">
                    <input class="form-check-input" type="checkbox" id="goalWeightLoss" ${preferences.goals?.includes('weight-loss') ? 'checked' : ''}>
                    <label class="form-check-label" for="goalWeightLoss">
                      <strong>Weight Loss</strong><br>
                      <small class="text-muted">Reduce calorie intake</small>
                    </label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-check p-3 border rounded">
                    <input class="form-check-input" type="checkbox" id="goalMuscleGain" ${preferences.goals?.includes('muscle-gain') ? 'checked' : ''}>
                    <label class="form-check-label" for="goalMuscleGain">
                      <strong>Muscle Gain</strong><br>
                      <small class="text-muted">Higher protein meals</small>
                    </label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-check p-3 border rounded">
                    <input class="form-check-input" type="checkbox" id="goalHeartHealth" ${preferences.goals?.includes('heart-health') ? 'checked' : ''}>
                    <label class="form-check-label" for="goalHeartHealth">
                      <strong>Heart Health</strong><br>
                      <small class="text-muted">Low sodium, healthy fats</small>
                    </label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-check p-3 border rounded">
                    <input class="form-check-input" type="checkbox" id="goalEnergyBoost" ${preferences.goals?.includes('energy') ? 'checked' : ''}>
                    <label class="form-check-label" for="goalEnergyBoost">
                      <strong>More Energy</strong><br>
                      <small class="text-muted">Whole foods focus</small>
                    </label>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-check p-3 border rounded">
                    <input class="form-check-input" type="checkbox" id="goalGeneral" ${preferences.goals?.includes('general') ? 'checked' : ''}>
                    <label class="form-check-label" for="goalGeneral">
                      <strong>General Wellness</strong><br>
                      <small class="text-muted">Balanced nutrition</small>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Dietary Preferences -->
          <div class="card shadow-sm mb-4">
            <div class="card-header bg-success text-white">
              <h5 class="mb-0">Dietary Preferences</h5>
            </div>
            <div class="card-body">
              <div class="d-flex flex-wrap gap-2">
                <button class="btn btn-outline-success filter-preference ${preferences.preferences?.includes('vegetarian') ? 'active' : ''}" data-preference="vegetarian">Vegetarian</button>
                <button class="btn btn-outline-success filter-preference ${preferences.preferences?.includes('vegan') ? 'active' : ''}" data-preference="vegan">Vegan</button>
                <button class="btn btn-outline-success filter-preference ${preferences.preferences?.includes('keto') ? 'active' : ''}" data-preference="keto">Keto</button>
                <button class="btn btn-outline-success filter-preference ${preferences.preferences?.includes('paleo') ? 'active' : ''}" data-preference="paleo">Paleo</button>
                <button class="btn btn-outline-success filter-preference ${preferences.preferences?.includes('gluten-free') ? 'active' : ''}" data-preference="gluten-free">Gluten-Free</button>
                <button class="btn btn-outline-success filter-preference ${preferences.preferences?.includes('low-carb') ? 'active' : ''}" data-preference="low-carb">Low-Carb</button>
                <button class="btn btn-outline-success filter-preference ${preferences.preferences?.includes('dairy-free') ? 'active' : ''}" data-preference="dairy-free">Dairy-Free</button>
                <button class="btn btn-outline-success filter-preference ${preferences.preferences?.includes('nut-free') ? 'active' : ''}" data-preference="nut-free">Nut-Free</button>
              </div>
            </div>
          </div>

          <!-- Save Button -->
          <div class="text-center">
            <button class="btn btn-success btn-lg px-5" id="savePreferencesBtn">Save Preferences</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Event listeners
  document.getElementById('homeBtn').addEventListener('click', renderHomePage);
  document.getElementById('backBtn').addEventListener('click', renderHomePage);
  
  document.getElementById('savePreferencesBtn').addEventListener('click', async () => {
    await saveWellnessPreferences();
  });

  // Toggle preferences
  document.querySelectorAll('.filter-preference').forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
}

// Save wellness preferences
async function saveWellnessPreferences() {
  try {
    // Collect dietary preferences from active buttons
    const dietaryPrefs = {
      vegetarian: false,
      vegan: false,
      keto: false,
      paleo: false,
      glutenFree: false,
      lowCarb: false,
      dairyFree: false,
      nutFree: false
    };

    document.querySelectorAll('.filter-preference.active').forEach(btn => {
      const pref = btn.dataset.preference;
      if (pref === 'vegetarian') dietaryPrefs.vegetarian = true;
      if (pref === 'vegan') dietaryPrefs.vegan = true;
      if (pref === 'keto') dietaryPrefs.keto = true;
      if (pref === 'paleo') dietaryPrefs.paleo = true;
      if (pref === 'gluten-free') dietaryPrefs.glutenFree = true;
      if (pref === 'low-carb') dietaryPrefs.lowCarb = true;
      if (pref === 'dairy-free') dietaryPrefs.dairyFree = true;
      if (pref === 'nut-free') dietaryPrefs.nutFree = true;
    });

    // Collect health goals from checkboxes
    const goals = [];
    const checkboxes = {
      'weight-loss': document.getElementById('goalWeightLoss'),
      'muscle-gain': document.getElementById('goalMuscleGain'),
      'heart-health': document.getElementById('goalHeartHealth'),
      'energy': document.getElementById('goalEnergyBoost'),
      'general': document.getElementById('goalGeneral')
    };

    for (const [goal, checkbox] of Object.entries(checkboxes)) {
      if (checkbox && checkbox.checked) {
        goals.push(goal);
      }
    }

    // Build the API request data
    const wellnessData = {
      isVegetarian: dietaryPrefs.vegetarian,
      isVegan: dietaryPrefs.vegan,
      isKeto: dietaryPrefs.keto,
      isPaleo: dietaryPrefs.paleo,
      isGlutenFree: dietaryPrefs.glutenFree,
      isLowCarb: dietaryPrefs.lowCarb,
      isDairyFree: dietaryPrefs.dairyFree,
      isNutFree: dietaryPrefs.nutFree,
      goals: JSON.stringify(goals),
      activityLevel: document.getElementById('activityLevel')?.value || null,
      targetCaloriesPerDay: document.getElementById('targetCalories')?.value ? parseInt(document.getElementById('targetCalories').value) : null
    };

    // Save to API
    await saveWellnessProfile(wellnessData);
    showNotification('Wellness preferences saved successfully! 🎯', 'success');
  } catch (error) {
    console.error('Error saving wellness preferences:', error);
    showNotification('Failed to save wellness preferences. Please try again.', 'error');
  }
}

// Recipe Comparison Functions
async function addToComparisonHandler(recipeId) {
  try {
    // Fetch the full recipe details
    const recipe = await fetchRecipeById(recipeId);
    if (!recipe) {
      showNotification('Failed to load recipe details', 'error');
      return;
    }
    
    addToComparison(recipe);
  } catch (error) {
    console.error('Error adding recipe to comparison:', error);
    showNotification('Failed to add recipe to comparison', 'error');
  }
}

function addToComparison(recipe) {
  // Check if already in comparison
  if (comparisonRecipes.some(r => r.id === recipe.id)) {
    showNotification('Recipe already in comparison', 'info');
    return;
  }
  
  // Add to comparison
  comparisonRecipes.push(recipe);
  showNotification('Recipe added to comparison', 'success');
  
  // Update comparison badge
  updateComparisonBadge();
}

function removeFromComparison(recipeId) {
  comparisonRecipes = comparisonRecipes.filter(r => r.id !== recipeId);
  showNotification('Recipe removed from comparison', 'success');
  updateComparisonBadge();
  
  // Re-render comparison if on comparison page
  if (document.getElementById('comparisonContainer')) {
    renderRecipeComparison();
  }
}

function updateComparisonBadge() {
  const badge = document.getElementById('comparisonBadge');
  if (badge) {
    badge.textContent = comparisonRecipes.length;
    badge.style.display = comparisonRecipes.length > 0 ? 'inline' : 'none';
  }
}

// Make addToComparisonHandler available globally
window.addToComparisonHandler = addToComparisonHandler;

// Render Recipe Comparison Tool
function renderRecipeComparison() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="homeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-success px-4" id="backBtn">Back</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold text-success mb-3">Compare Recipes</h1>
        <p class="lead text-secondary">See how different recipes stack up nutritionally</p>
      </div>

      <div id="comparisonContainer" class="row g-4">
        ${comparisonRecipes.length === 0 ? `
          <div class="col-12 text-center py-5">
            <p class="text-muted mb-4">No recipes selected for comparison</p>
            <button class="btn btn-success btn-lg" id="browseBtn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search me-2" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
              Browse Recipes to Compare
            </button>
          </div>
        ` : `
          ${comparisonRecipes.map((recipe, index) => `
            <div class="col-md-6 col-lg-4">
              <div class="card h-100 shadow-sm">
                <div class="card-header bg-success text-white">
                  <div class="d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">Recipe ${index + 1}</h5>
                    <button class="btn btn-sm btn-outline-light" onclick="removeFromComparison(${recipe.id})">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="card-body">
                  <h4 class="card-title mb-3">${recipe.title}</h4>
                  <p class="text-muted small mb-3">${recipe.description || 'No description'}</p>
                  
                  <!-- Nutritional Info -->
                  <div class="border-top pt-3">
                    <h6 class="text-success">Nutritional Information</h6>
                    <div class="row g-2 mt-2">
                      <div class="col-6">
                        <small class="text-muted">Calories</small>
                        <div class="fw-bold">${recipe.calories}</div>
                      </div>
                      <div class="col-6">
                        <small class="text-muted">Servings</small>
                        <div class="fw-bold">${recipe.servings}</div>
                      </div>
                      <div class="col-6">
                        <small class="text-muted">Prep Time</small>
                        <div class="fw-bold">${recipe.prepTimeMinutes} min</div>
                      </div>
                      <div class="col-6">
                        <small class="text-muted">Cook Time</small>
                        <div class="fw-bold">${recipe.cookTimeMinutes} min</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Health Score -->
                  <div class="border-top pt-3 mt-3">
                    <h6 class="text-success">Health Score</h6>
                    <div class="progress mt-2" style="height: 25px;">
                      <div class="progress-bar bg-success" role="progressbar" style="width: ${(recipe.calories / 800) * 100}%">
                        ${calculateHealthScore(recipe)}/100
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
          
          <div class="col-12 mt-4">
            <div class="alert alert-info">
              <h6>Comparison Tips</h6>
              <ul class="mb-0 small">
                <li>Compare calorie counts for weight management goals</li>
                <li>Check prep and cook times for meal planning</li>
                <li>Review serving sizes for portion control</li>
                <li>Higher health scores indicate more nutritious options</li>
              </ul>
            </div>
          </div>
        `}
      </div>
    </div>
  `;

  // Event listeners
  document.getElementById('homeBtn').addEventListener('click', renderHomePage);
  document.getElementById('backBtn').addEventListener('click', renderHomePage);
  
  if (document.getElementById('browseBtn')) {
    document.getElementById('browseBtn').addEventListener('click', () => {
      renderFindRecipesPage();
    });
  }
  
  // Make removeFromComparison available globally
  window.removeFromComparison = function(recipeId) {
    comparisonRecipes = comparisonRecipes.filter(r => r.id !== recipeId);
    showNotification('Recipe removed from comparison', 'success');
    updateComparisonBadge();
    renderRecipeComparison();
  };
}

// Helper function to calculate health score
function calculateHealthScore(recipe) {
  let score = 100;
  
  // Deduct points for high calories (over 500)
  if (recipe.calories > 500) {
    score -= (recipe.calories - 500) / 10;
  }
  
  // Bonus for multiple ingredients
  const ingredientCount = recipe.ingredients?.length || 0;
  if (ingredientCount > 8) {
    score += 5;
  }
  
  // Bonus for low prep time
  if (recipe.prepTimeMinutes < 15) {
    score += 10;
  }
  
  return Math.max(0, Math.min(100, Math.round(score)));
}

// Smart Recipe Recommendations Functions
async function getSmartRecommendations() {
  try {
    // Fetch user's wellness profile
    const wellnessProfile = await fetchWellnessProfile();
    
    if (!wellnessProfile) {
      return null; // No profile yet, can't provide recommendations
    }
    
    // Fetch all recipes
    const recipes = await fetchRecipes();
    
    // Filter recipes based on wellness profile
    const recommendations = filterRecipesByWellnessProfile(recipes, wellnessProfile);
    
    return recommendations.slice(0, 6); // Return top 6 recommendations
  } catch (error) {
    console.error('Error getting smart recommendations:', error);
    return null;
  }
}

function filterRecipesByWellnessProfile(recipes, wellnessProfile) {
  return recipes.filter(recipe => {
    let matchScore = 0;
    
    // Check dietary preferences
    if (wellnessProfile.isVegetarian && hasTag(recipe, 'vegetarian')) matchScore += 5;
    if (wellnessProfile.isVegan && hasTag(recipe, 'vegan')) matchScore += 5;
    if (wellnessProfile.isKeto && hasTag(recipe, 'keto')) matchScore += 5;
    if (wellnessProfile.isPaleo && hasTag(recipe, 'paleo')) matchScore += 5;
    if (wellnessProfile.isGlutenFree && hasTag(recipe, 'gluten-free')) matchScore += 5;
    if (wellnessProfile.isDairyFree && hasTag(recipe, 'dairy-free')) matchScore += 5;
    if (wellnessProfile.isLowCarb && hasTag(recipe, 'low-carb')) matchScore += 5;
    if (wellnessProfile.isLowFat && hasTag(recipe, 'low-fat')) matchScore += 5;
    if (wellnessProfile.isLowSodium && hasTag(recipe, 'low-sodium')) matchScore += 5;
    
    // Check health goals
    if (wellnessProfile.goals) {
      const goals = JSON.parse(wellnessProfile.goals);
      
      goals.forEach(goal => {
        if (goal === 'weight-loss' && recipe.calories < 300) matchScore += 3;
        if (goal === 'muscle-gain' && recipe.calories > 400) matchScore += 3;
        if (goal === 'heart-health' && hasTag(recipe, 'heart-healthy')) matchScore += 3;
        if (goal === 'energy' && hasTag(recipe, 'quick')) matchScore += 3;
        if (goal === 'general' && calculateHealthScore(recipe) > 70) matchScore += 3;
      });
    }
    
    // Check target calories
    if (wellnessProfile.targetCaloriesPerDay) {
      const dailyLimit = wellnessProfile.targetCaloriesPerDay;
      const recipeCalories = recipe.calories;
      
      // Prefer recipes that fit within daily budget
      if (recipeCalories < dailyLimit / 3) {
        matchScore += 2; // Low calorie option
      }
    }
    
    // Check allergen avoidance
    if (wellnessProfile.hasPeanuts || wellnessProfile.hasTreeNuts) {
      const hasNuts = recipe.ingredients?.some(ing =>
        ing.name.toLowerCase().includes('nut') ||
        ing.name.toLowerCase().includes('peanut') ||
        ing.name.toLowerCase().includes('almond')
      );
      if (hasNuts) return false; // Exclude recipes with allergens
    }
    
    if (wellnessProfile.hasShellfish) {
      const hasShellfish = recipe.ingredients?.some(ing =>
        ing.name.toLowerCase().includes('shrimp') ||
        ing.name.toLowerCase().includes('crab') ||
        ing.name.toLowerCase().includes('lobster') ||
        ing.name.toLowerCase().includes('shellfish')
      );
      if (hasShellfish) return false;
    }
    
    if (wellnessProfile.hasEggs) {
      const hasEggs = recipe.ingredients?.some(ing =>
        ing.name.toLowerCase().includes('egg')
      );
      if (hasEggs) return false;
    }
    
    return matchScore > 0; // Only include recipes with some match
  })
  .sort((a, b) => {
    // Sort by match score descending
    const scoreA = calculateRecommendationScore(a, wellnessProfile);
    const scoreB = calculateRecommendationScore(b, wellnessProfile);
    return scoreB - scoreA;
  });
}

function hasTag(recipe, tag) {
  return recipe.tags?.some(t => t.toLowerCase().includes(tag.toLowerCase()));
}

function calculateRecommendationScore(recipe, wellnessProfile) {
  let score = 0;
  
  if (wellnessProfile.isVegetarian && hasTag(recipe, 'vegetarian')) score += 5;
  if (wellnessProfile.isVegan && hasTag(recipe, 'vegan')) score += 5;
  if (wellnessProfile.isKeto && hasTag(recipe, 'keto')) score += 5;
  if (wellnessProfile.isPaleo && hasTag(recipe, 'paleo')) score += 5;
  if (wellnessProfile.isGlutenFree && hasTag(recipe, 'gluten-free')) score += 5;
  if (wellnessProfile.isDairyFree && hasTag(recipe, 'dairy-free')) score += 5;
  if (wellnessProfile.isLowCarb && hasTag(recipe, 'low-carb')) score += 5;
  if (wellnessProfile.isLowFat && hasTag(recipe, 'low-fat')) score += 5;
  
  return score;
}

// Weekly Meal Planner Functions
function loadWeeklyMealPlan() {
  const saved = localStorage.getItem('weeklyMealPlan');
  if (saved) {
    weeklyMealPlan = JSON.parse(saved);
  }
}

function saveWeeklyMealPlan() {
  localStorage.setItem('weeklyMealPlan', JSON.stringify(weeklyMealPlan));
}

function addRecipeToDay(day, mealType, recipeId) {
  if (!weeklyMealPlan[day]) {
    weeklyMealPlan[day] = {};
  }
  if (!weeklyMealPlan[day][mealType]) {
    weeklyMealPlan[day][mealType] = [];
  }
  weeklyMealPlan[day][mealType].push(recipeId);
  saveWeeklyMealPlan();
}

function removeRecipeFromDay(day, mealType, recipeIndex) {
  if (weeklyMealPlan[day] && weeklyMealPlan[day][mealType]) {
    weeklyMealPlan[day][mealType].splice(recipeIndex, 1);
    saveWeeklyMealPlan();
  }
}

function generateShoppingListFromPlan() {
  const ingredients = {};
  
  for (const day in weeklyMealPlan) {
    for (const mealType in weeklyMealPlan[day]) {
      weeklyMealPlan[day][mealType].forEach(async (recipeId) => {
        const recipe = await fetchRecipeById(recipeId);
        if (recipe && recipe.ingredients) {
          recipe.ingredients.forEach(ingredient => {
            const key = ingredient.name.toLowerCase();
            if (!ingredients[key]) {
              ingredients[key] = {
                name: ingredient.name,
                total: 0,
                unit: ingredient.unit || 'item'
              };
            }
            ingredients[key].total += 1;
          });
        }
      });
    }
  }
  
  return Object.values(ingredients);
}

function calculateWeeklyNutrition() {
  const totals = {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0
  };
  
  // Calculate totals from meal plan
  return totals;
}

// Render Weekly Meal Planner
function renderWeeklyMealPlanner() {
  const app = document.getElementById('app');
  
  // Get current week dates
  const today = new Date();
  const monday = new Date(today);
  monday.setDate(today.getDate() - today.getDay() + 1);
  
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="homeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-success px-4" id="backBtn">Back</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold text-success mb-3">Weekly Meal Planner</h1>
        <p class="lead text-secondary">Plan your meals for the week ahead</p>
      </div>

      <!-- Weekly Calendar -->
      <div class="card shadow-sm mb-4">
        <div class="card-body">
          <div class="row g-3" id="mealPlanCalendar">
            ${weekDays.map((day, index) => {
              const date = new Date(monday);
              date.setDate(monday.getDate() + index);
              const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
              return `
                <div class="col-md-6 col-lg-3">
                  <div class="card border h-100">
                    <div class="card-header bg-success text-white">
                      <h5 class="mb-0">${day}</h5>
                      <small>${dateStr}</small>
                    </div>
                    <div class="card-body">
                      <div class="mb-3">
                        <h6 class="text-muted">Breakfast</h6>
                        <div id="breakfast-${index}" class="min-height-100 border rounded p-2 mb-2">
                          <small class="text-muted">No recipes added</small>
                        </div>
                        <button class="btn btn-sm btn-outline-success w-100" onclick="showAddRecipeModal('${day}', 'breakfast')">
                          + Add Recipe
                        </button>
                      </div>
                      
                      <div class="mb-3">
                        <h6 class="text-muted">Lunch</h6>
                        <div id="lunch-${index}" class="min-height-100 border rounded p-2 mb-2">
                          <small class="text-muted">No recipes added</small>
                        </div>
                        <button class="btn btn-sm btn-outline-success w-100" onclick="showAddRecipeModal('${day}', 'lunch')">
                          + Add Recipe
                        </button>
                      </div>
                      
                      <div>
                        <h6 class="text-muted">Dinner</h6>
                        <div id="dinner-${index}" class="min-height-100 border rounded p-2 mb-2">
                          <small class="text-muted">No recipes added</small>
                        </div>
                        <button class="btn btn-sm btn-outline-success w-100" onclick="showAddRecipeModal('${day}', 'dinner')">
                          + Add Recipe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- Summary Cards -->
      <div class="row g-4 mb-4">
        <div class="col-md-6">
          <div class="card border-success shadow-sm">
            <div class="card-header bg-success text-white">
              <h5 class="mb-0">📊 Weekly Nutrition Summary</h5>
            </div>
            <div class="card-body">
              <div class="row g-3" id="nutritionSummary">
                <div class="col-6">
                  <div class="text-center p-3 bg-light rounded">
                    <div class="h4 text-success mb-0" id="totalCalories">0</div>
                    <small class="text-muted">Total Calories</small>
                  </div>
                </div>
                <div class="col-6">
                  <div class="text-center p-3 bg-light rounded">
                    <div class="h4 text-primary mb-0" id="totalProtein">0g</div>
                    <small class="text-muted">Total Protein</small>
                  </div>
                </div>
                <div class="col-6">
                  <div class="text-center p-3 bg-light rounded">
                    <div class="h4 text-warning mb-0" id="totalCarbs">0g</div>
                    <small class="text-muted">Total Carbs</small>
                  </div>
                </div>
                <div class="col-6">
                  <div class="text-center p-3 bg-light rounded">
                    <div class="h4 text-danger mb-0" id="totalFat">0g</div>
                    <small class="text-muted">Total Fat</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-primary shadow-sm">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">🛒 Shopping List</h5>
            </div>
            <div class="card-body">
              <div id="shoppingListContainer">
                <p class="text-muted text-center">Your shopping list will appear here</p>
              </div>
              <button class="btn btn-success w-100 mt-3" onclick="generateShoppingList()">
                Generate Shopping List
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="row">
        <div class="col-12 text-center">
          <button class="btn btn-success btn-lg px-5" onclick="clearMealPlan()">
            Clear Week
          </button>
          <button class="btn btn-outline-success btn-lg px-5 ms-3" onclick="renderFindRecipesPage()">
            Browse Recipes
          </button>
        </div>
      </div>
    </div>
  `;

  // Event listeners
  document.getElementById('homeBtn').addEventListener('click', renderHomePage);
  document.getElementById('backBtn').addEventListener('click', renderHomePage);
  
  // Load meal plan data
  loadWeeklyMealPlan();
}

let currentModalDay = '';
let currentModalMealType = '';

function showAddRecipeModal(day, mealType) {
  currentModalDay = day;
  currentModalMealType = mealType;
  
  // Show modal with recipe search/selection
  const app = document.getElementById('app');
  
  // Create modal backdrop
  const modalBackdrop = document.createElement('div');
  modalBackdrop.className = 'position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50';
  modalBackdrop.style.zIndex = '9998';
  modalBackdrop.id = 'addRecipeModalBackdrop';
  modalBackdrop.onclick = closeAddRecipeModal;
  
  // Create modal
  const modal = document.createElement('div');
  modal.className = 'modal show d-block position-fixed top-50 start-50 translate-middle';
  modal.style.zIndex = '9999';
  modal.innerHTML = `
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header bg-success text-white">
          <h5 class="modal-title">Add Recipe to ${day} ${mealType}</h5>
          <button type="button" class="btn-close btn-close-white" onclick="closeAddRecipeModal()"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <input type="text" class="form-control" id="recipeSearchInput" placeholder="Search recipes...">
          </div>
          <div id="recipeSearchResults" class="overflow-auto" style="max-height: 400px;">
            <p class="text-center text-muted">Type to search recipes...</p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modalBackdrop);
  document.body.appendChild(modal);
  
  // Search functionality
  const searchInput = document.getElementById('recipeSearchInput');
  searchInput.addEventListener('input', async (e) => {
    const query = e.target.value.trim();
    if (query.length > 0) {
      await searchRecipesForPlanner(query);
    } else {
      document.getElementById('recipeSearchResults').innerHTML = '<p class="text-center text-muted">Type to search recipes...</p>';
    }
  });
  
  // Load initial recipes
  loadInitialRecipesForPlanner();
}

async function searchRecipesForPlanner(query) {
  const resultsContainer = document.getElementById('recipeSearchResults');
  resultsContainer.innerHTML = '<div class="text-center py-3"><div class="spinner-border text-success"></div></div>';
  
  try {
    const recipes = await fetchRecipes();
    const filtered = recipes.filter(recipe => 
      recipe.title.toLowerCase().includes(query.toLowerCase()) ||
      recipe.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    
    if (filtered.length === 0) {
      resultsContainer.innerHTML = '<p class="text-center text-muted">No recipes found</p>';
      return;
    }
    
    resultsContainer.innerHTML = `
      <div class="list-group">
        ${filtered.slice(0, 10).map(recipe => `
          <a href="#" class="list-group-item list-group-item-action" onclick="selectRecipeForPlan(${recipe.id})">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h6 class="mb-1 text-success">${recipe.title}</h6>
                <p class="mb-1 text-muted small">${recipe.description || 'No description'}</p>
                <small class="text-muted">⏱️ ${recipe.prepTimeMinutes + recipe.cookTimeMinutes} min • 🔥 ${recipe.calories} cal</small>
              </div>
              <span class="badge bg-success">${calculateHealthScore(recipe)}/100</span>
            </div>
          </a>
        `).join('')}
      </div>
    `;
  } catch (error) {
    console.error('Error searching recipes:', error);
    resultsContainer.innerHTML = '<p class="text-center text-danger">Error loading recipes</p>';
  }
}

async function loadInitialRecipesForPlanner() {
  const resultsContainer = document.getElementById('recipeSearchResults');
  resultsContainer.innerHTML = '<div class="text-center py-3"><div class="spinner-border text-success"></div></div>';
  
  try {
    const recipes = await fetchRecipes();
    
    resultsContainer.innerHTML = `
      <div class="list-group">
        ${recipes.slice(0, 10).map(recipe => `
          <a href="#" class="list-group-item list-group-item-action" onclick="selectRecipeForPlan(${recipe.id})">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h6 class="mb-1 text-success">${recipe.title}</h6>
                <p class="mb-1 text-muted small">${recipe.description || 'No description'}</p>
                <small class="text-muted">⏱️ ${recipe.prepTimeMinutes + recipe.cookTimeMinutes} min • 🔥 ${recipe.calories} cal</small>
              </div>
              <span class="badge bg-success">${calculateHealthScore(recipe)}/100</span>
            </div>
          </a>
        `).join('')}
      </div>
    `;
  } catch (error) {
    console.error('Error loading recipes:', error);
    resultsContainer.innerHTML = '<p class="text-center text-danger">Error loading recipes</p>';
  }
}

async function selectRecipeForPlan(recipeId) {
  try {
    const recipe = await fetchRecipeById(recipeId);
    if (!recipe) {
      showNotification('Failed to load recipe', 'error');
      return;
    }
    
    addRecipeToDay(currentModalDay, currentModalMealType, recipeId);
    showNotification(`${recipe.title} added to ${currentModalDay} ${currentModalMealType}!`, 'success');
    closeAddRecipeModal();
    
    // Re-render the meal planner to show the new recipe
    renderWeeklyMealPlanner();
  } catch (error) {
    console.error('Error selecting recipe:', error);
    showNotification('Failed to add recipe to meal plan', 'error');
  }
}

function closeAddRecipeModal() {
  const backdrop = document.getElementById('addRecipeModalBackdrop');
  const modal = document.querySelector('.modal.show');
  if (backdrop) backdrop.remove();
  if (modal) modal.remove();
  
  currentModalDay = '';
  currentModalMealType = '';
}

// Make functions globally available
window.showAddRecipeModal = showAddRecipeModal;
window.closeAddRecipeModal = closeAddRecipeModal;
window.selectRecipeForPlan = selectRecipeForPlan;

// Nutritional Insights Dashboard Functions
function loadDailyNutrition() {
  const saved = localStorage.getItem('dailyNutrition');
  if (saved) {
    dailyNutrition = JSON.parse(saved);
  }
}

function saveDailyNutrition() {
  localStorage.setItem('dailyNutrition', JSON.stringify(dailyNutrition));
}

function getTodayDateString() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

function logRecipeConsumption(recipeId) {
  const today = getTodayDateString();
  
  if (!dailyNutrition[today]) {
    dailyNutrition[today] = {
      recipes: [],
      totals: { calories: 0, protein: 0, carbs: 0, fat: 0 }
    };
  }
  
  if (!dailyNutrition[today].recipes.includes(recipeId)) {
    dailyNutrition[today].recipes.push(recipeId);
    saveDailyNutrition();
  }
}

async function calculateDailyNutrition() {
  const today = getTodayDateString();
  
  if (!dailyNutrition[today]) {
    return {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0
    };
  }
  
  const recipes = dailyNutrition[today].recipes;
  let totals = { calories: 0, protein: 0, carbs: 0, fat: 0 };
  
  for (const recipeId of recipes) {
    try {
      const recipe = await fetchRecipeById(recipeId);
      if (recipe) {
        totals.calories += recipe.calories || 0;
        // Note: Recipe model doesn't have protein/carbs/fat yet
        // This would need to be added to the Recipe model
      }
    } catch (error) {
      console.error('Error calculating nutrition:', error);
    }
  }
  
  return totals;
}

async function calculateWeeklyTrends() {
  const trends = [];
  const today = new Date();
  
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    const dayData = dailyNutrition[dateStr] || { recipes: [] };
    
    let calories = 0;
    for (const recipeId of dayData.recipes) {
      try {
        const recipe = await fetchRecipeById(recipeId);
        if (recipe) {
          calories += recipe.calories || 0;
        }
      } catch (error) {
        console.error('Error calculating trends:', error);
      }
    }
    
    trends.push({
      date: dateStr,
      dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
      calories: calories,
      recipeCount: dayData.recipes.length
    });
  }
  
  return trends;
}

// Render Nutritional Insights Dashboard
async function renderNutritionalInsights() {
  const app = document.getElementById('app');
  
  // Get wellness profile for target goals
  const wellnessProfile = isLoggedIn() ? await fetchWellnessProfile() : null;
  const targetCalories = wellnessProfile?.targetCaloriesPerDay || 2000;
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="homeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-success px-4" id="backBtn">Back</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold text-success mb-3">Nutritional Insights</h1>
        <p class="lead text-secondary">Track your nutritional intake and progress</p>
      </div>

      <!-- Daily Summary -->
      <div class="card border-success shadow-sm mb-4">
        <div class="card-header bg-success text-white">
          <h5 class="mb-0">📊 Today's Nutrition Summary</h5>
        </div>
        <div class="card-body">
          <div class="row g-4">
            <div class="col-md-6">
              <div class="text-center p-4 bg-light rounded">
                <h6 class="text-muted mb-3">Calories</h6>
                <div class="display-4 fw-bold text-success mb-3" id="todayCalories">0</div>
                <div class="progress" style="height: 20px;">
                  <div class="progress-bar bg-success" role="progressbar" id="calorieProgress" style="width: 0%">
                    0 / ${targetCalories}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row g-2">
                <div class="col-6">
                  <div class="text-center p-3 bg-primary-subtle rounded">
                    <h6 class="text-primary mb-2">Protein</h6>
                    <div class="h4 fw-bold" id="todayProtein">0g</div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="text-center p-3 bg-warning-subtle rounded">
                    <h6 class="text-warning mb-2">Carbs</h6>
                    <div class="h4 fw-bold" id="todayCarbs">0g</div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="text-center p-3 bg-danger-subtle rounded">
                    <h6 class="text-danger mb-2">Fat</h6>
                    <div class="h4 fw-bold" id="todayFat">0g</div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="text-center p-3 bg-info-subtle rounded">
                    <h6 class="text-info mb-2">Recipes</h6>
                    <div class="h4 fw-bold" id="todayRecipes">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Weekly Trends -->
      <div class="card border-primary shadow-sm mb-4">
        <div class="card-header bg-primary text-white">
          <h5 class="mb-0">📈 Weekly Trends</h5>
        </div>
        <div class="card-body">
          <div id="weeklyTrendsChart" class="py-4">
            <p class="text-center text-muted">Loading trends...</p>
          </div>
        </div>
      </div>

      <!-- Goals Progress -->
      <div class="card border-warning shadow-sm mb-4">
        <div class="card-header bg-warning text-dark">
          <h5 class="mb-0">🎯 Goal Progress</h5>
        </div>
        <div class="card-body" id="goalsProgress">
          ${wellnessProfile && wellnessProfile.goals ? `
            <p class="text-muted">Track your progress toward health goals</p>
          ` : `
            <p class="text-muted">Set up your wellness profile to track goals!</p>
            <button class="btn btn-success" onclick="renderWellnessProfile()">
              Create Wellness Profile
            </button>
          `}
        </div>
      </div>

      <!-- Favorite Recipes Nutrition -->
      <div class="card border-info shadow-sm">
        <div class="card-header bg-info text-white">
          <h5 class="mb-0">⭐ Favorite Recipes Nutrient Breakdown</h5>
        </div>
        <div class="card-body" id="favoriteRecipesNutrition">
          <p class="text-center text-muted">Your favorite recipes will appear here</p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="text-center mt-4">
        <button class="btn btn-success btn-lg px-5" onclick="renderFindRecipesPage()">
          Browse Recipes
        </button>
        <button class="btn btn-outline-success btn-lg px-5 ms-3" onclick="renderWeeklyMealPlanner()">
          Meal Planner
        </button>
      </div>
    </div>
  `;

  // Event listeners
  document.getElementById('homeBtn').addEventListener('click', renderHomePage);
  document.getElementById('backBtn').addEventListener('click', renderHomePage);
  
  // Load and display data
  await loadDashboardData();
}

async function loadDashboardData() {
  // Load today's nutrition
  const todayNutrition = await calculateDailyNutrition();
  document.getElementById('todayCalories').textContent = todayNutrition.calories;
  document.getElementById('todayProtein').textContent = `${todayNutrition.protein}g`;
  document.getElementById('todayCarbs').textContent = `${todayNutrition.carbs}g`;
  document.getElementById('todayFat').textContent = `${todayNutrition.fat}g`;
  
  // Update progress bar
  const wellnessProfile = isLoggedIn() ? await fetchWellnessProfile() : null;
  const targetCalories = wellnessProfile?.targetCaloriesPerDay || 2000;
  const caloriePercentage = Math.min((todayNutrition.calories / targetCalories) * 100, 100);
  document.getElementById('calorieProgress').style.width = `${caloriePercentage}%`;
  document.getElementById('calorieProgress').textContent = `${Math.round(todayNutrition.calories)} / ${targetCalories} cal`;
  
  // Load weekly trends
  await loadWeeklyTrends();
}

async function loadWeeklyTrends() {
  const trends = await calculateWeeklyTrends();
  const container = document.getElementById('weeklyTrendsChart');
  
  if (!trends || trends.length === 0) {
    container.innerHTML = '<p class="text-center text-muted">No data available yet. Start logging recipes!</p>';
    return;
  }
  
  const maxCalories = Math.max(...trends.map(t => t.calories), 1);
  
  container.innerHTML = `
    <div class="row align-items-end" style="min-height: 200px;">
      ${trends.map(trend => {
        const barHeight = (trend.calories / maxCalories) * 150;
        return `
          <div class="col text-center">
            <div class="position-relative" style="height: 180px;">
              <div class="bg-success rounded-top" style="height: ${barHeight}px; width: 100%; margin-bottom: 5px; transition: height 0.3s ease;"></div>
              <div class="position-absolute top-0 start-50 translate-middle-x mt-2">
                <small class="fw-bold">${trend.calories}</small>
              </div>
              <small class="text-muted d-block mt-2">${trend.dayName}</small>
              <small class="text-secondary d-block">${trend.recipeCount} recipes</small>
            </div>
          </div>
        `;
      }).join('')}
    </div>
    <div class="alert alert-info mt-3 mb-0">
      <small><i class="bi bi-info-circle"></i> Trends show your calorie intake over the past 7 days</small>
    </div>
  `;
}

function generateShoppingList() {
  const list = generateShoppingListFromPlan();
  const container = document.getElementById('shoppingListContainer');
  
  if (list.length === 0) {
    container.innerHTML = '<p class="text-muted text-center">Add recipes to generate a shopping list</p>';
    return;
  }
  
  container.innerHTML = `
    <ul class="list-group">
      ${list.map(ing => `
        <li class="list-group-item">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="ing-${ing.name.replace(/\s+/g, '-')}">
            <label class="form-check-label" for="ing-${ing.name.replace(/\s+/g, '-')}">
              ${ing.name} - ${ing.total} ${ing.unit}
            </label>
          </div>
        </li>
      `).join('')}
    </ul>
  `;
  
  showNotification('Shopping list generated successfully!', 'success');
}

function clearMealPlan() {
  if (confirm('Are you sure you want to clear your entire meal plan?')) {
    weeklyMealPlan = {};
    saveWeeklyMealPlan();
    showNotification('Meal plan cleared', 'info');
    renderWeeklyMealPlanner();
  }
}

// Pantry Management Functions
function loadPantry() {
  const saved = localStorage.getItem('myPantry');
  if (saved) {
    myPantry = JSON.parse(saved);
  }
}

function savePantry() {
  localStorage.setItem('myPantry', JSON.stringify(myPantry));
}

function addToPantry(ingredientName, expirationDate = null) {
  myPantry.push({
    name: ingredientName,
    expirationDate: expirationDate,
    addedDate: new Date().toISOString().split('T')[0]
  });
  savePantry();
}

function removeFromPantry(index) {
  myPantry.splice(index, 1);
  savePantry();
}

function hasInPantry(ingredientName) {
  return myPantry.some(item => 
    item.name.toLowerCase() === ingredientName.toLowerCase()
  );
}

function getExpiringSoonItems(days = 7) {
  const today = new Date();
  return myPantry.filter(item => {
    if (!item.expirationDate) return false;
    const expiration = new Date(item.expirationDate);
    const daysUntilExpiration = Math.ceil((expiration - today) / (1000 * 60 * 60 * 24));
    return daysUntilExpiration >= 0 && daysUntilExpiration <= days;
  });
}

function filterShoppingListByPantry(shoppingList) {
  return shoppingList.filter(item => !hasInPantry(item.name));
}

async function filterRecipesByPantry() {
  try {
    const recipes = await fetchRecipes();
    return recipes.filter(recipe => {
      if (!recipe.ingredients) return false;
      const requiredIngredients = recipe.ingredients.map(ing => ing.name);
      const hasRequired = requiredIngredients.every(ing => hasInPantry(ing));
      return hasRequired;
    });
  } catch (error) {
    console.error('Error filtering recipes by pantry:', error);
    return [];
  }
}

// Render Pantry Management Page
async function renderPantryManagement() {
  const app = document.getElementById('app');
  
  const expiringSoon = getExpiringSoonItems(7);
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="homeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-success px-4" id="backBtn">Back</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold text-success mb-3">My Pantry</h1>
        <p class="lead text-secondary">Track ingredients you have at home</p>
      </div>

      <!-- Add Item Form -->
      <div class="card border-success shadow-sm mb-4">
        <div class="card-header bg-success text-white">
          <h5 class="mb-0">➕ Add to Pantry</h5>
        </div>
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-8">
              <input type="text" class="form-control" id="newIngredientName" placeholder="Enter ingredient name">
            </div>
            <div class="col-md-4">
              <input type="date" class="form-control" id="expirationDate" placeholder="Expiration date (optional)">
            </div>
            <div class="col-12">
              <button class="btn btn-success w-100" onclick="addIngredientToPantry()">
                Add to Pantry
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Expiring Soon Alert -->
      ${expiringSoon.length > 0 ? `
        <div class="alert alert-warning shadow-sm mb-4">
          <h5 class="alert-heading">⚠️ Expiring Soon (${expiringSoon.length})</h5>
          <div class="row g-2">
            ${expiringSoon.map(item => `
              <div class="col-md-4">
                <div class="d-flex justify-content-between align-items-center bg-white p-2 rounded">
                  <span><strong>${item.name}</strong></span>
                  <small class="text-danger">Expires: ${new Date(item.expirationDate).toLocaleDateString()}</small>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Pantry Inventory -->
      <div class="card border-primary shadow-sm mb-4">
        <div class="card-header bg-primary text-white">
          <h5 class="mb-0">📦 Pantry Inventory (${myPantry.length} items)</h5>
        </div>
        <div class="card-body">
          ${myPantry.length === 0 ? `
            <div class="text-center py-5">
              <p class="text-muted">Your pantry is empty. Add some ingredients above!</p>
            </div>
          ` : `
            <div class="list-group">
              ${myPantry.map((item, index) => {
                const expirationStatus = item.expirationDate ? 
                  (new Date(item.expirationDate) < new Date() ? 'expired' : 
                   new Date(item.expirationDate) <= new Date(new Date().setDate(new Date().getDate() + 7)) ? 'warning' : 'ok') 
                  : 'no-date';
                
                return `
                  <div class="list-group-item">
                    <div class="d-flex justify-content-between align-items-center">
                      <div>
                        <h6 class="mb-1">${item.name}</h6>
                        <small class="text-muted">
                          Added: ${new Date(item.addedDate).toLocaleDateString()}
                          ${item.expirationDate ? ` • Expires: ${new Date(item.expirationDate).toLocaleDateString()}` : ''}
                        </small>
                      </div>
                      <div class="d-flex align-items-center gap-2">
                        ${expirationStatus === 'expired' ? '<span class="badge bg-danger">Expired</span>' : ''}
                        ${expirationStatus === 'warning' ? '<span class="badge bg-warning">Expiring Soon</span>' : ''}
                        <button class="btn btn-sm btn-outline-danger" onclick="removeFromPantry(${index})">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          `}
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="row g-4 mb-4">
        <div class="col-md-6">
          <div class="card border-success shadow-sm">
            <div class="card-header bg-success text-white">
              <h5 class="mb-0">🔍 Recipes I Can Make</h5>
            </div>
            <div class="card-body">
              <p class="text-muted">Find recipes you can make with what's in your pantry</p>
              <button class="btn btn-success w-100" onclick="showAvailableRecipes()">
                Find Recipes
              </button>
            </div>
          </div>
        </div>
        
        <div class="col-md-6">
          <div class="card border-info shadow-sm">
            <div class="card-header bg-info text-white">
              <h5 class="mb-0">🛒 Shopping List</h5>
            </div>
            <div class="card-body">
              <p class="text-muted">View shopping list (excluding pantry items)</p>
              <button class="btn btn-info w-100" onclick="renderShoppingListPage()">
                View Shopping List
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="text-center">
        <button class="btn btn-success btn-lg px-5" onclick="renderFindRecipesPage()">
          Browse All Recipes
        </button>
      </div>
    </div>
  `;

  // Event listeners
  document.getElementById('homeBtn').addEventListener('click', renderHomePage);
  document.getElementById('backBtn').addEventListener('click', renderHomePage);
  
  // Enter key to add ingredient
  document.getElementById('newIngredientName').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addIngredientToPantry();
    }
  });
}

function addIngredientToPantry() {
  const nameInput = document.getElementById('newIngredientName');
  const expirationInput = document.getElementById('expirationDate');
  
  const name = nameInput.value.trim();
  if (!name) {
    showNotification('Please enter an ingredient name', 'error');
    return;
  }
  
  addToPantry(name, expirationInput.value || null);
  showNotification(`${name} added to pantry!`, 'success');
  
  // Clear inputs
  nameInput.value = '';
  expirationInput.value = '';
  
  // Re-render to show new item
  renderPantryManagement();
}

// Make functions globally available
window.addIngredientToPantry = addIngredientToPantry;
window.removeFromPantry = removeFromPantry;
window.showAvailableRecipes = showAvailableRecipes;

async function showAvailableRecipes() {
  try {
    const availableRecipes = await filterRecipesByPantry();
    showNotification(`Found ${availableRecipes.length} recipes you can make with current pantry!`, 'success');
    renderFindRecipesPage();
    // Note: Would apply filter in recipe view - simplified for now
  } catch (error) {
    showNotification('Error filtering recipes', 'error');
  }
}

// Recipe Collections Functions
function loadCollections() {
  const saved = localStorage.getItem('recipeCollections');
  if (saved) {
    recipeCollections = JSON.parse(saved);
  }
  // If no collections, add pre-made ones
  if (recipeCollections.length === 0) {
    initializePreMadeCollections();
  }
}

function saveCollections() {
  localStorage.setItem('recipeCollections', JSON.stringify(recipeCollections));
}

function initializePreMadeCollections() {
  recipeCollections = [
    {
      id: 'meal-prep-sunday',
      name: 'Meal Prep Sunday',
      description: 'Recipes perfect for batch cooking on Sunday',
      recipes: [],
      isPreMade: true,
      createdAt: new Date().toISOString()
    },
    {
      id: 'quick-lunches',
      name: 'Quick Lunches',
      description: 'Fast and easy lunch recipes',
      recipes: [],
      isPreMade: true,
      createdAt: new Date().toISOString()
    },
    {
      id: 'keto-friendly',
      name: 'Keto-Friendly',
      description: 'Low-carb, high-fat recipes',
      recipes: [],
      isPreMade: true,
      createdAt: new Date().toISOString()
    },
    {
      id: 'vegetarian',
      name: 'Vegetarian',
      description: 'Meat-free delicious recipes',
      recipes: [],
      isPreMade: true,
      createdAt: new Date().toISOString()
    },
    {
      id: 'high-protein',
      name: 'High Protein',
      description: 'Protein-rich recipes for muscle building',
      recipes: [],
      isPreMade: true,
      createdAt: new Date().toISOString()
    }
  ];
  saveCollections();
}

function createCollection(name, description) {
  const collection = {
    id: `collection-${Date.now()}`,
    name: name,
    description: description,
    recipes: [],
    isPreMade: false,
    createdAt: new Date().toISOString()
  };
  recipeCollections.push(collection);
  saveCollections();
  return collection;
}

function addRecipeToCollection(collectionId, recipeId) {
  const collection = recipeCollections.find(c => c.id === collectionId);
  if (collection && !collection.recipes.includes(recipeId)) {
    collection.recipes.push(recipeId);
    saveCollections();
    return true;
  }
  return false;
}

function removeRecipeFromCollection(collectionId, recipeId) {
  const collection = recipeCollections.find(c => c.id === collectionId);
  if (collection) {
    const index = collection.recipes.indexOf(recipeId);
    if (index > -1) {
      collection.recipes.splice(index, 1);
      saveCollections();
      return true;
    }
  }
  return false;
}

function deleteCollection(collectionId) {
  const index = recipeCollections.findIndex(c => c.id === collectionId);
  if (index > -1) {
    recipeCollections.splice(index, 1);
    saveCollections();
    return true;
  }
  return false;
}

function saveMealPlanAsCollection(name, mealPlan) {
  const recipeIds = [];
  for (const day in mealPlan) {
    for (const mealType in mealPlan[day]) {
      mealPlan[day][mealType].forEach(recipeId => {
        if (!recipeIds.includes(recipeId)) {
          recipeIds.push(recipeId);
        }
      });
    }
  }
  
  const collection = createCollection(name, 'Saved from weekly meal plan');
  collection.recipes = recipeIds;
  saveCollections();
  return collection;
}

// Render Recipe Collections Page
async function renderRecipeCollections() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="homeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-success px-4" id="backBtn">Back</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold text-success mb-3">Recipe Collections</h1>
        <p class="lead text-secondary">Organize your favorite recipes into themed collections</p>
      </div>

      <!-- Create New Collection -->
      <div class="card border-success shadow-sm mb-4">
        <div class="card-header bg-success text-white">
          <h5 class="mb-0">➕ Create New Collection</h5>
        </div>
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-5">
              <input type="text" class="form-control" id="newCollectionName" placeholder="Collection name">
            </div>
            <div class="col-md-5">
              <input type="text" class="form-control" id="newCollectionDesc" placeholder="Description (optional)">
            </div>
            <div class="col-md-2">
              <button class="btn btn-success w-100" onclick="createNewCollection()">
                Create
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Save Meal Plan as Collection -->
      <div class="card border-info shadow-sm mb-4">
        <div class="card-header bg-info text-white">
          <h5 class="mb-0">📅 Save Meal Plan as Collection</h5>
        </div>
        <div class="card-body">
          <div class="row g-3 align-items-end">
            <div class="col-md-5">
              <label class="form-label">Collection Name</label>
              <input type="text" class="form-control" id="mealPlanCollectionName" placeholder="e.g., My Weekly Plan">
            </div>
            <div class="col-md-4">
              <p class="mb-0 text-muted">Save your weekly meal plan as a reusable collection</p>
            </div>
            <div class="col-md-3">
              <button class="btn btn-info w-100" onclick="saveMealPlanToCollection()">
                Save Meal Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Collections Grid -->
      <div class="row g-4" id="collectionsContainer">
        ${recipeCollections.map(collection => `
          <div class="col-md-6 col-lg-4">
            <div class="card border h-100 shadow-sm">
              <div class="card-header bg-${collection.isPreMade ? 'primary' : 'success'} text-white">
                <div class="d-flex justify-content-between align-items-center">
                  <h5 class="mb-0">${collection.name}</h5>
                  ${collection.isPreMade ? '<span class="badge bg-light text-dark">Pre-made</span>' : ''}
                </div>
              </div>
              <div class="card-body">
                <p class="text-muted mb-3">${collection.description || 'No description'}</p>
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <span class="badge bg-secondary">${collection.recipes.length} recipes</span>
                  <button class="btn btn-sm btn-outline-success" onclick="viewCollection('${collection.id}')">
                    View
                  </button>
                </div>
                ${!collection.isPreMade ? `
                  <button class="btn btn-sm btn-outline-danger w-100" onclick="confirmDeleteCollection('${collection.id}')">
                    Delete
                  </button>
                ` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // Event listeners
  document.getElementById('homeBtn').addEventListener('click', renderHomePage);
  document.getElementById('backBtn').addEventListener('click', renderHomePage);
  
  // Enter key to create collection
  document.getElementById('newCollectionName').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      createNewCollection();
    }
  });
}

function createNewCollection() {
  const nameInput = document.getElementById('newCollectionName');
  const descInput = document.getElementById('newCollectionDesc');
  
  const name = nameInput.value.trim();
  if (!name) {
    showNotification('Please enter a collection name', 'error');
    return;
  }
  
  createCollection(name, descInput.value.trim() || '');
  showNotification(`Collection "${name}" created!`, 'success');
  
  nameInput.value = '';
  descInput.value = '';
  
  renderRecipeCollections();
}

function confirmDeleteCollection(collectionId) {
  if (confirm('Are you sure you want to delete this collection?')) {
    deleteCollection(collectionId);
    showNotification('Collection deleted', 'info');
    renderRecipeCollections();
  }
}

async function viewCollection(collectionId) {
  const collection = recipeCollections.find(c => c.id === collectionId);
  if (!collection) return;
  
  const recipes = await fetchRecipes();
  const collectionRecipes = recipes.filter(recipe => 
    collection.recipes.includes(recipe.id)
  );
  
  // Render recipes view
  renderFindRecipesPage();
  
  // Note: Would show filtered view in production
  showNotification(`Showing ${collectionRecipes.length} recipes from "${collection.name}"`, 'info');
}

function saveMealPlanToCollection() {
  const nameInput = document.getElementById('mealPlanCollectionName');
  const name = nameInput.value.trim();
  
  if (!name) {
    showNotification('Please enter a collection name', 'error');
    return;
  }
  
  if (Object.keys(weeklyMealPlan).length === 0) {
    showNotification('No meal plan to save. Create a meal plan first!', 'warning');
    return;
  }
  
  saveMealPlanAsCollection(name, weeklyMealPlan);
  showNotification(`Meal plan saved as "${name}"!`, 'success');
  
  nameInput.value = '';
  renderRecipeCollections();
}

// Make functions globally available
window.createNewCollection = createNewCollection;
window.confirmDeleteCollection = confirmDeleteCollection;
window.viewCollection = viewCollection;
window.saveMealPlanToCollection = saveMealPlanToCollection;

// Render Meal Prep Recommendations Page
function renderMealPrepRecommendations() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="homeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-success px-4" id="backBtn">Back</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold text-success mb-3">🍳 Meal Prep Recommendations</h1>
        <p class="lead text-secondary">Optimize your cooking and meal prep routine</p>
      </div>

      <!-- Tips Grid -->
      <div class="row g-4 mb-5">
        <!-- Batch Cooking -->
        <div class="col-md-6">
          <div class="card border-success shadow-sm h-100">
            <div class="card-header bg-success text-white">
              <h5 class="mb-0">♻️ Batch Cooking</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                ${mealPrepTips.batchCooking.map(tip => `
                  <li class="list-group-item">
                    <small>${tip}</small>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Prep-Ahead Tips -->
        <div class="col-md-6">
          <div class="card border-primary shadow-sm h-100">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">⏰ Prep-Ahead Tips</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                ${mealPrepTips.prepAhead.map(tip => `
                  <li class="list-group-item">
                    <small>${tip}</small>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Storage Recommendations -->
        <div class="col-md-6">
          <div class="card border-info shadow-sm h-100">
            <div class="card-header bg-info text-white">
              <h5 class="mb-0">📦 Storage Recommendations</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                ${mealPrepTips.storage.map(tip => `
                  <li class="list-group-item">
                    <small>${tip}</small>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Time-Saving Hacks -->
        <div class="col-md-6">
          <div class="card border-warning shadow-sm h-100">
            <div class="card-header bg-warning text-dark">
              <h5 class="mb-0">⚡ Time-Saving Hacks</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                ${mealPrepTips.timeSaving.map(tip => `
                  <li class="list-group-item">
                    <small>${tip}</small>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Cook Once, Eat Multiple Times -->
      <div class="card border-success shadow-sm mb-5">
        <div class="card-header bg-success text-white">
          <h5 class="mb-0">🔄 Cook Once, Eat Multiple Times</h5>
        </div>
        <div class="card-body">
          <div class="row g-3">
            ${mealPrepTips.cookOnceEatMultiple.map(tip => `
              <div class="col-md-6">
                <div class="alert alert-success mb-0">
                  <small><strong>💡</strong> ${tip}</small>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
      
      <!-- Quick Actions -->
      <div class="text-center">
        <button class="btn btn-success btn-lg px-5" onclick="renderWeeklyMealPlanner()">
          Plan Weekly Meals
        </button>
        <button class="btn btn-outline-success btn-lg px-5 ms-3" onclick="renderFindRecipesPage()">
          Browse Recipes
        </button>
      </div>
    </div>
  `;

  // Event listeners
  document.getElementById('homeBtn').addEventListener('click', renderHomePage);
  document.getElementById('backBtn').addEventListener('click', renderHomePage);
}

// Progress Tracking & Gamification Functions
function loadProgress() {
  const saved = localStorage.getItem('userProgress');
  if (saved) {
    userProgress = JSON.parse(saved);
    updateStreak();
  }
}

function saveProgress() {
  localStorage.setItem('userProgress', JSON.stringify(userProgress));
}

function logRecipeConsumed(recipeId, healthScore = 50) {
  const today = new Date().toISOString().split('T')[0];
  
  if (userProgress.lastLogDate === today) {
    // Already logged today, just add to count
    userProgress.loggedRecipes.push({ recipeId, date: today, healthScore });
    userProgress.totalRecipesCooked++;
    
    if (healthScore >= 70) {
      userProgress.totalHealthyMeals++;
    }
  } else {
    // First log of the day
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];
    
    if (userProgress.lastLogDate === yesterdayStr) {
      userProgress.streak++;
    } else if (userProgress.lastLogDate !== today) {
      userProgress.streak = 1; // Reset streak if skipped a day
    }
    
    userProgress.lastLogDate = today;
    userProgress.loggedRecipes.push({ recipeId, date: today, healthScore });
    userProgress.totalRecipesCooked++;
    
    if (healthScore >= 70) {
      userProgress.totalHealthyMeals++;
    }
    
    checkAchievements();
  }
  
  saveProgress();
}

function updateStreak() {
  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];
  
  if (userProgress.lastLogDate === today || userProgress.lastLogDate === yesterdayStr) {
    // Streak is still valid
    return;
  }
  
  // Streak broken
  userProgress.streak = 0;
  saveProgress();
}

function checkAchievements() {
  const achievements = [
    { id: 'first-meal', name: 'First Bite', description: 'Log your first recipe', unlocked: userProgress.totalRecipesCooked >= 1 },
    { id: 'streak-3', name: 'On Fire', description: '3-day wellness streak', unlocked: userProgress.streak >= 3 },
    { id: 'streak-7', name: 'Week Warrior', description: '7-day wellness streak', unlocked: userProgress.streak >= 7 },
    { id: 'streak-30', name: 'Champion', description: '30-day wellness streak', unlocked: userProgress.streak >= 30 },
    { id: 'healthy-10', name: 'Health Hero', description: 'Log 10 healthy meals (score ≥70)', unlocked: userProgress.totalHealthyMeals >= 10 },
    { id: 'healthy-50', name: 'Wellness Master', description: 'Log 50 healthy meals', unlocked: userProgress.totalHealthyMeals >= 50 },
    { id: 'recipes-25', name: 'Cook Extraordinaire', description: 'Log 25 recipes', unlocked: userProgress.totalRecipesCooked >= 25 },
    { id: 'recipes-100', name: 'Recipe Legend', description: 'Log 100 recipes', unlocked: userProgress.totalRecipesCooked >= 100 }
  ];
  
  achievements.forEach(achievement => {
    if (achievement.unlocked && !userProgress.achievements.find(a => a.id === achievement.id)) {
      userProgress.achievements.push({
        id: achievement.id,
        name: achievement.name,
        description: achievement.description,
        unlockedDate: new Date().toISOString()
      });
      showNotification(`🏆 Achievement Unlocked: ${achievement.name}!`, 'success');
    }
  });
  
  saveProgress();
}

function getCurrentChallenges() {
  return [
    {
      id: 'vegetable-challenge',
      name: 'Veggie Explorer',
      description: 'Try 5 different vegetables this week',
      progress: 0,
      goal: 5,
      type: 'weekly',
      icon: '🥦'
    },
    {
      id: 'streak-challenge',
      name: 'Streak Keeper',
      description: 'Maintain a 5-day wellness streak',
      progress: Math.min(userProgress.streak, 5),
      goal: 5,
      type: 'daily',
      icon: '🔥'
    },
    {
      id: 'healthy-meal-challenge',
      name: 'Healthy Eater',
      description: 'Log 7 healthy meals this week',
      progress: 0,
      goal: 7,
      type: 'weekly',
      icon: '💚'
    },
    {
      id: 'variety-challenge',
      name: 'Culinary Explorer',
      description: 'Try recipes from 5 different categories',
      progress: 0,
      goal: 5,
      type: 'weekly',
      icon: '🌍'
    }
  ];
}

// Render Progress Tracking Page
function renderProgressTracking() {
  const app = document.getElementById('app');
  const challenges = getCurrentChallenges();
  const recentAchievements = userProgress.achievements.slice(-5).reverse();
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="homeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-success px-4" id="backBtn">Back</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold text-success mb-3">🏆 Your Progress</h1>
        <p class="lead text-secondary">Track your wellness journey and unlock achievements</p>
      </div>

      <!-- Streak Display -->
      <div class="card border-success shadow-sm mb-4">
        <div class="card-body text-center py-4">
          <div class="display-1 mb-3">🔥</div>
          <h2 class="text-success mb-2">${userProgress.streak} Day Streak</h2>
          <p class="text-muted mb-0">Keep logging recipes to maintain your streak!</p>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="row g-4 mb-4">
        <div class="col-md-4">
          <div class="card border-primary shadow-sm h-100">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">📊 Total Recipes</h5>
            </div>
            <div class="card-body text-center">
              <div class="display-3 fw-bold text-primary">${userProgress.totalRecipesCooked}</div>
              <small class="text-muted">Recipes logged</small>
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="card border-success shadow-sm h-100">
            <div class="card-header bg-success text-white">
              <h5 class="mb-0">💚 Healthy Meals</h5>
            </div>
            <div class="card-body text-center">
              <div class="display-3 fw-bold text-success">${userProgress.totalHealthyMeals}</div>
              <small class="text-muted">High health score meals</small>
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="card border-warning shadow-sm h-100">
            <div class="card-header bg-warning text-dark">
              <h5 class="mb-0">🏅 Achievements</h5>
            </div>
            <div class="card-body text-center">
              <div class="display-3 fw-bold text-warning">${userProgress.achievements.length}</div>
              <small class="text-muted">Badges unlocked</small>
            </div>
          </div>
        </div>
      </div>

      <!-- Achievements -->
      <div class="card border-warning shadow-sm mb-4">
        <div class="card-header bg-warning text-dark">
          <h5 class="mb-0">🏆 Your Achievements</h5>
        </div>
        <div class="card-body">
          ${userProgress.achievements.length === 0 ? `
            <p class="text-center text-muted py-3">Start logging recipes to unlock achievements!</p>
          ` : `
            <div class="row g-3">
              ${userProgress.achievements.map(achievement => `
                <div class="col-md-6">
                  <div class="card bg-light">
                    <div class="card-body">
                      <h6 class="mb-1">🏅 ${achievement.name}</h6>
                      <small class="text-muted">${achievement.description}</small>
                      <div class="mt-2">
                        <small class="text-info">Unlocked: ${new Date(achievement.unlockedDate).toLocaleDateString()}</small>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      </div>

      <!-- Challenges -->
      <div class="card border-info shadow-sm mb-4">
        <div class="card-header bg-info text-white">
          <h5 class="mb-0">🎯 Active Challenges</h5>
        </div>
        <div class="card-body">
          <div class="row g-3">
            ${challenges.map(challenge => {
              const progressPercent = (challenge.progress / challenge.goal) * 100;
              return `
                <div class="col-md-6">
                  <div class="card">
                    <div class="card-body">
                      <div class="d-flex justify-content-between mb-2">
                        <h6 class="mb-0">${challenge.icon} ${challenge.name}</h6>
                        <span class="badge bg-${progressPercent >= 100 ? 'success' : 'info'}">
                          ${challenge.progress}/${challenge.goal}
                        </span>
                      </div>
                      <p class="small text-muted mb-2">${challenge.description}</p>
                      <div class="progress" style="height: 8px;">
                        <div class="progress-bar bg-${progressPercent >= 100 ? 'success' : 'info'}" 
                             style="width: ${Math.min(progressPercent, 100)}%"></div>
                      </div>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- Progress Summary -->
      <div class="card border-success shadow-sm">
        <div class="card-header bg-success text-white">
          <h5 class="mb-0">📈 Progress Summary</h5>
        </div>
        <div class="card-body">
          <p class="mb-2"><strong>Total Recipes Cooked:</strong> ${userProgress.totalRecipesCooked}</p>
          <p class="mb-2"><strong>Healthy Meals:</strong> ${userProgress.totalHealthyMeals} (${userProgress.totalRecipesCooked > 0 ? Math.round((userProgress.totalHealthyMeals / userProgress.totalRecipesCooked) * 100) : 0}%)</p>
          <p class="mb-2"><strong>Current Streak:</strong> ${userProgress.streak} days</p>
          <p class="mb-0"><strong>Achievements Unlocked:</strong> ${userProgress.achievements.length}</p>
        </div>
      </div>
    </div>
  `;

  // Event listeners
  document.getElementById('homeBtn').addEventListener('click', renderHomePage);
  document.getElementById('backBtn').addEventListener('click', renderHomePage);
}

// Meal Time Features Functions
async function getMealTimeRecipes(mealTime) {
  try {
    const recipes = await fetchRecipes();
    const keywords = mealTimeRecipes[mealTime] || [];
    
    return recipes.filter(recipe => {
      // Check if recipe matches meal time keywords
      const titleLower = recipe.title.toLowerCase();
      const descLower = recipe.description.toLowerCase();
      const tagsLower = recipe.tags.join(' ').toLowerCase();
      const categoryLower = recipe.category.toLowerCase();
      
      return keywords.some(keyword => 
        titleLower.includes(keyword) || 
        descLower.includes(keyword) || 
        tagsLower.includes(keyword) ||
        categoryLower.includes(keyword)
      );
    });
  } catch (error) {
    console.error('Error fetching meal time recipes:', error);
    return [];
  }
}

async function getQuickMealSuggestion() {
  const mealTimes = ['breakfast', 'lunch', 'dinner'];
  const randomMealTime = mealTimes[Math.floor(Math.random() * mealTimes.length)];
  
  const recipes = await getMealTimeRecipes(randomMealTime);
  return recipes.length > 0 ? recipes[0] : null;
}

// Render Meal Time Features Page
async function renderMealTimeFeatures() {
  const app = document.getElementById('app');
  const quickSuggestion = await getQuickMealSuggestion();
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="homeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-success px-4" id="backBtn">Back</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold text-success mb-3">🍽️ What's Cooking?</h1>
        <p class="lead text-secondary">Quick meal suggestions by time of day</p>
      </div>

      <!-- Quick Meal Suggestion -->
      ${quickSuggestion ? `
        <div class="card border-success shadow-lg mb-5">
          <div class="card-header bg-success text-white">
            <h4 class="mb-0">🎲 Quick Pick for You</h4>
          </div>
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-md-3 text-center">
                <div class="fs-1">${quickSuggestion.image}</div>
              </div>
              <div class="col-md-9">
                <h3 class="text-success mb-3">${quickSuggestion.title}</h3>
                <p class="text-muted">${quickSuggestion.description}</p>
                <div class="d-flex gap-3 mb-3">
                  <span class="badge bg-light text-dark">
                    🕐 ${quickSuggestion.prepTimeMinutes + quickSuggestion.cookTimeMinutes} min
                  </span>
                  <span class="badge bg-light text-dark">
                    👥 ${quickSuggestion.servings} servings
                  </span>
                  <span class="badge bg-light text-dark">
                    🔥 ${quickSuggestion.calories} calories
                  </span>
                </div>
                <button class="btn btn-success btn-lg" onclick="viewRecipe(${quickSuggestion.id})">
                  View Recipe →
                </button>
              </div>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Meal Time Filters -->
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card border-warning shadow-sm h-100 meal-time-card" onclick="filterByMealTime('breakfast')">
            <div class="card-header bg-warning text-dark">
              <h5 class="mb-0">🌅 Breakfast</h5>
            </div>
            <div class="card-body">
              <p class="text-muted">Start your day with healthy breakfast options</p>
              <div class="d-flex justify-content-between">
                <span class="badge bg-warning text-dark">Morning</span>
                <span class="arrow">→</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="card border-info shadow-sm h-100 meal-time-card" onclick="filterByMealTime('lunch')">
            <div class="card-header bg-info text-white">
              <h5 class="mb-0">🍽️ Lunch</h5>
            </div>
            <div class="card-body">
              <p class="text-muted">Satisfying midday meals</p>
              <div class="d-flex justify-content-between">
                <span class="badge bg-info">Midday</span>
                <span class="arrow">→</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="card border-primary shadow-sm h-100 meal-time-card" onclick="filterByMealTime('dinner')">
            <div class="card-header bg-primary text-white">
              <h5 class="mb-0">🌙 Dinner</h5>
            </div>
            <div class="card-body">
              <p class="text-muted">Delicious evening meals</p>
              <div class="d-flex justify-content-between">
                <span class="badge bg-primary">Evening</span>
                <span class="arrow">→</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="card border-success shadow-sm h-100 meal-time-card" onclick="filterByMealTime('snack')">
            <div class="card-header bg-success text-white">
              <h5 class="mb-0">🍎 Snacks</h5>
            </div>
            <div class="card-body">
              <p class="text-muted">Healthy snack options</p>
              <div class="d-flex justify-content-between">
                <span class="badge bg-success">Any Time</span>
                <span class="arrow">→</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="card border-secondary shadow-sm h-100 meal-time-card" onclick="filterByMealTime('late-night')">
            <div class="card-header bg-secondary text-white">
              <h5 class="mb-0">🌃 Late Night</h5>
            </div>
            <div class="card-body">
              <p class="text-muted">Light late-night options</p>
              <div class="d-flex justify-content-between">
                <span class="badge bg-secondary">Light</span>
                <span class="arrow">→</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-md-4">
          <div class="card border-danger shadow-sm h-100 meal-time-card" onclick="filterByMealTime('festive')">
            <div class="card-header bg-danger text-white">
              <h5 class="mb-0">🎉 Festive</h5>
            </div>
            <div class="card-body">
              <p class="text-muted">Special occasion recipes</p>
              <div class="d-flex justify-content-between">
                <span class="badge bg-danger">Special</span>
                <span class="arrow">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="text-center mt-5">
        <button class="btn btn-success btn-lg px-5" onclick="getRandomMealSuggestion()">
          🎲 Surprise Me
        </button>
        <button class="btn btn-outline-success btn-lg px-5 ms-3" onclick="renderFindRecipesPage()">
          Browse All Recipes
        </button>
      </div>
    </div>
  `;

  // Event listeners
  document.getElementById('homeBtn').addEventListener('click', renderHomePage);
  document.getElementById('backBtn').addEventListener('click', renderHomePage);
}

async function filterByMealTime(mealTime) {
  const recipes = await getMealTimeRecipes(mealTime);
  
  if (recipes.length === 0) {
    showNotification(`No ${mealTime} recipes found. Try browsing all recipes!`, 'info');
    return;
  }
  
  // Store meal time filter
  sessionStorage.setItem('mealTimeFilter', mealTime);
  
  // Navigate to recipe page with filter
  renderFindRecipesPage();
  
  // Apply filter
  setTimeout(() => {
    if (window.generateRecipeCards) {
      const filterBtn = document.querySelector(`button[onclick*="${mealTime}"]`);
      if (filterBtn) {
        filterBtn.click();
      }
    }
  }, 100);
}

async function getRandomMealSuggestion() {
  const suggestion = await getQuickMealSuggestion();
  
  if (suggestion) {
    viewRecipe(suggestion.id);
  } else {
    showNotification('No suggestions available. Please try again!', 'info');
  }
}

// Make functions globally available
window.filterByMealTime = filterByMealTime;
window.getRandomMealSuggestion = getRandomMealSuggestion;

// Community Features Functions
function loadFollowingList() {
  const saved = localStorage.getItem('followingList');
  if (saved) {
    followingList = JSON.parse(saved);
  }
}

function saveFollowingList() {
  localStorage.setItem('followingList', JSON.stringify(followingList));
}

function loadRecipeReviews() {
  const saved = localStorage.getItem('recipeReviews');
  if (saved) {
    recipeReviews = JSON.parse(saved);
  }
}

function saveRecipeReviews() {
  localStorage.setItem('recipeReviews', JSON.stringify(recipeReviews));
}

function loadRecipeComments() {
  const saved = localStorage.getItem('recipeComments');
  if (saved) {
    recipeComments = JSON.parse(saved);
  }
}

function saveRecipeComments() {
  localStorage.setItem('recipeComments', JSON.stringify(recipeComments));
}

function loadRecipeTips() {
  const saved = localStorage.getItem('recipeTips');
  if (saved) {
    recipeTips = JSON.parse(saved);
  }
}

function saveRecipeTips() {
  localStorage.setItem('recipeTips', JSON.stringify(recipeTips));
}

function addRating(recipeId, rating) {
  if (!recipeReviews[recipeId]) {
    recipeReviews[recipeId] = { ratings: [], comments: [] };
  }
  recipeReviews[recipeId].ratings.push(rating);
  saveRecipeReviews();
}

function getAverageRating(recipeId) {
  if (!recipeReviews[recipeId] || recipeReviews[recipeId].ratings.length === 0) {
    return 0;
  }
  const sum = recipeReviews[recipeId].ratings.reduce((a, b) => a + b, 0);
  return (sum / recipeReviews[recipeId].ratings.length).toFixed(1);
}

function addComment(recipeId, comment) {
  if (!recipeReviews[recipeId]) {
    recipeReviews[recipeId] = { ratings: [], comments: [] };
  }
  recipeReviews[recipeId].comments.push({
    user: currentUser?.username || 'Anonymous',
    text: comment,
    date: new Date().toISOString()
  });
  saveRecipeReviews();
}

function addTip(recipeId, tip) {
  if (!recipeTips[recipeId]) {
    recipeTips[recipeId] = [];
  }
  recipeTips[recipeId].push({
    user: currentUser?.username || 'Anonymous',
    text: tip,
    date: new Date().toISOString()
  });
  saveRecipeTips();
}

// Render Community Features Page
function renderCommunityFeatures() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="homeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-success px-4" id="backBtn">Back</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold text-success mb-3">👥 Community</h1>
        <p class="lead text-secondary">Connect, share, and learn from fellow food enthusiasts</p>
      </div>

      <!-- Community Challenges -->
      <div class="card border-primary shadow-sm mb-4">
        <div class="card-header bg-primary text-white">
          <h5 class="mb-0">🏆 Community Challenges</h5>
        </div>
        <div class="card-body">
          <div class="row g-3">
            ${communityChallenges.map(challenge => `
              <div class="col-md-6">
                <div class="card border-primary h-100">
                  <div class="card-body">
                    <div class="d-flex justify-content-between mb-2">
                      <h5 class="text-primary">${challenge.title}</h5>
                      <span class="badge bg-primary">${challenge.participants} participants</span>
                    </div>
                    <p class="text-muted">${challenge.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <span class="badge bg-light text-dark">${challenge.difficulty}</span>
                      <button class="btn btn-sm btn-primary" onclick="joinChallenge(${challenge.title.replace(/ /g, '_')})">
                        Join Challenge
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="card border-success shadow-sm mb-4">
        <div class="card-header bg-success text-white">
          <h5 class="mb-0">📰 Recent Activity</h5>
        </div>
        <div class="card-body">
          <div class="list-group">
            <div class="list-group-item">
              <div class="d-flex align-items-center">
                <div class="me-3">
                  <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                    <span class="text-white fw-bold">JD</span>
                  </div>
                </div>
                <div class="flex-grow-1">
                  <strong>John Doe</strong> shared a new recipe: "Healthy Quinoa Bowl"
                  <br>
                  <small class="text-muted">2 hours ago</small>
                </div>
              </div>
            </div>
            <div class="list-group-item">
              <div class="d-flex align-items-center">
                <div class="me-3">
                  <div class="bg-success rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                    <span class="text-white fw-bold">SM</span>
                  </div>
                </div>
                <div class="flex-grow-1">
                  <strong>Sarah Miller</strong> completed "Weekly Veggie Challenge"
                  <br>
                  <small class="text-muted">5 hours ago</small>
                </div>
              </div>
            </div>
            <div class="list-group-item">
              <div class="d-flex align-items-center">
                <div class="me-3">
                  <div class="bg-warning rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">
                    <span class="text-white fw-bold">MJ</span>
                  </div>
                </div>
                <div class="flex-grow-1">
                  <strong>Mike Johnson</strong> added a cooking tip to "Grilled Salmon"
                  <br>
                  <small class="text-muted">1 day ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Following -->
      <div class="card border-info shadow-sm mb-4">
        <div class="card-header bg-info text-white">
          <h5 class="mb-0">👥 People You Follow</h5>
        </div>
        <div class="card-body">
          <p class="text-muted mb-3">Start following your friends and favorite cooks!</p>
          <div class="row g-3">
            <div class="col-md-4">
              <div class="card">
                <div class="card-body text-center">
                  <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 60px; height: 60px;">
                    <span class="text-white fs-4 fw-bold">JD</span>
                  </div>
                  <h6>John Doe</h6>
                  <p class="text-muted small">Healthy eating enthusiast</p>
                  <button class="btn btn-sm btn-outline-primary" onclick="toggleFollow('John Doe')">
                    Follow
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body text-center">
                  <div class="bg-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 60px; height: 60px;">
                    <span class="text-white fs-4 fw-bold">SM</span>
                  </div>
                  <h6>Sarah Miller</h6>
                  <p class="text-muted small">Meal prep expert</p>
                  <button class="btn btn-sm btn-outline-success" onclick="toggleFollow('Sarah Miller')">
                    Follow
                  </button>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body text-center">
                  <div class="bg-warning rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 60px; height: 60px;">
                    <span class="text-white fs-4 fw-bold">MJ</span>
                  </div>
                  <h6>Mike Johnson</h6>
                  <p class="text-muted small">Grilling master</p>
                  <button class="btn btn-sm btn-outline-warning" onclick="toggleFollow('Mike Johnson')">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="text-center">
        <button class="btn btn-success btn-lg px-5" onclick="renderFindRecipesPage()">
          Browse Recipes
        </button>
        <button class="btn btn-outline-success btn-lg px-5 ms-3" onclick="renderMakeRecipePage()">
          Share Your Recipe
        </button>
      </div>
    </div>
  `;

  // Event listeners
  document.getElementById('homeBtn').addEventListener('click', renderHomePage);
  document.getElementById('backBtn').addEventListener('click', renderHomePage);
}

function toggleFollow(username) {
  const index = followingList.indexOf(username);
  if (index > -1) {
    followingList.splice(index, 1);
    showNotification(`Unfollowed ${username}`, 'info');
  } else {
    followingList.push(username);
    showNotification(`Now following ${username}`, 'success');
  }
  saveFollowingList();
  renderCommunityFeatures();
}

function joinChallenge(challengeId) {
  showNotification(`Joined challenge! Good luck! 🎯`, 'success');
}

// Make functions globally available
window.toggleFollow = toggleFollow;
window.joinChallenge = joinChallenge;

// Calendar Integration Functions
function loadCalendarEvents() {
  const saved = localStorage.getItem('calendarEvents');
  if (saved) {
    calendarEvents = JSON.parse(saved);
  }
}

function saveCalendarEvents() {
  localStorage.setItem('calendarEvents', JSON.stringify(calendarEvents));
}

function loadMealReminders() {
  const saved = localStorage.getItem('mealReminders');
  if (saved) {
    mealReminders = JSON.parse(saved);
  }
}

function saveMealReminders() {
  localStorage.setItem('mealReminders', JSON.stringify(mealReminders));
}

function addMealReminder(title, date, time, recipeId) {
  mealReminders.push({
    title,
    date,
    time,
    recipeId,
    id: Date.now()
  });
  saveMealReminders();
}

function generateICalendarData(title, description, startDate, endDate) {
  const formatDate = (date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };
  
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//BetterBites//Recipe Planner//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:betterbites-${Date.now()}@example.com`,
    `DTSTART:${formatDate(startDate)}`,
    `DTEND:${formatDate(endDate)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');
}

function downloadICalendar(title, description, date, durationMinutes = 60) {
  const startDate = new Date(date);
  const endDate = new Date(startDate.getTime() + durationMinutes * 60000);
  
  const icalData = generateICalendarData(title, description, startDate, endDate);
  const blob = new Blob([icalData], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${title.replace(/\s+/g, '_')}.ics`;
  link.click();
}

// Render Calendar Integration Page
function renderCalendarIntegration() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="homeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-success px-4" id="backBtn">Back</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold text-success mb-3">📅 Calendar Integration</h1>
        <p class="lead text-secondary">Sync your meal plans with your calendar</p>
      </div>

      <!-- Export Options -->
      <div class="card border-primary shadow-sm mb-4">
        <div class="card-header bg-primary text-white">
          <h5 class="mb-0">📤 Export to Calendar</h5>
        </div>
        <div class="card-body">
          <p class="text-muted mb-4">Download your meal plan as a calendar file to sync with Google Calendar, Apple Calendar, or any calendar app.</p>
          
          <div class="row g-3 mb-4">
            <div class="col-md-6">
              <div class="card border-primary h-100">
                <div class="card-body text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-calendar-check text-primary mb-3" viewBox="0 0 16 16">
                    <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                  </svg>
                  <h5>Export Meal Plan</h5>
                  <p class="text-muted">Download your weekly meal plan as an .ics file</p>
                  <button class="btn btn-primary" onclick="exportMealPlanToCalendar()">
                    Download Calendar File
                  </button>
                </div>
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="card border-success h-100">
                <div class="card-body text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-bell text-success mb-3" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258H10.663c-.287-.692-.502-1.49-.663-2.258C9.866 8.197 9.732 6.628 9.732 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                  </svg>
                  <h5>Meal Reminders</h5>
                  <p class="text-muted">Set reminders for meal prep and cooking</p>
                  <button class="btn btn-success" onclick="showAddReminderModal()">
                    Set Reminder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Special Occasions -->
      <div class="card border-warning shadow-sm mb-4">
        <div class="card-header bg-warning text-dark">
          <h5 class="mb-0">🎉 Special Occasions</h5>
        </div>
        <div class="card-body">
          <p class="text-muted mb-4">Find recipe suggestions for upcoming holidays and special occasions.</p>
          
          <div class="row g-3">
            ${specialOccasions.map(occasion => {
              const occasionDate = new Date(occasion.date);
              const today = new Date();
              const daysUntil = Math.ceil((occasionDate - today) / (1000 * 60 * 60 * 24));
              const isUpcoming = daysUntil >= 0 && daysUntil <= 60;
              
              return `
                <div class="col-md-6">
                  <div class="card border-${occasion.color} h-100">
                    <div class="card-header bg-${occasion.color} text-white">
                      <h6 class="mb-0">${occasion.name}</h6>
                      ${isUpcoming ? `<small>${daysUntil} days away</small>` : ''}
                    </div>
                    <div class="card-body">
                      <p class="mb-2"><strong>Date:</strong> ${occasionDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                      <div class="mb-2">
                        <strong>Suggestions:</strong>
                        <ul class="mb-0 small">
                          ${occasion.suggestions.map(s => `<li>${s}</li>`).join('')}
                        </ul>
                      </div>
                      <button class="btn btn-sm btn-outline-${occasion.color}" onclick="findOccasionRecipes('${occasion.name}')">
                        Find Recipes
                      </button>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>

      <!-- Prep Time Scheduling -->
      <div class="card border-info shadow-sm mb-4">
        <div class="card-header bg-info text-white">
          <h5 class="mb-0">⏰ Prep Time Scheduling</h5>
        </div>
        <div class="card-body">
          <p class="text-muted mb-3">Schedule meal prep sessions based on your meal plan</p>
          
          <div class="alert alert-info">
            <strong>Tip:</strong> Add prep time reminders for complex recipes so you're not caught short on time!
          </div>
          
          <div class="list-group">
            <div class="list-group-item">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <strong>Weekly Prep Session</strong>
                  <br>
                  <small class="text-muted">Every Sunday 10:00 AM</small>
                </div>
                <button class="btn btn-sm btn-outline-primary" onclick="editPrepSchedule()">
                  Edit
                </button>
              </div>
            </div>
            <div class="list-group-item">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <strong>Mid-Week Check-In</strong>
                  <br>
                  <small class="text-muted">Every Wednesday 6:00 PM</small>
                </div>
                <button class="btn btn-sm btn-outline-primary" onclick="editPrepSchedule()">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="text-center">
        <button class="btn btn-success btn-lg px-5" onclick="renderWeeklyMealPlanner()">
          Weekly Meal Planner
        </button>
        <button class="btn btn-outline-success btn-lg px-5 ms-3" onclick="renderFindRecipesPage()">
          Browse Recipes
        </button>
      </div>
    </div>
  `;

  // Event listeners
  document.getElementById('homeBtn').addEventListener('click', renderHomePage);
  document.getElementById('backBtn').addEventListener('click', renderHomePage);
}

function exportMealPlanToCalendar() {
  showNotification('Calendar file downloaded! Import it into your calendar app.', 'success');
  // Implementation would generate actual ical file
}

function showAddReminderModal() {
  showNotification('Reminder feature coming soon!', 'info');
}

function editPrepSchedule() {
  showNotification('Schedule editing coming soon!', 'info');
}

function findOccasionRecipes(occasionName) {
  showNotification(`Finding recipes for ${occasionName}...`, 'info');
  renderFindRecipesPage();
}

function showImageSearchModal() {
  showNotification('Image search coming soon! Upload ingredient photos to find matching recipes.', 'info');
}

// Accessibility Functions
function loadAccessibilitySettings() {
  const saved = localStorage.getItem('accessibilitySettings');
  if (saved) {
    accessibilitySettings = JSON.parse(saved);
    applyAccessibilitySettings();
  }
}

function saveAccessibilitySettings() {
  localStorage.setItem('accessibilitySettings', JSON.stringify(accessibilitySettings));
  applyAccessibilitySettings();
}

function applyAccessibilitySettings() {
  document.documentElement.style.setProperty('--font-size-multiplier', accessibilitySettings.fontSize);
  
  if (accessibilitySettings.highContrast) {
    document.body.classList.add('high-contrast');
  } else {
    document.body.classList.remove('high-contrast');
  }
  
  if (accessibilitySettings.reducedMotion) {
    document.body.classList.add('reduced-motion');
  } else {
    document.body.classList.remove('reduced-motion');
  }
}

function adjustFontSize(direction) {
  const minSize = 0.8;
  const maxSize = 1.5;
  const step = 0.1;
  
  if (direction === 'increase' && accessibilitySettings.fontSize < maxSize) {
    accessibilitySettings.fontSize += step;
  } else if (direction === 'decrease' && accessibilitySettings.fontSize > minSize) {
    accessibilitySettings.fontSize -= step;
  }
  
  saveAccessibilitySettings();
  showNotification(`Font size: ${Math.round(accessibilitySettings.fontSize * 100)}%`, 'success');
}

function toggleHighContrast() {
  accessibilitySettings.highContrast = !accessibilitySettings.highContrast;
  saveAccessibilitySettings();
  showNotification(`High contrast mode: ${accessibilitySettings.highContrast ? 'ON' : 'OFF'}`, 'info');
}

function toggleReducedMotion() {
  accessibilitySettings.reducedMotion = !accessibilitySettings.reducedMotion;
  saveAccessibilitySettings();
  showNotification(`Reduced motion mode: ${accessibilitySettings.reducedMotion ? 'ON' : 'OFF'}`, 'info');
}

// Render Accessibility Settings Page
function renderAccessibilitySettings() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="homeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-success px-4" id="backBtn">Back</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold text-success mb-3">♿ Accessibility Settings</h1>
        <p class="lead text-secondary">Customize your BetterBites experience for better accessibility</p>
      </div>

      <!-- Font Size Adjustment -->
      <div class="card border-primary shadow-sm mb-4">
        <div class="card-header bg-primary text-white">
          <h5 class="mb-0">📝 Font Size Adjustment</h5>
        </div>
        <div class="card-body">
          <p class="text-muted mb-3">Adjust the font size to make text easier to read</p>
          
          <div class="d-flex align-items-center gap-4">
            <button class="btn btn-outline-primary" onclick="adjustFontSize('decrease')">
              <strong>A-</strong>
            </button>
            <div class="flex-grow-1 text-center">
              <span class="badge bg-primary" style="font-size: ${(accessibilitySettings.fontSize * 100).toFixed(0)}px">
                Current Size: ${Math.round(accessibilitySettings.fontSize * 100)}%
              </span>
            </div>
            <button class="btn btn-outline-primary" onclick="adjustFontSize('increase')">
              <strong>A+</strong>
            </button>
          </div>
          
          <div class="progress mt-3" style="height: 8px;">
            <div class="progress-bar bg-primary" role="progressbar" style="width: ${((accessibilitySettings.fontSize - 0.8) / 0.7 * 100)}%">
            </div>
          </div>
        </div>
      </div>

      <!-- High Contrast Mode -->
      <div class="card border-warning shadow-sm mb-4">
        <div class="card-header bg-warning text-dark">
          <h5 class="mb-0">🔲 High Contrast Mode</h5>
        </div>
        <div class="card-body">
          <p class="text-muted mb-3">Increase contrast for better visibility</p>
          
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="highContrastSwitch" ${accessibilitySettings.highContrast ? 'checked' : ''} onchange="toggleHighContrast()">
            <label class="form-check-label" for="highContrastSwitch">
              ${accessibilitySettings.highContrast ? 'High contrast mode is ON' : 'Enable high contrast mode'}
            </label>
          </div>
        </div>
      </div>

      <!-- Reduced Motion -->
      <div class="card border-info shadow-sm mb-4">
        <div class="card-header bg-info text-white">
          <h5 class="mb-0">🚫 Reduced Motion</h5>
        </div>
        <div class="card-body">
          <p class="text-muted mb-3">Minimize animations and transitions for a calmer experience</p>
          
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="reducedMotionSwitch" ${accessibilitySettings.reducedMotion ? 'checked' : ''} onchange="toggleReducedMotion()">
            <label class="form-check-label" for="reducedMotionSwitch">
              ${accessibilitySettings.reducedMotion ? 'Reduced motion is ON' : 'Enable reduced motion'}
            </label>
          </div>
        </div>
      </div>

      <!-- Keyboard Shortcuts -->
      <div class="card border-success shadow-sm mb-4">
        <div class="card-header bg-success text-white">
          <h5 class="mb-0">⌨️ Keyboard Shortcuts</h5>
        </div>
        <div class="card-body">
          <p class="text-muted mb-3">Navigate BetterBites using only your keyboard</p>
          
          <div class="list-group">
            <div class="list-group-item">
              <div class="d-flex justify-content-between">
                <strong>Ctrl/Cmd + K</strong>
                <span class="text-muted">Search recipes</span>
              </div>
            </div>
            <div class="list-group-item">
              <div class="d-flex justify-content-between">
                <strong>Ctrl/Cmd + D</strong>
                <span class="text-muted">Toggle dark mode</span>
              </div>
            </div>
            <div class="list-group-item">
              <div class="d-flex justify-content-between">
                <strong>Tab</strong>
                <span class="text-muted">Navigate between elements</span>
              </div>
            </div>
            <div class="list-group-item">
              <div class="d-flex justify-content-between">
                <strong>Esc</strong>
                <span class="text-muted">Go home</span>
              </div>
            </div>
            <div class="list-group-item">
              <div class="d-flex justify-content-between">
                <strong>Enter</strong>
                <span class="text-muted">Activate buttons</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="text-center">
        <button class="btn btn-success btn-lg px-5" onclick="renderHomePage()">
          Back to Home
        </button>
      </div>
    </div>
  `;

  // Update switches based on current settings
  document.getElementById('highContrastSwitch').checked = accessibilitySettings.highContrast;
  document.getElementById('reducedMotionSwitch').checked = accessibilitySettings.reducedMotion;

  // Event listeners
  document.getElementById('homeBtn').addEventListener('click', renderHomePage);
  document.getElementById('backBtn').addEventListener('click', renderHomePage);
}

function adjustFontSize(direction) {
  const minSize = 0.8;
  const maxSize = 1.5;
  const step = 0.1;
  
  if (direction === 'increase' && accessibilitySettings.fontSize < maxSize) {
    accessibilitySettings.fontSize += step;
  } else if (direction === 'decrease' && accessibilitySettings.fontSize > minSize) {
    accessibilitySettings.fontSize -= step;
  }
  
  saveAccessibilitySettings();
  showNotification(`Font size: ${Math.round(accessibilitySettings.fontSize * 100)}%`, 'success');
}

function toggleHighContrast() {
  accessibilitySettings.highContrast = !accessibilitySettings.highContrast;
  saveAccessibilitySettings();
  showNotification(`High contrast mode: ${accessibilitySettings.highContrast ? 'ON' : 'OFF'}`, 'info');
}

function toggleReducedMotion() {
  accessibilitySettings.reducedMotion = !accessibilitySettings.reducedMotion;
  saveAccessibilitySettings();
  showNotification(`Reduced motion mode: ${accessibilitySettings.reducedMotion ? 'ON' : 'OFF'}`, 'info');
}

// Personal Nutrition Report Functions
function loadNutritionReports() {
  const saved = localStorage.getItem('nutritionReports');
  if (saved) {
    nutritionReports = JSON.parse(saved);
  }
}

function saveNutritionReports() {
  localStorage.setItem('nutritionReports', JSON.stringify(nutritionReports));
}

async function generateWeeklySummary() {
  const summary = {
    totalCalories: 0,
    totalProtein: 0,
    totalCarbs: 0,
    totalFat: 0,
    avgCaloriesPerDay: 0,
    goalAchievement: {},
    recipesCooked: 0,
    topCategories: []
  };
  
  // Calculate totals for past 7 days
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    
    if (dailyNutrition[dateStr]) {
      const dayData = dailyNutrition[dateStr];
      summary.totalCalories += dayData.totals.calories;
      summary.totalProtein += dayData.totals.protein;
      summary.totalCarbs += dayData.totals.carbs;
      summary.totalFat += dayData.totals.fat;
      summary.recipesCooked += dayData.recipes.length;
    }
  }
  
  summary.avgCaloriesPerDay = Math.round(summary.totalCalories / 7);
  
  // Calculate goal achievement
  const wellnessProfile = isLoggedIn() ? await fetchWellnessProfile() : null;
  const targetCalories = wellnessProfile?.targetCaloriesPerDay || 2000;
  summary.goalAchievement = {
    calories: Math.round((summary.avgCaloriesPerDay / targetCalories) * 100),
    protein: Math.round((summary.totalProtein / (70 * 7)) * 100)
  };
  
  return summary;
}

async function generateMonthlySummary() {
  const summary = {
    totalCalories: 0,
    totalProtein: 0,
    totalCarbs: 0,
    totalFat: 0,
    avgCaloriesPerDay: 0,
    recipesCooked: 0,
    uniqueRecipes: 0,
    mealPlansCreated: 0
  };
  
  // Calculate totals for past 30 days
  for (let i = 29; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    
    if (dailyNutrition[dateStr]) {
      const dayData = dailyNutrition[dateStr];
      summary.totalCalories += dayData.totals.calories;
      summary.totalProtein += dayData.totals.protein;
      summary.totalCarbs += dayData.totals.carbs;
      summary.totalFat += dayData.totals.fat;
      summary.recipesCooked += dayData.recipes.length;
    }
  }
  
  summary.avgCaloriesPerDay = Math.round(summary.totalCalories / 30);
  
  // Count meal plans
  summary.mealPlansCreated = Object.keys(weeklyMealPlan).length;
  
  return summary;
}

function analyzeRecipeDiversity() {
  const categories = {};
  let totalRecipes = 0;
  
  // Count recipes by category
  for (const date in dailyNutrition) {
    const dayData = dailyNutrition[date];
    dayData.recipes.forEach(recipeId => {
      totalRecipes++;
      // Would need to fetch recipe to get category
    });
  }
  
  return {
    totalRecipes,
    uniqueRecipes: Object.keys(new Set()),
    categories: categories,
    diversityScore: 0
  };
}

function calculateCostAnalysis() {
  // Estimate cost based on number of recipes
  const mealsPerWeek = Object.keys(weeklyMealPlan).length * 3; // 3 meals per day
  const avgMealCost = 5; // $5 per meal estimate
  
  return {
    weeklyEstimated: mealsPerWeek * avgMealCost,
    monthlyEstimated: mealsPerWeek * 4 * avgMealCost,
    avgPerMeal: avgMealCost,
    moneySaved: 0 // Compared to eating out
  };
}

function calculateTimeSaved() {
  const plannedMeals = Object.keys(weeklyMealPlan).length * 3;
  const timeSavedPerMeal = 20; // 20 minutes saved per meal through planning
  
  return {
    weeklyMinutes: plannedMeals * timeSavedPerMeal,
    weeklyHours: Math.round((plannedMeals * timeSavedPerMeal) / 60),
    monthlyHours: Math.round((plannedMeals * 4 * timeSavedPerMeal) / 60),
    avgPerMeal: timeSavedPerMeal
  };
}

// Render Personal Nutrition Report
async function renderPersonalNutritionReport() {
  const app = document.getElementById('app');
  
  const weeklySummary = await generateWeeklySummary();
  const monthlySummary = await generateMonthlySummary();
  const diversityAnalysis = analyzeRecipeDiversity();
  const costAnalysis = calculateCostAnalysis();
  const timeAnalysis = calculateTimeSaved();
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="homeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-success px-4" id="backBtn">Back</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold text-success mb-3">📊 Personal Nutrition Report</h1>
        <p class="lead text-secondary">Comprehensive insights into your nutrition and meal planning</p>
      </div>

      <!-- Weekly Summary -->
      <div class="card border-primary shadow-sm mb-4">
        <div class="card-header bg-primary text-white">
          <h5 class="mb-0">📅 Weekly Nutrition Summary</h5>
        </div>
        <div class="card-body">
          <div class="row g-4">
            <div class="col-md-3">
              <div class="text-center p-3 bg-light rounded">
                <h6 class="text-muted mb-2">Total Calories</h6>
                <div class="h3 fw-bold text-primary">${weeklySummary.totalCalories.toLocaleString()}</div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="text-center p-3 bg-light rounded">
                <h6 class="text-muted mb-2">Avg per Day</h6>
                <div class="h3 fw-bold text-success">${weeklySummary.avgCaloriesPerDay}</div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="text-center p-3 bg-light rounded">
                <h6 class="text-muted mb-2">Recipes Cooked</h6>
                <div class="h3 fw-bold text-warning">${weeklySummary.recipesCooked}</div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="text-center p-3 bg-light rounded">
                <h6 class="text-muted mb-2">Goal Achievement</h6>
                <div class="h3 fw-bold text-danger">${weeklySummary.goalAchievement.calories}%</div>
              </div>
            </div>
          </div>
          
          <div class="row g-3 mt-3">
            <div class="col-md-4">
              <strong>Total Protein:</strong> ${Math.round(weeklySummary.totalProtein)}g
            </div>
            <div class="col-md-4">
              <strong>Total Carbs:</strong> ${Math.round(weeklySummary.totalCarbs)}g
            </div>
            <div class="col-md-4">
              <strong>Total Fat:</strong> ${Math.round(weeklySummary.totalFat)}g
            </div>
          </div>
        </div>
      </div>

      <!-- Monthly Summary -->
      <div class="card border-success shadow-sm mb-4">
        <div class="card-header bg-success text-white">
          <h5 class="mb-0">📆 Monthly Overview</h5>
        </div>
        <div class="card-body">
          <div class="row g-4">
            <div class="col-md-4">
              <div class="text-center p-4 bg-light rounded border border-success">
                <h6 class="text-muted mb-3">Total Calories</h6>
                <div class="display-6 fw-bold text-success">${monthlySummary.totalCalories.toLocaleString()}</div>
                <small class="text-muted">Over 30 days</small>
              </div>
            </div>
            <div class="col-md-4">
              <div class="text-center p-4 bg-light rounded border border-primary">
                <h6 class="text-muted mb-3">Recipes Cooked</h6>
                <div class="display-6 fw-bold text-primary">${monthlySummary.recipesCooked}</div>
                <small class="text-muted">This month</small>
              </div>
            </div>
            <div class="col-md-4">
              <div class="text-center p-4 bg-light rounded border border-warning">
                <h6 class="text-muted mb-3">Meal Plans Created</h6>
                <div class="display-6 fw-bold text-warning">${monthlySummary.mealPlansCreated}</div>
                <small class="text-muted">Weekly plans</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Goal Achievement -->
      <div class="card border-warning shadow-sm mb-4">
        <div class="card-header bg-warning text-dark">
          <h5 class="mb-0">🎯 Goal Achievement</h5>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <div class="d-flex justify-content-between mb-2">
              <strong>Calorie Goals</strong>
              <span class="badge bg-success">${weeklySummary.goalAchievement.calories}%</span>
            </div>
            <div class="progress" style="height: 25px;">
              <div class="progress-bar bg-success" role="progressbar" style="width: ${Math.min(weeklySummary.goalAchievement.calories, 100)}%">
                ${weeklySummary.goalAchievement.calories}%
              </div>
            </div>
          </div>
          
          <div class="mb-3">
            <div class="d-flex justify-content-between mb-2">
              <strong>Protein Goals</strong>
              <span class="badge bg-primary">${weeklySummary.goalAchievement.protein}%</span>
            </div>
            <div class="progress" style="height: 25px;">
              <div class="progress-bar bg-primary" role="progressbar" style="width: ${Math.min(weeklySummary.goalAchievement.protein, 100)}%">
                ${weeklySummary.goalAchievement.protein}%
              </div>
            </div>
          </div>
          
          <p class="text-muted mt-3">
            <small>Based on your wellness profile target goals</small>
          </p>
        </div>
      </div>

      <!-- Cost Analysis -->
      <div class="card border-danger shadow-sm mb-4">
        <div class="card-header bg-danger text-white">
          <h5 class="mb-0">💰 Cost Analysis</h5>
        </div>
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-6">
              <div class="card border-danger h-100">
                <div class="card-body">
                  <h6 class="text-danger mb-3">Weekly Estimate</h6>
                  <div class="display-5 fw-bold text-danger">$${costAnalysis.weeklyEstimated}</div>
                  <small class="text-muted">Based on planned meals</small>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card border-danger h-100">
                <div class="card-body">
                  <h6 class="text-danger mb-3">Monthly Estimate</h6>
                  <div class="display-5 fw-bold text-danger">$${costAnalysis.monthlyEstimated}</div>
                  <small class="text-muted">Estimated cost savings</small>
                </div>
              </div>
            </div>
          </div>
          
          <div class="alert alert-info mt-3">
            <strong>💡 Tip:</strong> Meal planning helps you save money by avoiding last-minute grocery runs and takeout orders!
          </div>
        </div>
      </div>

      <!-- Time Saved -->
      <div class="card border-info shadow-sm mb-4">
        <div class="card-header bg-info text-white">
          <h5 class="mb-0">⏰ Time Saved</h5>
        </div>
        <div class="card-body">
          <div class="row g-4">
            <div class="col-md-4">
              <div class="text-center p-4 bg-light rounded">
                <h6 class="text-muted mb-3">This Week</h6>
                <div class="display-5 fw-bold text-info">${timeAnalysis.weeklyHours}h</div>
                <small class="text-muted">${timeAnalysis.weeklyMinutes} minutes</small>
              </div>
            </div>
            <div class="col-md-4">
              <div class="text-center p-4 bg-light rounded">
                <h6 class="text-muted mb-3">This Month</h6>
                <div class="display-5 fw-bold text-info">${timeAnalysis.monthlyHours}h</div>
                <small class="text-muted">Through meal planning</small>
              </div>
            </div>
            <div class="col-md-4">
              <div class="text-center p-4 bg-light rounded">
                <h6 class="text-muted mb-3">Per Meal</h6>
                <div class="display-5 fw-bold text-info">${timeAnalysis.avgPerMeal}m</div>
                <small class="text-muted">Average time saved</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recipe Diversity -->
      <div class="card border-success shadow-sm mb-4">
        <div class="card-header bg-success text-white">
          <h5 class="mb-0">🍽️ Recipe Diversity</h5>
        </div>
        <div class="card-body">
          <p class="text-muted mb-3">Analyze the variety in your meal planning</p>
          
          <div class="row g-3">
            <div class="col-md-6">
              <strong>Total Recipes:</strong> ${diversityAnalysis.totalRecipes}
            </div>
            <div class="col-md-6">
              <strong>Unique Recipes:</strong> ${diversityAnalysis.uniqueRecipes}
            </div>
          </div>
          
          <div class="alert alert-success mt-3">
            <strong>🌟 Great Job!</strong> You're maintaining a diverse diet with a good variety of recipes.
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="text-center">
        <button class="btn btn-success btn-lg px-5" onclick="renderNutritionalInsights()">
          View Detailed Insights
        </button>
        <button class="btn btn-outline-success btn-lg px-5 ms-3" onclick="renderWeeklyMealPlanner()">
          Plan Next Week
        </button>
      </div>
    </div>
  `;

  // Event listeners
  document.getElementById('homeBtn').addEventListener('click', renderHomePage);
  document.getElementById('backBtn').addEventListener('click', renderHomePage);
}

// Trends and Patterns Functions
function loadTrendsData() {
  const saved = localStorage.getItem('trendsData');
  if (saved) {
    trendsData = JSON.parse(saved);
  }
}

function saveTrendsData() {
  localStorage.setItem('trendsData', JSON.stringify(trendsData));
}

async function getMostCookedRecipes() {
  const recipeCount = {};
  
  // Count recipes from daily nutrition tracking
  for (const date in dailyNutrition) {
    const dayData = dailyNutrition[date];
    dayData.recipes.forEach(recipeId => {
      if (!recipeCount[recipeId]) {
        recipeCount[recipeId] = { count: 0, name: 'Recipe', categories: [] };
      }
      recipeCount[recipeId].count++;
    });
  }
  
  // Also count from meal plans
  for (const day in weeklyMealPlan) {
    Object.values(weeklyMealPlan[day]).forEach(recipes => {
      recipes.forEach(recipeId => {
        if (!recipeCount[recipeId]) {
          recipeCount[recipeId] = { count: 0, name: 'Recipe', categories: [] };
        }
        recipeCount[recipeId].count++;
      });
    });
  }
  
  // Try to fetch recipe names
  for (const recipeId in recipeCount) {
    try {
      const recipe = await fetchRecipeById(recipeId);
      if (recipe) {
        recipeCount[recipeId].name = recipe.name;
        recipeCount[recipeId].categories = recipe.categories || [];
      }
    } catch (error) {
      // Recipe not found, skip
    }
  }
  
  return Object.entries(recipeCount)
    .map(([id, data]) => ({ id, ...data }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
}

function getFavoriteIngredients() {
  const ingredientCount = {};
  
  // Count ingredients from meal plans and recipes
  for (const day in weeklyMealPlan) {
    Object.values(weeklyMealPlan[day]).forEach(recipes => {
      recipes.forEach(async recipeId => {
        try {
          const recipe = await fetchRecipeById(recipeId);
          if (recipe && recipe.ingredients) {
            recipe.ingredients.forEach(ingredient => {
              const ingName = ingredient.name || ingredient;
              ingredientCount[ingName] = (ingredientCount[ingName] || 0) + 1;
            });
          }
        } catch (error) {
          // Recipe not found
        }
      });
    });
  }
  
  return Object.entries(ingredientCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 15);
}

function analyzeCookingTimePatterns() {
  const patterns = {
    quickMeals: 0,      // < 30 min
    mediumMeals: 0,    // 30-60 min
    longMeals: 0,      // > 60 min
    avgTime: 0
  };
  
  let totalTime = 0;
  let recipeCount = 0;
  
  // Analyze from meal plans
  for (const day in weeklyMealPlan) {
    Object.values(weeklyMealPlan[day]).forEach(recipes => {
      recipes.forEach(async recipeId => {
        try {
          const recipe = await fetchRecipeById(recipeId);
          if (recipe && recipe.prepTime && recipe.cookTime) {
            const totalMinutes = (parseInt(recipe.prepTime) || 0) + (parseInt(recipe.cookTime) || 0);
            totalTime += totalMinutes;
            recipeCount++;
            
            if (totalMinutes < 30) patterns.quickMeals++;
            else if (totalMinutes < 60) patterns.mediumMeals++;
            else patterns.longMeals++;
          }
        } catch (error) {
          // Recipe not found
        }
      });
    });
  }
  
  patterns.avgTime = recipeCount > 0 ? Math.round(totalTime / recipeCount) : 0;
  
  return patterns;
}

function getCalorieTrends() {
  const trends = [];
  
  // Get calories for each day
  for (const date in dailyNutrition) {
    trends.push({
      date,
      calories: dailyNutrition[date].totals.calories,
      dayOfWeek: new Date(date).toLocaleDateString('en-US', { weekday: 'short' })
    });
  }
  
  // Sort by date
  trends.sort((a, b) => new Date(a.date) - new Date(b.date));
  
  return trends.slice(-30); // Last 30 days
}

function analyzeNutrientBalance() {
  const analysis = {
    proteinBalance: 0,
    carbBalance: 0,
    fatBalance: 0,
    fiber: 0,
    vitamins: 0,
    minerals: 0
  };
  
  let totalDays = 0;
  
  // Calculate average nutrients over all tracked days
  for (const date in dailyNutrition) {
    const dayData = dailyNutrition[date];
    analysis.proteinBalance += dayData.totals.protein || 0;
    analysis.carbBalance += dayData.totals.carbs || 0;
    analysis.fatBalance += dayData.totals.fat || 0;
    analysis.fiber += dayData.totals.fiber || 0;
    totalDays++;
  }
  
  if (totalDays > 0) {
    analysis.proteinBalance = Math.round(analysis.proteinBalance / totalDays);
    analysis.carbBalance = Math.round(analysis.carbBalance / totalDays);
    analysis.fatBalance = Math.round(analysis.fatBalance / totalDays);
    analysis.fiber = Math.round(analysis.fiber / totalDays);
  }
  
  // Calculate balance percentages
  const totalMacros = analysis.proteinBalance + analysis.carbBalance + analysis.fatBalance;
  const balance = {
    protein: totalMacros > 0 ? Math.round((analysis.proteinBalance / totalMacros) * 100) : 0,
    carbs: totalMacros > 0 ? Math.round((analysis.carbBalance / totalMacros) * 100) : 0,
    fat: totalMacros > 0 ? Math.round((analysis.fatBalance / totalMacros) * 100) : 0
  };
  
  return {
    ...analysis,
    balance
  };
}

// Render Trends & Patterns
async function renderTrendsAndPatterns() {
  const app = document.getElementById('app');
  
  const mostCooked = await getMostCookedRecipes();
  const favoriteIngredients = getFavoriteIngredients();
  const cookingTimePatterns = analyzeCookingTimePatterns();
  const calorieTrends = getCalorieTrends();
  const nutrientBalance = analyzeNutrientBalance();
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="homeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-success px-4" id="backBtn">Back</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold text-success mb-3">📈 Trends & Patterns</h1>
        <p class="lead text-secondary">Discover your eating habits and preferences</p>
      </div>

      <!-- Most Cooked Recipes -->
      <div class="card border-primary shadow-sm mb-4">
        <div class="card-header bg-primary text-white">
          <h5 class="mb-0">⭐ Most Cooked Recipes</h5>
        </div>
        <div class="card-body">
          ${mostCooked.length > 0 ? `
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Recipe</th>
                    <th>Times Cooked</th>
                  </tr>
                </thead>
                <tbody>
                  ${mostCooked.map((recipe, index) => `
                    <tr>
                      <td><strong>${index + 1}</strong></td>
                      <td>${recipe.name}</td>
                      <td><span class="badge bg-primary">${recipe.count} times</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          ` : '<p class="text-muted text-center">No cooking data yet. Start tracking your meals!</p>'}
        </div>
      </div>

      <!-- Favorite Ingredients -->
      <div class="card border-success shadow-sm mb-4">
        <div class="card-header bg-success text-white">
          <h5 class="mb-0">🥗 Favorite Ingredients</h5>
        </div>
        <div class="card-body">
          ${favoriteIngredients.length > 0 ? `
            <div class="row g-3">
              ${favoriteIngredients.map(ingredient => `
                <div class="col-md-4 col-sm-6">
                  <div class="card border-success h-100">
                    <div class="card-body">
                      <h6 class="mb-2">${ingredient.name}</h6>
                      <div class="progress" style="height: 25px;">
                        <div class="progress-bar bg-success" role="progressbar" style="width: ${Math.min((ingredient.count / favoriteIngredients[0].count) * 100, 100)}%">
                          ${ingredient.count} times
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : '<p class="text-muted text-center">No ingredient data yet. Plan more meals to see patterns!</p>'}
        </div>
      </div>

      <!-- Cooking Time Patterns -->
      <div class="card border-warning shadow-sm mb-4">
        <div class="card-header bg-warning text-dark">
          <h5 class="mb-0">⏱️ Cooking Time Patterns</h5>
        </div>
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-4">
              <div class="text-center p-4 bg-light rounded">
                <h6 class="text-muted mb-3">Quick Meals</h6>
                <div class="display-5 fw-bold text-success">${cookingTimePatterns.quickMeals}</div>
                <small class="text-muted">&lt; 30 minutes</small>
              </div>
            </div>
            <div class="col-md-4">
              <div class="text-center p-4 bg-light rounded">
                <h6 class="text-muted mb-3">Medium Meals</h6>
                <div class="display-5 fw-bold text-warning">${cookingTimePatterns.mediumMeals}</div>
                <small class="text-muted">30-60 minutes</small>
              </div>
            </div>
            <div class="col-md-4">
              <div class="text-center p-4 bg-light rounded">
                <h6 class="text-muted mb-3">Long Meals</h6>
                <div class="display-5 fw-bold text-info">${cookingTimePatterns.longMeals}</div>
                <small class="text-muted">&gt; 60 minutes</small>
              </div>
            </div>
          </div>
          
          <div class="alert alert-info mt-3">
            <strong>Average Cooking Time:</strong> ${cookingTimePatterns.avgTime} minutes per recipe
          </div>
        </div>
      </div>

      <!-- Calorie Trends -->
      <div class="card border-danger shadow-sm mb-4">
        <div class="card-header bg-danger text-white">
          <h5 class="mb-0">📊 Calorie Trends (Last 30 Days)</h5>
        </div>
        <div class="card-body">
          ${calorieTrends.length > 0 ? `
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Day</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  ${calorieTrends.slice(-14).map(trend => `
                    <tr>
                      <td>${trend.date}</td>
                      <td>${trend.dayOfWeek}</td>
                      <td><span class="badge bg-danger">${trend.calories} cal</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          ` : '<p class="text-muted text-center">No calorie data tracked yet. Log your meals to see trends!</p>'}
        </div>
      </div>

      <!-- Nutrient Balance Analysis -->
      <div class="card border-info shadow-sm mb-4">
        <div class="card-header bg-info text-white">
          <h5 class="mb-0">⚖️ Nutrient Balance Analysis</h5>
        </div>
        <div class="card-body">
          <h6 class="mb-3">Macro Distribution</h6>
          
          <div class="mb-3">
            <div class="d-flex justify-content-between mb-2">
              <strong>Protein</strong>
              <span class="badge bg-primary">${nutrientBalance.balance.protein}%</span>
            </div>
            <div class="progress" style="height: 30px;">
              <div class="progress-bar bg-primary" role="progressbar" style="width: ${nutrientBalance.balance.protein}%">
                ${nutrientBalance.proteinBalance}g/day
              </div>
            </div>
          </div>
          
          <div class="mb-3">
            <div class="d-flex justify-content-between mb-2">
              <strong>Carbohydrates</strong>
              <span class="badge bg-warning">${nutrientBalance.balance.carbs}%</span>
            </div>
            <div class="progress" style="height: 30px;">
              <div class="progress-bar bg-warning" role="progressbar" style="width: ${nutrientBalance.balance.carbs}%">
                ${nutrientBalance.carbBalance}g/day
              </div>
            </div>
          </div>
          
          <div class="mb-3">
            <div class="d-flex justify-content-between mb-2">
              <strong>Fat</strong>
              <span class="badge bg-danger">${nutrientBalance.balance.fat}%</span>
            </div>
            <div class="progress" style="height: 30px;">
              <div class="progress-bar bg-danger" role="progressbar" style="width: ${nutrientBalance.balance.fat}%">
                ${nutrientBalance.fatBalance}g/day
              </div>
            </div>
          </div>
          
          <div class="alert alert-success mt-3">
            <strong>💡 Insight:</strong> Your diet shows a ${nutrientBalance.balance.protein > 30 ? 'high-protein' : nutrientBalance.balance.carbs > 50 ? 'carb-focused' : 'balanced'} macro distribution.
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="text-center">
        <button class="btn btn-success btn-lg px-5" onclick="renderPersonalNutritionReport()">
          View Full Report
        </button>
        <button class="btn btn-outline-success btn-lg px-5 ms-3" onclick="renderFindRecipesPage()">
          Find New Recipes
        </button>
      </div>
    </div>
  `;

  // Event listeners
  document.getElementById('homeBtn').addEventListener('click', renderHomePage);
  document.getElementById('backBtn').addEventListener('click', renderHomePage);
}

// Make functions globally available
window.exportMealPlanToCalendar = exportMealPlanToCalendar;
window.adjustFontSize = adjustFontSize;
window.toggleHighContrast = toggleHighContrast;
window.toggleReducedMotion = toggleReducedMotion;
window.showAddReminderModal = showAddReminderModal;
window.editPrepSchedule = editPrepSchedule;
window.findOccasionRecipes = findOccasionRecipes;
window.startVoiceSearch = startVoiceSearch;
window.stopVoiceSearch = stopVoiceSearch;

// Render Nutritional Learning Hub
function renderNutritionalLearningHub() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container-fluid px-4">
        <a class="navbar-brand fw-bold fs-3" href="#" id="homeBtn">
          <span class="text-success">🍽️</span> BetterBites
        </a>
        <div class="d-flex align-items-center">
          <button class="btn btn-outline-success px-4" id="backBtn">Back</button>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="container py-5">
      <div class="text-center mb-5">
        <h1 class="display-4 fw-bold text-success mb-3">📚 Nutritional Learning Hub</h1>
        <p class="lead text-secondary">Educate yourself about nutrition and healthy eating</p>
      </div>

      <!-- Articles Section -->
      <div class="card border-info shadow-sm mb-4">
        <div class="card-header bg-info text-white">
          <h5 class="mb-0">📖 Healthy Eating Articles</h5>
        </div>
        <div class="card-body">
          <div class="row g-3">
            ${learningHubContent.articles.map(article => `
              <div class="col-md-6">
                <div class="card h-100">
                  <div class="card-body">
                    <div class="d-flex justify-content-between mb-2">
                      <span class="badge bg-info">${article.category}</span>
                      <small class="text-muted">${article.readTime}</small>
                    </div>
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text text-muted">${article.content}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <small class="text-muted">By ${article.author}</small>
                      <small class="text-muted">${article.date}</small>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Ingredient Spotlights -->
      <div class="card border-success shadow-sm mb-4">
        <div class="card-header bg-success text-white">
          <h5 class="mb-0">✨ Ingredient Spotlights</h5>
        </div>
        <div class="card-body">
          <div class="row g-3">
            ${learningHubContent.ingredientSpotlights.map(ingredient => `
              <div class="col-md-6">
                <div class="card border-success">
                  <div class="card-body">
                    <h5 class="text-success mb-2">${ingredient.name}</h5>
                    <p class="text-muted mb-2">${ingredient.description}</p>
                    <div class="mb-2">
                      <strong>Benefits:</strong>
                      <ul class="mb-0 small">
                        ${ingredient.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                      </ul>
                    </div>
                    <p class="mb-0"><small class="text-success"><strong>Nutrition:</strong> ${ingredient.nutritionalValue}</small></p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Nutrition Myths Debunked -->
      <div class="card border-warning shadow-sm mb-4">
        <div class="card-header bg-warning text-dark">
          <h5 class="mb-0">❌ Nutrition Myths Debunked</h5>
        </div>
        <div class="card-body">
          <div class="row g-3">
            ${learningHubContent.nutritionMyths.map((myth, index) => `
              <div class="col-md-6">
                <div class="card">
                  <div class="card-body">
                    <h6 class="text-danger mb-2">❌ Myth:</h6>
                    <p class="mb-2">"${myth.myth}"</p>
                    <h6 class="text-success mb-2">✅ Truth:</h6>
                    <p class="mb-1">${myth.truth}</p>
                    <small class="text-muted">${myth.explanation}</small>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Seasonal Eating Guides -->
      <div class="card border-primary shadow-sm mb-4">
        <div class="card-header bg-primary text-white">
          <h5 class="mb-0">🍂 Seasonal Eating Guides</h5>
        </div>
        <div class="card-body">
          <div class="row g-4">
            ${learningHubContent.seasonalGuides.map(guide => `
              <div class="col-md-6">
                <div class="card border-primary h-100">
                  <div class="card-header bg-primary text-white">
                    <h5 class="mb-0">${guide.season}</h5>
                  </div>
                  <div class="card-body">
                    <p class="text-muted mb-3"><strong>Focus:</strong> ${guide.focus}</p>
                    
                    <div class="mb-3">
                      <strong>Tips:</strong>
                      <ul class="mb-0 small">
                        ${guide.tips.map(tip => `<li>${tip}</li>`).join('')}
                      </ul>
                    </div>
                    
                    <div>
                      <strong>Seasonal Ingredients:</strong>
                      <div class="d-flex flex-wrap gap-2 mt-2">
                        ${guide.seasonalIngredients.map(ing => `
                          <span class="badge bg-success">${ing}</span>
                        `).join('')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="text-center">
        <button class="btn btn-success btn-lg px-5" onclick="renderFindRecipesPage()">
          Browse Recipes
        </button>
        <button class="btn btn-outline-success btn-lg px-5 ms-3" onclick="renderWellnessProfile()">
          Set Health Goals
        </button>
      </div>
    </div>
  `;

  // Event listeners
  document.getElementById('homeBtn').addEventListener('click', renderHomePage);
  document.getElementById('backBtn').addEventListener('click', renderHomePage);
}

// Initialize shopping list on page load
document.addEventListener('DOMContentLoaded', () => {
  loadShoppingList();
  loadWeeklyMealPlan();
  loadPantry();
  loadCollections();
  loadFollowingList();
  loadRecipeReviews();
  loadRecipeComments();
  loadRecipeTips();
  loadProgress();
  loadCalendarEvents();
  loadMealReminders();
  loadAccessibilitySettings();
  loadNutritionReports();
  loadTrendsData();
});

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  // Initialize dark mode first
  initDarkMode();
  
  // Load user authentication state
  loadUser();
  renderHomePage();
  
  // Add keyboard shortcuts
  setupKeyboardShortcuts();
});

// Dark Mode Management
function initDarkMode() {
  // Check for saved theme, otherwise use system preference
  const savedTheme = localStorage.getItem('theme');
  let theme = 'light';
  
  if (savedTheme) {
    theme = savedTheme;
  } else {
    // Detect system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme = prefersDark ? 'dark' : 'light';
  }
  
  document.documentElement.setAttribute('data-theme', theme);
  updateDarkModeButton(theme);
  
  // Listen for system preference changes (only if no saved preference)
  if (!localStorage.getItem('theme')) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      updateDarkModeButton(e.matches ? 'dark' : 'light');
    });
  }
}

function toggleDarkMode() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateDarkModeButton(newTheme);
  
  showNotification(`Switched to ${newTheme} mode! ${newTheme === 'dark' ? '🌙' : '☀️'}`, 'info');
}

function updateDarkModeButton(theme) {
  const darkModeBtn = document.getElementById('darkModeBtn');
  if (darkModeBtn) {
    darkModeBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    darkModeBtn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }
  
  // Update meta theme-color for PWA
  const themeColorMeta = document.getElementById('themeColorMeta');
  if (themeColorMeta) {
    themeColorMeta.content = theme === 'dark' ? '#1a3a2e' : '#28a745';
  }
}

// Keyboard shortcuts for better UX
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Don't trigger shortcuts when typing in inputs
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return;
    }
    
    // Ctrl/Cmd + K: Search recipes
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (document.getElementById('findRecipesBtn')) {
        document.getElementById('findRecipesBtn').click();
      }
    }
    
    // Ctrl/Cmd + N: New recipe
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
      e.preventDefault();
      if (document.getElementById('makeRecipeBtn')) {
        document.getElementById('makeRecipeBtn').click();
      }
    }
    
    // Ctrl/Cmd + D: Toggle dark mode
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
      e.preventDefault();
      toggleDarkMode();
    }
    
    // Esc: Go home (if not on home)
    if (e.key === 'Escape') {
      const currentPath = window.location.hash || '';
      if (currentPath !== '' && document.getElementById('homeBtn')) {
        document.getElementById('homeBtn').click();
      }
    }
    
    // / (forward slash): Focus search
    if (e.key === '/' && !(e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      const searchInput = document.getElementById('searchInput');
      if (searchInput) {
        searchInput.focus();
      }
    }
  });
}

