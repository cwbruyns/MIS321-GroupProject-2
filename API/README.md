# BetterBites Recipe API

## Overview
This API provides endpoints for managing and retrieving recipe data for the BetterBites application.

## Base URL
```
https://localhost:7000/api
```

## Endpoints

### Get All Recipes
```
GET /api/recipe
```
Returns a list of all available recipes.

### Get Recipe by ID
```
GET /api/recipe/{id}
```
Returns detailed information about a specific recipe including ingredients and instructions.

### Get Recipes by Category
```
GET /api/recipe/category/{category}
```
Returns recipes filtered by category (breakfast, lunch, dinner, etc.).

### Search Recipes
```
GET /api/recipe/search?query={searchTerm}
```
Returns recipes matching the search query. Searches through recipe titles, descriptions, tags, and ingredient names.

## Recipe Model
```json
{
  "id": 1,
  "title": "Recipe Name",
  "description": "Recipe description",
  "category": "breakfast|lunch|dinner",
  "prepTimeMinutes": 10,
  "cookTimeMinutes": 15,
  "servings": 2,
  "calories": 300,
  "image": "🥑",
  "tags": ["vegetarian", "quick"],
  "difficulty": "Easy|Medium|Hard",
  "ingredients": [
    {
      "id": 1,
      "name": "Ingredient Name",
      "amount": "1",
      "unit": "cup",
      "notes": "optional notes"
    }
  ],
  "instructions": [
    "Step 1 instruction",
    "Step 2 instruction"
  ]
}
```

## Running the API
1. Navigate to the API directory
2. Run `dotnet run`
3. The API will be available at `https://localhost:7000`

## CORS Configuration
The API is configured to allow requests from any origin for development purposes.

