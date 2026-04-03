import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-amber-950 border-b-2 border-amber-200 p-4 flex justify-between items-center text-white">
      {/* Left side: App title */}
      <div className="text-2xl font-bold  text-amber-50">
        ToDO App
      </div>

      {/* Right side: Navigation links */}
      <div className="flex gap-6">
        <Link to="/" className="text-amber-50 hover:text-amber-600 px-10 text-xl">
          Home
        </Link>
        <Link to="/tasks" className="text-amber-50 hover:text-amber-600 px-10 text-xl">
          Tasks
        </Link>
        <Link to="/profile" className="text-amber-50 hover:text-amber-600 px-10 text-xl">
          Profile
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
