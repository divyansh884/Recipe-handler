import React, {useContext} from 'react'
import Recipeingredientedit from './recipeingredientedit'
import uuidv4 from "uuid/v4";
export default function RecipeEdit({SelectedRecipe,handlerecipechange,handlerecipeselect }) {
  function handlechange(changes){
    handlerecipechange(SelectedRecipe.id, {...SelectedRecipe,...changes})
  }
  function handleingredientchange(id,ingredient){
    const newingredients=[...SelectedRecipe.ingredients]
    const index= newingredients.findIndex(i=>i.id===id)
    newingredients[index]=ingredient
    handlechange({ingredients: newingredients})
  }
  function handleaddingredient(){
    const newingredient={
      id: uuidv4(),
      name:'',
      amount:'',
    }
    handlechange({ingredients: [...SelectedRecipe.ingredients,newingredient]})
  }
  function handledeleteingredient(id){
    handlechange({
      ingredients: SelectedRecipe.ingredients.filter(i=>i.id!==id)
    })
  }
  return (
    <div className="recipe-edit">
      <div className='recipe-edit__remove-btn-container'>
        <button onClick={()=>handlerecipeselect(undefined)} className='btn recipe-edit__remove-btn'>&times;</button>
      </div>
      <div className='recipe-edit__detail-grid'>
        <label htmlFor='name'
        className='recipe-edit__label'>Name</label>
        <input value={SelectedRecipe.name} onChange={e=>handlechange({name: e.target.value})} type="text" name='name' id='name' className='recipe-edit__input'/>
        <label className='recipe-edit__label' htmlFor='cookingtime'>cooking time</label>
        <input value={SelectedRecipe.cookingtime} onChange={e=>handlechange({cookingtime: e.target.value})} className='recipe-edit__input' type="text" name='cookingtime' id='cookingtime'/>
        <label className='recipe-edit__label' htmlFor='serving'>serving</label>
        <input value={SelectedRecipe.serving} onChange={e=>handlechange({serving: parseInt(e.target.value)|| ''})} className='recipe-edit__input' type="text" name='serving' min={1} id='serving'/>
        <label className='recipe-edit__label' htmlFor='instruction'>instruction</label>
        <textarea value={SelectedRecipe.instruction} onChange={e=>handlechange({instruction: e.target.value})} className='recipe-edit__input' name='instruction' id='instruction'></textarea>
      </div>
      <br/>
      <label className='recipe-edit__label'>ingredients</label>
       <div className='recipe-edit__ingredient-grid'>
        <div>Name</div> 
        <div>Amount</div>
        <div></div>
        {SelectedRecipe.ingredients.map(ingredient=>(
          <Recipeingredientedit 
          key={ingredient.id}
          handleingredientchange={handleingredientchange}
          ingredient={ingredient}
          handledeleteingredient={handledeleteingredient}
          />
           
        ))}
        <div className='recipe-edit__add-ingridient-btn-container'>
            <button onClick={()=>handleaddingredient()} className='btn btn--primary'>Add ingredients</button>
        </div>
       </div>
    </div>
  )
}
