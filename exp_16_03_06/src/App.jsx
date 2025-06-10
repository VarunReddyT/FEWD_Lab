import React, { useState, useRef, useEffect } from 'react';

const App = () => {
  const [value, setValue] = useState('');
  const renderCount = useRef(0);
  const prevValue = useRef('');

  useEffect(() => {
    renderCount.current += 1;
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      setValue(newValue);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', width: '100%' }}
    >
      <div className="card p-4 shadow-sm" style={{ minWidth: '350px' }}>
        <h5 className="mb-3 text-center">Numeric Input</h5>
        <div className="mb-3">
          <label htmlFor="numericInput" className="form-label">
            Enter a number:
          </label>
          <input
            type="text"
            id="numericInput"
            className="form-control"
            value={value}
            onChange={handleChange}
            placeholder="Only numbers allowed"
          />
        </div>
        <div className="alert alert-info">
          Render count: <strong>{renderCount.current}</strong>
        </div>
        <div className="alert alert-success">
          Current value: <strong>{value}</strong>
        </div>
        <div className="alert alert-warning">
          Previous value: <strong>{prevValue.current}</strong>
        </div>
      </div>
    </div>
  );
};

export default App;
