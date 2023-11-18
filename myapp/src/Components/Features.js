import React from 'react'

function Features() {
  return (
    <div style={{overflow:"hidden"}}>
    <div className='row' style={{backgroundColor:'#051a69', marginTop:'5%',overflowX:"hidden"}}>
    <div style={{paddingLeft:'15%',paddingTop:'5%'}} className='col lg-4'>
    <h4 style={{color:'skyblue',fontWeight:'900',fontSize:"300%"}}>1000+</h4><br/>
    <h5 style={{letterSpacing:'5%',color:'white'}}>STUDENTS ARE<br/>
    TRAINED EVERY YEAR</h5>
    </div>
    <div   className='col lg-4'>
    <h4 style={{color:'skyblue',fontWeight:'900',fontSize:"300%"}}>30+</h4><br/>
    <h5 style={{letterSpacing:'5%',color:'white'}}>COMPUTER COURSES</h5>
    </div>
    <div style={{paddingTop:'5%'}} className='col lg-4'>
    <h4 style={{color:'skyblue',fontWeight:'900',fontSize:"300%"}}>95%</h4><br/>
    <h5 style={{letterSpacing:'5%',color:'white'}}>STUDENTS ARE GETTING<br/>
    PLACED EVERY YEAR</h5>
    </div>
    </div>
    </div>
  )
}

export default Features


