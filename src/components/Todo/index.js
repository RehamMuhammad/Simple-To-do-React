import React from 'react'
import "./todo.css"

function Todo({todo, deleteTask, toggleTask }) {
  return (
    <div className='container'>
        <h5 className='task' onClick={() => toggleTask(todo.id)}>{todo.task}</h5>
        <p className='status'>{todo.completed? "Done" : "To-do"}</p>
        <button onClick={() => deleteTask(todo.id)}>Delete</button>
    </div>
  )
}

export {Todo}