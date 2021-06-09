import React from 'react';

const User = ({ user, appts, fullName }) => {
  const { id } = user
  return(
    <>
      <h1>{fullName}</h1>
      <hr />
      <h5>Appointments</h5>
      <h6>{ appts.length <= 0 ? "(No Appointments)" : "" }</h6>
       <ul>
        {
          appts.map( (appt) => (
            <li>
              <a href={`/appts/${appt.id}`}>{appt.appt_date}</a>
            </li>
          ))
        }
      </ul>
      <a href={`/users/${id}`} data-method="delete">
        Delete user
      </a>
    </>
  )
}
export default User;