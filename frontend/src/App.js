import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CalendarView from './pages/CalendarView';
import DailyView from './pages/DailyView';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/daily" element={<DailyView />} />
      </Routes>
    </Router>
  );
}

export default App;
