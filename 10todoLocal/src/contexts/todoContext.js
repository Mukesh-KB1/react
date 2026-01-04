import { createContext,useContext } from "react";

const TodoContext = createContext({
    todos : [{
        id : 1,
        title : "Learn React",
        completed : false
    }],
    addTodo : (todo) =>{},
    updateTodo : (todoId,todo)=>{},
    deleteTodo : (todoId) =>{},
    toggleCompleted : (todoId) =>{}
})

export const TodoContextProvider = TodoContext.Provider;

export const useTodoContext = ()=>{
    return useContext(TodoContext);
}