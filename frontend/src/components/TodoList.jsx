/* eslint-disable no-unused-vars */
import React from 'react';
import TodoItem from './TodoItem';

import './TodoList.css';

export default function TodoList({ todos, toggleTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
}
