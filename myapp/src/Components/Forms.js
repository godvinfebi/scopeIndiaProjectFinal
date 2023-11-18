
import { NavLink } from 'react-router-dom'
import Footer from './Footer'
import './Form.css'
import { useState } from 'react'
import axios from 'axios'
function Forms() {
  const [formData, setFormData] = useState({
    username: '',
    dob: '',
    gender: '',
    qualification: '',
    course: 'Choose Your course',
    number: '',
    email: '',
    guardiansmobile:'',
    guardiansname: '',
    guardiansoccupation: '',
    address: '',
    country: '',
    state: '',
    city: '',
    pinZipcode: '',
    trainingmode: '',
    location: '',
    time:''
  });

  // Step 2: Create onChange event handlers
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'radio') {
    // For radio buttons, set the value directly when an option is selected
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  } else {
    // For other input types, handle as before
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? [...prevData[name], value] : value,
    }));
  }
  };

  // Step 3: Create function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  console.log("form data before submit: ");
  console.log(formData);

    try {
      const response = await axios.post('http://localhost:4000/api/register', formData);
      console.log('Server response', response.formData);
     
    } catch (error) {
      console.log('Error', error);
    }
  }
  return (
    <div style={{ backgroundSize: 'cover', height: "auto", backgroundPosition: "center top", backgroundRepeat: 'no-repeat', backgroundColor: 'darkblue', backgroundImage: 'url("https://scopeindia.org/images/snowpark-skis-headerbg2.jpg")' }}>
      <h1 style={{ color: 'yellow', textAlign: 'center', paddingTop: "10%", fontSize: '350%' }}>Registration</h1>
      <h2 style={{ color: 'white', textAlign: 'center' }}>It's just a matter of 60 days to an IT job!</h2><br />
      <div className=' row  pb-5 mx-auto' style={{ width: '69vw', backgroundImage: 'url("https://scopeindia.org/images/si-call-back-bg.jpg")' }}>
        <div style={{fontWeight:'bold'}} className='col-lg-6 regcol'>
        <form onSubmit={handleSubmit}>
  <label style={{ marginTop: '3%' }} className='labelreg'>Full Name (required)</label>
  <input
    type='text'
    className='form-control'
    id='exampleInputPassword1'
    name='username'
    placeholder='Enter your name'
    value={formData.username}
    onChange={handleInputChange}
  />
  <label style={{ marginTop: '3%' }} className='labelreg'>Date of Birth (required)</label>
  <input
    type='date'
    className='form-control'
    name='dob'
    id='exampleInputPassword1'
    placeholder='mm/dd/yyyy'
    value={formData.dob}
    onChange={handleInputChange}
  />
  <label style={{ marginTop: '3%' }} className='labelreg'>Gender (required)</label><br />
  <div style={{ marginTop: '3%' }} className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="gender"
      id="inlineRadio1"
      
      value="male"
      onChange={handleInputChange}
    />
    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
  </div>
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="gender"
      id="inlineRadio2"
      value="female"
      onChange={handleInputChange}
    />
    <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
  </div>
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="gender"
      id="inlineRadio3"
      value="Others"
      onChange={handleInputChange}
    />
    <label className="form-check-label" htmlFor="inlineRadio3">Others</label>
  </div><br />
  <label style={{ marginTop: '3%' }} className='labelreg'>Educational Qualification</label>
  <input
    type='text'
    className='form-control'
    name='qualification'
    id='exampleInputPassword1'
    placeholder=''
    value={formData.qualification}
      onChange={handleInputChange}
  />
  <label style={{ marginTop: '3%' }} className='labelreg'>Choose Your course (required)</label>
  <select className="form-select" name='course' value={formData.course}
  onChange={handleInputChange} aria-label="Default select example">
  <option value="Choose Your course ">Choose Your course</option>
  <option value="javaInternship">Java Full Stack Internship</option>
  <option value="pythonInternship">Python Full Stack Internship</option>
  <option value="phpInternship">PHP Full Stack Internship</option>
  <option value="dotNetInternship">.Net Core Full Stack Internship</option>
  <option value="mernInternship">MERN Full Stack Internship</option>
 
    
  </select>
  <label style={{ marginTop: '3%' }} className='labelreg'>Mobile Number (required)</label>
  <input
    type='text'
    className='form-control'
    name='number'
    id='exampleInputPassword1'
    placeholder=''
    value={formData.number}
      onChange={handleInputChange}
  />
  <label style={{ marginTop: '3%' }} className='labelreg'>Email (required)</label>
  <input
    type='email'
    className='form-control'
    name='email'
    id='exampleInputPassword1'
    placeholder=''
    value={formData.email}
      onChange={handleInputChange}
  />
  <label style={{ marginTop: '3%' }} className='labelreg'>Guardian's Mobile</label>
  <input
    type='text'
    className='form-control'
    name='guardiansmobile'
    id='exampleInputPassword1'
    placeholder=''
    value={formData.guardiansmobile}
      onChange={handleInputChange}
  />
  <label style={{ marginTop: '3%' }} className='labelreg'>Training Mode (required)</label><br />
  <div style={{ marginTop: '3%' }} className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="trainingmode"
      id="inlineRadio4"
      
      value="Live Online"
      onChange={handleInputChange}
    />
    <label className="form-check-label" htmlFor="inlineRadio4">Live Online</label>
  </div>
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="trainingmode"
      id="inlineRadio5"
      value="Classroom"
      onChange={handleInputChange}
    />
    <label className="form-check-label" htmlFor="inlineRadio5">Classroom</label>
  </div><br />
  <label style={{ marginTop: '3%' }} className='labelreg'>SCOPE INDIA LOCATION (required)</label>
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="location"
      id="inlineRadio6"
      value="Trivandrum"
      onChange={handleInputChange}
    />
    <label className="form-check-label" htmlFor="inlineRadio6">Trivandrum</label>
  </div>
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="location"
      id="inlineRadio7"
      value='Kochi'
      onChange={handleInputChange}
    />
    <label className="form-check-label" htmlFor="inlineRadio7">Kochi</label>
  </div>
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="location"
      id="inlineRadio8"
      value='Nagercoil'
      onChange={handleInputChange}
    />
    <label className="form-check-label" htmlFor="inlineRadio8">Nagercoil</label>
  </div>
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="location"
      id="inlineRadio9"
      value='Online'
      onChange={handleInputChange}
    />
    <label className="form-check-label" htmlFor="inlineRadio9">Online</label>
  </div>
</form>

        </div>
        <div style={{fontWeight:'bold'}} className='col-lg-6 regcol'>
        <form onSubmit={handleSubmit}>
  <label style={{ marginTop: '3%' }} className='labelreg'>Guardian's Name</label>
  <input
    type='text'
    className='form-control'
    name='guardiansname' // Added name attribute
    id='exampleInputPassword1'
    placeholder=''
    value={formData.guardiansname}
    onChange={handleInputChange}
  />
  <label style={{ marginTop: '3%' }} className='labelreg'>Guardian's Occupation</label>
  <input
    type='text'
    className='form-control'
    name='guardiansoccupation' // Added name attribute
    id='exampleInputPassword1'
    placeholder=''
    value={formData.guardiansoccupation}
    onChange={handleInputChange}
  />
  <label style={{ marginTop: '3%' }} className='labelreg'>Preferred Training Timing(required)</label>
  <div style={{ marginTop: '3%' }} className="form-check">
    <input className="form-check-input" name='time' type="checkbox"  value=" Between 7am - 10pm"
    onChange={handleInputChange} id="flexCheckDefault" />
    <label className="form-check-label" htmlFor="flexCheckDefault">
      Between 7am - 10pm
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" name='time' type="checkbox" value=" Between 9am - 1pm" onChange={handleInputChange} id="flexCheckChecked" />
    <label className="form-check-label" htmlFor="flexCheckChecked">
      Between 9am - 1pm
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" name='time' type="checkbox" value= "Between 1pm - 6pm" onChange={handleInputChange} id="flexCheckChecked" />
    <label className="form-check-label" htmlFor="flexCheckChecked">
      Between 1pm - 6pm
    </label>
  </div>
  <div className="form-check">
    <input className="form-check-input" name='time' type="checkbox" value=" Between 6pm - 10pm" onChange={handleInputChange} id="flexCheckChecked" />
    <label className="form-check-label" htmlFor="flexCheckChecked">
      Between 6pm - 10pm
    </label>
  </div>
  <label style={{ marginTop: '3%' }} className='labelreg'>Address</label>
  <input
    type='text'
    className='form-control'
    name='address' // Added name attribute
    id='exampleInputPassword1'
    placeholder=''
    value={formData.address}
      onChange={handleInputChange}
  />
  <label style={{ marginTop: '3%' }} className='labelreg'>Country</label>
  <input
    type='text'
    className='form-control'
    name='country' // Added name attribute
    id='exampleInputPassword1'
    placeholder=''
    value={formData.address}
    onChange={handleInputChange}
  />
  <label style={{ marginTop: '3%' }} className='labelreg'>State</label>
  <input
    type='text'
    className='form-control'
    name='state' // Added name attribute
    id='exampleInputPassword1'
    placeholder=''
    value={formData.state}
    onChange={handleInputChange}
  />
  <label style={{ marginTop: '3%' }} className='labelreg'>City</label>
  <input
    type='text'
    className='form-control'
    name='city' // Added name attribute
    id='exampleInputPassword1'
    placeholder=''
    value={formData.city}
    onChange={handleInputChange}
  />
  <label style={{ marginTop: '3%' }} className='labelreg'>PIN/Zipcode</label>
  <input
    type='text'
    className='form-control'
    name='pinZipcode' // Modified name attribute (remove slash)
    id='exampleInputPassword1'
    placeholder=''
    value={formData.pinZipcode}
    onChange={handleInputChange}
  />
  <button type="submit" style={{ width: '100%', marginTop: '3%' }} className="btn btn-success ">
    Complete Registration
  </button>
</form>

        </div>
      </div>
      <h2 style={{ color: 'white', marginLeft: '15%', fontSize: '300%' }}>Locations</h2>
      <div style={{ marginLeft: '15%', marginRight: '15%' }} className="card-group">
        <div style={{ backgroundColor: '#051a69' }} className="card">
          <div style={{ color: 'white' }} className="card-body">
            <h1 className="card-title ">Trivandrum,<br /> Kerala</h1>
            <p className="card-text">  SCOPE INDIA, Vasanth Nagar Rd, near JLN Metro Station, Kaloor, Kochi, Kerala 682025</p>
            <div style={{ textAlign: 'center', display: 'flex' }} className="navbar-nav ">
              <NavLink className="nav-link active text-light" aria-current="page" to="/">9745936073 </NavLink>
              <NavLink className="nav-link text-light" to="/about">Location Route Map </NavLink>
              <NavLink className="nav-link text-light" to="/contact">www.scopeindia.org</NavLink>
              <NavLink className="nav-link text-light" to="/info@scopeindia.org">info@scopeindia.org</NavLink>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#051a69' }} className="card">
          <div style={{ color: 'white' }} className="card-body">
            <h1 className="card-title">Kochi, Kerala</h1>
            <p className="card-text">After course completion, you will be proceeded to live projects with a 6 months experience certificate.</p>
            <div style={{ textAlign: 'center', display: 'flex' }} className="navbar-nav ">
              <NavLink className="nav-link active text-light" aria-current="page" to="/">7592939481</NavLink>
              <NavLink className="nav-link text-light" to="/about"> kochi@scopeindia.org</NavLink>
              <NavLink className="nav-link text-light" to="/contact">www.scopeindia.org</NavLink>
              <NavLink className="nav-link text-light" to="/info@scopeindia.org">  Location Route Map</NavLink>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: '#051a69' }} className="card">
          <div style={{ color: 'white' }} className="card-body">
            <h1 className="card-title">Nagercoil,<br /> Tamil Nadu</h1>
            <p className="card-text"> SCOPE INDIA, Near WCC College, Palace Rd, Nagercoil, Tamil Nadu 629001</p>
            <div style={{ textAlign: 'center', display: 'flex' }} className="navbar-nav ">
              <NavLink className="nav-link active text-light" aria-current="page" to="/"> 8075536185</NavLink>
              <NavLink className="nav-link text-light" to="/about"> ngl@scopeindia.org</NavLink>
              <NavLink className="nav-link text-light" to="/contact">www.scopeindia.org</NavLink>
              <NavLink className="nav-link text-light" to="/info@scopeindia.org">Location Route Map</NavLink>
            </div>
          </div>
        </div>
      </div>
      <img className='w-100' style={{ height: "auto", backgroundColor: "", paddingTop: "10vh" }} src="https://scopeindia.org/images/snowpark-home-slide-decoration-bottomm.png" alt=".."></img>
      <Footer />
    </div>
  )
}

export default Forms
