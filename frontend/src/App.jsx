/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import TodoList from './components/TodoList';

import './App.css';

export default function App() {
  const [todos, setTodos] = useState([]);

  const todoTaskRef = useRef();

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value;
    if (task === '') return;

    setTodos((prevTodos) => {
      return [...prevTodos, {id, task, completed: false}] 
    })
  };
  return (
    <>
      <TodoList todos={[]} />
      <input ref={todoTaskRe} ftype="text" placeholder="New Task" />
      <button onClick={handleTodoAdd}>+</button>
      <button onClick={}>Delete</button>
    </>
  );
}
