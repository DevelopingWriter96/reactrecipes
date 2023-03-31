import './App.css';

function CurrentRecipe() {
  return (
    <>
      <h1>Let's get cooking!</h1>
    <h2>Cucco Quiche</h2>
    <ul>
      <li>12 Servings</li>
      <li>40 Minutes</li>
    </ul>
    <h3>Ingredients:</h3>
    <ul>
      <li>2 Large Eggs</li>
      <li>1/4 Cup of Milk (60 ml)</li>
      <li>1/8 Teaspoon Salt (.7 g)</li>
      <li>1 Teaspoon Minced garlic (3 g)</li>
      <li>1/4 small onion, very finely chopped</li>
      <li>1 large portobello mushroom, very finely chopped</li>
      <li>1 baby red bell pepper, very finely chopped</li>
      <li>Shredded pepper jack, to taste</li>
      <li>Pie Crust Dough, if desired*</li>
      <li>Non-stick mini muffin pan</li>
    </ul>
    <h3>Directions:</h3>
    <ol>
      <li>If using pie crust dough, let it warm to room temperature, and then cut into circles and press into your non-stick mini muffin pan.</li>
      <li>Preheat the oven to 375 degrees farenheit (190 Degrees Celcius).</li>
      <li>Whisk together eggs, milk, salt, and garlic in a large glass measuring cup.</li>
      <li>Pour a small amount of egg mixture into each muffin cavity, then follow with a sprinkle of onion, mushroom, bell pepper, and shredded cheese, into each.</li>
      <li>Whisk the egg mixture again, then pour atop the incredients in your muffin tin. They should be filled most of the way, not full or overflowing.</li>
      <li>Bake for 25 to 30 minutes, until the egg is gently browned and done all the way through.</li>
      <li>Let cool, but serve still warm from the oven.</li>
    </ol>
    <p>* I enjoy these without crust, but they are delicious with crust as well! 1 pie crust should be enough for 12 quiche</p>
    </>
  )
}

function RecipeList() {
  return (
  <>
  <h2>Recipes</h2>
  <ul>
    <li><p>Yiga Pursuit - Drink</p></li>
    <li><p>Cucco Quiche - Appetizer</p></li>
    <li><p>Royal Apple Sorbet - Cleanser</p></li>
    <li><p>Wildberry Monster Sorbet- Cleanser</p></li>
    <li><p>Star Fragment Candy - Candy</p></li>
    <li><p>Swallow's Roosts - Appetizer</p></li>
    <li><p>Zora Taiyaki - Dessert</p></li>
    <li><p>Rock Roast- Dessert</p></li>
    <li><p>Hetsu's Gift and Korok Seeds - Treat</p></li>
  </ul>
  </>
  )
}

function App() {
  return (
    <>
     <CurrentRecipe />
     <RecipeList />
    </>
  );
}

export default App;
