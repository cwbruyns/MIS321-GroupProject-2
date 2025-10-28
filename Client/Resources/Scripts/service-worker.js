// BetterBites Service Worker
// Enables offline access and caching

const CACHE_NAME = 'betterbites-v1';
const RUNTIME_CACHE = 'betterbites-runtime-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/Resources/Scripts/index.js',
  '/Resources/Styles/index.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
  'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        console.error('Service Worker: Error caching assets', error);
      })
  );
  
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Skip API calls in development
  if (event.request.url.includes('localhost:7000') || 
      event.request.url.includes('127.0.0.1:7000')) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          console.log('Service Worker: Serving from cache', event.request.url);
          return cachedResponse;
        }
        
        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response
            const responseToCache = response.clone();
            
            // Cache the response
            caches.open(RUNTIME_CACHE)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // If fetch fails, return offline page or cached response
            if (event.request.destination === 'document') {
              return caches.match('/index.html');
            }
          });
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync', event.tag);
  
  if (event.tag === 'sync-recipes') {
    event.waitUntil(syncRecipes());
  }
});

// Function to sync recipes when online
async function syncRecipes() {
  try {
    // Get cached recipes
    const cache = await caches.open(RUNTIME_CACHE);
    const requests = await cache.keys();
    
    // Sync each recipe
    for (const request of requests) {
      if (request.url.includes('/api/recipe')) {
        try {
          await fetch(request);
          console.log('Service Worker: Synced recipe', request.url);
        } catch (error) {
          console.error('Service Worker: Error syncing recipe', error);
        }
      }
    }
  } catch (error) {
    console.error('Service Worker: Error in syncRecipes', error);
  }
}

// Push notifications for meal reminders
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push notification received', event);
  
  const options = {
    body: event.data ? event.data.text() : 'Meal reminder from BetterBites',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [200, 100, 200],
    tag: 'meal-reminder',
    requireInteraction: false,
    actions: [
      {
        action: 'view',
        title: 'View Recipe'
      },
      {
        action: 'dismiss',
        title: 'Dismiss'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('BetterBites', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification clicked', event);
  
  event.notification.close();
  
  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Message handler for communication from main app
self.addEventListener('message', (event) => {
  console.log('Service Worker: Message received', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_RECIPES') {
    const recipes = event.data.recipes;
    event.waitUntil(cacheRecipes(recipes));
  }
});

// Function to cache recipes
async function cacheRecipes(recipes) {
  const cache = await caches.open(RUNTIME_CACHE);
  
  for (const recipe of recipes) {
    const url = `/api/recipe/${recipe.id}`;
    const response = new Response(JSON.stringify(recipe), {
      headers: { 'Content-Type': 'application/json' }
    });
    
    await cache.put(url, response);
  }
  
  console.log('Service Worker: Cached recipes', recipes.length);
}

// Periodic background sync for meal reminders
self.addEventListener('periodicsync', (event) => {
  console.log('Service Worker: Periodic sync', event.tag);
  
  if (event.tag === 'meal-reminders') {
    event.waitUntil(syncMealReminders());
  }
});

// Function to sync meal reminders
async function syncMealReminders() {
  try {
    // Get reminders from IndexedDB or cache
    // Show notifications for upcoming meals
    console.log('Service Worker: Syncing meal reminders');
  } catch (error) {
    console.error('Service Worker: Error syncing reminders', error);
  }
}


