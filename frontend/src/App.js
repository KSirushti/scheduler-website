import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MotivationHome from './pages/MotivationHome';
import CalendarView from './pages/CalendarView';
import DailyView from './pages/DailyView';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/motivation" element={<MotivationHome />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/daily" element={<DailyView />} />
      </Routes>
    </Router>
  );
}

export default App;
