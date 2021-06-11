import React from 'react';

const UserEdit = ({user}) => {
  const {first_name, last_name, id} = user
  const defaultFirstName = first_name ? first_name : "";
  const defaultLastName = last_name ? last_name : "";
  return(
    <>
      <h1>Editing {first_name} {last_name}</h1>
      <form action={`/users/${id}`} method="post">
        <input type='hidden' name="_method" value="patch"/>
        <input
          placeholder="First Name"
          type="text"
          required
          defaultValue={defaultFirstName}
          name="[first_name]"
        />
        <input type='hidden' name="_method" value="patch"/>
        <input
          placeholder="Last Name"
          type="text"
          required
          defaultValue={defaultLastName}
          name="[last_name]"
        />
        <button type='submit'>Update</button>
      </form>
    </>
  )
}

export default UserEdit;