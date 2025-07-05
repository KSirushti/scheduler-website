import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Scheduler</h1>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/daily">Daily View</Link>
      </div>
    </nav>
  );
};

export default Navbar;
