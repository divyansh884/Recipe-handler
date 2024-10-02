import Recipelist from "./recipelist";
import "../css/app.css";
import React, { useState, useEffect } from "react";
import uuidv4 from "uuid/v4";
import RecipeEdit from "./RecipeEdit";
const LOCAL_STORAGE_KEY = "reactpros.recipes";
function App() {
  const [SelectedRecipeId,setSelectedRecipeId]=useState();
  const [recipes, setrecipes] = useState(samplerecipes);
  const SelectedRecipe=recipes.find(recipe=> recipe.id===SelectedRecipeId )
useEffect(() => {
  const conxt=localStorage.getItem(LOCAL_STORAGE_KEY);
  if (conxt) {
    setrecipes(JSON.parse(conxt));
  }
},[]);
useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(recipes));
}, [recipes]);

function handlerecipeselect(id){
  setSelectedRecipeId(id);
}

  function handleaddrecipe() {
    const newrecipe = {
      id: uuidv4(),
      name: "new",
      cookingtime: "1.00",
      serving: 1,
      instruction: "instr",
      ingredients: [{ id: uuidv4(), name: "name", amount: "1 table spoon" }],
    };
    setSelectedRecipeId(newrecipe.id)
    setrecipes([...recipes, newrecipe]);
  }

  function handlerecipechange(id,recipe){
    const newrecipes=[...recipes]
    const index= newrecipes.findIndex(r=>r.id===id)
    newrecipes[index]=recipe
    setrecipes(newrecipes)
  }

  function handledeleterecipe(id) {
    if(SelectedRecipeId!=null && SelectedRecipeId===id){
      setSelectedRecipeId(undefined)
    }
    setrecipes(recipes.filter((recipe) => recipe.id !== id));
  }
  return (
    <>
    <Recipelist
      recipes={recipes}
      handleaddrecipe={handleaddrecipe}
      handledeleterecipe={handledeleterecipe}
      handlerecipeselect={handlerecipeselect}
      handlerecipechange={handlerecipechange}
    ></Recipelist>
    {SelectedRecipe && <RecipeEdit handlerecipeselect={handlerecipeselect} handlerecipechange={handlerecipechange}  SelectedRecipe={SelectedRecipe}/>}
    </>
  );
}

const samplerecipes = [
  {
    id: 1,
    name: "chicken",
    cookingtime: "1.45",
    serving: 3,
    instruction: "1.put salt on chicken\n 2.put chicken on oven\n 3.eat it",
    ingredients: [
      {
        id: 1,
        name: "chicken",
        amount: "2 pund",
      },
      {
        id: 2,
        name: "salt",
        amount: "2 tables spoon",
      },
    ],
  },
  {
    id: 2,
    name: "pork",
    cookingtime: "0.45",
    serving: 5,
    instruction: "1.put perika on pork\n 2.put peprika on oven\n 3.eat it",
    ingredients: [
      {
        id: 1,
        name: "pork",
        amount: "3 pund",
      },
      {
        id: 2,
        name: "peprika",
        amount: "2 tables spoon",
      },
    ],
  },
];
export default App;
