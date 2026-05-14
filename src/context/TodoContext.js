import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todo: [
        {
            id: 1,
            todo: "todo message",
            completed: false
        }
    ],

    addTodo: (todo) => {},
    updateTodo: (id, Todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider