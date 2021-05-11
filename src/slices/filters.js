import { createSlice } from '@reduxjs/toolkit'

// https://dev.to/vcapretz/writing-modern-redux-in-2020-the-powerful-createslice-1i5m

const filters = createSlice({
    name: 'visibilityFilters',
    initialState: 'SHOW_ALL',
    reducers: {
        setVisibilityFilter(state, action) {
            return action.payload
        }
    }
})

export const { setVisibilityFilter } = filters.actions
export default filters.reducer
