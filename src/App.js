import './App.css';
import { useState } from 'react';

let nextId = 0;

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

  const recipeList = recipes.map((recipe) => {
    return <li key = {nextId++}>{recipe.Name} - {recipe.Category} <button>Favorite</button> <button>Edit</button> <button onClick = {() => {
      setRecipes(
        recipes.filter(a => a.Name !== recipe.Name)
      )
    }}>Delete</button></li>;
  })

  return (
    <>
    <h2>Recipes</h2>
    <form>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='recipe name'></input> <input type="text" value={type} onChange={f => setType(f.target.value)} placeholder="recipe Category"></input> <button onClick = {(event) => {setRecipes([
        ...recipes,
        { Name: name, Category: type }
        
      ])
      event.preventDefault();
      }}>Add New Recipe</button>
    </form>
    <ul>
      {recipeList}
    </ul>
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
