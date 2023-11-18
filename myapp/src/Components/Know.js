import React from 'react'
import Features from './Features'
import Footer from './Footer'

function Know() {
  return (
    <div style={{backgroundSize:'cover', width: "", height: "auto", backgroundPosition: "center top", backgroundRepeat:'no-repeat',backgroundColor: 'darkblue', backgroundImage: 'url("https://scopeindia.org/images/snowpark-skis-headerbg2.jpg")' }}>
    <h1 style={{color:'yellow',textAlign:'center',paddingTop:"10%",fontSize:'350%'}}>SCOPE INDIA, your career partner!</h1>
    <h2 style={{color:'white',textAlign:'center'}}>One of the best Training Destination for Software, Networking and<br/> Cloud Computing courses in India</h2><br/>
    <div style={{color:'white', width: '69vw',marginLeft:'15%'}} className="d-flex justify-content-center "><p>
Software, Networking, and Cloud Professional Education Centre in Kerala from Suffix E Solutions with WORKING PROFESSIONALS oriented on-the-job TRAINING model. SCOPE INDIA provides courses for Software Programming in Python (Data Science | Artificial Intelligence | Machine Learning | Deep Learning), Java, PHP, .Net, Software Testing Manual and Automation, Cloud in AWS, Azure, Server Administration in MCSE, and RHCE, CCNA, Mobile App Development in Flutter, and, Digital Marketing. Training with 100% Trusted Job Based Internship Model. SCOPE INDIA has a Strong Placement Cell that provides jobs to 1000's of students every year. We assure you, you won't regret it after training from SCOPE INDIA!<br></br>

<br/>This is how SCOPE INDIA can support both newbies and experienced in the industry to upgrade their skills.</p></div>
<img style={{width:'300px'}} src="https://scopeindia.org/images/5star.png" className="rounded mx-auto d-block" alt="..."></img>
<div className="d-flex justify-content-center"><p style={{color:'white'}}>Google 4.9 * Rated Institute</p></div>  
<br/>
<div className="d-grid gap-2">
  <button style={{color:'white',backgroundColor:'#7c62bd',marginLeft:'15%',marginRight:'15%'}} className="btn btn-primary" type="button"><h4>Recent Placements</h4></button>
  <button  style={{color:'white',backgroundColor:'#62bdb4',marginLeft:'15%',marginRight:'15%'}} className="btn btn-primary" type="button"><h4>courses</h4></button>
  <button style={{color:'white',backgroundColor:'#5ead5e',marginLeft:'15%',marginRight:'15%'}} className="btn btn-primary" type="button"><h4>Register Now!</h4></button>
</div><br/>  
<Features />
<img className='w-100' style={{ height: "auto",  paddingTop: "10vh",overflow:"hidden" }} src="https://scopeindia.org/images/snowpark-home-slide-decoration-bottomm.png" alt=".."></img>
<Footer />
</div>
  )
}

export default Know
