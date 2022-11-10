import React, { useState } from "react";

function RecipeCreate({recipeDataChange, recipeData}) {
  const starterRecipe={
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preporation:""
  }
  
  const [newRecipe, setNewRecipe]=useState({starterRecipe})
  
  const handleChange=({target})=>{
    setNewRecipe({...newRecipe,[target.name]:target.value});
  }
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(newRecipe);
    recipeDataChange([...recipeData,newRecipe])
    setNewRecipe(starterRecipe);
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
          <th name="name"><input type="search" name="name" placeholder="Name" onChange={handleChange} value={newRecipe.name} /></th>
          <th name="cuisine"><input type="search" name="cuisine" placeholder="Cuisine" onChange={handleChange} value={newRecipe.cuisine}/></th>
          <th name="photo"><input type="url" name="photo" placeholder="URL" onChange={handleChange} value={newRecipe.photo}/></th>
          <th name="ingredients"><textarea name="ingredients" placeholder="Ingredients" onChange={handleChange} value={newRecipe.ingredients}></textarea></th>
          <th name="preparation"><textarea name="preparation" placeholder="Preparation" onChange={handleChange} value={newRecipe.preporation}></textarea></th>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
