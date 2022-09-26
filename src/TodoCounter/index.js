import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} Citas por hacer!</h2>
  );
}

export { TodoCounter };