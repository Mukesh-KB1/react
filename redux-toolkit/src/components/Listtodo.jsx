import React, { use } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';
import { useState } from 'react';


function Listtodo() {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const[editingId,setEditingId] = useState(null);
    const[todoMsg,setTodoMsg] = useState("");

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >

                        <input
                            type="text"
                            className="w-full bg-transparent text-white border-none outline-none focus:outline-none focus:ring-0"

                            value={editingId === todo.id ? todoMsg : todo.title}
                            onChange={(e) => setTodoMsg(e.target.value)}
                            readOnly={editingId !== todo.id}
                        />

                        <div style={{ display: "flex", gap: "4px" }}>

                            {/* EDIT */}
                            <button
                                onClick={() => {

                                }}
                                // disabled={editingId === todo.id}
                                style={{
                                    background: "#2563eb",
                                    border: "none",
                                    padding: "4px",
                                    cursor: "pointer",
                                    borderRadius: "4px",
                                }}
                            >
                                {false ? "💾" : "✏️"}
                            </button>


                            {/* DELETE */}
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                style={{
                                    background: "red",
                                    border: "none",
                                    padding: "4px",
                                    cursor: "pointer",
                                    borderRadius: "4px",
                                }}
                            >
                                🗑️
                            </button>
                        </div>


                    </li>
                ))}
            </ul>
        </>
    )
}

export default Listtodo