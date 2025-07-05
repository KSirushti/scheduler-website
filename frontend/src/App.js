import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CalendarView from './pages/CalendarView';
import DailyView from './pages/DailyView';
import UploadForm from './components/UploadForm';
import MoodForm from './components/MoodForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/daily" element={<DailyView />} />
          <Route path="/mood" element={<MoodForm />} />
          <Route path="/upload" element={<UploadForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
