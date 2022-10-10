import React from 'react'
import { Link } from 'react-router-dom'
import "./todo.css"

function Todo({todo, deleteTask, toggleTask }) {
  return (
    <div className='container'>
        <h5 className={todo.completed? "completed" : ""} onClick={() => toggleTask(todo.id)}>{todo.task}</h5>
        <p className={todo.completed? "done" : "to-do"}>{todo.completed? "Done" : "To-do"}</p>
        <button className='btn-delete' onClick={() => deleteTask(todo.id)}>Delete</button>
        <Link to={`/edit/${todo.id}`}>
        <button className='btn-update'>Update</button>
        </Link>
    </div>
  )
}

export {Todo}