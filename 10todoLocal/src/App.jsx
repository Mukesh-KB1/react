import { useEffect, useState } from 'react'
import { TodoContextProvider } from './contexts/todoContext'
import TodoForm from './componenets/TodoForm.jsx';
import TodoItem from './componenets/TodoItem.jsx';


function App() {
  const [todos,setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [{id: Date.now(), ...todo},...prevTodos])
  };

  const updateTodo = (todoId,todo) => {
    setTodos((prevTodos) => prevTodos.map((each) => each.id === todoId ? todo : each))
  }

  const deleteTodo = (todoId) =>{
    setTodos((prevTodos) => prevTodos.filter((each) => each.id !== todoId))
  }

  const toggleCompleted = (todoId) =>{
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
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) =>(
                            <div key={todo.id} className="w-full">
                                <TodoItem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    </TodoContextProvider>
  )
}

export default App
