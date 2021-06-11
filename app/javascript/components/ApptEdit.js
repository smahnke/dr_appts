import React from 'react';

const ApptEdit = ({appt}) => {
  const {first_name, last_name, reason, id} = appt
  const defaultFirstName = first_name ? first_name : "";
  const defaultLastName = last_name ? last_name : "";
  const defaultReason = reason ? reason : "";
  return(
    <>
      <h1>Editing {first_name} {last_name}'s Appointment</h1>
      <form action={`/doctors/${id}/appts/${id}/edit`} method="post">
        <input type='hidden' name="_method" value="patch"/>
        <input
          placeholder="Patients First Name"
          type="text"
          required
          defaultValue={defaultFirstName}
          name="appt[first_name]"
        />
        <input type='hidden' name="_method" value="patch"/>
        <input
          placeholder="Patient's Last Name"
          type="text"
          required
          defaultValue={defaultLastName}
          name="appt[last_name]"
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