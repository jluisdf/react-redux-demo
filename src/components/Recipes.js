import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchRecipes, recipesSelector } from '../slices/recipes'

const Recipes = () => {
    const dispatch = useDispatch()
    const { recipes, loading, hasErrors } = useSelector(recipesSelector)

    useEffect(() => {
        dispatch(fetchRecipes())
    }, [dispatch])

    useEffect(() => {
        console.log("recipes: ", recipes);
    }, [recipes])

    // error handling & map successful query data
    const renderRecipes = () => {
        if (loading) return <p>Loading recipes...</p>
        else if (hasErrors) return <p>Cannot display recipes...</p>
        else return <p>Mostrar datos</p>

        return recipes.meals.map(recipe =>
            <div key={recipe.idMeal} className='tile'>
                <h2>{recipe.strMeal}</h2>
                <img src={recipe.strMealThumb} alt=''/>
            </div>
        )
    }

    return (
        <section>
            <h1>Recipes</h1>
            <div className='content'>
                {renderRecipes()}
            </div>
        </section>
    )
}

export default Recipes
