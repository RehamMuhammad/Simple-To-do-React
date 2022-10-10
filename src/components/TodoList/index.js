import React from 'react'
import { Todo } from '..'

function TodoList({ toDoList, handleToggle, handleFilter }) {
    return (
        <>
            {toDoList.map(todo => {
                return (
                    <Todo key={todo.id + todo.task} todo={todo} toggleTask={handleToggle} deleteTask={handleFilter} />
                )
            })}
        </>
    )
}

export { TodoList }