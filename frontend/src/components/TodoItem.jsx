/* eslint-disable no-unused-vars */
import React from 'react';

export default function TodoItem({ todos }) {
  const { id, task, completed } = todo;
  return (
    <li>{task}</li>
  );
}
