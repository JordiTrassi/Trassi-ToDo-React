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
    setTodos(newTodos);
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
    <div className="container">
      <input id="taskInput" ref={todoTaskRef} type="text" placeholder="New Task" />
      <div className="container-buttons">
        <button id="btn-plus" type="button" onClick={handleTodoAdd} title="Add Task">+</button>
        <button id="btn-delete" type="button" onClick={handleDeleteAll}>Delete completed tasks</button>
      </div>
      <h2 id="container-h2">
        Te quedan
        {' '}
        {todos.filter((todo) => !todo.completed).length}
        {' '}
        tareas para terminar.
      </h2>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}
