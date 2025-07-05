import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './MoodForm.css'; // Optional: For styling

const MoodForm = () => {
  const location = useLocation();
  const selectedDate = location.state?.selectedDate;

  const [mood, setMood] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('date', selectedDate);
    formData.append('mood', mood);
    formData.append('title', title);
    formData.append('description', description);
    if (file) formData.append('file', file);

    try {
      const res = await axios.post("https://scheduler-api.onrender.com/api/mood/", formData,
  { headers: { 'Content-Type': 'multipart/form-data' } }
);

      setResponse(res.data);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div className="mood-form">
      <h2>Mood Entry for {selectedDate}</h2>
      <form onSubmit={handleSubmit}>
        <label>Mood:</label>
        <select value={mood} onChange={(e) => setMood(e.target.value)} required>
          <option value="">Select Mood</option>
          <option value="happy">Happy 😊</option>
          <option value="sad">Sad 😢</option>
          <option value="satisfied">Satisfied 😌</option>
          <option value="okay">Okay 🙂</option>
          <option value="excellent">Excellent 🤩</option>
        </select>

        <label>Title:</label>
        <input
          type="text"
          placeholder="Title of what you did"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Description:</label>
        <textarea
          placeholder="Describe your day..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <label>Optional File Upload (image/video):</label>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        <button type="submit">Submit</button>
      </form>

      {response && (
        <div className="upload-response">
          <h3>Submitted Successfully!</h3>
          <a href={response.file} target="_blank" rel="noreferrer">View Uploaded File</a>
        </div>
      )}
    </div>
  );
};

export default MoodForm;
