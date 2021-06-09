import React from 'react';

const UserNew = ({ user }) => {
  const { first_name, last_name, errors } = user;
  const defaultFirstName = first_name ? first_name : "";
  const defaultLastName = last_name ? last_name : "";
  return (
    <>
      <h1>New User</h1>
      { errors && errors }
      <form action="/users" method="post">
        <input
          required
          placeholder="First name"
          type="text"
          defaultValue={defaultFirstName}
          name="user[first_name]"
        />
        <input
          required
          placeholder="Last name"
          type="text"
          defaultValue={defaultLastName}
          name="user[last_name]"
        />
        <button type="submit">Add User</button>
      </form>
    </>
  )
}
export default UserNew;