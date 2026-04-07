import React from 'react'
import Tasks from "./pages/tasks.jsx"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './nav.jsx';
import Home from './pages/home.jsx';
import Profile from './pages/profile.jsx';
import TaskDetails from './pages/taskDetails.jsx';
import  { useState } from "react";
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';  
import ProtectedRoute from './guard.jsx';
const App = () => {
  const [tasks, setTasks] = useState([])
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/tasks" element={  <ProtectedRoute>
          <Tasks tasks={tasks} setTasks={setTasks} /> </ProtectedRoute> 
      } />
        <Route path="/profile" element={<ProtectedRoute>
          <Profile />
          </ProtectedRoute>
          } />
        <Route path="/taskDetails/:id" element={<ProtectedRoute>
          <TaskDetails tasks={tasks} />
          </ProtectedRoute>}
           />
        <Route path="/" element={ <Login/>}/>
        <Route path="/signUp" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
