import React from 'react';
import './DailyView.css';
import Navbar from './components/Navbar';

const DailyView = () => {
  const today = new Date().toDateString();

  return (
    <div className="daily-container">
      <Navbar />
      <h2>Daily View - {today}</h2>
      <p>Here’s your task breakdown for today:</p>
      {/* List today's tasks dynamically here */}
    </div>
  );
};

export default DailyView;
