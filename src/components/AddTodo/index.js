import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createTask } from '../../store/actions';
import "./addTodo.css"

function AddTodo() {
    const dispatch = useDispatch()

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
            dispatch(createTask(newTask))
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