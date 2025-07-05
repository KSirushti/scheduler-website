import React from 'react';
import './CalendarView.css';
import Navbar from '../components/Navbar';

const CalendarView = () => {
  const today = new Date();
  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();

  return (
    <div className="calendar-page">
      <Navbar />
      <div className="calendar-header">
        <h2>{month} {year}</h2>
        <p>Google Calendar-style view coming soon...</p>
      </div>
    </div>
  );
};

export default CalendarView;
