import React from 'react';

const User = ({ user, doctors, fullName }) => {
  const { id } = user
  return(
    <>
      <h1>{fullName}</h1>
      <hr />
      <h5>Doctors</h5>
      <h6>{ doctors.length <= 0 ? "(No Doctors)" : "" }</h6>
       <ul>
        {
          appts.map( (appt) => (
            <li>
              <a href={`/doctors/${id}`}>{doctor.dr_name}</a>
            </li>
          ))
        }
      </ul>
      <a href= {`/doctors/new`}>Add Doctor</a>
      <br/>
      <h5>User Info</h5>
      <a href={'/users/' + id + '/edit'}>Edit User</a>
      <br/>
      <a href={`/users/${id}`} data-method="delete">Delete user</a>
    </>
  )
}
export default User;