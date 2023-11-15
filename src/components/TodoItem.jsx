import React from 'react'

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
        <span
            onClick={ () => onToggleTodo(todo.id)}
            className={ `align 
                ${todo.done? 'text-decoration' : ''}`
            }
        >
             {todo.description} 
        </span>
        <button
            className='DontCare'
            onClick={ () => { onDeleteTodo( todo.id ) }}
        > Borrar</button>
    </li>
  )
}