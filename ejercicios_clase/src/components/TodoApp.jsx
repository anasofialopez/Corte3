import React, { useReducer, useEffect } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { TodoReducer } from './TodoReducer';

const initialState = JSON.parse(localStorage.getItem('todos')) || [
  {
    id: new Date().getTime(),
    description: 'Hacer los challenges',
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

  const handleNewTodo = (todo) => {
    dispatchTodo({
      type: 'ADD_TODO',
      payload: todo,
    });
  };

  const handleToggleTodo = (id) => {
    dispatchTodo({
      type: 'TOGGLE_TODO',
      payload: id,
    });
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1>
        TodoApp: {todos.length}, <small>pendientes: {todos.filter((todo) => !todo.done).length}</small>
      </h1>
      <div>
        <button onClick={() => dispatchTodo({ type: 'CLEAR_TODOS' })}>Borrar todos</button>
      </div>
      <hr />
      <TodoList todos={todos} handleToggleTodo={handleToggleTodo} />
      <TodoAdd handleNewTodo={handleNewTodo} />
    </>
  );
};