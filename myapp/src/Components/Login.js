
import { NavLink } from 'react-router-dom';

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:4000/api/login', data);

      console.log(response)

      if (response.status === 200) {

        let token = response.data.token;
        localStorage.setItem('token',token)
        setMessage('Login successful');
        navigate('/Dashboard')
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Invalid email or password');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          {message && (
            <div className="mt-3 alert alert-info text-center">{message}</div>
          )}
        </div>
      </div>
      <br/>
      <div className="container text-center">
            <NavLink to="/Ftlogin" className="btn btn-primary">
               First Time Login
            </NavLink>
           </div>
    </div>
  );
};

export default LoginForm;
