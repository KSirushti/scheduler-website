import React from 'react';
import './MotivationHome.css';
import Navbar from '../components/Navbar';

const MotivationHome = () => {
  return (
    <div className="motivation-container">
      <Navbar />
      <div className="motivation-content">
        <h2>Today’s Motivation</h2>
        <p>“Success is the sum of small efforts, repeated day-in and day-out.”</p>
      </div>
    </div>
  );
};

export default MotivationHome;
