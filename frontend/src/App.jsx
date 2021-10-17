/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import TodoList from './components/TodoList';

import './App.css';

const KEY = 'todoApp.todos';

export default function App() {
  const [todos, setTodos] = useState([]);

  const todoTaskRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const currentTodo = newTodos.find((todo) => todo.id === id);
    currentTodo.completed = !currentTodo.completed;
  };

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value;
    if (task === '') return;

    setTodos((prevTodos) => [...prevTodos, { id: uuid(), task, completed: false }]);

    todoTaskRef.current.value = null;
  };

  const handleDeleteAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoTaskRef} ftype="text" placeholder="New Task" />
      <button type="button" onClick={handleTodoAdd}>+</button>
      <button type="button" onClick={handleDeleteAll}>Delete</button>
      <p>
        Te quedan
        {' '}
        {todos.filter((todo) => !todo.completed).length}
        {' '}
        tareas para terminar.
      </p>
    </>
  );
}
