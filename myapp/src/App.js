import { BrowserRouter as Router ,Route, Routes, NavLink} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Know from "./Components/Know";
import Login from "./Components/Login";
import "./App.css"
import Forms from "./Components/Forms";
import Ftlogin from "./Components/Ftlogin";
import Verifyotp from "./Verifyotp";
import Updateotp from "./Updateotp";
import Dashboard from "./Components/Dashboard";
import CourseDetails from "./Components/CourseDetails";
import Profile from "./Components/Profile";




function App() {
  return (
    <Router>
    <nav  className="navbar navbar-expand-lg navbar-light" style={{width:'',backgroundColor:"#051a69",position:"s"}}>
  <div className="container-fluid">
    <NavLink  className="navbar-brand " to="/"><img style={{marginBottom:'%',height:'5vh',position:'absolute',left:'50%'}} src="https://scopeindia.org/images/scope-india-logo-bird.png" alt="" /> </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div   className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div style={{marginLeft:"15%"}} className="navbar-nav">
        <NavLink style={({isActive})=>({color:isActive?'#FFC400':"white"})} className="nav-link active" aria-current="page" to="/">Home</NavLink>
        <NavLink style={({isActive})=>({color:isActive?'#FFC400':"white"})} className="nav-link" to="/about">Courses</NavLink>
        <NavLink style={({isActive})=>({color:isActive?'#FFC400':"white"})} className="nav-link" to="/contact">Contact Us</NavLink>
        <NavLink style={({isActive})=>({color:isActive?'#FFC400':"white"})} className="nav-link" to="/Know">Know SCOPE INDIA</NavLink>
        </div>
        <div style={{marginLeft:"30%"}}>
        <button style={{background: 'linear-gradient(red, yellow)',borderRadius:'10%'}}>         
        <NavLink style={{color:'white'}} className="nav-link" to="/Forms">Register Now!!!</NavLink>
        </button>
        </div>
        <div style={{marginLeft:"5%"}}>
        <button style={{background: 'linear-gradient(red, yellow)',borderRadius:'10%'}}>         
        <NavLink style={{color:'white'}} className="nav-link" to="/Login">Login!!!</NavLink>
        </button>
        </div>
    </div>
  </div>
</nav>
    <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route exact path="/about" element={<About />}></Route>
    <Route exact path="/contact" element={<Contact />}></Route>
    <Route exact path="/Know" element={<Know />}></Route>
    <Route exact path="/Forms" element={<Forms />}></Route>
    <Route exact path="/Login" element={<Login />}></Route>
    <Route exact path="/Ftlogin" element={<Ftlogin />}></Route>
    <Route exact path="/Verifyotp" element={<Verifyotp />}></Route>
    <Route exact path="/Updateotp" element={<Updateotp />}></Route>
    <Route exact path="/Dashboard" element={<Dashboard />}></Route>
    <Route exact path="/CourseDetails" element={<CourseDetails />}></Route>
    <Route exact path="/Profile" element={<Profile />}></Route>
  

    
    
    </Routes>
    </Router>
    
  )
}

export default App;
