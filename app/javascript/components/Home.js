import React from 'react';
// import doctorImg from '../app/assets/images/doctor.png';
const Home = () => (
  <>
    <h1>Home</h1>
    <p>
      This is a picture of a doctor
      <br/>
      {/* <img src={doctorImg}/> */}
    </p>
    <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" atl="doctor"  width="600"/>
  </>
)

export default Home;