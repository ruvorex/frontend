import React, { useState } from 'react';
import axios from '../axiosConfig';

const ViewEAdvisor = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('/api/eadvisor/prompt', { prompt });
      setResponse(result.data.response);
    } catch (error) {
      console.error('Error with E-Advisor prompt:', error);
    }
  };

  return (
    <div>
      <h1>E-Advisor</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ask a question</label>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h2>Response</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default ViewEAdvisor;
