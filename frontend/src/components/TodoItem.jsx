/* eslint-disable linebreak-style */
import React from 'react';

import './TodoItem.css';

export default function TodoItem({ todo, toggleTodo }) {
  const { id, task, completed } = todo;

  const handleTodoClick = () => {
    toggleTodo(id);
  };

  return (
    <div id="li-todoItem">
      <li>
        {task}
      </li>
      <label id="li-todoItem__container">
        <input id="li-todoItem__input" type="checkbox" checked={completed} onChange={handleTodoClick} />
        <span id="checkmark" />
      </label>
    </div>

  );
}
