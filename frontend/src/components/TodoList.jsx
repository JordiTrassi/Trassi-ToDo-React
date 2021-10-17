/* eslint-disable no-unused-vars */
import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  );
}
