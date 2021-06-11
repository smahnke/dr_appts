import React from 'react';

// const Appts = ({ doctor, users }) => {
//   const displayUser = (id) => {
//     let fullName 
//     users.map( (u) => {
//       if (u.id === id) {
//         fullName = u.first_name + " " + u.last_name
//       }
//     })
//     return fullName
//   }
//   return (
//     <>
//       <h1>{doctor.dr_name}'s Appointments</h1>
//       <a href={`/doctors/${doctor.id}/appts/new`}>Add Appointment</a>
//       <br />
//       <h2>Patients</h2>
//       {/* <p>{displayUser(user_id)}</p> */}
//     </>
//   )
// }
const Appts = ({ appts, doctor, drs, patients, users }) => {
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
      {/* {
        appts.map( (appt) => (
          <div>
            <a href={`/doctors/${doctor.id}/appts`}>{appt.first_name} {appt.last_name}'s Appointment</a>
          </div>
        ))
      } */}
      <h2>Doctors</h2>
      { drs.map( (d) => (
        <div>
          <p>{displayUser(d.user_id)}</p>
          <a href={`/doctors/${doctor.id}/appts/${d.id}`} data-method='delete'>Delete</a>
        </div>
      ))}
      <h2>Patients</h2>
      { patients.map( (p) => (
        <div>
          <p>{displayUser(p.user_id)}</p>
          <a href={`/doctors/${doctor.id}/appts/${p.id}`} data-method='delete'>Delete</a>
        </div>
      ))}
    </>
  )
}
export default Appts;