import React from 'react'

const FormularioTodos = ({ newTodoDescription, setNewTodoDescription, newTodo }) => {
    return (
        <>
            <h4>Agregar TODO</h4>
            <hr/>
            <form onSubmit={newTodo}>
                <input type='text' className='form-control' value={newTodoDescription} onChange={(e) => setNewTodoDescription(e.target.value)}></input>
                <button className='btnAgregar' type='submit'>
                    Agregar
                </button>
            </form>
        </>
    )
}

export default FormularioTodos
