import React, { useState } from 'react'

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
        <input type="text" placeholder='Add New Task' value={newTask} onChange={handleChange} />
        <input type='submit' value='Add Task'/>
    </form>
  )
}

export {AddTodo}