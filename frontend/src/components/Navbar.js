import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> |
      <Link to="/calendar">Calendar</Link> |
      <Link to="/daily">Daily View</Link>
    </nav>
  );
};

export default Navbar;
