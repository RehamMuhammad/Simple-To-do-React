import React, { useState } from 'react'
import { AddTodo, TodoList } from '../../components'
import "./home.css"

function Home() {

  const [tasks, setTasks] = useState([]);

//Add New Task
  const addTask = (task) => {
    console.log(task)
    let newTasks = [...tasks];
    newTasks = [...newTasks, {id: newTasks.length+1, task, completed:false}]
    setTasks(newTasks);
    console.log(tasks)
  }

//Delete Task
const handleFilter = (id) => {
  let filteredTasks = tasks.filter((task) => task.id !== id);
  setTasks(filteredTasks)
}

//Toggle Task
const handleToggle = (id) => {

  let completed = tasks.map(task => {
    return task.id === Number(id) ? { ...task, completed: !task.completed } : { ...task};
  });
  setTasks(completed);
}

  return (
    <>
    <div className='add-task'>
      <AddTodo addTask={addTask}/>
      </div>

      <main>
        <TodoList toDoList={tasks} handleFilter={handleFilter} handleToggle={handleToggle}/>
      </main>
      </>

  )
}

export default Home;