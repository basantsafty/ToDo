import React from 'react'
import { useParams } from "react-router-dom";

function TaskDetails({ tasks }) {
    const { id } = useParams()
    const task = tasks.find(t => t.id === parseInt(id));
  return (
    <div className='bg-amber-100 flex flex-col items-center justify-content min-h-screen'>
        <h1 className='text-4xl text-amber-900 m-5 p-5'>Task Details</h1>
        <p className='text-2xl text-amber-950 m-3 p-3'>Name: {task.name}</p>
   
        <p className='text-2xl text-amber-950 m-3 p-3'>State: {task.state ? 'Completed' : 'Pending'}</p>
    </div>
  )
}

export default TaskDetails