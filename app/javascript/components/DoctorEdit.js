import React from 'react';

const DoctorEdit = ({doctor}) => {
  const {dr_name, specialty, id} = doctor
  const defaultDrName = dr_name ? dr_name : "";
  const defaultSpecialty = specialty ? specialty : "";
  return(
    <>
      <h1>Editing Dr.{dr_name}</h1>
      <form action={`/doctors/${id}`} method="post">
        <input type='hidden' name="_method" value="patch"/>
        <input
          placeholder="Doctor Name"
          type="text"
          required
          defaultValue={defaultDrName}
          name="doctor[dr_name]"
        />
        <input type='hidden' name="_method" value="patch"/>
        <input
          placeholder="Specialty"
          type="text"
          required
          defaultValue={defaultSpecialty}
          name="doctor[specialty]"
        />
        <button type='submit'>Update</button>
      </form>
    </>
  )
}

export default DoctorEdit;