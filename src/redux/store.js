import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counter'
import todosReducer from '../slices/todos'
import visibilityFilterReducer from '../slices/filters'
import userSlice from '../slices/user';
import recipesReducer from '../slices/recipes';


export default configureStore({
    reducer: {
        counter: counterReducer,
        todos: todosReducer,
        visibilityFilter: visibilityFilterReducer,
        user: userSlice,
        recipes: recipesReducer,
    },
})
