import React, { useState } from 'react';

function PasswordUpdateForm() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const userId = 4; // Replace with your actual user ID logic
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if newPassword and confirmPassword match
    if (newPassword !== confirmPassword) {
      setMessage('New password and confirm password must match.');
      return;
    }

    // Make a POST request to your server to update the password
    fetch(`http://localhost:4000/api/updatePassword/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ oldPassword, newPassword }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Password update failed');
        }
      })
      .then((data) => {
        setMessage(data.message);
        
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('An error occurred while updating the password.');
      });
  };

  return (
    <div className="container mt-5">
      <h2>Password Update</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="oldPassword">Old Password:</label>
          <input
            type="password"
            className="form-control"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <br/>
        <div  className="text-center">
        <button type="submit"  className="btn btn-primary">Update Password</button>
        {message && <div className="mt-3 alert alert-info">{message}</div>}
        </div>
      </form>
    </div>
  );
}

export default PasswordUpdateForm;
