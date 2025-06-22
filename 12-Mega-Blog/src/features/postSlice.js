import { createSlice } from '@reduxjs/toolkit';

const intialState = {
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    user: null,
}

const postSlice = createSlice({
    name : "post",
    initialState: intialState,
    reducers: {
        addpost: (state,action) => {
            state.status = true;
            state.user = action.payload; // Assuming payload contains user data
        },
         deletepost: (state) => {
            state.status = false;
            state.user = null; // Clear user data on logout
         }
    }
})

export const {addpost,deletepost} = postSlice.actions; // Export the actions created by createSlice

export default postSlice.reducer;