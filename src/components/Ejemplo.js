import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../slices/counter'
import { addTodo } from '../slices/todos'

// import our fetchRecipes thunk
import { fetchRecipes, recipesSelector } from '../slices/recipes'

const Ejemplo = (props) => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const todos = useSelector((state) => state.todos)
    const localAddTodo = () => {
        console.log("localAddTodo")
        dispatch(addTodo({ id: 3, text: 'ejemplo 3'}))
    }

    // const { recipes, loading, hasErrors } = useSelector(recipesSelector)
    // dispatch our thunk when component first mounts
    /*useEffect(() => {
        dispatch(fetchRecipes())
    }, [dispatch])*/

    return (
        <div>
            <h2>Ejemplo contador: {count}</h2>
            <button
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <br /><br />
            <button
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>

            <hr />

            <button
                onClick={() => localAddTodo()}
            >
                New Todo
            </button>

            <ul>
                { todos.map((todo, index) => <li key={index}>{todo.text}</li> )}
            </ul>

        </div>
    )
}

export default Ejemplo
