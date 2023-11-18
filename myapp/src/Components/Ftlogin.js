import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/send-login-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      if (response.status === 200) {
        // Handle success (e.g., show a success message to the user)
        console.log('Email sent successfully');
        setMessage('Email sent successfully');
        navigate('/Verifyotp');
      } else if (response.status === 404) {
        // Handle the case where the email was not found
        setMessage('Email not found in the database'); 
      } else {
        // Handle other error cases
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className="container">
  <h2 className="mt-4">Request Login Password</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        className="form-control"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div><br/>
    <button type="submit" className="btn btn-primary">
      Send Login Password
    </button>
  </form>
<br/>
  {message && (
    <div className={`alert ${message === 'Email not found in the database' ? 'alert-danger' : 'alert-success'}`}>
      {message}
    </div>
  )}
</div>

  );
}

export default Login;
