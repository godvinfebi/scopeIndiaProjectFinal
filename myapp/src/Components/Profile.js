
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [userdata, setUserData] = useState({
    username: '',
    email: '',
    course: '',
    number: '',
    qualification: '',
  });

  const [updatedData, setUpdatedData] = useState({
    username: '',
    course: '', // Initialize the 'course' field
    number: '',
    qualification: '',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          console.error('Token not available');
          return;
        }

        const response = await axios.get('http://localhost:4000/api/profile', {
          headers: {
            Authorization: token,
          },
        });

        const data = response.data;

        setUserData({
          username: data.username,
          email: data.email,
          course: data.course,
          number: data.number,
          qualification: data.qualification,
        });

        console.log(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchData();
  }, []); // Use an empty dependency array, so it runs once on component mount

  useEffect(() => {
    // Fetch the updated course name from local storage
    const updatedCourseName = localStorage.getItem('updatedCourseName');
    console.log(updatedCourseName);

    // Update the 'updatedData' state with the course name
    setUpdatedData({ ...updatedData, course: updatedCourseName });

    console.log(updatedData);
  }, []); // Use an empty dependency array, so it runs once on component mount

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not available');
        return;
      }

      const response = await axios.put(
        'http://localhost:4000/api/profile/update',
        updatedData,
        {
          headers: {
            Authorization: token,
          },
         } );
        
      console.log(response.data);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  return (
    <div>
      <div style={{ marginLeft: '50px', fontSize: '20px' }} className="row mt-4">
        <div className="col-md-12">
          <h3>Profile Details</h3>
          <div>
            <p>
              <strong>Username:</strong> {userdata.username}
            </p>
            <p>
              <strong>Email:</strong> {userdata.email}
            </p>
            <p>
              <strong>Course:</strong> {updatedData.course}
            </p>

            <p>
              <strong>Number:</strong> {userdata.number}
            </p>
            <p>
              <strong>Qualification:</strong> {userdata.qualification}
            </p>
          </div>
          <hr />
          <h3>Edit Profile</h3>
          <div>
            <div className="mb-3">
              <label className="form-label">Username: </label>
              <input
                type="text"
                className="form-control"
                placeholder={userdata.username}
                value={updatedData.username}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, username: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Course: </label>
              <input
                type="text"
                className="form-control"
                value={updatedData.course}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, course: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Number: </label>
              <input
                type="text"
                className="form-control"
                placeholder={userdata.number}
                value={updatedData.number}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, number: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Qualification: </label>
              <input
                type="text"
                className="form-control"
                placeholder={userdata.qualification}
                value={updatedData.qualification}
                onChange={(e) =>
                  setUpdatedData({ ...updatedData, qualification: e.target.value })
                }
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleUpdate}
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
