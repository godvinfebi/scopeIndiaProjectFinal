import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

;
function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/Login');
  };

  const [userdata, setuserdata] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        let token = localStorage.getItem('token');
        let response = await axios.get(`http://localhost:4000/getuserdata?token=${token}`,{
          headers: {
            Authorization: token,
          },
        });
        let data = response.data;

        setuserdata(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchData(); 
  }, []);

  return (
    <div>
    
      <div style={{fontSize:'20px' }} className="container mt-5">
        <nav  style={{backgroundColor:'#051a69',}} className="navbar navbar-expand-lg ">
          
          <div className="collapse navbar-collapse">
            <ul  className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink style={{color:'white'}}
                  className="nav-link"
                  to="/CourseDetails"
                  activeClassName="active"
                >
                  Course Details
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={{color:'white'}}
                  className="nav-link"
                  to="/Profile"
                  activeClassName="active"
                >
                  Profile 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={{color:'white'}}
                  className="nav-link"
                  to="/Updateotp"
                  activeClassName="active"
                >
                  Change Password
                </NavLink>
              </li>
              <li className="nav-item">
                <button 
                  style={{
                    border: 'none',
                    background: 'none',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                    color:'white'
                  }}
                  className="nav-link"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <h3 style={{textAlign:'center',paddingTop:'15px'}}>  Welcome {userdata.username}</h3>
      </div><br/><br/>
      <div style={{color:'darkblue',}} className="d-flex justify-content-center fs-1"><h1>SCOPE INDIA, your career partner!</h1></div>
<div style={{color:'darkblue',}} className="d-flex justify-content-center fs-1"><h2>One of the best Training Destination for Software, Networking and <br/>Cloud Computing courses in India</h2></div>
<div style={{ width: '69vw',marginLeft:'15%',fontSize:'20px'}} className="d-flex justify-content-center "><p>
Software, Networking, and Cloud Professional Education Centre in Kerala from Suffix E Solutions with WORKING PROFESSIONALS oriented on-the-job TRAINING model. SCOPE INDIA provides courses for Software Programming in Python (Data Science | Artificial Intelligence | Machine Learning | Deep Learning), Java, PHP, .Net, Software Testing Manual and Automation, Cloud in AWS, Azure, Server Administration in MCSE, and RHCE, CCNA, Mobile App Development in Flutter, and, Digital Marketing. Training with 100% Trusted Job Based Internship Model. SCOPE INDIA has a Strong Placement Cell that provides jobs to 1000's of students every year. We assure you, you won't regret it after training from SCOPE INDIA!<br></br>

This is how SCOPE INDIA can support both newbies and experienced in the industry to upgrade their skills.</p></div>
    </div>
  );
}

export default Dashboard;
