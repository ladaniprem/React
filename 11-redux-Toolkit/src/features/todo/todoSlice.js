import  { createSlice , nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos:[
        {
            id: 1,
            title: 'Learn Redux Toolkit',
            completed: false
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers:{
        addTodo: (state,action) => {
            const title = action.payload?.trim() || '';
            const todo = {
                id: nanoid(),
                title: title,
                completed: false
            }
            state.todos.push(todo);
        },
    // removeTodo:(state,action) => {
    //     state.todos = state.todos.filter((todo) => 
    //          todo.id !== action.payload );
    // },
        updateTodo: (state,action) => {
            const todo = state.todos.find((todo) =>
            todo.id === action.payload.id);
            if (todo) {
                todo.title = action.payload.title;
                todo.completed = action.payload.completed;
            }
        },

    deleteTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => 
            todo.id !== action.payload
        );
    }
}
});

export const { addTodo, deleteTodo,updateTodo} = todoSlice.actions;

export default todoSlice.reducer;