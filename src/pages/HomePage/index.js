import React, { useState } from 'react'
import { AddTodo, TodoList } from '../../components'
import "./home.css"

function Home() {

  const [tasks, setTasks] = useState([]);

//Add New Task
  const addTask = (task) => {
    console.log(task)
    let newTasks = [...tasks];
    newTasks = [...newTasks, {id: newTasks.length+1, task, status:"To-do"}]
    setTasks(newTasks);
    console.log(tasks)
  }

//Delete Task
const handleFilter = (id) => {
  let filteredTasks = tasks.filter((task) => task.id !== id);
  setTasks(filteredTasks)
}

  return (
    <>
    <div className='add-task'>
      <AddTodo addTask={addTask}/>
      </div>

      <main>
        <TodoList toDoList={tasks} handleFilter={handleFilter} />
      </main>
      </>

  )
}

export default Home;