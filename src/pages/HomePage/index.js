import React from 'react'
import { useSelector } from 'react-redux';
import { AddTodo, TodoList } from '../../components'
import "./home.css"

function Home() {
const tasks = useSelector(state => state.tasks)

  // //Toggle Task
  // const handleToggle = (id) => {
  //   let completed = taskList.map(task => {
  //     return task.id === Number(id) ? { ...task, completed: !task.completed } : { ...task };
  //   });
  //   setTaskList(completed);
  // }

  return (
    <>
      <div className='add-task'>
        <AddTodo />
      </div>

      <main>
        <TodoList toDoList={tasks} />
      </main>
    </>

  )
}

export default Home;