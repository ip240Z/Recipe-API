## Simple Recipe API

This api can return recipe lists or an individual recipe

`/recipes/` - GET
- Returns a list of all recipes

`/recipes/:id` - GET 
- Returns a single recipe by it's id
- Example response for `/recipes/2`: 

```
{
  "id": 2,
  "name": "Pad Thai",
  "style": "Thai",
  "prep_time": "20 minutes",
  "cook_time": "10 minutes",
  "instructions": "1. Soak rice noodles in cold water for 20 minutes. \n2. In a wok, heat oil and add garlic and onions. \n3. Add shrimp or tofu and stir-fry for 2-3 minutes. \n4. Push the shrimp or tofu to one side and add beaten eggs. \n5. Stir-fry until the eggs are cooked. \n6. Drain the noodles and add them to the wok. \n7. Add fish sauce, sugar, and tamarind paste. \n8. Stir-fry until all ingredients are mixed and the noodles are coated. \n9. Serve hot with crushed peanuts and lime wedges."
}
```

`/recipes/random` - GET
- Returns a random recipe from the list

`/recipes/` - POST
- Creates a new recipe to the list. An id number is automatically given to it, but requires a recipe: name, style, prep time, cook time and instructions.
