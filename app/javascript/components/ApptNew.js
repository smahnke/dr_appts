import React from 'react';

// const ApptNew = ({ doctor, appt, users }) => {
//   const { appt_date, appt_time, reason, errors, user_id } = appt
//   const defaultApptDate = appt_date ? appt_date : ""
//   const defaultApptTime = appt_time ? appt_time : ""
//   const defaultReason = reason ? reason : ""
//   const defaultUser = user_id ? user_id : ""
//   return (
//     <>
//       <h1>Add Appointment</h1>
//       { errors && errors }
//       <form action={`/doctors/${doctor.id}/appts`} method="post">
//         <label for="user_id">Choose a Patient:</label>
//         <select name="enrollment[user_id]" id="user_id" defaultValue={defaultUser}>
//           { users.map( (u) => (
//             <option value={u.id}>{`${u.first_name} ${u.last_name}`}</option>
//           ))}
//         </select>
//         <input
//           type='text'
//           required
//           placeholder="Appointment Date"
//           defaultValue={defaultApptDate}
//           name="doctor[appt_date]"
//         />
//         <input
//           type='text'
//           required
//           placeholder="Appointment Time"
//           defaultValue={defaultApptTime}
//           name="doctor[appt_time]"
//         />
//         <input
//           type='text'
//           required
//           placeholder="Reason for visit"
//           defaultValue={defaultReason}
//           name="doctor[reason]"
//         />
//         <button type='submit'>Submit</button>
//       </form>
//     </>
//   )
// }
const ApptNew = ({ doctor, appt, users }) => {
  const { appt_date, appt_time, reason, role, errors, user_id } = appt
  const defaultRole = role ? role : ""
  const defaultUser = user_id ? user_id : ""
  const defaultApptDate = appt_date ? appt_date : ""
  const defaultApptTime = appt_time ? appt_time : ""
  const defaultReason = reason ? reason : ""
  return (
    <>
      <h1>Add Appts</h1>
      { errors && errors }
      <form action={`/doctors/${doctor.id}/appts`} method="post">
        <label for="role">Choose a role:</label>
        <select name="appointment[role]" id="role" defaultValue={defaultRole}>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>
        <label for="user_id">Choose a Patient:</label>
        <select name="appointment[user_id]" id="user_id" defaultValue={defaultUser}>
          { users.map( (u) => (
            <option value={u.id}>{`${u.first_name} ${u.last_name}`}</option>
          ))}
        </select>
        <input
          type='text'
          required
          placeholder="Appointment Date"
          defaultValue={defaultApptDate}
          name="doctor[appt_date]"
        />
        <input
          type='text'
          required
          placeholder="Appointment Time"
          defaultValue={defaultApptTime}
          name="doctor[appt_time]"
        />
        <input
          type='text'
          required
          placeholder="Reason for visit"
          defaultValue={defaultReason}
          name="doctor[reason]"
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
export default ApptNew;