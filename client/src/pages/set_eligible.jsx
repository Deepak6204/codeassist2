import React from 'react';

const SetEligibility = () => {
  const handleSetRound1Eligible = async () => {
    try {
      const response = await fetch('https://server-jt5f.onrender.com/round1/eligible/abcd1234', {
        method: 'PUT',
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert('Error setting Round 1 eligibility');
    }
  };

  const handleSetRound2Eligible = async () => {
    try {
      const response = await fetch('https://server-jt5f.onrender.com/round2/eligible/abcd1234', {
        method: 'PUT',
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert('Error setting Round 2 eligibility');
    }
  };

  const handleSetRound3Eligible = async () => {
    try {
      const response = await fetch('https://server-jt5f.onrender.com/round3/eligible/abcd1234', {
        method: 'PUT',
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert('Error setting Round 3 eligibility');
    }
  };

  const buttonStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px 20px',
    margin: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={{ backgroundColor: 'black', padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: 'white' }}>Set Round Eligibility</h1>
      <button style={buttonStyle} onClick={handleSetRound1Eligible}>
        Set Round 1 Eligible
      </button>
      <button style={buttonStyle} onClick={handleSetRound2Eligible}>
        Set Round 2 Eligible
      </button>
      <button style={buttonStyle} onClick={handleSetRound3Eligible}>
        Set Round 3 Eligible
      </button>
    </div>
  );
};

export default SetEligibility;
