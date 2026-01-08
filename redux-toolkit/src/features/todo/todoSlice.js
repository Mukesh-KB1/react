import { createSlice , nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos : [{
        id : 1,
        title : "Learn Redux Toolkit",
        completed : false
    }]
}

export const todoSlice = createSlice({
    name : "todos",
    initialState,
    reducers : {
        addTodo : (state,action)=>{
            const todo = {
                id : nanoid(),
                title : action.payload,
                completed : false
            }
            state.todos.push(todo);
        },
        removeTodo : (state,action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo : (state,action)=>{
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo);
        },
        toggleTodo : (state,action)=>{
            state.todos = state.todos.map(todo => todo.id === action.payload ? {...todo,completed : !todo.completed} : todo)
        }
    }
})

export const {addTodo,removeTodo,updateTodo,toggleTodo} = todoSlice.actions;

export default todoSlice.reducer;