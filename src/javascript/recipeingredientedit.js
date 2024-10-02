import React from 'react'

export default function recipeingredientedit({ingredient,handleingredientchange,handledeleteingredient}) {

  function handlechange(changes){
    handleingredientchange(ingredient.id, {...ingredient,...changes})
  }

  return (
    <>
      <input value={ingredient.name} onChange={e=> handlechange({name:e.target.value})} className='recipe-edit__input' type='text' />
      <input value={ingredient.amount} onChange={e=> handlechange({amount:e.target.value})} className='recipe-edit__input' type='text' />
      <button onClick={()=>handledeleteingredient(ingredient.id)} className='btn btn-danger'>&times;</button>
    </>
  )
}
