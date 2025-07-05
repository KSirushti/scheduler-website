import React, { useState } from 'react';
import './CalendarView.css';
import Navbar from './components/Navbar';

const CalendarView = () => {
  const today = new Date();
  const currentDate = today.toDateString();

  return (
    <div className="calendar-container">
      <Navbar />
      <h2>Calendar View</h2>
      <p>Today's Date: {currentDate}</p>
      {/* You can map and display tasks/events here */}
    </div>
  );
};

export default CalendarView;
