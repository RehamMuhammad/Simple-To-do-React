import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

function Edit() {
    const { id } = useParams();
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')));
    const [task, setTask] = useState(null);
    const [newTask, setNewTask] = useState(task?.task);
    const [errors, setErrors] = useState(" ")

    useEffect(() => {
        let task = tasks.find((task) => task.id === Number(id));
        setTask(task)
        setNewTask(task.task)
    }, [id, tasks]);


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
            let mapped = tasks.map(task => {
                return task.id === Number(id) ? { ...task, task: newTask } : { ...task };
            });
            setTasks(mapped);
        }
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    return (
        <form onSubmit={handleSubmit}>
            <input className='form-control' type="text" value={newTask} onChange={handleChange} />
            <input className='btn-submit' type='submit' value='Edit Task' />
            {console.log({ id, tasks, task })
            }</form>

    )
}

export default Edit