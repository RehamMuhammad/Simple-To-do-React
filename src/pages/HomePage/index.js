import React from 'react'
import { AddTodo, TodoList } from '../../components'
import "./home.css"

function Home() {
  const addTask = (task) => {
    console.log(task)
  }
  return (
    <>
    <div className='add-task'>
      <AddTodo addTask={addTask}/>
      </div>

      <main>
        <TodoList toDoList={[{id:1, task:"Roro", status:"Done"}]} />
      </main>
      </>

  )
}

export default Home;