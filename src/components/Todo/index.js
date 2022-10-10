import React from 'react'
import "./todo.css"

function Todo() {
  return (
    <div className='container'>
        <h5 className='title'>Title</h5>
        <p className='content'>content</p>
        <time className='due-date'>10-10-2022</time>
        <p className='status'>Done</p>
    </div>
  )
}

export {Todo}