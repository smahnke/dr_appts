import React from 'react';

const Appt = ({ appt }) => {
  const { appt_date, appt_time, reason, id } = appt
  return (
    <>
      <h1>{appt_date}{appt_time}</h1>
      <hr/>
      <h2>Reason for visit:</h2>
        <p>{reason}</p>
      <br/>
      <a href={`/doctors/${id}/appts`}>Back to Appointments</a>
    </>
  )
}
export default Appt;