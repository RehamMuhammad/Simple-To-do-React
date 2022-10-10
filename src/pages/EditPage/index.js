import React , {useState, useEffect} from 'react'

function Edit() {
const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')));


  return (
//     <form onSubmit={editTask}>
//     <input className='form-control' type="text" placeholder='Add New Task' value={newTask} onChange={handleChange} />
//     <input className='btn-submit' type='submit' value='Edit Task' />
// </form>
<h1>rr
    {    console.log(tasks)
}
</h1>
  )
}

export default Edit