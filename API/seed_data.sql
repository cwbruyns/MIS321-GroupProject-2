-- Clear existing data
DELETE FROM Ingredients;
DELETE FROM Recipes;

-- Insert sample recipes
INSERT INTO Recipes (Id, Title, Description, Category, PrepTimeMinutes, CookTimeMinutes, Servings, Calories, Image, Tags, Instructions, Difficulty) VALUES
(1, 'Avocado Toast Bowl', 'A nutritious and delicious breakfast bowl featuring creamy avocado, perfectly cooked eggs, and fresh tomatoes.', 'breakfast', 5, 5, 1, 320, '🥑', 'vegetarian,quick,healthy', 'Heat olive oil in a non-stick pan over medium heat.|||Crack eggs into the pan and cook for 3-4 minutes until whites are set but yolks are still runny.|||While eggs cook, toast the bread slices until golden brown.|||Cut the avocado in half, remove the pit, and slice thinly.|||Arrange avocado slices on the toasted bread.|||Top with cherry tomatoes and cooked eggs.|||Season with salt and pepper to taste.|||Serve immediately while warm.', 'Easy'),
(2, 'Quinoa Power Salad', 'A protein-packed salad with quinoa, fresh vegetables, and a tangy dressing that''s perfect for lunch or dinner.', 'lunch', 10, 15, 2, 280, '🥗', 'vegan,gluten-free,high-protein', 'Rinse quinoa thoroughly under cold water until water runs clear.|||Cook quinoa according to package instructions (usually 1:2 ratio with water).|||Let quinoa cool completely before assembling salad.|||In a large bowl, combine cooled quinoa with baby spinach.|||Add cherry tomatoes, cucumber, red bell pepper, and red onion.|||In a small bowl, whisk together lemon juice, olive oil, salt, and pepper.|||Pour dressing over salad and toss gently to combine.|||Let salad sit for 10 minutes before serving to allow flavors to meld.', 'Easy'),
(3, 'Grilled Salmon & Veggies', 'Perfectly grilled salmon fillets served with roasted seasonal vegetables for a healthy and satisfying dinner.', 'dinner', 10, 20, 2, 420, '🐟', 'low-carb,high-protein,omega-3', 'Preheat grill to medium-high heat (400°F).|||Pat salmon fillets dry and season with salt and pepper.|||Toss vegetables with 2 tbsp olive oil, garlic, salt, and pepper.|||Place vegetables in a grill basket or on aluminum foil.|||Grill salmon skin-side down for 6-8 minutes.|||Flip salmon and grill for another 4-6 minutes until cooked through.|||Grill vegetables for 10-12 minutes, turning occasionally.|||Remove from grill and drizzle salmon with lemon juice and dill.|||Serve immediately with grilled vegetables.', 'Medium'),
(4, 'Berry Protein Smoothie', 'A refreshing and nutritious smoothie packed with antioxidants, protein, and natural sweetness.', 'breakfast', 5, 0, 1, 250, '🫐', 'vegetarian,quick,antioxidants', 'Add all ingredients to a high-powered blender.|||Blend on high speed for 60-90 seconds until smooth and creamy.|||If smoothie is too thick, add more almond milk 1 tbsp at a time.|||If smoothie is too thin, add more frozen fruit or ice.|||Taste and adjust sweetness with honey if needed.|||Pour into a glass and serve immediately.|||Garnish with fresh berries or chia seeds if desired.', 'Easy'),
(5, 'Chickpea Buddha Bowl', 'A nourishing bowl filled with roasted chickpeas, quinoa, and fresh vegetables topped with a creamy tahini dressing.', 'lunch', 15, 25, 2, 380, '🥙', 'vegan,high-fiber,plant-based', 'Preheat oven to 425°F (220°C).|||Toss chickpeas with 1 tbsp olive oil, cumin, and 1/2 tsp salt.|||Toss sweet potato cubes with 1 tbsp olive oil and 1/2 tsp salt.|||Roast chickpeas and sweet potatoes for 20-25 minutes until golden.|||Cook quinoa according to package instructions.|||Massage kale with remaining olive oil and lemon juice.|||Make tahini dressing by whisking tahini with lemon juice and water.|||Assemble bowls with quinoa, roasted vegetables, kale, and cabbage.|||Drizzle with tahini dressing and serve immediately.', 'Medium');

-- Insert ingredients for each recipe
INSERT INTO Ingredients (Id, Name, Amount, Unit, Notes, RecipeId) VALUES
-- Avocado Toast Bowl ingredients
(1, 'Avocado', '1', 'medium', 'ripe', 1),
(2, 'Eggs', '2', 'large', 'free-range', 1),
(3, 'Cherry tomatoes', '1/2', 'cup', 'halved', 1),
(4, 'Whole grain bread', '2', 'slices', 'toasted', 1),
(5, 'Olive oil', '1', 'tbsp', 'extra virgin', 1),
(6, 'Salt', '1/4', 'tsp', 'to taste', 1),
(7, 'Black pepper', '1/4', 'tsp', 'freshly ground', 1),

-- Quinoa Power Salad ingredients
(8, 'Quinoa', '1', 'cup', 'uncooked', 2),
(9, 'Baby spinach', '2', 'cups', 'fresh', 2),
(10, 'Cherry tomatoes', '1', 'cup', 'halved', 2),
(11, 'Cucumber', '1', 'medium', 'diced', 2),
(12, 'Red bell pepper', '1', 'medium', 'diced', 2),
(13, 'Red onion', '1/4', 'cup', 'thinly sliced', 2),
(14, 'Lemon juice', '2', 'tbsp', 'fresh', 2),
(15, 'Olive oil', '3', 'tbsp', 'extra virgin', 2),
(16, 'Salt', '1/2', 'tsp', 'to taste', 2),
(17, 'Black pepper', '1/4', 'tsp', 'freshly ground', 2),

-- Grilled Salmon & Veggies ingredients
(18, 'Salmon fillets', '2', '6-oz', 'skin-on', 3),
(19, 'Broccoli', '1', 'head', 'cut into florets', 3),
(20, 'Carrots', '2', 'medium', 'cut into sticks', 3),
(21, 'Zucchini', '1', 'medium', 'sliced', 3),
(22, 'Olive oil', '3', 'tbsp', 'divided', 3),
(23, 'Garlic', '2', 'cloves', 'minced', 3),
(24, 'Lemon', '1', 'medium', 'juiced', 3),
(25, 'Dill', '2', 'tbsp', 'fresh, chopped', 3),
(26, 'Salt', '1', 'tsp', 'divided', 3),
(27, 'Black pepper', '1/2', 'tsp', 'freshly ground', 3),

-- Berry Protein Smoothie ingredients
(28, 'Mixed berries', '1', 'cup', 'frozen', 4),
(29, 'Greek yogurt', '1/2', 'cup', 'plain, non-fat', 4),
(30, 'Banana', '1/2', 'medium', 'frozen', 4),
(31, 'Almond milk', '1/2', 'cup', 'unsweetened', 4),
(32, 'Protein powder', '1', 'scoop', 'vanilla', 4),
(33, 'Honey', '1', 'tbsp', 'optional', 4),
(34, 'Chia seeds', '1', 'tsp', 'optional', 4),

-- Chickpea Buddha Bowl ingredients
(35, 'Chickpeas', '1', 'can', '15 oz, drained and rinsed', 5),
(36, 'Quinoa', '1', 'cup', 'uncooked', 5),
(37, 'Sweet potato', '1', 'large', 'cubed', 5),
(38, 'Kale', '2', 'cups', 'chopped', 5),
(39, 'Red cabbage', '1', 'cup', 'shredded', 5),
(40, 'Tahini', '2', 'tbsp', 'raw', 5),
(41, 'Lemon juice', '2', 'tbsp', 'fresh', 5),
(42, 'Olive oil', '3', 'tbsp', 'divided', 5),
(43, 'Cumin', '1', 'tsp', 'ground', 5),
(44, 'Salt', '1', 'tsp', 'divided', 5),
(45, 'Black pepper', '1/2', 'tsp', 'freshly ground', 5);
