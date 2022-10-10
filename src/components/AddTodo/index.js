import React, { useState } from 'react'
import "./addTodo.css"

function AddTodo({ addTask }) {

    const [newTask, setNewTask] = useState("");
    const [errors, setErrors] = useState(" ")

    const handleChange = (e) => {
        setNewTask(e.target.value)
        console.log(newTask)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(errors)
        setErrors(!newTask ? "You Should Enter a Task Name" : "");
        console.log(errors)

        if (!errors) {
            addTask(newTask)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input className='form-control' type="text" placeholder='Add New Task' value={newTask} onChange={handleChange} />
                <input className='btn-submit' type='submit' value='Add Task' />
            </form>
            {errors ? (
                <div className="text-danger">{errors}</div>
            ) : null}
        </>
    )
}

export { AddTodo }