import React from 'react';

const DoctorNew = ({ doctor }) => {
  const { dr_name, specialty, errors } = doctor
  const defaultDr_Name = dr_name ? dr_name : ""
  const defaultSpecialty = specialty ? specialty : ""
  return(
    <>
      <h1>Add Doctor</h1>
      { errors && errors }
      <form action='/doctors' method="post">
        <input
          type='text'
          required
          placeholder="Doctor's Name"
          defaultValue={defaultDr_Name}
          name="doctor[dr_name]"
        />
        <input
          type='text'
          required
          placeholder="Doctor's Specialty"
          defaultValue={defaultSpecialty}
          name="doctor[specialty]"
        />
        <button type='submit'>Add</button>
      </form>
    </>
  )
}
export default DoctorNew;