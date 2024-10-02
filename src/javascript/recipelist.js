import React from "react";
import Recipe from "./recipe";
export default function recipelist(props) {
  const {recipes, handleaddrecipe,handledeleterecipe,handlerecipeselect,handlerecipechange}=props
  return(
    <div className="recipe-list">
      <div>
      {recipes.map((recipe) => {
        return <Recipe key={recipe.id}{...recipe}
        handledeleterecipe= {handledeleterecipe}
        handlerecipeselect= {handlerecipeselect}
        ></Recipe>;
      })}
      </div>
    <div className="recipe-list__addrecipecont">
    <button 
    className="btn btn--primary"
    onClick={handleaddrecipe}
    >add recipe
    </button>
    </div>
    </div>
  );
}
