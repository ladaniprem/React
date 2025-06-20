import  { createSlice , nanoid } from '@reduxjs/toolkit';

const initialStaate = {
    todos:[
        {
            id: nanoid(),
            title: 'Learn Redux Toolkit',
            completed: false
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialStaate,
    reducers:{
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                title: action.payload,
                completed: false
            }
            state.todos.push(todo);
        },
        removTodo:(state,action) => {
            state.todos = state.todos.filter((todo) => 
                 todo.id !== action.payload );
            } 
        },
            updateTodo: (state,action) => {
                const todo = state.todos.find((todo) =>
                todo.id === action.payload.id);
                if (todo) {
                    todo.title = action.payload.title;
                    todo.completed = action.payload.completed;
                }
            },

            deleteTodo : (state,action) => {
                state.todos = state.todos.filter((todo)=>
                todo.id !== action.payload.id
                );
                
            }
        }
);

export const { addTodo, removTodo, updateTodo, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;