import './App.css';
import { useState } from 'react';

function RecipeList() {
  const [recipes, setRecipes] = useState([{Name: "Yiga Pursuit", Category: "Drink"}, 
  {Name: "Cucco Quiche", Category: "Appetizer"}, 
  {Name: "Royal Apple Sorbet", Category: "Cleanser"}, 
  {Name: "Wildberry Monster Sorbet", Category: "Cleanser"}, 
  {Name: "Star Fragment Candy", Category: "Candy"}, 
  {Name: "Swallow's Roosts", Category: "Appetizer"}, 
  {Name: "Zora Taiyaki", Category: "Dessert"}, 
  {Name: "Rock Roast", Category: "Dessert"}, 
  {Name: "Hetsu's Gift and Korok Seeds", Category: "Treat"}])

  const [name, setName ] = useState("")
  const [type, setType ] = useState("")
  const [ favorites, setFavorites ] = useState([])

  function toggleFavorite(recipe, type) {
    if (favorites.find(favoriteRecipe => favoriteRecipe.name === recipe)){
      setFavorites(favorites.filter(favoriteRecipe => favoriteRecipe.name !== recipe))
      console.log(favorites);
    } else {
      setFavorites([...favorites, {Name: recipe, Category: type}]);
      console.log(favorites);
    }
  }

  const recipeList = recipes.map((recipe, i) => {
    return <li key = {i}>{recipe.Name} - {recipe.Category} <button onClick = {() => {
      toggleFavorite(recipe.Name, recipe.Category)
    }}>Favorite</button>  <button onClick = {() => {
      setRecipes(
        recipes.filter(a => a.Name !== recipe.Name)
      )
    }}>Delete</button></li>;
  })

  function editItem(index) {
    const edited = recipes.map((name, category, i) => {
      if (i === index ) {
        return {Name: name, Category: category};
      } else {
        return console.log("move along!")
      }
    });
    setRecipes(edited)
  }

  return (
    <>
    <h2>Recipes</h2>
    <form>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='recipe name' /> <input type="text" value={type} onChange={f => setType(f.target.value)} placeholder="recipe Category" /> <button onClick = {(event) => {setRecipes([
        ...recipes,
        { Name: name, Category: type }
      ])
      event.preventDefault();
      }}>Add New Recipe</button>
    </form>
    <ul>
      {recipeList}
    </ul>
    <button onClick={() => {
      setRecipes(favorites)
    }}>Sort Favorites</button>
    </>
    )
  
}

function App() {
  return (
    <>
    <h1>Let's get cooking!</h1>
     <RecipeList />
    </>
  );
}

export default App;
