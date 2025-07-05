import React from 'react';
import './DailyView.css';
import Navbar from '../components/Navbar';

const DailyView = () => {
  return (
    <div className="daily-page">
      <Navbar />
      <h2 className="daily-heading">Your Daily Tasks</h2>
      <p className="daily-info">Feature coming soon: Add, update and track your daily schedule here.</p>
    </div>
  );
};

export default DailyView;
