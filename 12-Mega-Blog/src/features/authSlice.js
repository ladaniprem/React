import { createSlice } from '@reduxjs/toolkit';

const intialState = {
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    user: null,
}

const authSlice = createSlice({
    name : "auth",
    initialState: intialState,
    reducers: {
      login : (state,action) => {    // payload refers to the data you send along with an action to update the state.
           state.status = true;
           state.userData = action.payload.userData; // Assuming payload contains user data
      },
      logout: (state) => {
        state.status = false;
        state.userData = null; // Clear user data on logout
      }
    }
})

export const {logout,login} = authSlice.actions; // Export the actions created by createSlice

export default authSlice.reducer;