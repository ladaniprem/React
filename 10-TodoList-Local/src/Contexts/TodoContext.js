import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Learn React",
            completed: false
        },
        {
            id: 2,
            todo: "Learn JavaScript",
            completed: false
        }
    ],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggleComplete: () => {},
})

export const useTodoContext = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;
 