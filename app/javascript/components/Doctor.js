import React from 'react';

const Doctor = ({ doctor }) => {
  const { dr_name, specialty, id } = doctor
  return (
    <>
      <h1>{dr_name}</h1>
      <hr/>
      <a href={`/doctors/${id}/appts`}>Appointments</a>
    </>
  )
}
export default Doctor;