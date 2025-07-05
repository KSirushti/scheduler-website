import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>📅 Scheduler</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/motivation">Motivation</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/daily">Daily View</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
