import { NavLink } from "react-router-dom";
import Footer from "./Footer";
function Contact() {
    return (
      <div style={{backgroundSize:'cover', width: "", height: "auto", backgroundPosition: "center top", backgroundRepeat:'no-repeat',backgroundColor: 'darkblue', backgroundImage: 'url("https://scopeindia.org/images/snowpark-skis-headerbg2.jpg")' }}>
     <h1 style={{color:'yellow',textAlign:'center',paddingTop:"10%",fontSize:'350%'}}>SCOPE INDIA is open 365 days a year</h1>
        <h2 style={{color:'white',textAlign:'center'}}>Let's discuss your career, 24/7 free Consultation</h2><br/>
        <img style={{width:'300px'}} src="https://scopeindia.org/images/5star.png" className="rounded mx-auto d-block" alt="..."></img>
        <div  style={{color:'white'}} className="d-flex justify-content-center"><p >Google 4.9 * Rated Institute</p></div>
        <div className='container bg-light pb-5' style={{  width: '69vw', height:'',backgroundImage: 'url("https://scopeindia.org/images/si-call-back-bg.jpg")' }}>
        <div  className='row'>
          <div className='col-lg-6 col-md-12'>
            <img style={{ padding: '5%',  width: '105%' }} src="https://scopeindia.org/images/scope-india-lets-discuss-your-career.jpg" alt="study"></img>
          </div>
          <div style={{paddingTop:'5%'}} className='col-lg-6 col-md-12'>
<br></br>
<br></br>
<form>
<h2 style={{color:'#5ead5e'}}>GET A FREE CALL BACK</h2><br></br>
<input type="text" className="form-control" placeholder="Enter your name" aria-label="Username" aria-describedby="basic-addon1"/><br></br>
<input type="text" className="form-control" placeholder="Enter your number" aria-label="Username" aria-describedby="basic-addon1"/><br></br>
<button style={{color:'white',backgroundColor:'#5ead5e'}} className="btn btn-primary w-100" type="button">Call Me</button><br/>
<br/><div className="d-grid gap-2">
  <button style={{color:'white',backgroundColor:'#7c62bd',marginLeft:'15%',marginRight:'15%'}} className="btn btn-primary" type="button"><h4>Recent Placements</h4></button>
  <button  style={{color:'white',backgroundColor:'#62bdb4',marginLeft:'15%',marginRight:'15%'}} className="btn btn-primary" type="button"><h4>courses</h4></button>
  <button style={{color:'white',backgroundColor:'#5ead5e',marginLeft:'15%',marginRight:'15%'}} className="btn btn-primary" type="button"><h4>Register Now!</h4></button>
</div>
</form>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <h2 style={{color:'white',marginLeft:'15%',fontSize:'300%'}}>Locations</h2>
      <div style={{marginLeft:'15%',marginRight:'15%'}} className="card-group">
  <div  style={{backgroundColor:'#051a69'}} className="card">
    <div  style={{color:'white'}} className="card-body">
      <h1  className="card-title ">Trivandrum,<br/> Kerala</h1>
      <p className="card-text">  SCOPE INDIA, Vasanth Nagar Rd, near JLN Metro Station, Kaloor, Kochi, Kerala 682025</p>
      
      <div style={{textAlign:'center',display:'flex'}} className="navbar-nav ">
        <NavLink  className="nav-link active text-light" aria-current="page" to="/">9745936073 </NavLink>
        <NavLink  className="nav-link text-light" to="/about">Location Route Map </NavLink>
        <NavLink  className="nav-link text-light" to="/contact">www.scopeindia.org</NavLink>
        <NavLink  className="nav-link text-light" to="/info@scopeindia.org">info@scopeindia.org</NavLink>
      </div>
    </div>
  </div>
  <div  style={{backgroundColor:'#051a69'}} className="card">
    <div style={{color:'white'}} className="card-body">
      <h1  className="card-title">Kochi, Kerala</h1>
      <p className="card-text">After course completion, you will be proceeded to live projects with a 6 months experience certificate.</p>
      <div style={{textAlign:'center',display:'flex'}} className="navbar-nav ">
      <NavLink  className="nav-link active text-light" aria-current="page" to="/">7592939481</NavLink>
      <NavLink  className="nav-link text-light" to="/about"> kochi@scopeindia.org</NavLink>
      <NavLink  className="nav-link text-light" to="/contact">www.scopeindia.org</NavLink>
      <NavLink  className="nav-link text-light" to="/info@scopeindia.org">  Location Route Map</NavLink>
    </div>
    </div>
  </div>
  <div  style={{backgroundColor:'#051a69'}} className="card">
     <div style={{color:'white'}} className="card-body">
      <h1 className="card-title">Nagercoil,<br/> Tamil Nadu</h1>
      <p className="card-text"> SCOPE INDIA, Near WCC College, Palace Rd, Nagercoil, Tamil Nadu 629001</p>
      <div style={{textAlign:'center',display:'flex'}} className="navbar-nav ">
      <NavLink  className="nav-link active text-light" aria-current="page" to="/"> 8075536185</NavLink>
      <NavLink  className="nav-link text-light" to="/about"> ngl@scopeindia.org</NavLink>
      <NavLink  className="nav-link text-light" to="/contact">www.scopeindia.org</NavLink>
      <NavLink  className="nav-link text-light" to="/info@scopeindia.org">Location Route Map</NavLink>
    </div>
    </div>
  </div>
  </div>
<img className='w-100' style={{ height: "auto",  backgroundColor: "", paddingTop: "10vh" }} src="https://scopeindia.org/images/snowpark-home-slide-decoration-bottomm.png" alt=".."></img>
<Footer />
      </div>
    )
  }
  
  export default Contact;
  