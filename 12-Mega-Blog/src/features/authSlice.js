import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    user: null,
}

const authSlice = createSlice({
    name : "auth",
    initialState: initialState,
    reducers: {
      login : (state,action) => {    // payload refers to the data you send along with an action to update the state.
           state.status = 'succeeded';
           state.user = action.payload; // Assuming payload contains user data
      },
      logout: (state) => {
        state.status = 'idle';
        state.user = null; // Clear user data on logout
      }
    }
})

export const {logout,login} = authSlice.actions; // Export the actions created by createSlice

export default authSlice.reducer;