import React from 'react';

const ApptEdit = ({appt, users, doctor}) => {
  const {appt_date, appt_time, reason, id} = appt
  const defaultApptDate = appt_date ? appt_date : "";
  const defaultApptTime = appt_time ? appt_time : "";
  const defaultReason = reason ? reason : "";
  return(
    <>
      <h1>Editing {doctor.dr_name} 's Appointment</h1>
      <form action={`/doctors/${id}/appts/${id}`} method="post">
        <input type='hidden' name="_method" value="patch"/>
        <input
          placeholder="Patient's Appointment Date"
          type="text"
          required
          defaultValue={defaultApptDate}
          name="appt[appt_date]"
        />
        <input type='hidden' name="_method" value="patch"/>
        <input
          placeholder="Patient's Appointment Time"
          type="text"
          required
          defaultValue={defaultApptTime}
          name="appt[appt_time]"
        />
        <input type='hidden' name="_method" value="patch"/>
        <input
          placeholder="Reason"
          type="text"
          required
          defaultValue={defaultReason}
          name="appt[reason]"
        />
        <button type='submit'>Update</button>
      </form>
    </>
  )
}

export default ApptEdit;