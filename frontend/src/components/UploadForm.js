import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);

    try {
      const res = await axios.post(
        'https://scheduler-website.onrender.com/api/upload/',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      setResponse(res.data);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div>
      <h2>Upload File to S3</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Upload</button>
      </form>

      {response && (
        <div>
          <h3>Uploaded File:</h3>
          <a href={response.file} target="_blank" rel="noreferrer">
            {response.file}
          </a>
        </div>
      )}
    </div>
  );
};

export default UploadForm;