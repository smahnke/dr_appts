import React from 'react'

const Doctors = ({ doctors }) => {
  return (
    <>
      <h1>Doctors</h1>
      <h2>Please Choose A Doctor</h2>
      <a href="/doctors/new">New Doctor</a>
      <br />
      <h2>{ doctors.length <= 0 ? "No doctors" : ""}</h2>
      {
        doctors.map( (doctor) => (
          <div>
            <a href={`/doctors/${doctor.id}`}>Dr. {doctor.dr_name}, Specialty: {doctor.specialty}'s</a>
          </div>
        ))
      }
    </>
  )
}
export default Doctors;