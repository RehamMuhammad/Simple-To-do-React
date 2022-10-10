import React from 'react'
import { AddTodo, Todo } from '../../components'
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
        <Todo />
      </main>
      </>

  )
}

export default Home;