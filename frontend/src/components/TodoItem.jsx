/* eslint-disable no-unused-vars */
import React from 'react';

export default function TodoItem({ todo, toggleTodo }) {
  const { id, task, completed } = todo;

  const handleTodoClick = () => {
    toggleTodo(id);
  };

  return (
    <li>
      {task}
      <input type="checkbox" checked={completed} onChange={handleTodoClick} />
    </li>
  );
}
