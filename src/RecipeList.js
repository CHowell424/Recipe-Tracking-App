import React from "react";

function RecipeList({recipes, setRecipes}) {
  
  const handleDelete=(event)=>{
    console.log(event.target.id)
    const filtered =[];
    for(let n=0;n<recipes.length;n++){
      if(recipes[n].name!=event.target.id){
        filtered.push(recipes[n]);
      }
    }
    setRecipes(filtered);
  }
  
  let recipe =[]
  for(let n=0; n<recipes.length;n++){
    recipe.push(<tr>
        <th name="name">{recipes[n].name}</th>
        <th name="cuisine">{recipes[n].cuisine}</th>
        <th name="photo"><img src={recipes[n].photo} alt={recipes[n].name}/></th>
        <th name="ingredients"><textarea>{recipes[n].ingredients}</textarea></th>
        <th name="preparation"><textarea>{recipes[n].preparation}</textarea></th>
        <td name="action"><button name="delete" id={recipes[n].name} onClick={handleDelete}>Delete</button></td>
      </tr>)
  }
  
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipe}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
