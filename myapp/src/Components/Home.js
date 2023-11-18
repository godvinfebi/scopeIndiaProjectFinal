import Features from './Features';
import Footer from './Footer';
import './style.css'
function Home() {
  return (
    <div>
      <div style={{ width: "", height: "auto", backgroundPosition: "center top", backgroundRepeat:'no-repeat',backgroundColor: '#051a69', backgroundImage: 'url("https://scopeindia.org/images/slider_bg.jpg")' }}>
        <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto',paddingTop:'15%',paddingBottom:'25%', width: '50%' }} src="https://scopeindia.org/images/snowpark-home-slider-logo-new.png" alt="scope" />
      
      <div style={{ backgroundColor: "#051a69", height: "10%" }}>
        <div className="poster"
          style={{ display: "flex", padding: '20px', height: "80vh", overflowX: 'scroll',}}>
          <img src='https://scopeindia.org/images/courses/scope-india-digital-marketing-course.jpg' alt='firstposter'></img>
          <img src='https://scopeindia.org/images/courses/scope-india-flutter-fullstack-course.jpg' alt='firstposter'></img>
          <img src='https://scopeindia.org/images/courses/scope-india-dotnet-core-full-stack-course.jpg' alt='firstposter'></img>
          <img src='https://scopeindia.org/images/courses/scope-india-aws-certification-course-(1).jpg' alt='firstposter'></img>
          <img src='https://scopeindia.org/images/courses/scope-india-php-full-stack-course%20(1).jpg' alt='firstposter'></img>
          <img src='https://scopeindia.org/images/courses/scope-india-software-testing-manual-automation-course.jpg' alt='firstposter'></img>
          <img src='https://scopeindia.org/images/courses/scope-india-network-server-administration-course%20(1).jpg' alt='firstposter'></img>
        </div>

        
          <img className='w-100' style={{ height: "auto",  paddingTop: "10vh" }} src="https://scopeindia.org/images/snowpark-home-slide-decoration-bottomm.png" alt=".."></img>
      </div>
</div>
      <div className='container bg-light pb-5' style={{  width: '69vw', height:'',backgroundImage: 'url("https://scopeindia.org/images/si-call-back-bg.jpg")' }}>
        <div  className='row'>
          <div className='col-lg-6 col-md-12'>
            <img style={{ padding: '5%',  width: '105%' }} src="https://scopeindia.org/images/scope-india-lets-discuss-your-career.jpg" alt="study"></img>
          </div>
          <div style={{paddingTop:'5%'}} className='col-lg-6 col-md-12'>
<h1 style={{color:'darkblue'}}>SCOPE INDIA
is open 365 days a year</h1>
<br></br>
<p>We are open 7 days 24 hrs to talk to you and listen to <br></br>
your queries.</p>
<br></br>
<form>
<h2 style={{color:'#5ead5e'}}>GET A FREE CALL BACK</h2><br></br>
<input type="text" className="form-control" placeholder="Enter your name" aria-label="Username" aria-describedby="basic-addon1"/><br></br>
<input type="text" className="form-control" placeholder="Enter your number" aria-label="Username" aria-describedby="basic-addon1"/><br></br>
<button style={{color:'white',backgroundColor:'#5ead5e'}} className="btn btn-primary w-100" type="button">Call Me</button>

</form>
          </div>
        </div>
      </div>
        <img style={{width:'300px'}} src="https://scopeindia.org/images/5star.png" className="rounded mx-auto d-block" alt="..."></img>
<div className="d-flex justify-content-center"><p >Google 4.9 * Rated Institute</p></div>
<div style={{color:'darkblue',}} className="d-flex justify-content-center fs-1"><h1>SCOPE INDIA, your career partner!</h1></div>
<div style={{color:'darkblue',}} className="d-flex justify-content-center fs-1"><h2>One of the best Training Destination for Software, Networking and <br/>Cloud Computing courses in India</h2></div>
<div style={{ width: '69vw',marginLeft:'15%'}} className="d-flex justify-content-center "><p>
Software, Networking, and Cloud Professional Education Centre in Kerala from Suffix E Solutions with WORKING PROFESSIONALS oriented on-the-job TRAINING model. SCOPE INDIA provides courses for Software Programming in Python (Data Science | Artificial Intelligence | Machine Learning | Deep Learning), Java, PHP, .Net, Software Testing Manual and Automation, Cloud in AWS, Azure, Server Administration in MCSE, and RHCE, CCNA, Mobile App Development in Flutter, and, Digital Marketing. Training with 100% Trusted Job Based Internship Model. SCOPE INDIA has a Strong Placement Cell that provides jobs to 1000's of students every year. We assure you, you won't regret it after training from SCOPE INDIA!<br></br>

This is how SCOPE INDIA can support both newbies and experienced in the industry to upgrade their skills.</p></div>
<div className="d-grid gap-2">
  <button style={{color:'white',backgroundColor:'#7c62bd',marginLeft:'15%',marginRight:'15%'}} className="btn btn-primary" type="button"><h4>Recent Placements</h4></button>
  <button  style={{color:'white',backgroundColor:'#62bdb4',marginLeft:'15%',marginRight:'15%'}} className="btn btn-primary" type="button"><h4>courses</h4></button>
  <button style={{color:'white',backgroundColor:'#5ead5e',marginLeft:'15%',marginRight:'15%'}} className="btn btn-primary" type="button"><h4>Register Now!</h4></button>
  <button style={{color:'white',backgroundColor:'#5ead5e',marginLeft:'15%',marginRight:'15%'}} className="btn btn-primary" type="button"><h4>Chat on WatsApp</h4></button>
</div><br/>
<br/>
<div style={{marginLeft:'15%',marginRight:'15%'}} className="card-group">
  <div className="card">
    <img  src="	https://scopeindia.org/images/snowpark-home-icon1.png" className="card-img-top w-25 h-25 mx-auto" alt="..."/>
    <div className="card-body">
      <h1 style={{color:'darkblue'}} className="card-title ">Training</h1>
      <p className="card-text">You are trained under Suffix E Solutions working professionals, on-the-job training model.</p>
    </div>
  </div>
  <div className="card">
    <img  src="https://scopeindia.org/images/snowpark-home-icon2.png" className="card-img-top w-25 h-25 mx-auto" alt="..."/>
    <div  className="card-body">
      <h1 style={{color:'darkblue'}} className="card-title">Internship</h1>
      <p className="card-text">After course completion, you will be proceeded to live projects with a 6 months experience certificate.</p>
    </div>
  </div>
  <div className="card">
    <img src="https://scopeindia.org/images/snowpark-home-icon3.png" className="card-img-top w-25 h-25 mx-auto" alt="..."/>
    <div className="card-body">
      <h1 style={{color:'darkblue'}} className="card-title">Grooming</h1>
      <p className="card-text">CV Preparation, Interview Preparation, and Personality Development.</p>
    </div>
  </div>
  <div className="card">
  <img src="https://scopeindia.org/images/snowpark-home-icon4.png" className="card-img-top w-25 h-25 mx-auto" alt="..."/>
  <div className="card-body">
    <h1 style={{color:'darkblue'}} className="card-title">Placement</h1>
    <p className="card-text">Gives 100% FREE placement support to all our fellow techies through SCOPE INDIA's Placement Cell.</p>
  </div>
</div>
</div><br/>
<Features />
<Footer />
    </div>
  )
}

export default Home;
