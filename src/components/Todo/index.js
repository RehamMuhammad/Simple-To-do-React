import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../../store/actions';
import "./todo.css"

function Todo({todo}) {
    const dispatch = useDispatch();

  return (
    <div className='container'>
        <h5 className={todo.completed? "completed" : ""} onClick={() => dispatch(toggleTask(todo.id))}>{todo.task}</h5>
        <p className={todo.completed? "done" : "to-do"}>{todo.completed? "Done" : "To-do"}</p>
        <button className='btn-delete' onClick={() => dispatch(deleteTask(todo.id))}>Delete</button>
        <Link to={`/edit/${todo.id}`}>
        <button className='btn-update'>Update</button>
        </Link>
    </div>
  )
}

export {Todo}