import React from 'react';
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>Has completado {completedTodos} de {totalTodos} Citas por hacer!</h2>
  );
}

export { TodoCounter };