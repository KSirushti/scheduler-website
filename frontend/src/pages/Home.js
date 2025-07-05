import React from 'react';
import './Home.css';
import Navbar from './components/Navbar';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <h1>Welcome to the Scheduler</h1>
        <p>Plan, Track, and Reflect on your tasks effectively.</p>
      </div>
    </div>
  );
};

export default Home;
