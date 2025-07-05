import React, { useState } from 'react';
import './CalendarView.css';

const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [newTask, setNewTask] = useState('');

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDay = startOfMonth.getDay();
  const daysInMonth = endOfMonth.getDate();

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setNewTask('');
  };

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    setTasks((prev) => ({
      ...prev,
      [selectedDate]: [...(prev[selectedDate] || []), newTask],
    }));
    setNewTask('');
    setSelectedDate(null);
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty-cell" />);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`;
      days.push(
        <div key={day} className="calendar-cell" onClick={() => handleDateClick(dateKey)}>
          <span className="date-label">{day}</span>
          <ul className="task-list">
            {(tasks[dateKey] || []).map((task, idx) => (
              <li key={idx}>{task}</li>
            ))}
          </ul>
        </div>
      );
    }
    return days;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={goToPreviousMonth}>&lt;</button>
        <h2>
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </h2>
        <button onClick={goToNextMonth}>&gt;</button>
      </div>
      <div className="calendar-grid">{renderDays()}</div>

      {selectedDate && (
        <div className="task-popup">
          <h3>Add Task for {selectedDate}</h3>
          <input
            type="text"
            placeholder="Enter task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
          <button onClick={() => setSelectedDate(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default CalendarView;
