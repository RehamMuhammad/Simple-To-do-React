import React, { useState } from 'react'
import { AddTodo, TodoList } from '../../components'
import "./home.css"

function Home() {

  const [tasks, setTasks] = useState([]);


  const addTask = (task) => {
    console.log(task)
    let newTasks = [...tasks];
    newTasks = [...newTasks, {id: newTasks.length+1, task, status:"To-do"}]
    setTasks(newTasks);
    console.log(tasks)

  }
  return (
    <>
    <div className='add-task'>
      <AddTodo addTask={addTask}/>
      </div>

      <main>
        <TodoList toDoList={tasks} />
      </main>
      </>

  )
}

export default Home;