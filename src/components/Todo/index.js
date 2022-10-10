import React from 'react'
import "./todo.css"

function Todo({todo, deleteTask, toggleTask }) {
  return (
    <div className='container'>
        <h5 className='task' onClick={toggleTask}>{todo.task}</h5>
        <p className='status'>{todo.status}</p>
        <button onClick={deleteTask}>Delete</button>
    </div>
  )
}

export {Todo}