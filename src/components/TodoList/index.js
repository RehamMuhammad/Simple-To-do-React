import React from 'react'
import { Todo } from '..'

function TodoList({ toDoList, handleToggle, handleFilter }) {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <Todo key={todo.id} todo={todo} toggleTask={handleToggle} deleteTask={handleFilter} />
                )
            })}
        </div>
    )
}

export { TodoList }