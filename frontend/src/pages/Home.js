import React, { useEffect, useState } from 'react';
import './Home.css';
import Navbar from '../components/Navbar';

const quotes = [
  "You can do it!",
  "Stay positive and productive.",
  "Every day is a fresh start.",
  "Keep pushing forward.",
  "Believe in your plan!"
];

const Home = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <h1>Welcome to the Scheduler</h1>
        <p>Plan, Track, and Reflect on your tasks effectively.</p>
        <div className="motivation-box">
          <h2>Today's Motivation</h2>
          <p>{quote}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
