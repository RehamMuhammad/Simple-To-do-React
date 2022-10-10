import React, { useState } from 'react'
import "./addTodo.css"

function AddTodo({addTask}) {

    const [newTask, setNewTask] = useState("");

    const handleChange = (e) => {
        setNewTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(newTask)
      }

  return (
    <form onSubmit={handleSubmit}>
        <input className='form-control' type="text" placeholder='Add New Task' value={newTask} onChange={handleChange} />
        <input className='btn-submit' type='submit' value='Add Task'/>
    </form>
  )
}

export {AddTodo}