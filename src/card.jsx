import React from 'react'
import Btn from './btn.jsx'
import { Link } from "react-router-dom";
import TaskDetails from './pages/taskDetails.jsx';

function Card({ task ,deleteTask , toggleTask}) {
   const stateColor = task.state ? 'bg-green-400' : 'bg-red-600';
   
  return (
    <div className={`bg-amber-200 border-4 rounded-2xl border-amber-700 p-4 text-amber-950 flex flex-col items-center justify-content w-96 }`}>
        <p className='text-2xl text-amber-950 m-3 p-24 '>{task.name}</p>

           <Link to={`/taskDetails/${task.id}`} className="text-amber-900 hover:text-amber-600 px-10 text-xl m-5 bg-amber-100 rounded-3xl ">
             View task details
           </Link>
      <Btn message="Delete Task" fuctionality={() => deleteTask(task.id)} />
      <Btn message="Toggle Task" fuctionality={() => toggleTask(task.id)} />
     <div className={` rounded-full ${stateColor} m-3 p-2`}> {task.state? 'Completed' : 'Pending'}</div>
    </div>
  )
}

export default Card
