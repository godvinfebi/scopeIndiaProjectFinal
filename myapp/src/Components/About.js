import Features from "./Features";
import Footer from "./Footer";
import "./about.css"
import { useState } from "react";


function About() {
  const [courseName, setCourseName] = useState('');

  const handleSaveCourse = () => {
    // Send a POST request to save the selected course
    fetch('http://localhost:4000/api/saveCourse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ courseName }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message); // Log success message
      })
      .catch((error) => {
        console.error('Error saving course: ', error);
      });
  };
  return (
    <div style={{ width: "100%", backgroundPosition: "center top", height: "auto", backgroundRepeat: 'no-repeat', backgroundColor: '#051a69', backgroundImage: 'url("https://scopeindia.org/images/snowpark-skis-headerbg2.jpg")' }}>

      <h1 style={{ paddingTop: '12%', color: "yellow", fontSize: '350%', textAlign: 'center' }}>Our Training Programs</h1>
      <p style={{ color: 'white', fontSize: '140%', textAlign: 'center' }}>All Trainers are working professionals, Software Engineers, Networking Engineers, and Software Test Engineers of <br />Suffix E Solutions</p>
      <img className="rounded mx-auto d-block" src="https://scopeindia.org/images/scope-india-full-stack-offer-julyslip2023%20(1).jpg" alt="..."></img>

      <br />
      <img style={{ width: '300px' }} src="https://scopeindia.org/images/5star.png" className="rounded mx-auto d-block" alt="..."></img>
      <div style={{ color: 'white' }} className="d-flex justify-content-center"><p >Google 4.9 * Rated Institute</p></div>
      <br />
 
      <div className="container mt-4">
      <h2  className="text-center text-white">Courses </h2>
      <br></br> 
      <div className="form-group">
        <select
          id="courseName"
          className="form-control"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        >
        <option value="Choose Your course ">Choose Your course</option>
        <option value="javaInternship">Java Full Stack Internship</option>
        <option value="pythonInternship">Python Full Stack Internship</option>
        <option value="phpInternship">PHP Full Stack Internship</option>
        <option value="dotNetInternship">.Net Core Full Stack Internship</option>
        <option value="mernInternship">MERN Full Stack Internship</option>
      
          
        </select>
      </div>
      <div className="text-center mt-4">
      <button
        className="btn btn-primary btn-lg custom-button" 
        style={{
          backgroundColor: '#051a69',
          color: 'white',
          borderRadius: '10px',
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
          padding: '10px 20px',
          fontSize: '1.2rem',
        }}
        onClick={handleSaveCourse}
      >
        Save Course
      </button>
    </div>
    
    </div>
    <br/>
  
  
      <div className='container bg-light pb-5' style={{ width: '69vw', height: '', backgroundImage: 'url("https://scopeindia.org/images/si-call-back-bg.jpg")' }}>
        <div className='row'>
          <div className='col-lg-6 col-md-12'>
            <img style={{ padding: '5%', width: '105%' }} src="https://scopeindia.org/images/scope-india-lets-discuss-your-career.jpg" alt="study"></img>
          </div>
          <div style={{ paddingTop: '5%' }} className='col-lg-6 col-md-12'>
            <h1 style={{ color: 'darkblue' }}>SCOPE INDIA
              is open 365 days a year</h1>
            <br></br>
            <p>We are open 7 days 24 hrs to talk to you and listen to <br></br>
              your queries.</p>
            <br></br>
            <form>
              <h2 style={{ color: '#5ead5e' }}>GET A FREE CALL BACK</h2><br></br>
              <input type="text" className="form-control" placeholder="Enter your name" aria-label="Username" aria-describedby="basic-addon1" /><br></br>
              <input type="text" className="form-control" placeholder="Enter your number" aria-label="Username" aria-describedby="basic-addon1" /><br></br>
              <button style={{ color: 'white', backgroundColor: '#5ead5e' }} className="btn btn-primary w-100" type="button">Call Me</button>

            </form>
          </div>
        </div>
      </div>
      <Features />
      <img className='w-100' style={{ height: "auto", paddingTop: "10vh", overflow: "hidden" }} src="https://scopeindia.org/images/snowpark-home-slide-decoration-bottomm.png" alt=".."></img>
      <Footer />
    </div>

  )
}

export default About;
