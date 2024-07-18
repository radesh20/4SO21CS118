import React, { useState } from 'react';

const AverageCalculator = () => {
  const [numberId, setNumberId] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const handleFetch = async () => {
    try {
      setError('');
      const response = await axios.get(`http://127.0.0.1:5000/numbers/${numberId}`);
      setData(response.data);
    } catch (err) {
      setError('Error fetching data');
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <input
        type="text"
        value={numberId}
        onChange={(e) => setNumberId(e.target.value)}
        placeholder="Enter number ID (p, f, e, r)"
      />
      <button onClick={handleFetch}>Fetch</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <div>
          <h2>Results:</h2>
          <p><strong>Window Previous State:</strong> {data.windowPrevState.join(', ')}</p>
          <p><strong>Window Current State:</strong> {data.windowCurrState.join(', ')}</p>
          <p><strong>Numbers:</strong> {data.numbers.join(', ')}</p>
          <p><strong>Average:</strong> {data.avg}</p>
        </div>
      )}
    </div>
  );
};

export default AverageCalculator;
