import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    user: null,
}

const authSlice = createSlice({
    name : "auth",
    initialState: initialState,
    reducers: {
      signup: (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      },
      login: (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      },
      logout: (state) => {
        state.status = 'idle';
        state.user = null;
      }
    }
})

export const { signup, logout, login } = authSlice.actions; // Export the actions created by createSlice

export default authSlice.reducer;