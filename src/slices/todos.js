import { createSlice } from '@reduxjs/toolkit'

// https://dev.to/vcapretz/writing-modern-redux-in-2020-the-powerful-createslice-1i5m

const todos = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo(state, action) {
            const { id, text } = action.payload
            state.push({ id, text, completed: false })
        },
        toggleTodo(state, action) {
            const todo = state.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        }
    }
})

export const { addTodo, toggleTodo } = todos.actions
export default todos.reducer
