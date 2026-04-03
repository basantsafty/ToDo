import React from 'react'
import Tasks from "./pages/tasks.jsx"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './nav.jsx';
import Home from './pages/home.jsx';
import Profile from './pages/profile.jsx';
import TaskDetails from './pages/taskDetails.jsx';
import  { useState } from "react";
const App = () => {
  const [tasks, setTasks] = useState([])
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks tasks={tasks} setTasks={setTasks} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/taskDetails/:id" element={<TaskDetails tasks={tasks} />} />

      </Routes>
    </Router>
  );
}

export default App;
