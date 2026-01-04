import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './contexts/todoContext'


function App() {
  const [todos,setTodos] = useState([]);

  addTodo = (todo) => {
    setTodos((prevTodos) => [{id: Date.now(), ...todo},...prevTodos])
  };

  updateTodo = (todoId,todo) => {
    setTodos((prevTodos) => prevTodos.map((each) => each.id === todoId ? todo : each))
  }

  deleteTodo = (todoId) =>{
    setTodos((prevTodos) => prevTodos.filter((each) => each.id !== todoId))
  }

  toggleCompleted = (todoId) =>{
    setTodos((prevTodos) => prevTodos.map((each) => each.id  === todoId ? {...each,completed : !each.completed} : each));
  }

  //Local storage

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("todos"));
    
    if(data && data.length >0){
      setTodos(data);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleCompleted}}>
      <h1 class="text-3xl bg-green-500 font-bold underline">
        Hello world!
      </h1>
    </TodoContextProvider>
  )
}

export default App
