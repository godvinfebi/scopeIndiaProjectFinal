import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VerifyOtp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Change 'password' to 'otp'
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const verifyOTP = async () => {
    try {
      const response = await fetch('http://localhost:4000/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp: password }), // Change 'password' to 'otp'
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message); // Display success message
        console.log(data.message);
       // navigate('/Updateotp');
       navigate('/Login');
      } else {
        setMessage(data.message); // Display error message
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to verify OTP');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">OTP Verification</h1>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Enter OTP"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Use setPassword to update the OTP state
        />
        <button className="btn btn-primary mt-2" onClick={verifyOTP}>
          Verify OTP
        </button>
      </div>
      
      <br/>
  {message && (
    <div className={`alert ${message === 'Email not found in the database' ? 'alert-danger' : 'alert-success'}`}>
      {message}
    </div>
  )}
    </div>
  );
}

export default VerifyOtp;
