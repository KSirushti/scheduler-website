// src/pages/CalendarView.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './CalendarView.css';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function CalendarView() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const navigate = useNavigate();

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const generateCalendar = () => {
    const days = getDaysInMonth(currentMonth, currentYear);
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const blanks = Array(firstDay).fill(null);
    const dates = Array.from({ length: days }, (_, i) => i + 1);
    return [...blanks, ...dates];
  };

  const handleDayClick = (date) => {
    const selectedDate = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    navigate('/mood', { state: { selectedDate } });
  };

  const changeMonth = (offset) => {
    let newMonth = currentMonth + offset;
    let newYear = currentYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    } else if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const calendar = generateCalendar();

  return (
    <div>
      <Navbar />
      <div className="calendar-container">
        <div className="calendar-header">
          <button onClick={() => changeMonth(-1)}>{'<'}</button>
          <h2>{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}</h2>
          <button onClick={() => changeMonth(1)}>{'>'}</button>
        </div>
        <div className="calendar-grid">
          {daysOfWeek.map((day, idx) => (
            <div key={idx} className="calendar-day-header">{day}</div>
          ))}
          {calendar.map((date, idx) => (
            <div
              key={idx}
              className={`calendar-day ${date ? '' : 'empty'}`}
              onClick={() => date && handleDayClick(date)}
            >
              {date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
