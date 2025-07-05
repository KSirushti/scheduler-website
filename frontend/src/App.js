import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DailyView from './components/DailyView';
import Calendar from './components/Calendar';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/daily" element={<DailyView />} />
      </Routes>
    </>
  );
};

export default App;
