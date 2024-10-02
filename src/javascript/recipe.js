import React from "react";
import IngredientList from "./IngredientList";
export default function recipe(props) {
  const {id, name, cookingtime, serving, instruction, ingredients,handledeleterecipe, handlerecipeselect} = props;
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__tittle">{name}</h3>
      <div>
        <button className="btn btn--primary mr-1" 
        onClick={()=>handlerecipeselect(id)}
        >edit</button>
        <button className="btn btn-danger"
        onClick={()=>handledeleterecipe(id)}
        >delete</button>
      </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">cooking time: </span>
        <span className="recipe__value">{cookingtime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">serving:</span>
        <span className="recipe__value">{serving}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">instruction:</span>
        <div className="recipe__value recipe__instruction recipe__value--indented">{instruction}</div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">ingridents:</span>
        <div className="recipe__value recipe__value--indented">
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
}
