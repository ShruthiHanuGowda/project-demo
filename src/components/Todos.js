import React from 'react';

function Todos({ todos, deleteClick }) {
  const todosList = todos.length ? (
    todos.map((todo) => {
      return (
        <div key={todo.id}>
          <h1 onClick={deleteClick(todo.id)}>{todo.content}</h1>
        </div>
      );
    })
  ) : (
    <h1>no ninja</h1>
  );

  return <div>{todosList}</div>;
}

export default Todos;
