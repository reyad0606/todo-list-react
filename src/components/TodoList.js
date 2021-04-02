import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'></ul>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          text={todo.text}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
