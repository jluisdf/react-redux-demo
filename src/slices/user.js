// Ref: https://blog.bitsrc.io/simplifying-redux-with-redux-toolkit-6236c28cdfcb

import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    users: [],
    loading: false,
    error: false,
};

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state, action) => {
            state.users = action.payload;
            state.loading = true;
            state.error = false;
        },
        createUser: (state, action) => {
            state.users.unshift(action.payload);
            state.loading = false;
        },
        deleteUser: (state, action) => {
            state.users.filter((user) => user.id !== action.payload.id);
            state.loading = false;
        },
    },
});

export const { createUser, deleteUser, getUser } = user.actions;
export default user.reducer;
