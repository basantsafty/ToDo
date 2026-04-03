import React from 'react'
import Card from '../card.jsx'
import Btn from '../btn.jsx'
import { useState } from 'react'
import { useEffect } from 'react';
function Tasks({ tasks, setTasks }) {
  const [input, setInput] = useState('')
  const inputFunction = (e) => {
    setInput(e.target.value)
  }
  let [id, setId]= useState(0);
  
  const [visibleTasks, setVisibleTasks] = useState([]); // what you show on screen
  const submitTask = (task) => {
    const newTask = { id:id, name:task, description:"", state:false };
    setId(id => id + 1);

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setVisibleTasks(updatedTasks); // use the updated array
      
  }
  const deleteTask = (id) => {
    // Implementation for deleting task
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    setVisibleTasks(updatedTasks);
  };
  const toggleTask = (id) => {
    // Implementation for toggling task
    const updatedTasks = tasks.map(task =>
    task.id === id ? { ...task, state: !task.state } : task
  );
  setTasks(updatedTasks);
  setVisibleTasks(updatedTasks);
  };

useEffect(() => {
  setVisibleTasks(tasks);
}, [tasks]);


  useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);



  return (
    <div className='bg-amber-100 flex flex-col items-center justify-content min-h-screen'>
      <div className='flex flex-row items-center justify-center m-5 p-5 gap-3'>  
      <input
        type="text"
        className="bg-amber-100 border-2 border-amber-400 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-amber-400"
        placeholder="Enter task"
        name='task'
        onChange={inputFunction}
      />
      <Btn message="Add Task" fuctionality={() => submitTask(input)} /> 
        <Btn message="Show Completed" fuctionality={() => setVisibleTasks(tasks.filter(t => t.state))} />
        <Btn message="Show Pending" fuctionality={() => setVisibleTasks(tasks.filter(t => !t.state))} />
        <Btn message="Show All" fuctionality={() => setVisibleTasks(tasks)} />

        </div>
        <ul className='mt-4 '>
        {visibleTasks.map((task, index) => (
          <li key={index} className=" display: inline-block m-4 p-4">
            <Card 
              task={task} 
              deleteTask={() => deleteTask(task.id)} 
              toggleTask={() => toggleTask(task.id)} 
            />

          </li>
        ))}
        </ul>
      
    </div>
  )
}

export default Tasks