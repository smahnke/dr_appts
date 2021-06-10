import React from 'react';

const Appts = ({ doctor, users }) => {
  const displayUser = (id) => {
    let fullName 
    users.map( (u) => {
      if (u.id === id) {
        fullName = u.first_name + " " + u.last_name
      }
    })
    return fullName
  }
  return (
    <>
      <h1>{doctor.dr_name}'s Appointments</h1>
      <a href={`/doctors/${doctor.id}/appts/new`}>Add Appointment</a>
      <br />
      <h2>Patients</h2>
      {/* <p>{displayUser(user_id)}</p> */}
    </>
  )
}
export default Appts;